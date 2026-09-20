import React, { useState, useEffect, useRef } from 'react';
import { MascotLogo } from './MascotLogo';

export const RoadmapSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [lineHeight, setLineHeight] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const elementTop = rect.top;
      const elementHeight = rect.height;

      let progress = (windowHeight - elementTop) / (elementHeight + windowHeight * 0.3);
      progress = Math.max(0, Math.min(1, progress));
      setLineHeight(progress * 100);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const roadmapPhases = [
    {
      phase: 'PHASE 01',
      title: 'THE BEGINNING',
      subtitle: 'Establishing the Foundation',
      description: 'Laying the groundwork for the HopeCat universe with official brand assets, community channels, viral meme creation, and smart contract verification.',
      items: [
        'Official smart contract deployment',
        'Website launch & visual identity rollout',
        'Telegram & X community formation',
        'Meme generation campaigns & stickers',
      ],
      status: 'IN PROGRESS / PLANNED',
      badgeColor: 'bg-amber-500/10 text-amber-400 border-amber-500/30',
    },
    {
      phase: 'PHASE 02',
      title: 'COMMUNITY EXPANSION',
      subtitle: 'Growing the Pride',
      description: 'Scaling our global presence through creative content campaigns, interactive community events, collaborative art, and ecosystem partnerships.',
      items: [
        'Global community engagement events',
        'Creative art & meme contests',
        'Content creator & influencer collaborations',
        'Expanded ecosystem utilities & lore',
      ],
      status: 'PLANNED',
      badgeColor: 'bg-orange-500/10 text-orange-400 border-orange-500/30',
    },
    {
      phase: 'PHASE 03',
      title: 'THE NEXT CHAPTER',
      subtitle: 'Unleashing the Full Universe',
      description: 'Pushing the boundaries of meme coin culture with community-driven initiatives, interactive experiences, and long-term ecosystem evolution.',
      items: [
        'Advanced community-driven initiatives',
        'Interactive HopeCat universe expansions',
        'Ecosystem governance and milestones',
        'Continuous community rewards & events',
      ],
      status: 'PLANNED',
      badgeColor: 'bg-red-500/10 text-red-400 border-red-500/30',
    },
  ];

  return (
    <section id="roadmap" ref={containerRef} className="py-28 relative bg-black overflow-hidden border-b border-slate-900">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-amber-500/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-24">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black border border-amber-500/30 text-amber-400 text-xs font-black tracking-widest uppercase shadow-md">
            STRATEGIC ROADMAP
          </div>
          <h2 className="text-4xl sm:text-6xl font-black text-white tracking-tight uppercase">
            THE <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-200 to-amber-500">HOPECAT</span> JOURNEY
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-medium italic">
            "Every great story starts with one small step."
          </p>
        </div>

        {/* Cinematic Vertical Timeline Container */}
        <div className="relative max-w-5xl mx-auto pb-20">
          
          {/* Central Vertical Track Line (Desktop center, Mobile left) */}
          <div className="absolute left-8 lg:left-1/2 top-0 bottom-0 w-1 bg-slate-900 -translate-x-1/2 rounded-full overflow-hidden">
            <div
              className="w-full bg-gradient-to-b from-amber-400 via-yellow-300 to-amber-500 shadow-[0_0_20px_#f59e0b] transition-all duration-300 rounded-full"
              style={{ height: `${lineHeight}%` }}
            />
            {/* Traveling glowing particle */}
            <div
              className="absolute w-3 h-3 bg-white rounded-full shadow-[0_0_15px_#fff,-0_0_25px_#f59e0b] -translate-x-1/2 transition-all duration-300"
              style={{ top: `${lineHeight}%`, left: '50%' }}
            />
          </div>

          {/* Roadmap Phases */}
          <div className="space-y-16 lg:space-y-24">
            {roadmapPhases.map((phase, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div
                  key={idx}
                  className={`relative flex flex-col lg:flex-row items-center ${
                    isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  } gap-8 lg:gap-16`}
                >
                  {/* Central Node Circle */}
                  <div className="absolute left-8 lg:left-1/2 -translate-x-1/2 w-14 h-14 rounded-full bg-black border-2 border-amber-400 text-amber-400 font-black text-sm flex items-center justify-center shadow-[0_0_25px_rgba(245,158,11,0.6)] z-20 shrink-0">
                    <span className="font-mono">{`0${idx + 1}`}</span>
                  </div>

                  {/* Spacer for alternating layout on desktop */}
                  <div className="hidden lg:block lg:w-1/2" />

                  {/* Card Container */}
                  <div className="w-full lg:w-1/2 pl-16 lg:pl-0">
                    <div
                      className={`group p-8 sm:p-10 rounded-3xl bg-black backdrop-blur-2xl border border-slate-800 hover:border-amber-500/60 transition-all duration-500 hover:-translate-y-2 shadow-2xl relative overflow-hidden ${
                        isEven ? 'lg:mr-8' : 'lg:ml-8'
                      }`}
                    >
                      <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 rounded-bl-full pointer-events-none group-hover:bg-amber-500/15 transition-colors" />

                      <div className="flex items-center justify-between mb-6">
                        <div className="px-3 py-1 rounded-xl bg-slate-900 border border-slate-800 text-amber-400 font-mono text-xs font-black">
                          {phase.phase}
                        </div>
                        <span className={`text-xs font-mono font-bold px-3 py-1 rounded-full border ${phase.badgeColor}`}>
                          {phase.status}
                        </span>
                      </div>

                      <div className="space-y-1 mb-6">
                        <h3 className="text-2xl sm:text-3xl font-black text-white tracking-wide uppercase">
                          {phase.title}
                        </h3>
                        <p className="text-xs font-semibold text-amber-400/90 tracking-wider">
                          {phase.subtitle}
                        </p>
                      </div>

                      <p className="text-slate-400 text-sm leading-relaxed font-medium mb-8">
                        {phase.description}
                      </p>

                      <ul className="space-y-3.5 pt-4 border-t border-slate-900">
                        {phase.items.map((item, i) => (
                          <li key={i} className="flex items-start gap-3 text-slate-300 text-sm font-medium">
                            <span className="text-amber-400 font-bold">✓</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

        {/* Cinematic Mascot Footer Banner */}
        <div className="p-10 sm:p-16 rounded-3xl bg-black border-2 border-amber-500/40 text-center relative overflow-hidden shadow-[0_20px_60px_rgba(245,158,11,0.15)] max-w-4xl mx-auto flex flex-col items-center gap-6">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-500/15 via-transparent to-transparent pointer-events-none" />

          <div className="relative z-10">
            <MascotLogo size={180} glow={true} />
          </div>

          <div className="space-y-3 relative z-10 max-w-xl mx-auto">
            <h3 className="text-3xl sm:text-4xl font-black text-white tracking-tight uppercase">
              SMALL CAT.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-200 to-amber-500">
                BIG DREAMS.
              </span>
            </h3>
            <div className="text-xl font-mono font-black text-amber-400">
              $HCAT
            </div>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed pt-2">
              The journey has only just begun. Join the world's most resilient cat pride on Telegram and X today.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

