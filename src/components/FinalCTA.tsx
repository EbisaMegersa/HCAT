import React from 'react';
import { MascotLogo } from './MascotLogo';

export const FinalCTA: React.FC = () => {
  return (
    <section className="py-28 relative bg-black overflow-hidden">
      <div className="absolute inset-0 bg-black pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
        
        {/* Logo with animated gold glow */}
        <div className="flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 bg-amber-500 rounded-full blur-3xl opacity-40 animate-pulse" />
            <MascotLogo size={200} glow={true} />
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-4xl sm:text-7xl font-black text-white uppercase tracking-tight leading-none">
            SMALL CAT.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-200 to-amber-500">
              BIG DREAMS.
            </span>
          </h2>
          <div className="text-3xl font-black text-amber-400 tracking-widest">
            $HCAT
          </div>
          <p className="text-xl sm:text-2xl font-bold text-slate-300 tracking-wide uppercase pt-2">
            "KEEP THE HOPE ALIVE."
          </p>
        </div>

        <div className="pt-4">
          <a
            href="https://t.me/hopecatcommunity"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-10 py-5 rounded-2xl text-base font-black text-black bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 hover:from-amber-300 hover:to-amber-500 shadow-[0_0_40px_rgba(245,158,11,0.6)] transition-all duration-300 hover:scale-105 active:scale-95"
          >
            <span>JOIN THE COMMUNITY</span>
          </a>
        </div>

      </div>
    </section>
  );
};

