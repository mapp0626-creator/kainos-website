import React from 'react';

interface LogoProps {
  className?: string;
  light?: boolean;
}

const Logo: React.FC<LogoProps> = ({ className = "h-10", light = false }) => {
  // Brand color for light background (Deep Navy Blue) vs White for dark background
  const fillClass = light ? "fill-white" : "fill-[#1a237e]";
  const textClass = light ? "text-white" : "text-[#1a237e]";

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* SVG Icon - K Shape */}
      <svg 
        viewBox="0 0 100 80" 
        className={`h-full w-auto ${fillClass} transition-colors duration-300`} 
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Left vertical shape (parallelogram) */}
        <path d="M25 0 L45 0 L20 80 L0 80 Z" />
        {/* Top right shape (parallelogram) */}
        <path d="M48 5 L88 5 L68 35 L28 35 Z" />
        {/* Bottom right shape (parallelogram) */}
        <path d="M35 45 L75 45 L95 80 L55 80 Z" />
      </svg>

      {/* Text Content */}
      <div className={`flex flex-col justify-center ${textClass} transition-colors duration-300`}>
        <span className="font-logo font-bold leading-none tracking-wider text-[1.4em]">KAINOS</span>
        <span className="font-logo text-[0.45em] leading-none tracking-[0.2em] mt-1 ml-0.5">INVESTMENT</span>
      </div>
    </div>
  );
};

export default Logo;