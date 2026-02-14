import React from 'react';
import { ShieldCheck, ChevronRight, Star } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative w-full pt-32 pb-20 lg:pt-40 lg:pb-0 overflow-hidden bg-white">
      {/* Background Gradient Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-gray-50 rounded-full blur-3xl opacity-60"></div>
        <div className="absolute top-[20%] left-[-10%] w-[400px] h-[400px] bg-red-50 rounded-full blur-3xl opacity-40"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="text-center max-w-4xl mx-auto space-y-6 fade-in-up">
          
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gray-50 border border-gray-100 shadow-sm text-xs font-bold tracking-wider uppercase text-tesla-charcoal mb-4">
            <span className="w-2 h-2 rounded-full bg-tesla-red animate-pulse"></span>
            Tesla-Specific Protection
          </div>

          <h1 className="text-5xl lg:text-7xl font-display font-extrabold leading-tight tracking-tight text-tesla-charcoal">
            Protect your Tesla for <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-tesla-red to-red-600">
              just over £1 per day
            </span>
          </h1>

          <p className="text-xl text-gray-500 font-medium leading-relaxed max-w-2xl mx-auto">
             Clear. Honest. Built for real-world ownership. <br className="hidden md:block"/>
             Covering the labour and tech risks that matter most.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8 pb-12">
            <button className="bg-tesla-red hover:bg-red-700 text-white px-10 py-4 rounded-full font-bold text-lg transition-all transform hover:-translate-y-1 shadow-glow flex items-center justify-center gap-2">
              Get Instant Cover
              <ChevronRight size={20} strokeWidth={3} />
            </button>
            <button className="bg-white border border-gray-200 hover:border-tesla-charcoal text-tesla-charcoal px-10 py-4 rounded-full font-bold text-lg transition-all hover:bg-gray-50 flex items-center justify-center">
              View Coverage
            </button>
          </div>
        </div>

        {/* Car Image Container */}
        <div className="relative mt-8 lg:-mb-24 fade-in-up delay-200">
             {/* The Car Image - Using a high quality red Tesla Model S style image */}
             <img 
               src="https://images.unsplash.com/photo-1560958089-b8a1929cea89?ixlib=rb-4.0.3&auto=format&fit=crop&w=2400&q=90" 
               alt="Red Tesla Model S" 
               className="w-full max-w-6xl mx-auto drop-shadow-2xl transform hover:scale-[1.01] transition-transform duration-1000 ease-out"
             />
             
             {/* Floating Badge - Left */}
             <div className="hidden md:flex absolute top-10 left-4 lg:left-10 bg-white/90 backdrop-blur-md p-4 pr-6 rounded-2xl shadow-tesla border border-white/50 items-center gap-4 fade-in-up delay-300">
                <div className="bg-green-100 p-3 rounded-full text-green-600">
                   <ShieldCheck size={24} />
                </div>
                <div>
                   <p className="font-bold text-tesla-charcoal text-sm">Official Standards</p>
                   <p className="text-xs text-gray-500">Repairs at any UK Tesla Main Dealer</p>
                </div>
             </div>

             {/* Floating Badge - Right (Ratings) */}
             <div className="hidden md:flex absolute top-20 right-4 lg:right-10 bg-white/90 backdrop-blur-md p-4 px-6 rounded-2xl shadow-tesla border border-white/50 items-center gap-3 fade-in-up delay-300">
                <div className="text-center">
                   <p className="font-bold text-tesla-charcoal text-2xl leading-none">4.9</p>
                   <div className="flex text-yellow-400 text-xs mt-1">
                      <Star size={12} fill="currentColor" />
                      <Star size={12} fill="currentColor" />
                      <Star size={12} fill="currentColor" />
                      <Star size={12} fill="currentColor" />
                      <Star size={12} fill="currentColor" />
                   </div>
                </div>
                <div className="h-8 w-px bg-gray-200"></div>
                <p className="text-xs text-gray-500 font-medium max-w-[80px]">Top Rated Coverage</p>
             </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;