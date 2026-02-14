import React from 'react';
import { ShieldCheck, ChevronRight, AlertCircle, CheckCircle2 } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative w-full min-h-[90vh] flex items-center pt-24 pb-12 bg-white overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left: Text Content */}
          <div className="order-2 lg:order-1 space-y-8 fade-in-up">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-gray-50 border border-gray-100 rounded-full">
              <span className="w-2 h-2 rounded-full bg-tesla-red animate-pulse"></span>
              <span className="text-xs font-bold tracking-widest text-tesla-charcoal uppercase">Tesla-Grade Protection</span>
            </div>

            <h1 className="text-5xl lg:text-6xl font-display font-bold leading-tight tracking-tight text-tesla-charcoal">
              Fully protect your Tesla for just over <span className="text-tesla-red">£1 per day</span>.
            </h1>
            
            <p className="text-xl text-gray-500 font-medium leading-relaxed max-w-lg">
              Clear. Honest. Built for real-world Tesla ownership. Covering the labour and tech risks that actually matter.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="bg-tesla-red hover:bg-red-700 text-white px-8 py-4 rounded-full font-bold text-lg transition-all shadow-lg hover:shadow-tesla-red/30 flex items-center justify-center gap-2">
                Get Protected
                <ChevronRight size={20} />
              </button>
              <button className="bg-white border-2 border-gray-100 hover:border-tesla-charcoal text-tesla-charcoal px-8 py-4 rounded-full font-bold text-lg transition-all flex items-center justify-center">
                View Coverage
              </button>
            </div>

            <div className="pt-8 border-t border-gray-100">
               <div className="flex items-center gap-2 text-sm font-medium text-gray-400 mb-2">
                 <ShieldCheck size={16} className="text-tesla-red" />
                 <span>Official Standards</span>
               </div>
               <p className="text-sm text-gray-600">
                 Repairs authorized at any UK Tesla Main Dealer.
               </p>
            </div>
          </div>

          {/* Right: Visual & Widget */}
          <div className="order-1 lg:order-2 relative fade-in-up delay-200">
            {/* Cinematic Car Image */}
            <div className="relative z-10">
                <img 
                  src="https://images.unsplash.com/photo-1617788138017-80ad40651399?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=90" 
                  alt="Tesla Side Profile" 
                  className="w-full h-auto object-cover rounded-2xl shadow-2xl"
                />
            </div>

            {/* Floating Warranty Status Widget */}
            <div className="absolute -bottom-6 -left-6 lg:bottom-10 lg:-left-12 z-20 bg-white/95 backdrop-blur-xl border border-gray-200 p-6 rounded-2xl shadow-tesla max-w-xs w-full">
               <div className="flex justify-between items-center mb-4 border-b border-gray-100 pb-3">
                  <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Warranty Status</span>
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
               </div>
               
               <div className="space-y-4">
                  <div className="flex items-start gap-3 opacity-50">
                     <AlertCircle size={20} className="text-gray-400 shrink-0 mt-0.5" />
                     <div>
                        <p className="text-sm font-bold text-gray-500">Factory Cover</p>
                        <p className="text-xs text-gray-400">Ends 4 yrs / 50k miles</p>
                     </div>
                  </div>
                  <div className="flex items-start gap-3">
                     <CheckCircle2 size={20} className="text-tesla-red shrink-0 mt-0.5" />
                     <div>
                        <p className="text-sm font-bold text-tesla-charcoal">Extended Cover</p>
                        <p className="text-xs text-green-600 font-medium">Active Protection</p>
                     </div>
                  </div>
               </div>
            </div>

            {/* Decorative Background Blob */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-radial from-gray-100 to-transparent opacity-50 -z-10 pointer-events-none"></div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;