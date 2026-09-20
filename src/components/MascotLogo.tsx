import React from 'react';

interface MascotLogoProps {
  className?: string;
  size?: number | string;
  glow?: boolean;
}

const LOGO_URL = 'https://cdn.phototourl.com/free/2026-09-20-f87ad718-83c5-4d1c-b173-53cb776002a3.jpg';

export const MascotLogo: React.FC<MascotLogoProps> = ({ className = '', size = 160, glow = true }) => {
  return (
    <div className={`relative inline-flex items-center justify-center group ${className}`}>
      {/* Background Multi-layered Cosmic Glow */}
      {glow && (
        <>
          <div className="absolute -inset-2 bg-gradient-to-r from-amber-500 via-orange-500 to-amber-400 rounded-full blur-xl opacity-60 group-hover:opacity-90 transition-opacity duration-700 animate-pulse pointer-events-none" />
          <div className="absolute -inset-4 bg-gradient-to-tr from-amber-400/30 to-orange-500/30 rounded-full blur-2xl group-hover:scale-110 transition-transform duration-700 pointer-events-none" />
        </>
      )}

      {/* Rotating Gold Coin Ring Border */}
      <div className="absolute -inset-1.5 rounded-full bg-gradient-to-r from-amber-400 via-yellow-200 to-amber-600 opacity-80 animate-spin-slow pointer-events-none" style={{ animationDuration: '15s' }} />
      
      {/* Official Uploaded HopeCat Logo Image Container */}
      <div 
        className="relative z-10 rounded-full overflow-hidden border-4 border-amber-400 shadow-[0_15px_40px_rgba(245,158,11,0.6)] transition-all duration-500 group-hover:scale-105 group-hover:rotate-2 bg-slate-950"
        style={{ width: typeof size === 'number' ? `${size}px` : size, height: typeof size === 'number' ? `${size}px` : size }}
      >
        <img
          src={LOGO_URL}
          alt="HopeCat ($HCAT) Official Logo"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />

        {/* Subtle light sweep overlay */}
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      </div>
    </div>
  );
};


