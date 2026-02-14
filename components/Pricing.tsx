import React, { useState } from 'react';
import { Check } from 'lucide-react';

const Pricing: React.FC = () => {
  const [isMonthly, setIsMonthly] = useState(false);

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 text-center">
        
        <h2 className="text-3xl md:text-5xl font-display font-bold mb-8 text-tesla-charcoal">
          Simple Pricing. <br/>
          <span className="text-gray-300">No Hidden Fees.</span>
        </h2>

        {/* Custom Toggle */}
        <div className="flex justify-center items-center gap-6 mb-16">
            <button 
                onClick={() => setIsMonthly(false)}
                className={`text-sm font-bold tracking-wide transition-colors ${!isMonthly ? 'text-tesla-red' : 'text-gray-400'}`}
            >
                ANNUAL
            </button>
            
            <button 
                onClick={() => setIsMonthly(!isMonthly)}
                className="w-16 h-8 bg-gray-100 rounded-full relative shadow-inner transition-colors duration-300 focus:outline-none"
            >
                <div className={`absolute top-1 left-1 w-6 h-6 bg-tesla-red rounded-full shadow-md transform transition-transform duration-300 ${isMonthly ? 'translate-x-8' : 'translate-x-0'}`}></div>
            </button>

            <button 
                onClick={() => setIsMonthly(true)}
                className={`text-sm font-bold tracking-wide transition-colors ${isMonthly ? 'text-tesla-red' : 'text-gray-400'}`}
            >
                MONTHLY
            </button>
        </div>

        {/* Premium Dark Card */}
        <div className="max-w-lg mx-auto bg-tesla-dark rounded-[2.5rem] shadow-2xl overflow-hidden relative group">
          {/* Subtle glow effect on hover */}
          <div className="absolute -inset-0.5 bg-gradient-to-br from-tesla-red to-blue-600 opacity-20 group-hover:opacity-40 transition-opacity duration-500 blur-lg"></div>
          
          <div className="relative bg-tesla-dark h-full flex flex-col p-10 lg:p-12 text-white">
              <div className="text-center mb-8">
                  <span className="inline-block py-1 px-3 rounded-full bg-white/10 text-xs font-bold tracking-widest text-white/80 mb-6 border border-white/5">
                      ALL-INCLUSIVE
                  </span>
                  <div className="flex items-end justify-center gap-1">
                      <span className="text-6xl lg:text-7xl font-display font-bold tracking-tighter">
                          {isMonthly ? '£45' : '£450'}
                      </span>
                      <span className="text-xl text-gray-500 font-medium mb-2">
                          /{isMonthly ? 'mo' : 'yr'}
                      </span>
                  </div>
                  <p className="text-sm text-gray-400 mt-4 h-6">
                      {isMonthly ? 'Spread over 10 interest-free payments' : 'Equivalent to just ~£1.20 per day'}
                  </p>
              </div>

              <div className="space-y-4 mb-10 flex-grow">
                   {[
                      'Repairs at any UK Tesla Main Dealer',
                      'Suspension Wear & Tear (up to 80k)',
                      'MCU & Touchscreen Coverage',
                      'Full Diagnosis & Labour Covered',
                      'Claim Limit = Vehicle Value'
                   ].map((feat, i) => (
                       <div key={i} className="flex items-center gap-4 text-left">
                           <div className="w-6 h-6 rounded-full bg-tesla-red flex items-center justify-center shrink-0">
                               <Check size={14} strokeWidth={3} className="text-white" />
                           </div>
                           <span className="text-gray-200 font-medium">{feat}</span>
                       </div>
                   ))}
              </div>

              <button className="w-full bg-white text-tesla-dark hover:bg-gray-100 font-bold text-lg py-5 rounded-2xl transition-all transform hover:scale-[1.02] shadow-lg">
                  {isMonthly ? 'Start Monthly Plan' : 'Secure Annual Cover'}
              </button>
              
              <p className="text-[10px] text-gray-600 mt-6 uppercase tracking-widest">
                  30-Day Money Back Guarantee
              </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;