import React from 'react';

export const TickerMarquee: React.FC = () => {
  const tickerItems = [
    '$HCAT',
    'HOPECAT',
    'COMMUNITY',
    'MEMES',
    'HOPE',
    '$HCAT',
    'HOPECAT',
    'TOGETHER WE BUILD',
    'SMALL CAT. BIG DREAMS.',
    '$HCAT',
    'HOPECAT',
    'WEB3 CULTURE',
  ];

  return (
    <div className="relative bg-gradient-to-r from-amber-600 via-amber-500 to-yellow-500 py-3.5 overflow-hidden shadow-[0_0_25px_rgba(245,158,11,0.3)] border-y border-amber-400/40">
      <div className="flex whitespace-nowrap overflow-hidden">
        <div className="flex animate-marquee items-center space-x-8 text-slate-950 font-black text-sm sm:text-base tracking-widest uppercase">
          {tickerItems.concat(tickerItems).map((item, index) => (
            <div key={index} className="flex items-center space-x-8">
              <span className="hover:scale-110 transition-transform cursor-pointer drop-shadow-sm">
                {item}
              </span>
              <span className="text-slate-900 font-bold text-xs">✦</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
