import React, { useEffect, useState } from 'react';
import Hero from './components/Hero';
import RealityCheck from './components/RealityCheck';
import CoverageExplorer from './components/CoverageExplorer';
import WhatsNotCovered from './components/WhatsNotCovered';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white selection:bg-tesla-red selection:text-white font-sans">
      {/* Dynamic Navigation */}
      <nav 
        className={`fixed w-full z-50 transition-all duration-300 border-b ${
          scrolled ? 'bg-white/95 backdrop-blur-md py-3 border-gray-100' : 'bg-transparent py-6 border-transparent'
        }`}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          <div className="font-display font-bold text-lg tracking-tight flex items-center gap-2 text-tesla-charcoal cursor-pointer">
             <div className="w-2 h-2 bg-tesla-red rounded-full"></div>
             WARRANTY<span className="font-normal">PLUS</span>
          </div>
          
          <div className="flex items-center gap-4">
              <button className={`text-xs font-bold px-6 py-3 rounded-full transition-all tracking-wide uppercase ${scrolled ? 'bg-tesla-charcoal text-white hover:bg-black' : 'bg-white text-tesla-charcoal shadow-lg border border-gray-100 hover:border-gray-300'}`}>
                Get Quote
              </button>
          </div>
        </div>
      </nav>

      <main>
        <Hero />
        <RealityCheck />
        <CoverageExplorer />
        <Pricing />
        <WhatsNotCovered />
        <FAQ />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;