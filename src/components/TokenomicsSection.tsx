import React, { useState } from 'react';

const CONTRACT_ADDRESS = '0xDa1c8E17BC22B2E755368458feF282D91f25025E';

export const TokenomicsSection: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(CONTRACT_ADDRESS);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  const tokenomicsData = [
    {
      label: 'TOTAL SUPPLY',
      value: '1,000,000,000 $HCAT',
      desc: 'Fixed total supply with zero additional token minting capability.',
      badge: 'FIXED SUPPLY',
    },
    {
      label: 'LIQUIDITY POOL',
      value: '100% LOCKED',
      desc: 'Initial liquidity provider tokens securely locked to ensure a safe trading environment.',
      badge: 'SECURE',
    },
    {
      label: 'BUY / SELL TAX',
      value: '0% / 0%',
      desc: 'Zero transaction tax on standard buys and sells for frictionless community trading.',
      badge: 'ZERO TAX',
    },
    {
      label: 'COMMUNITY & ECOSYSTEM',
      value: '100% COMMUNITY',
      desc: 'Driven by grassroots holders, creators, and believers worldwide.',
      badge: 'DECENTRALIZED',
    },
  ];

  return (
    <section id="tokenomics" className="py-28 relative bg-black overflow-hidden border-t border-slate-900">
      {/* Background glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-amber-500/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black border border-amber-500/30 text-amber-400 text-xs font-black tracking-widest uppercase shadow-md">
            TOKENOMICS & SUPPLY
          </div>

          <h2 className="text-4xl sm:text-6xl font-black text-white tracking-tight uppercase">
            TRANSPARENT & <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-200 to-amber-500">FAIR</span>
          </h2>

          <p className="text-slate-300 text-base sm:text-lg leading-relaxed pt-2">
            Designed with absolute clarity, zero taxes, and robust security for the entire $HCAT holder community.
          </p>
        </div>

        {/* Glassmorphism Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {tokenomicsData.map((item, idx) => (
            <div
              key={idx}
              className="group p-8 rounded-3xl bg-slate-950/60 backdrop-blur-2xl border border-white/10 hover:border-amber-500/50 transition-all duration-500 hover:-translate-y-2 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] relative overflow-hidden flex flex-col justify-between"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 rounded-bl-full pointer-events-none group-hover:bg-amber-500/15 transition-colors" />

              <div>
                <div className="px-3 py-1 rounded-xl bg-slate-900/80 border border-slate-800 text-amber-400 font-mono text-xs font-black w-fit mb-6">
                  {item.badge}
                </div>

                <div className="text-xs font-mono font-bold text-slate-400 mb-1 tracking-wider">
                  {item.label}
                </div>

                <div className="text-2xl sm:text-3xl font-black text-white tracking-tight mb-4">
                  {item.value}
                </div>

                <p className="text-slate-400 text-sm leading-relaxed font-medium">
                  {item.desc}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-white/5 text-xs font-mono text-amber-400 flex items-center justify-between">
                <span>VERIFIED</span>
                <span className="text-white font-bold">100%</span>
              </div>
            </div>
          ))}
        </div>

        {/* Glassmorphism Contract Copy Card */}
        <div className="max-w-3xl mx-auto p-8 sm:p-10 rounded-3xl bg-slate-950/70 backdrop-blur-3xl border border-amber-500/30 shadow-[0_15px_50px_rgba(245,158,11,0.15)] relative overflow-hidden flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 via-transparent to-transparent pointer-events-none" />

          <div className="space-y-1 text-center sm:text-left relative z-10">
            <span className="text-xs font-mono text-amber-400 uppercase tracking-widest font-bold">OFFICIAL CONTRACT ADDRESS</span>
            <div className="font-mono text-xs sm:text-sm text-slate-200 break-all select-all pt-1">
              {CONTRACT_ADDRESS}
            </div>
          </div>

          <button
            onClick={handleCopy}
            className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 hover:from-amber-300 hover:to-amber-500 text-black font-black text-xs tracking-wider uppercase shadow-[0_0_25px_rgba(245,158,11,0.5)] transition-all shrink-0 relative z-10 hover:scale-105 active:scale-95"
          >
            {copied ? 'COPIED TO CLIPBOARD!' : 'COPY CONTRACT ADDRESS'}
          </button>
        </div>

      </div>
    </section>
  );
};
