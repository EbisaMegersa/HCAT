import React from 'react';
import { MascotLogo } from './MascotLogo';

export const EcosystemSection: React.FC = () => {
  const globalPillars = [
    {
      title: 'GLOBAL COMMUNITY HUBS',
      desc: 'Active grassroots communities spreading across Telegram and X, connecting holders from North America, Europe, Asia, and Latin America in a unified movement of optimism.',
      tag: 'WORLDWIDE',
    },
    {
      title: 'COMMUNITY-DRIVEN CULTURE',
      desc: 'No corporate boardrooms or venture capitalists. $HCAT is forged by creators, meme artists, and passionate believers who live and breathe decentralized Web3 culture.',
      tag: 'DECENTRALIZED',
    },
    {
      title: 'VERIFIED ON-CHAIN SECURITY',
      desc: 'Immutable smart contract deployed with absolute transparency. Always check and verify the contract address (0xDa1c8E...25025E) before executing transactions.',
      tag: 'SECURE',
    },
    {
      title: 'THE LEGEND OF HOPECAT',
      desc: 'A superhero cat guarding the decentralized realm with unwavering optimism, sharp wit, and unstoppable paws. Small cat, big dreams.',
      tag: 'LORE',
    },
  ];

  return (
    <section className="py-28 relative bg-black overflow-hidden border-t border-slate-900">
      {/* Cinematic background glow */}
      <div className="absolute top-1/4 left-10 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-orange-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black border border-amber-500/30 text-amber-400 text-xs font-black tracking-widest uppercase shadow-lg">
            GLOBAL ECOSYSTEM & MANIFESTO
          </div>
          <h2 className="text-4xl sm:text-6xl font-black text-white tracking-tight uppercase">
            THE POWER OF <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-200 to-amber-500">$HCAT</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            HopeCat ($HCAT) is engineered to transcend ordinary meme tokens by uniting international holders through humor, resilience, and unyielding creative energy.
          </p>
        </div>

        {/* 4 Bento Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {globalPillars.map((p, idx) => (
            <div
              key={idx}
              className="group p-8 rounded-3xl bg-black backdrop-blur-2xl border border-slate-800 hover:border-amber-500/50 transition-all duration-500 hover:-translate-y-2 shadow-2xl relative overflow-hidden flex flex-col justify-between"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 rounded-bl-full pointer-events-none group-hover:bg-amber-500/15 transition-colors" />

              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="px-3 py-1 rounded-xl bg-slate-900 border border-slate-800 text-amber-400 font-mono text-xs font-black">
                    PILLAR 0{idx + 1}
                  </div>
                  <span className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-black text-amber-400 border border-amber-500/20">
                    {p.tag}
                  </span>
                </div>

                <h3 className="text-xl font-black text-white tracking-wider mb-3">
                  {p.title}
                </h3>

                <p className="text-slate-400 text-sm leading-relaxed font-medium">
                  {p.desc}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-900 flex items-center justify-between text-xs font-bold text-amber-400/80 group-hover:text-amber-400">
                <span>EXPLORE $HCAT</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </div>
          ))}
        </div>

        {/* Immersive Feature Banner */}
        <div className="p-8 sm:p-14 rounded-3xl bg-black border border-amber-500/30 shadow-[0_20px_60px_rgba(0,0,0,0.9)] relative overflow-hidden flex flex-col lg:flex-row items-center gap-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-amber-500/10 via-transparent to-transparent pointer-events-none" />
          
          <div className="shrink-0">
            <MascotLogo size={180} glow={true} />
          </div>

          <div className="space-y-4 text-center lg:text-left relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 text-amber-400 text-xs font-mono">
              COMMUNITY FIRST PROTOCOL
            </div>
            <h3 className="text-2xl sm:text-4xl font-black text-white tracking-wide uppercase">
              BUILT FOR THE CULTURE, DRIVEN BY HOPE
            </h3>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Whether you're an experienced crypto veteran or discovering Web3 for the first time, HopeCat welcomes everyone into a supportive environment focused on creativity, memes, and positive collective energy. No empty promises—just pure community spirit.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

