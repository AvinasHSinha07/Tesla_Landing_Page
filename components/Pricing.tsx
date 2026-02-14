import React, { useState } from 'react';
import { Check, Info } from 'lucide-react';

const Pricing: React.FC = () => {
  const [isMonthly, setIsMonthly] = useState(false);

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 text-center">
        
        <div className="mb-10">
            <h2 className="text-3xl font-display font-bold text-tesla-charcoal mb-6">Simple, Transparent Pricing</h2>
            
            {/* Toggle */}
            <div className="inline-flex bg-gray-100 p-1 rounded-full relative">
                <button 
                    onClick={() => setIsMonthly(false)}
                    className={`px-6 py-2 rounded-full text-sm font-bold transition-all duration-300 ${!isMonthly ? 'bg-white text-tesla-charcoal shadow-sm' : 'text-gray-500 hover:text-tesla-charcoal'}`}
                >
                    Pay Yearly
                </button>
                <button 
                    onClick={() => setIsMonthly(true)}
                    className={`px-6 py-2 rounded-full text-sm font-bold transition-all duration-300 ${isMonthly ? 'bg-white text-tesla-charcoal shadow-sm' : 'text-gray-500 hover:text-tesla-charcoal'}`}
                >
                    Pay Monthly
                </button>
            </div>
        </div>

        {/* Pricing Card - Glassmorphism hint */}
        <div className="max-w-md mx-auto relative group">
          <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white transform scale-105 rounded-[2.5rem] -z-10"></div>
          
          <div className="bg-white border border-gray-100 rounded-[2rem] shadow-2xl p-8 lg:p-10 relative overflow-hidden">
             
             {/* Header */}
             <div className="text-center mb-8 border-b border-gray-50 pb-8">
                 <div className="flex items-center justify-center gap-2 mb-2">
                     <span className="text-5xl font-display font-bold text-tesla-charcoal">
                         {isMonthly ? '£45' : '£450'}
                     </span>
                     <span className="text-lg text-gray-400 font-medium">
                         /{isMonthly ? 'mo' : 'yr'}
                     </span>
                 </div>
                 
                 {isMonthly ? (
                     <div className="inline-flex items-center gap-1.5 bg-green-50 text-green-700 px-3 py-1 rounded-full text-xs font-bold">
                         <Check size={12} /> 10 Interest-Free Payments
                     </div>
                 ) : (
                     <div className="inline-flex items-center gap-1.5 bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-bold">
                         <Check size={12} /> Best Value (~£1.20/day)
                     </div>
                 )}
             </div>

             {/* List */}
             <ul className="space-y-4 mb-8 text-left">
                 {[
                    'Repairs at Any UK Tesla Main Dealer',
                    'Suspension Wear & Tear (80k Miles)',
                    'Screen & MCU Coverage',
                    'Labour Rate Cap: £150/hr',
                    'Diagnostics Included'
                 ].map((item, i) => (
                     <li key={i} className="flex items-center gap-3 text-sm text-tesla-charcoal font-medium">
                         <div className="w-5 h-5 bg-tesla-red/10 rounded-full flex items-center justify-center shrink-0">
                             <Check size={12} className="text-tesla-red" strokeWidth={3} />
                         </div>
                         {item}
                     </li>
                 ))}
             </ul>

             <button className="w-full bg-tesla-red hover:bg-red-700 text-white font-bold py-4 rounded-xl transition-all shadow-lg hover:shadow-tesla-red/30 transform hover:-translate-y-0.5">
                 Get Protected Instantly
             </button>

             <div className="mt-4 flex justify-center items-center gap-2 text-xs text-gray-400">
                <Info size={12} />
                <span>30-day money-back guarantee</span>
             </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Pricing;