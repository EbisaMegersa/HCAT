import React, { useState } from 'react';
import { MascotLogo } from './MascotLogo';

interface MemeItem {
  id: number;
  title: string;
  category: string;
  tagline: string;
  gradient: string;
  accentColor: string;
}

export const MemeGallerySection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'ALL' | 'STICKERS' | 'VIRAL' | 'WALLPAPERS'>('ALL');
  const [selectedMeme, setSelectedMeme] = useState<MemeItem | null>(null);

  const memes: MemeItem[] = [
    {
      id: 1,
      title: 'HOPE NEVER DIES',
      category: 'VIRAL',
      tagline: 'When the market dips but HopeCat pride stays bulletproof.',
      gradient: 'from-amber-500/20 via-black to-slate-950',
      accentColor: 'border-amber-500/40 text-amber-400',
    },
    {
      id: 2,
      title: 'DIAMOND PAWS',
      category: 'WALLPAPERS',
      tagline: 'High resolution desktop wallpaper for true $HCAT believers.',
      gradient: 'from-orange-600/20 via-black to-slate-950',
      accentColor: 'border-orange-500/40 text-orange-400',
    },
    {
      id: 3,
      title: 'COMMUNITY PRIDE',
      category: 'STICKERS',
      tagline: 'Official Telegram sticker pack centerpiece.',
      gradient: 'from-purple-600/20 via-black to-slate-950',
      accentColor: 'border-purple-500/40 text-purple-400',
    },
    {
      id: 4,
      title: 'SMALL CAT BIG DREAMS',
      category: 'VIRAL',
      tagline: 'The iconic mantra taking over Web3 timelines.',
      gradient: 'from-emerald-600/20 via-black to-slate-950',
      accentColor: 'border-emerald-500/40 text-emerald-400',
    },
    {
      id: 5,
      title: 'MOONBOUND FELINE',
      category: 'WALLPAPERS',
      tagline: 'Ready for interstellar exploration with zero tax friction.',
      gradient: 'from-amber-600/20 via-black to-slate-950',
      accentColor: 'border-amber-400 text-amber-300',
    },
    {
      id: 6,
      title: 'ZEN CAT LORE',
      category: 'STICKERS',
      tagline: 'Unshakable calm amidst market volatility.',
      gradient: 'from-cyan-600/20 via-black to-slate-950',
      accentColor: 'border-cyan-500/40 text-cyan-400',
    },
  ];

  const filteredMemes = activeCategory === 'ALL' 
    ? memes 
    : memes.filter(m => m.category === activeCategory);

  return (
    <section id="memes" className="py-28 relative bg-black overflow-hidden border-t border-slate-900">
      {/* Background glow */}
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black border border-amber-500/30 text-amber-400 text-xs font-black tracking-widest uppercase shadow-md">
            MEME VAULT & GALLERY
          </div>
          <h2 className="text-4xl sm:text-6xl font-black text-white tracking-tight uppercase">
            COMMUNITY <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-200 to-amber-500">MEMES</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-medium">
            Explore official $HCAT artwork, viral reaction cards, wallpapers, and sticker masterpieces crafted by our grassroots believers.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-16">
          {(['ALL', 'VIRAL', 'WALLPAPERS', 'STICKERS'] as const).map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2.5 rounded-xl font-mono text-xs font-bold tracking-wider transition-all ${
                activeCategory === cat
                  ? 'bg-amber-500 text-black shadow-[0_0_20px_rgba(245,158,11,0.5)] scale-105'
                  : 'bg-black text-slate-400 border border-slate-800 hover:border-amber-500/40 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Meme Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredMemes.map((meme) => (
            <div
              key={meme.id}
              onClick={() => setSelectedMeme(meme)}
              className={`group cursor-pointer p-8 rounded-3xl bg-gradient-to-b ${meme.gradient} border border-slate-800 hover:border-amber-500/60 transition-all duration-500 hover:-translate-y-2 shadow-2xl relative overflow-hidden flex flex-col justify-between`}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 rounded-bl-full pointer-events-none group-hover:bg-amber-500/20 transition-colors" />

              <div className="flex items-center justify-between mb-8">
                <span className={`px-3 py-1 rounded-xl bg-black border font-mono text-xs font-black ${meme.accentColor}`}>
                  {meme.category}
                </span>
                <span className="text-xs font-mono text-slate-500 group-hover:text-amber-400 transition-colors">
                  #HCAT-0{meme.id}
                </span>
              </div>

              {/* Meme Card Visual Art Preview */}
              <div className="py-12 flex flex-col items-center justify-center relative my-4">
                <div className="absolute inset-0 bg-black/40 rounded-2xl backdrop-blur-sm border border-slate-800/80 group-hover:border-amber-500/30 transition-all" />
                <div className="relative z-10 transform group-hover:scale-110 transition-transform duration-500">
                  <MascotLogo size={100} glow={true} />
                </div>
                <div className="relative z-10 mt-4 text-center">
                  <h4 className="text-lg font-black text-white tracking-wide uppercase">
                    {meme.title}
                  </h4>
                </div>
              </div>

              <div>
                <p className="text-slate-400 text-xs sm:text-sm font-medium leading-relaxed mb-6">
                  {meme.tagline}
                </p>
                <div className="pt-4 border-t border-slate-900 flex items-center justify-between text-xs font-bold text-amber-400">
                  <span>CLICK TO VIEW & DOWNLOAD</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {selectedMeme && (
        <div 
          onClick={() => setSelectedMeme(null)}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex items-center justify-center p-4 animate-in fade-in duration-300"
        >
          <div 
            onClick={(e) => e.stopPropagation()}
            className="max-w-xl w-full p-8 sm:p-12 rounded-3xl bg-black border-2 border-amber-500/50 shadow-[0_0_60px_rgba(245,158,11,0.3)] relative text-center space-y-6"
          >
            <button
              onClick={() => setSelectedMeme(null)}
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-slate-900 border border-slate-800 text-slate-300 hover:text-white flex items-center justify-center font-black"
            >
              ✕
            </button>

            <span className="inline-block px-3 py-1 rounded-xl bg-slate-900 border border-amber-500/30 font-mono text-xs font-black text-amber-400">
              {selectedMeme.category}
            </span>

            <div className="py-8 flex justify-center">
              <MascotLogo size={150} glow={true} />
            </div>

            <div className="space-y-2">
              <h3 className="text-3xl font-black text-white uppercase tracking-tight">
                {selectedMeme.title}
              </h3>
              <p className="text-slate-300 text-sm font-medium leading-relaxed">
                {selectedMeme.tagline}
              </p>
            </div>

            <div className="pt-4 flex items-center justify-center gap-4">
              <button
                onClick={() => {
                  navigator.clipboard.writeText(`https://hopecat.vip - $HCAT Meme: ${selectedMeme.title}`);
                  alert('Meme link copied to clipboard!');
                }}
                className="px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-black text-xs tracking-wider uppercase shadow-[0_0_20px_rgba(245,158,11,0.4)] transition-all"
              >
                COPY MEME LINK
              </button>
              <button
                onClick={() => setSelectedMeme(null)}
                className="px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-800 font-bold text-xs tracking-wider uppercase transition-all"
              >
                CLOSE
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
