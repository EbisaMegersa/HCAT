import React from 'react';

export const WhySection: React.FC = () => {
  const points = [
    {
      title: 'COMMUNITY GOVERNED',
      desc: 'No venture capitalist vesting schedules or corporate control. Driven entirely by our holders and grassroots culture.',
      badge: 'COMMUNITY',
    },
    {
      title: 'TRANSPARENT & VERIFIED',
      desc: 'Immutable on-chain smart contract with zero hidden mint functions or backdoors. Security first for all participants.',
      badge: 'SECURITY',
    },
    {
      title: 'VIRAL MEME MOMENTUM',
      desc: 'Global reach across platforms with elite artwork, custom stickers, and passionate believers spreading the word.',
      badge: 'MOMENTUM',
    },
    {
      title: 'FAIR & OPEN DISTRIBUTION',
      desc: 'Designed for accessibility and wide distribution. Everyone has an equal opportunity to join the pride from day one.',
      badge: 'FAIRNESS',
    },
  ];

  return (
    <section id="why" className="py-28 relative bg-black overflow-hidden border-t border-slate-900">
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black border border-amber-500/30 text-amber-400 text-xs font-black tracking-widest uppercase shadow-md">
            WHY CHOOSE HOPECAT
          </div>

          <h2 className="text-4xl sm:text-6xl font-black text-white tracking-tight uppercase">
            BUILT DIFFERENT.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-200 to-amber-500">
              BUILT FOR THE HOLDERS.
            </span>
          </h2>

          <p className="text-slate-300 text-base sm:text-lg leading-relaxed pt-2">
            Discover what sets HopeCat ($HCAT) apart in the bustling world of Web3 and meme culture.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {points.map((p, idx) => (
            <div
              key={idx}
              className="group p-8 sm:p-10 rounded-3xl bg-black backdrop-blur-2xl border border-slate-800 hover:border-amber-500/50 transition-all duration-500 shadow-2xl relative overflow-hidden flex flex-col justify-between"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 rounded-bl-full pointer-events-none group-hover:bg-amber-500/15 transition-colors" />

              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="px-3 py-1 rounded-xl bg-slate-900 border border-slate-800 text-amber-400 font-mono text-xs font-black">
                    WHY-0{idx + 1}
                  </div>
                  <span className="text-xs font-mono px-3 py-1 rounded-full bg-black text-amber-400 border border-amber-500/20 font-bold">
                    {p.badge}
                  </span>
                </div>

                <h3 className="text-2xl font-black text-white tracking-wide mb-3">
                  {p.title}
                </h3>

                <p className="text-slate-400 text-base leading-relaxed font-medium">
                  {p.desc}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-900 flex items-center justify-between text-xs font-bold text-amber-400">
                <span>COMMUNITY VERIFIED</span>
                <span>✓</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

