import React from 'react';
import { MascotLogo } from './MascotLogo';

export const CommunitySection: React.FC = () => {
  return (
    <section id="community" className="py-24 relative bg-black overflow-hidden border-t border-slate-900">
      {/* Background atmospheric glow */}
      <div className="absolute inset-0 bg-black pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="p-10 sm:p-16 rounded-3xl bg-black border border-amber-500/30 shadow-[0_25px_60px_rgba(0,0,0,0.9)] relative overflow-hidden">
          
          <div className="absolute -top-10 -right-10 opacity-10 pointer-events-none">
            <MascotLogo size={300} glow={false} />
          </div>

          <div className="max-w-3xl mx-auto space-y-6 relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-black border border-amber-500/30 text-amber-400 text-xs font-black tracking-widest uppercase">
              COMMUNITY HUB
            </div>

            <h2 className="text-4xl sm:text-6xl font-black text-white tracking-tight uppercase">
              JOIN THE <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-200 to-amber-500">HOPE</span>
            </h2>

            <p className="text-slate-300 text-lg sm:text-xl font-medium">
              "The community is where HopeCat comes alive."
            </p>

            {/* Two Huge Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <a
                href="https://t.me/hopecatcommunity"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto flex items-center justify-center gap-3 px-10 py-5 rounded-2xl text-base font-black text-black bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 hover:from-amber-300 hover:to-amber-500 shadow-[0_0_35px_rgba(245,158,11,0.5)] transition-all duration-300 hover:scale-105 active:scale-95"
              >
                <span>JOIN TELEGRAM</span>
              </a>

              <a
                href="https://x.com/h0pecat"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto flex items-center justify-center gap-3 px-10 py-5 rounded-2xl text-base font-black text-white bg-black hover:bg-slate-900 border border-slate-800 hover:border-amber-500/40 shadow-xl transition-all duration-300 hover:scale-105 active:scale-95"
              >
                <span>FOLLOW ON X</span>
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

