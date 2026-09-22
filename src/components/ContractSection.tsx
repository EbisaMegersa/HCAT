import React, { useState } from 'react';

export const ContractSection: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const contractAddress = '0xDa1c8Ea4b73f29019d8E5f4c2817d6928e25025E';

  const handleCopy = () => {
    navigator.clipboard.writeText(contractAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <section id="contract" className="py-28 relative bg-black overflow-hidden border-t border-slate-900">
      <div className="absolute top-1/2 left-10 w-[500px] h-[500px] bg-orange-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black border border-amber-500/30 text-amber-400 text-xs font-black tracking-widest uppercase shadow-md">
            SECURE ON-CHAIN CONTRACT
          </div>

          <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight uppercase">
            VERIFIED <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-200 to-amber-500">$HCAT</span> ADDRESS
          </h2>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Always verify the official contract address before executing swaps or interacting with decentralized liquidity pools.
          </p>
        </div>

        {/* Terminal Box */}
        <div className="p-8 sm:p-12 rounded-3xl bg-black border-2 border-amber-500/40 shadow-[0_20px_60px_rgba(0,0,0,0.9)] relative overflow-hidden">
          <div className="absolute top-0 right-0 w-40 h-40 bg-amber-500/10 rounded-bl-full pointer-events-none" />

          <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-900">
            <div className="flex items-center gap-3">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
              </div>
              <span className="text-xs font-mono text-slate-400">hcat-mainnet-contract.sol</span>
            </div>
            <div className="inline-flex items-center gap-1.5 text-xs font-mono text-emerald-400 bg-emerald-950/60 px-3 py-1 rounded-full border border-emerald-500/30">
              VERIFIED & IMMUTABLE
            </div>
          </div>

          <div className="space-y-6">
            <div className="p-4 sm:p-6 rounded-2xl bg-slate-950 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="font-mono text-xs sm:text-sm text-amber-300 break-all text-center sm:text-left select-all">
                {contractAddress}
              </div>
              <button
                onClick={handleCopy}
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-500 text-black font-black text-xs tracking-wider uppercase hover:opacity-95 transition-all shadow-[0_5px_20px_rgba(245,158,11,0.4)] flex items-center justify-center gap-2 shrink-0"
              >
                {copied ? 'COPIED TO CLIPBOARD' : 'COPY CONTRACT'}
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-mono text-slate-400 pt-2">
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800/80 flex items-center gap-3">
                <div className="w-6 h-6 rounded-lg bg-amber-500/20 border border-amber-500/40 flex items-center justify-center overflow-hidden shrink-0">
                  <img 
                    src="https://cdn.phototourl.com/member/2026-09-21-b578c1ab-233c-492c-942f-371e8bb10aec.png" 
                    alt="Binance Network Logo" 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <span>Network: BSC / BEP20</span>
              </div>
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800/80 flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-orange-400 animate-pulse" />
                <span>Decimals: 18</span>
              </div>
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800/80 flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Tax: 2% / 2%</span>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-start gap-3 text-xs text-amber-300 leading-relaxed">
              <div>
                <span className="font-bold">Security Notice:</span> Always verify this contract address against official community announcements on Telegram or X. Never trust unofficial DMs or unverified links.
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

