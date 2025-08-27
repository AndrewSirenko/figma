export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    
    try {
      const asset = await env.ASSETS.fetch(request);
      
      // Add cache headers for images
      if (url.pathname.match(/\.(jpg|jpeg|png|gif|webp|svg|ico)$/i)) {
        const response = new Response(asset.body, asset);
        response.headers.set('Cache-Control', 'public, max-age=31536000, immutable');
        return response;
      }
      
      return asset;
    } catch {
      // Fallback to index.html for SPA routing
      return env.ASSETS.fetch(new Request(new URL('/index.html', request.url)));
    }
  }
};
