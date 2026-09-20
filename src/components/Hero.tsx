import React, { useState } from 'react';
import { MascotLogo } from './MascotLogo';
import confetti from 'canvas-confetti';

const CONTRACT_ADDRESS = '0xDa1c8E17BC22B2E755368458feF282D91f25025E';

export const Hero: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyContract = () => {
    navigator.clipboard.writeText(CONTRACT_ADDRESS);
    setCopied(true);
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.8 },
      colors: ['#F59E0B', '#EF4444', '#3B82F6', '#FFFFFF'],
    });
    setTimeout(() => {
      setCopied(false);
    }, 3000);
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-28 pb-16 overflow-hidden bg-black">
      {/* Atmospheric Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-orange-950/40 via-black to-black pointer-events-none" />
      
      {/* Huge Moon Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] sm:w-[600px] sm:h-[600px] bg-gradient-to-tr from-amber-500/10 via-orange-600/10 to-transparent rounded-full blur-3xl pointer-events-none" />
      
      {/* Floating Particles / Stars / Web3 Symbols */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-2 h-2 bg-amber-400 rounded-full animate-ping opacity-75" />
        <div className="absolute top-40 right-20 w-3 h-3 bg-orange-400 rounded-full animate-pulse opacity-60" />
        <div className="absolute bottom-32 left-1/4 w-2.5 h-2.5 bg-red-400 rounded-full animate-ping opacity-50" />
        <div className="absolute top-1/3 right-1/4 text-amber-400/30 font-mono text-xl animate-bounce">🪙</div>
        <div className="absolute bottom-1/4 right-10 text-orange-400/30 font-mono text-2xl animate-pulse">⭐</div>
        <div className="absolute top-1/2 left-12 text-amber-500/20 font-bold text-lg">🐾</div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Typography & CTAs */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6">
            
            {/* Badge pill */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black border border-amber-500/30 shadow-[0_0_15px_rgba(245,158,11,0.15)]">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
              <span className="text-xs font-black tracking-widest text-amber-300 uppercase">
                Official $HCAT Token
              </span>
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-6xl xl:text-7xl font-black tracking-tight text-white uppercase leading-none drop-shadow-md">
                SMALL CAT.<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-200 to-yellow-500">
                  BIG DREAMS.
                </span>
              </h1>
              <div className="text-2xl sm:text-4xl font-black text-amber-400 tracking-wider pt-2">
                $HCAT
              </div>
            </div>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-slate-300 max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium">
              HopeCat is a community-driven meme token built around one simple idea:
              <span className="text-amber-300 font-semibold"> keep the hope alive</span>, build together, and have fun along the way.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              {/* Primary CTA */}
              <a
                href="https://t.me/hopecatcommunity"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-8 py-4 rounded-2xl text-sm font-black text-black bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 hover:from-amber-300 hover:to-amber-500 shadow-[0_0_30px_rgba(245,158,11,0.5)] transition-all duration-300 hover:scale-105 active:scale-95"
              >
                <span>JOIN THE COMMUNITY</span>
              </a>

              {/* Secondary CTA */}
              <a
                href="https://x.com/h0pecat"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-8 py-4 rounded-2xl text-sm font-black text-white bg-black hover:bg-slate-900 border border-slate-800 hover:border-amber-500/40 shadow-xl transition-all duration-300 hover:scale-105 active:scale-95"
              >
                <span>FOLLOW ON X</span>
              </a>
            </div>

            {/* Copy Contract Third Interaction */}
            <div className="pt-2">
              <button
                onClick={handleCopyContract}
                className="w-full sm:w-auto flex items-center justify-between sm:justify-start gap-4 px-5 py-3 rounded-xl bg-black border border-slate-800 hover:border-amber-500/40 text-slate-300 hover:text-white transition-all group shadow-inner"
              >
                <div className="flex items-center gap-2.5">
                  <span className="text-xs font-mono tracking-wider text-slate-400 truncate max-w-[220px] sm:max-w-[280px]">
                    {CONTRACT_ADDRESS}
                  </span>
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-900 group-hover:bg-amber-500 group-hover:text-black text-amber-400 font-bold text-xs transition-colors">
                  {copied ? (
                    <span>COPIED!</span>
                  ) : (
                    <span>COPY CONTRACT</span>
                  )}
                </div>
              </button>
            </div>

          </div>

          {/* Right Column: Cinematic Mascot Display */}
          <div className="lg:col-span-5 flex items-center justify-center">
            <div className="relative">
              {/* Cinematic Ring Glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-amber-500/20 via-orange-500/20 to-amber-600/20 rounded-full blur-3xl animate-pulse" />
              
              {/* Floating Mascot Logo Card */}
              <div className="relative p-6 sm:p-8 rounded-3xl bg-black backdrop-blur-xl border border-amber-500/30 shadow-[0_20px_50px_rgba(0,0,0,0.9)] flex flex-col items-center text-center animate-float">
                <MascotLogo size={260} glow={true} />
                
                <div className="mt-6 space-y-2">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 font-bold text-xs">
                    <span>SUPERHERO MEME UNIVERSE</span>
                  </div>
                  <h2 className="text-lg font-black text-white tracking-wide">
                    HOPECAT MASCOT
                  </h2>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Animated Scroll Indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-500 hover:text-amber-400 transition-colors">
        <span className="text-[10px] font-mono tracking-widest uppercase">Scroll Down</span>
        <div className="w-5 h-9 rounded-full border-2 border-slate-800 flex items-start justify-center p-1">
          <div className="w-1 h-2 bg-amber-400 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
};

