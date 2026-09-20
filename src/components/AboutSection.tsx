import React from 'react';

export const AboutSection: React.FC = () => {
  const cards = [
    {
      num: '01',
      title: 'COMMUNITY-FIRST SPIRIT',
      desc: 'Built around passionate people, viral memes, and shared positive energy that transcends ordinary crypto boundaries.',
      glowColor: 'group-hover:border-amber-500/50 group-hover:shadow-[0_0_35px_rgba(245,158,11,0.25)]',
    },
    {
      num: '02',
      title: 'UNRIVALED MEME CULTURE',
      desc: 'Because crypto without memes would just be spreadsheets. We celebrate elite internet humor, original artwork, and cultural momentum.',
      glowColor: 'group-hover:border-orange-500/50 group-hover:shadow-[0_0_35px_rgba(249,115,22,0.25)]',
    },
    {
      num: '03',
      title: 'HOPE & RESILIENCE',
      desc: 'Small cat. Big dreams. Maintaining unwavering optimism and lighthearted fun across the blockchain ecosystem no matter market conditions.',
      glowColor: 'group-hover:border-red-500/50 group-hover:shadow-[0_0_35px_rgba(239,68,68,0.25)]',
    },
    {
      num: '04',
      title: 'TOGETHER WE BUILD',
      desc: 'Collaborative creation, decentralized support, and organic growth fueled entirely by our incredible worldwide holder community.',
      glowColor: 'group-hover:border-amber-500/50 group-hover:shadow-[0_0_35px_rgba(245,158,11,0.25)]',
    },
  ];

  return (
    <section id="about" className="py-28 relative bg-black overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-orange-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black border border-amber-500/30 text-amber-400 text-xs font-black tracking-widest uppercase shadow-md">
            WHAT IS HOPECAT?
          </div>
          
          <h2 className="text-4xl sm:text-6xl font-black text-white tracking-tight uppercase">
            More than a meme.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-200 to-amber-500">
              A community with a mascot.
            </span>
          </h2>

          <p className="text-slate-300 text-base sm:text-lg leading-relaxed pt-2">
            HopeCat ($HCAT) is a community-driven meme token centered around the iconic HopeCat character, championing grassroots participation, creative expression, and authentic Web3 culture.
          </p>
        </div>

        {/* 4 Cards Grid with Enhanced Styling */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className={`group relative p-8 rounded-3xl bg-black backdrop-blur-2xl border border-slate-800 transition-all duration-500 hover:-translate-y-2 flex flex-col justify-between ${card.glowColor}`}
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="px-3 py-1 rounded-xl bg-slate-900 border border-slate-800 text-amber-400 font-mono text-xs font-black">
                    HCAT-{card.num}
                  </div>
                  <span className="text-2xl font-black font-mono text-slate-700 group-hover:text-amber-400 transition-colors">
                    {card.num}
                  </span>
                </div>

                <h3 className="text-xl font-black text-white tracking-wider mb-3">
                  {card.title}
                </h3>

                <p className="text-slate-400 text-sm leading-relaxed font-medium">
                  {card.desc}
                </p>
              </div>

              <div className="absolute bottom-0 left-8 right-8 h-1 bg-gradient-to-r from-transparent via-amber-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

