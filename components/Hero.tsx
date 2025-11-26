import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="top" className="relative h-screen flex items-center justify-center overflow-hidden bg-gray-900">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1506318164473-2dfd3ede3623?q=80&w=2070&auto=format&fit=crop" 
          alt="Hong Kong Skyline" 
          className="w-full h-full object-cover filter grayscale contrast-125 brightness-75"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80"></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto flex flex-col items-center animate-fade-in-up">
        {/* Decorative Line */}
        <div className="h-16 w-px bg-white/30 mb-8"></div>
        
        {/* Main Title - Text Only (No Logo Icon) */}
        <div className="mb-8 flex flex-col items-center select-none">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-logo font-bold text-white tracking-widest leading-none">
                KAINOS
            </h1>
            <span className="text-white font-logo text-xs md:text-lg tracking-[0.5em] mt-4 ml-1">
                INVESTMENT
            </span>
        </div>
        
        <p className="text-gray-300 text-sm md:text-lg tracking-[0.3em] uppercase max-w-2xl mx-auto leading-relaxed border-t border-b border-gray-700 py-4">
          Enhanced Perspective on the Market for Investment Success
        </p>

        {/* Scroll Indicator */} 
        {/* <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-60">
          <span className="text-[10px] uppercase tracking-widest text-white">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-white to-transparent"></div>
        </div> */}
      </div>
    </section>
  );
};

export default Hero;