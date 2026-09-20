import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TickerMarquee } from './components/TickerMarquee';
import { AboutSection } from './components/AboutSection';
import { MemeGallerySection } from './components/MemeGallerySection';
import { EcosystemSection } from './components/EcosystemSection';
import { WhySection } from './components/WhySection';
import { ContractSection } from './components/ContractSection';
import { DexScreenerTracker } from './components/DexScreenerTracker';
import { TokenomicsSection } from './components/TokenomicsSection';
import { RoadmapSection } from './components/RoadmapSection';
import { CommunitySection } from './components/CommunitySection';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';

export default function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const currentScroll = window.scrollY;
      if (totalScroll > 0) {
        setScrollProgress((currentScroll / totalScroll) * 100);
      }
      if (currentScroll > 500) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-black text-slate-100 font-sans selection:bg-amber-500 selection:text-black antialiased overflow-x-hidden relative">
      {/* Scroll Progress Bar at the Very Top */}
      <div className="fixed top-0 left-0 right-0 z-50 h-[3px] bg-transparent pointer-events-none">
        <div
          className="h-full bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-300 shadow-[0_0_12px_rgba(245,158,11,0.8)] transition-all duration-100"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Sticky Navbar */}
      <Navbar />

      {/* Main Content Sections */}
      <main>
        <Hero />
        <TickerMarquee />
        <AboutSection />
        <MemeGallerySection />
        <EcosystemSection />
        <WhySection />
        <ContractSection />
        <DexScreenerTracker />
        <TokenomicsSection />
        <RoadmapSection />
        <CommunitySection />
        <FinalCTA />
      </main>

      {/* Footer */}
      <Footer />

      {/* Back to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-40 w-12 h-12 rounded-full bg-black/80 backdrop-blur-md border-2 border-amber-500/80 hover:border-amber-400 text-amber-400 hover:text-white flex items-center justify-center shadow-[0_0_25px_rgba(245,158,11,0.5)] transition-all duration-300 hover:scale-110 active:scale-95 focus:outline-none"
          aria-label="Back to top"
        >
          <svg className="w-5 h-5 font-black" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
          </svg>
        </button>
      )}
    </div>
  );
}


