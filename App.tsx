import React, { useEffect, useState } from 'react';
import Hero from './components/Hero';
import RealityCheck from './components/RealityCheck';
import CoverageExplorer from './components/CoverageExplorer';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white selection:bg-tesla-red selection:text-white">
      {/* Dynamic Navigation */}
      <nav 
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'
        }`}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          <div className="font-display font-bold text-xl tracking-tight flex items-center gap-2 text-tesla-charcoal cursor-pointer">
             <div className="w-2.5 h-2.5 bg-tesla-red rounded-full"></div>
             WARRANTY<span className="font-light">PLUS</span>
          </div>
          
          <div className="flex items-center gap-6">
              <a href="#" className="hidden md:block text-sm font-medium text-tesla-charcoal/70 hover:text-tesla-charcoal transition-colors">How it works</a>
              <a href="#" className="hidden md:block text-sm font-medium text-tesla-charcoal/70 hover:text-tesla-charcoal transition-colors">Coverage</a>
              <button className={`text-sm font-bold px-5 py-2.5 rounded-full transition-all ${scrolled ? 'bg-tesla-charcoal text-white hover:bg-black' : 'bg-white text-tesla-charcoal shadow-sm hover:shadow-md'}`}>
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
        <FAQ />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;