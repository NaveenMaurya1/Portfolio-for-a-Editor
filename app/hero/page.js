// ============================================
// app/components/Hero.jsx
// ============================================

'use client';

export default function Hero() {
  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden pt-20">
      
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full">
        
        <img         
          className="w-full h-full object-cover"
          src="/hero_background/image.gif"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative text-center z-10">
        <div className="font-extrabold text-lg md:text-5xl tracking-widest text-gray-300 mb-4 text-overflow:ellipsis">
          LATEST WORK
        </div>
        
        <div className="flex gap-6 justify-center items-center mb-8">
          <button className="flex items-center gap-3 text-white hover:text-amber-600 transition-colors group">
            <div className="w-12 h-12 border-2 border-white group-hover:border-amber-600 rounded-full flex items-center justify-center transition-colors">
              <svg className="w-5 h-5 ml-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
            <span className="text-sm font-light tracking-widest italic">Play Video</span>
          </button>
          
          <button className="text-white hover:text-amber-600 transition-colors">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        <button className="border border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-black px-8 py-2 font-light tracking-widest text-sm transition-all duration-300">
          All Videos +
        </button>
      </div>
    </section>
  );
}
