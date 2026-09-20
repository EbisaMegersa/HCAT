import React, { useState, useEffect } from 'react';
import { MascotLogo } from './MascotLogo';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'HOME', href: '#home' },
    { name: 'ABOUT', href: '#about' },
    { name: 'MEMES', href: '#memes' },
    { name: 'TOKENOMICS', href: '#tokenomics' },
    { name: 'ROADMAP', href: '#roadmap' },
    { name: 'COMMUNITY', href: '#community' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'py-3 bg-black/90 backdrop-blur-xl border-b border-amber-500/30 shadow-[0_10px_30px_rgba(0,0,0,0.9)]'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Left: Logo & Brand */}
        <a href="#home" className="flex items-center gap-3 group focus:outline-none">
          <MascotLogo size={42} glow={false} />
          <div className="flex flex-col">
            <span className="font-black text-xl tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-200 to-white drop-shadow-[0_2px_4px_rgba(245,158,11,0.5)]">
              HOPECAT
            </span>
            <span className="text-xs font-bold tracking-widest text-amber-500/80 -mt-1">
              $HCAT
            </span>
          </div>
        </a>

        {/* Center Nav Links (Desktop) */}
        <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2 bg-black/80 backdrop-blur-lg border border-slate-800/80 px-4 py-2 rounded-full shadow-inner">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-4 py-1.5 text-xs font-bold tracking-wider text-slate-300 hover:text-amber-400 hover:bg-slate-900 rounded-full transition-all duration-200"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right Social Icons & Buttons (Desktop) */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href="https://x.com/h0pecat"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Follow HopeCat on X"
            className="flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold text-white bg-black hover:bg-slate-900 border border-slate-800 hover:border-amber-500/50 shadow-md transition-all duration-300 hover:scale-105"
          >
            <svg className="w-4 h-4 fill-current text-amber-400" viewBox="0 0 24 24">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
            <span>X</span>
          </a>

          <a
            href="https://t.me/hopecatcommunity"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Join HopeCat Telegram Community"
            className="flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold text-black bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 hover:from-amber-300 hover:to-amber-500 shadow-[0_0_20px_rgba(245,158,11,0.4)] transition-all duration-300 hover:scale-105"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.07-.2-.08-.06-.19-.04-.27 0-.12.07-1.99 1.27-5.62 3.72-.53.36-1.01.54-1.44.53-.47-.02-1.37-.26-2.03-.48-.82-.27-1.47-.42-1.42-.88.03-.25.38-.51 1.08-.78 4.22-1.84 7.03-3.05 8.43-3.62 4.01-1.66 4.84-1.95 5.38-1.96.12 0 .39.03.56.17.14.12.18.28.2.45-.02.07-.02.13-.04.2z" />
            </svg>
            <span>TELEGRAM</span>
          </a>
        </div>

        {/* Mobile Hamburger Button (Transforms into X) */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden relative w-10 h-10 rounded-xl bg-black/80 border border-amber-500/40 text-amber-400 flex flex-col items-center justify-center gap-1.5 transition-all focus:outline-none shadow-lg"
          aria-label="Toggle mobile menu"
        >
          <span
            className={`w-5 h-0.5 bg-amber-400 transition-all duration-300 transform ${
              mobileMenuOpen ? 'rotate-45 translate-y-2' : ''
            }`}
          />
          <span
            className={`w-5 h-0.5 bg-amber-400 transition-all duration-300 ${
              mobileMenuOpen ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`w-5 h-0.5 bg-amber-400 transition-all duration-300 transform ${
              mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
            }`}
          />
        </button>
      </div>

      {/* Mobile Glassmorphism Side Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-2xl border-b border-amber-500/30 px-6 py-8 shadow-[0_20px_50px_rgba(0,0,0,0.9)] animate-in slide-in-from-top duration-300">
          <div className="flex items-center justify-between pb-6 mb-6 border-b border-slate-900">
            <div className="flex items-center gap-3">
              <MascotLogo size={36} glow={true} />
              <span className="font-black text-lg text-amber-400 tracking-wider">HOPECAT</span>
            </div>
            <span className="text-xs font-mono text-slate-500">MENU</span>
          </div>

          <div className="flex flex-col space-y-3">
            {navLinks.map((link, idx) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                style={{ animationDelay: `${idx * 50}ms` }}
                className="px-5 py-3.5 text-sm font-black tracking-wider text-slate-200 hover:text-amber-400 hover:bg-slate-900/80 rounded-2xl transition-all border border-slate-900 hover:border-amber-500/30 flex items-center justify-between"
              >
                <span>{link.name}</span>
                <span className="text-amber-500 font-mono text-xs">0{idx + 1}</span>
              </a>
            ))}

            <div className="pt-6 mt-2 border-t border-slate-900 grid grid-cols-2 gap-4">
              <a
                href="https://x.com/h0pecat"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 px-4 py-3.5 rounded-2xl text-xs font-bold text-white bg-black border border-slate-800 shadow hover:border-amber-500/40"
              >
                <svg className="w-4 h-4 fill-current text-amber-400" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
                <span>X / TWITTER</span>
              </a>
              <a
                href="https://t.me/hopecatcommunity"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 px-4 py-3.5 rounded-2xl text-xs font-bold text-black bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 shadow-[0_0_20px_rgba(245,158,11,0.4)]"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.07-.2-.08-.06-.19-.04-.27 0-.12.07-1.99 1.27-5.62 3.72-.53.36-1.01.54-1.44.53-.47-.02-1.37-.26-2.03-.48-.82-.27-1.47-.42-1.42-.88.03-.25.38-.51 1.08-.78 4.22-1.84 7.03-3.05 8.43-3.62 4.01-1.66 4.84-1.95 5.38-1.96.12 0 .39.03.56.17.14.12.18.28.2.45-.02.07-.02.13-.04.2z" />
                </svg>
                <span>TELEGRAM</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

