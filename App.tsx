import React, { useState, useEffect } from 'react';
import Hero from './components/Hero';
import Story from './components/Story';
import Method from './components/Method';
import Offer from './components/Offer';
import Mentors from './components/Mentors';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [showStickyCTA, setShowStickyCTA] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky CTA after scrolling past the Hero section (approx 600px)
      if (window.scrollY > 600) {
        setShowStickyCTA(true);
      } else {
        setShowStickyCTA(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans">
      <Hero />
      <Story />
      <Method />
      <Offer />
      <Mentors />
      <FAQ />
      <Footer />

      {/* Mobile Sticky CTA */}
      <div 
        className={`fixed bottom-0 left-0 w-full p-4 bg-slate-900/90 backdrop-blur border-t border-gold-500/20 z-50 transition-transform duration-300 md:hidden ${
          showStickyCTA ? 'translate-y-0' : 'translate-y-full'
        }`}
      >
        <a 
          href="https://links.viverdeblog.com/workshop-viver-de-news-17-01-2026"
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full text-center bg-gold-500 text-black font-bold py-3 rounded-lg shadow-lg active:scale-95 transition-transform"
        >
          QUERO MINERAR OURO (R$ 47)
        </a>
      </div>
    </div>
  );
};

export default App;
