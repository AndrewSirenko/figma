import { ImageWithFallback } from './components/figma/ImageWithFallback';
import figmaTruck1 from './assets/images/figma-truck-1-opt.jpg';
import figmaTruck2 from './assets/images/figma-truck-2-opt.jpg';

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl mb-4 bg-gradient-to-r from-[#f24e1e] via-[#a259ff] to-[#1abcfe] bg-clip-text text-transparent leading-relaxed py-2">
            Drew Sirenko Loves Figma
          </h1>
          <p className="text-slate-600 max-w-2xl mx-auto">
            I've been a Figma fan since 2020, met the lovely Lauren Ryan and Miggi from Figgi in 2022, and love using FigJam and Figma Slides at AWS :)
          </p>
        </div>

        {/* Image Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {/* First FigJam Box */}
          <div className="group">
            <div 
              className="relative bg-[#f24e1e] p-6 rounded-3xl shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              style={{
                boxShadow: '0 20px 25px -5px rgba(242, 78, 30, 0.1), 0 10px 10px -5px rgba(242, 78, 30, 0.04)'
              }}
            >
              {/* FigJam-style corner fold */}
              <div className="absolute top-0 right-0 w-6 h-6 bg-[#ff7262] rounded-bl-2xl rounded-tr-3xl"></div>


  {/* Caption */}
              <div className="text-white">
                <h3 className="text-xl mb-2 text-center">My cherished memento from 2022</h3>
              </div>

              {/* Image container */}
              <div className="bg-white rounded-2xl p-4 mb-4 shadow-inner">
                <ImageWithFallback
                  src={figmaTruck2}
                  alt="Polaroid of Drew posing with Figma Ice Cream Truck"
                  className="w-full h-auto object-contain rounded-xl"
                />
              </div>            
              
              
            </div>
          </div>

          {/* Second FigJam Box */}
          <div className="group">
            <div 
              className="relative bg-[#a259ff] p-6 rounded-3xl shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              style={{
                boxShadow: '0 20px 25px -5px rgba(162, 89, 255, 0.1), 0 10px 10px -5px rgba(162, 89, 255, 0.04)'
              }}
            >
              {/* FigJam-style corner fold */}
              <div className="absolute top-0 right-0 w-6 h-6 bg-[#1abcfe] rounded-bl-2xl rounded-tr-3xl"></div>
              
{/* Caption */}
              <div className="text-white">
                <h3 className="text-xl mb-2 text-center">Me freaking out over Figma hats</h3>
              </div>

              {/* Image container */}
              <div className="bg-white rounded-2xl p-4 mb-4 shadow-inner">
                <ImageWithFallback
                  src={figmaTruck1}
                  alt="Drew posing with Figma Ice Cream Truck"
                  className="w-full h-auto object-contain rounded-xl"
                />
              </div>

              
              
            </div>
          </div>
        </div>

        {/* Bottom decorative elements */}
        <div className="mt-16 flex justify-center items-center space-x-4">
          <div className="w-4 h-4 bg-[#0acf83] rounded-full animate-pulse"></div>
          <div className="w-3 h-3 bg-[#1abcfe] rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
          <div className="w-5 h-5 bg-[#f24e1e] rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
          <div className="w-3 h-3 bg-[#a259ff] rounded-full animate-pulse" style={{ animationDelay: '0.6s' }}></div>
          <div className="w-4 h-4 bg-[#ff7262] rounded-full animate-pulse" style={{ animationDelay: '0.8s' }}></div>
        </div>

        {/* Footer message */}
        <div className="text-center mt-8">
          <p className="text-slate-500 italic">
            Made with oh so much ❤️ and Figma Make
          </p>
        </div>
      </div>
    </div>
  );
}