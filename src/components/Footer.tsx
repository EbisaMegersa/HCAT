import React from 'react';
import { MascotLogo } from './MascotLogo';

const CONTRACT_ADDRESS = '0xDa1c8E17BC22B2E755368458feF282D91f25025E';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-slate-900 pt-16 pb-12 text-slate-400 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-12 border-b border-slate-900">
          
          {/* Brand Info */}
          <div className="flex items-center gap-4 text-center md:text-left">
            <MascotLogo size={60} glow={false} />
            <div>
              <h3 className="text-xl font-black text-white tracking-wider">HOPECAT</h3>
              <p className="text-amber-400 text-xs font-bold font-mono tracking-widest">$HCAT</p>
            </div>
          </div>

          {/* Links & Contract */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-bold">
            <a
              href="https://x.com/h0pecat"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-300 hover:text-amber-400 transition-colors flex items-center gap-2"
            >
              <span>X / TWITTER</span>
            </a>

            <a
              href="https://t.me/hopecatcommunity"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-300 hover:text-amber-400 transition-colors flex items-center gap-2"
            >
              <span>TELEGRAM</span>
            </a>

            <span className="text-slate-600">|</span>

            <span className="text-slate-400 font-mono text-[11px] truncate max-w-[240px]">
              CA: {CONTRACT_ADDRESS}
            </span>
          </div>

        </div>

        {/* Disclaimer & Copyright */}
        <div className="space-y-4 text-center text-xs text-slate-500 max-w-4xl mx-auto leading-relaxed">
          <p>
            "Crypto assets involve significant risk. Nothing on this website constitutes financial advice or a guarantee of value or returns."
          </p>
          <p className="font-mono text-slate-600">
            © 2026 HopeCat. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
};

