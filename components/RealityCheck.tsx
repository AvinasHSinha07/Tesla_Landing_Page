import React from 'react';
import { Wrench, PiggyBank, AlertTriangle, ArrowRight } from 'lucide-react';
import { REPAIR_COSTS } from '../constants';

const RealityCheck: React.FC = () => {
  return (
    <section className="py-24 lg:py-32 bg-tesla-dark text-white relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-900/10 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-red-900/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div className="space-y-6">
                <h2 className="text-4xl lg:text-5xl font-display font-bold leading-tight">
                    The <span className="text-tesla-red">Reality Check</span>.
                </h2>
                <p className="text-gray-400 text-lg font-light leading-relaxed max-w-lg">
                    When the factory warranty ends, the risks shift. It's not usually the battery that costs you money—it's the labour-heavy components and tech.
                </p>
                <div className="flex items-center gap-4 text-sm font-medium text-gray-500 pt-4">
                    <div className="w-12 h-px bg-gray-700"></div>
                    <span>COMPARISON</span>
                </div>
            </div>
            
            {/* The Main Comparison Card */}
            <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8 lg:p-10 relative overflow-hidden group hover:border-white/20 transition-all">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-tesla-red to-transparent"></div>
                
                <div className="grid md:grid-cols-2 gap-8 relative">
                    {/* Left Side: The Problem */}
                    <div className="space-y-2">
                        <div className="flex items-center gap-2 text-red-400 mb-2">
                            <Wrench size={18} />
                            <span className="text-xs font-bold uppercase tracking-wider">The Risk</span>
                        </div>
                        <p className="text-4xl font-display font-bold text-white">£150<span className="text-lg text-gray-500 font-normal">/hr</span></p>
                        <p className="text-sm text-gray-400">Typical Main Dealer Labour Rate</p>
                    </div>

                    {/* Divider */}
                    <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-px h-16 bg-white/10"></div>

                    {/* Right Side: The Solution */}
                    <div className="space-y-2">
                        <div className="flex items-center gap-2 text-green-400 mb-2">
                            <PiggyBank size={18} />
                            <span className="text-xs font-bold uppercase tracking-wider">Your Cost</span>
                        </div>
                        <p className="text-4xl font-display font-bold text-white">£1.20<span className="text-lg text-gray-500 font-normal">/day</span></p>
                        <p className="text-sm text-gray-400">Total protection for peace of mind</p>
                    </div>
                </div>

                <div className="mt-8 pt-8 border-t border-white/10 flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex items-center gap-3 text-sm text-gray-300">
                        <div className="bg-red-500/20 p-1.5 rounded text-red-400">
                             <AlertTriangle size={16} />
                        </div>
                        <span>One repair can exceed £1,000+</span>
                    </div>
                    <button className="text-white font-medium text-sm flex items-center gap-2 hover:gap-3 transition-all">
                        See cost breakdown <ArrowRight size={16} />
                    </button>
                </div>
            </div>
        </div>

        {/* Cost Examples Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            {REPAIR_COSTS.map((item, idx) => (
                <div key={idx} className="bg-white/5 border border-white/10 p-6 rounded-2xl text-center hover:bg-white/10 transition-colors duration-300">
                    <p className="text-xs text-gray-500 uppercase tracking-widest font-semibold mb-3">Typical Repair</p>
                    <p className="font-display font-semibold text-white text-lg mb-1">{item.part}</p>
                    <p className="text-2xl font-bold text-tesla-red">£{item.cost.toLocaleString()}</p>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default RealityCheck;