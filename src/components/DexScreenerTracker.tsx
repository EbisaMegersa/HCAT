import React, { useState, useEffect } from 'react';

interface DexPair {
  chainId: string;
  dexId: string;
  url: string;
  pairAddress: string;
  baseToken: {
    address: string;
    name: string;
    symbol: string;
  };
  priceUsd?: string;
  priceChange?: {
    h24?: number;
  };
  liquidity?: {
    usd?: number;
  };
  marketCap?: number;
  fdv?: number;
}

const CONTRACT_ADDRESS = '0xDa1c8E17BC22B2E755368458feF282D91f25025E';

export const DexScreenerTracker: React.FC = () => {
  const [pairData, setPairData] = useState<DexPair | null>(null);
  const [loading, setLoading] = useState(true);
  const [lastUpdated, setLastUpdated] = useState<Date>(new Date());
  const [error, setError] = useState(false);

  const fetchDexData = async () => {
    try {
      const response = await fetch(`https://api.dexscreener.com/latest/dex/tokens/${CONTRACT_ADDRESS}`);
      const data = await response.json();
      if (data && data.pairs && data.pairs.length > 0) {
        const bestPair = data.pairs[0];
        setPairData(bestPair);
        setError(false);
      } else {
        setError(true);
      }
    } catch (err) {
      console.error('Error fetching DexScreener data:', err);
      setError(true);
    } finally {
      setLoading(false);
      setLastUpdated(new Date());
    }
  };

  useEffect(() => {
    fetchDexData();
    const interval = setInterval(fetchDexData, 20000);
    return () => clearInterval(interval);
  }, []);

  const formatCurrency = (val?: number) => {
    if (!val && val !== 0) return 'TBA';
    if (val >= 1e9) return `$${(val / 1e9).toFixed(2)}B`;
    if (val >= 1e6) return `$${(val / 1e6).toFixed(2)}M`;
    if (val >= 1e3) return `$${(val / 1e3).toFixed(2)}K`;
    return `$${val.toFixed(2)}`;
  };

  const formatPrice = (priceStr?: string) => {
    if (!priceStr) return 'TBA';
    const num = parseFloat(priceStr);
    if (num < 0.00001) return `$${num.toExponential(4)}`;
    if (num < 1) return `$${num.toFixed(6)}`;
    return `$${num.toFixed(4)}`;
  };

  const priceChange24h = pairData?.priceChange?.h24 ?? 0;
  const isPositive = priceChange24h >= 0;
  const marketCapVal = pairData?.marketCap || pairData?.fdv || 0;
  const liquidityVal = pairData?.liquidity?.usd || 0;
  const dexscreenerUrl = pairData?.url || `https://dexscreener.com/search?q=${CONTRACT_ADDRESS}`;

  return (
    <section className="py-20 relative bg-black overflow-hidden border-t border-slate-950">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Tracker Header */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12 pb-6 border-b border-slate-900">
          <div className="space-y-2 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black border border-emerald-500/30 text-emerald-400 text-xs font-mono font-bold">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span>LIVE DEXSCREENER FEED</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight uppercase">
              $HCAT <span className="text-amber-400">MARKET TRACKER</span>
            </h2>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={fetchDexData}
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-black border border-slate-800 hover:border-amber-500/40 text-slate-300 text-xs font-mono transition-colors"
              title="Refresh Data"
            >
              <span>{loading ? 'SYNCING...' : `UPDATED ${lastUpdated.toLocaleTimeString()}`}</span>
            </button>

            <a
              href={dexscreenerUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-black text-xs tracking-wider uppercase shadow-[0_0_20px_rgba(245,158,11,0.4)] transition-all hover:scale-105"
            >
              <span>DEXSCREENER</span>
            </a>
          </div>
        </div>

        {/* 4 Key Metrics Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Card 1: Market Cap */}
          <div className="p-6 rounded-3xl bg-black backdrop-blur-2xl border border-slate-800 hover:border-amber-500/40 transition-all duration-300 shadow-xl group">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-mono font-bold text-slate-400 tracking-wider">MARKET CAP</span>
              <div className="px-3 py-1 rounded-xl bg-slate-900 border border-slate-800 text-amber-400 font-mono text-xs font-black">
                MCAP
              </div>
            </div>
            <div className="text-2xl sm:text-3xl font-black font-mono text-white tracking-tight">
              {marketCapVal > 0 ? formatCurrency(marketCapVal) : 'TBA'}
            </div>
            <div className="text-[11px] text-slate-500 font-mono mt-1">Real-time valuation</div>
          </div>

          {/* Card 2: Price in USD */}
          <div className="p-6 rounded-3xl bg-black backdrop-blur-2xl border border-slate-800 hover:border-amber-500/40 transition-all duration-300 shadow-xl group">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-mono font-bold text-slate-400 tracking-wider">PRICE (USD)</span>
              <div className="px-3 py-1 rounded-xl bg-slate-900 border border-slate-800 text-orange-400 font-mono text-xs font-black">
                USD
              </div>
            </div>
            <div className="text-2xl sm:text-3xl font-black font-mono text-white tracking-tight">
              {formatPrice(pairData?.priceUsd)}
            </div>
            <div className="text-[11px] text-slate-500 font-mono mt-1">Current token price</div>
          </div>

          {/* Card 3: 24h Price Change */}
          <div className="p-6 rounded-3xl bg-black backdrop-blur-2xl border border-slate-800 hover:border-amber-500/40 transition-all duration-300 shadow-xl group">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-mono font-bold text-slate-400 tracking-wider">24H CHANGE</span>
              <div className={`px-3 py-1 rounded-xl bg-slate-900 border border-slate-800 font-mono text-xs font-black ${isPositive ? 'text-emerald-400' : 'text-red-400'}`}>
                {isPositive ? 'UP' : 'DOWN'}
              </div>
            </div>
            <div className={`text-2xl sm:text-3xl font-black font-mono tracking-tight ${isPositive ? 'text-emerald-400' : 'text-red-400'}`}>
              {isPositive ? '+' : ''}{priceChange24h.toFixed(2)}%
            </div>
            <div className="text-[11px] text-slate-500 font-mono mt-1">Last 24 hours performance</div>
          </div>

          {/* Card 4: Total Liquidity */}
          <div className="p-6 rounded-3xl bg-black backdrop-blur-2xl border border-slate-800 hover:border-amber-500/40 transition-all duration-300 shadow-xl group">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-mono font-bold text-slate-400 tracking-wider">TOTAL LIQUIDITY</span>
              <div className="px-3 py-1 rounded-xl bg-slate-900 border border-slate-800 text-purple-400 font-mono text-xs font-black">
                LP
              </div>
            </div>
            <div className="text-2xl sm:text-3xl font-black font-mono text-white tracking-tight">
              {liquidityVal > 0 ? formatCurrency(liquidityVal) : 'TBA'}
            </div>
            <div className="text-[11px] text-slate-500 font-mono mt-1">Pool liquidity depth</div>
          </div>

        </div>

        {error && (
          <div className="mt-6 p-4 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-center text-xs text-amber-300 font-mono">
            Note: If liquidity pool is newly created or syncing, metrics will appear automatically once indexed by DexScreener.
          </div>
        )}

      </div>
    </section>
  );
};

