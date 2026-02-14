import React from 'react';
import { Wrench, PiggyBank, Clock, AlertTriangle } from 'lucide-react';

const RealityCheck: React.FC = () => {
  return (
    <section className="py-20 bg-tesla-gray">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-4xl mx-auto">
            
            <div className="text-center mb-12">
                <h2 className="text-3xl font-display font-bold text-tesla-charcoal mb-4">The Reality of Repair Costs</h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                    When your Tesla’s non-battery factory cover ends at 4 years or 50,000 miles, the biggest risks aren’t the battery — they’re labour-heavy repairs.
                </p>
            </div>

            {/* Comparison Card */}
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
                <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-gray-100">
                    
                    {/* Left: Dealer Reality */}
                    <div className="p-8 lg:p-12 relative overflow-hidden group">
                        <div className="absolute top-0 left-0 w-1 h-full bg-gray-200 group-hover:bg-tesla-charcoal transition-colors"></div>
                        <div className="flex items-center gap-3 mb-6">
                            <div className="p-2 bg-gray-100 rounded-lg text-tesla-charcoal">
                                <Wrench size={24} />
                            </div>
                            <span className="text-sm font-bold text-gray-400 uppercase tracking-wider">The Risk</span>
                        </div>
                        
                        <div className="mb-6">
                            <span className="text-5xl font-display font-bold text-tesla-charcoal">£150</span>
                            <span className="text-xl text-gray-400 font-medium">/hr</span>
                            <p className="text-sm text-gray-500 mt-2 font-medium">Tesla Main Dealer Labour Rate</p>
                        </div>

                        <ul className="space-y-3">
                            <li className="flex items-center gap-2 text-sm text-gray-600">
                                <Clock size={16} className="text-gray-400" />
                                <span>Many repairs take 3–6+ hours</span>
                            </li>
                            <li className="flex items-center gap-2 text-sm text-gray-600">
                                <AlertTriangle size={16} className="text-red-500" />
                                <span>Single fault can exceed <span className="font-bold text-tesla-charcoal">£1,000+</span></span>
                            </li>
                        </ul>
                    </div>

                    {/* Right: Policy Solution */}
                    <div className="p-8 lg:p-12 relative overflow-hidden group bg-tesla-charcoal text-white">
                        <div className="absolute top-0 right-0 w-1 h-full bg-tesla-red"></div>
                        
                        {/* Subtle glow */}
                        <div className="absolute top-[-50%] right-[-50%] w-64 h-64 bg-tesla-red rounded-full blur-[80px] opacity-20 pointer-events-none"></div>

                        <div className="flex items-center gap-3 mb-6">
                            <div className="p-2 bg-white/10 rounded-lg text-white">
                                <PiggyBank size={24} />
                            </div>
                            <span className="text-sm font-bold text-gray-400 uppercase tracking-wider">The Solution</span>
                        </div>
                        
                        <div className="mb-6">
                            <span className="text-5xl font-display font-bold text-white">£1.20</span>
                            <span className="text-xl text-gray-400 font-medium">/day</span>
                            <p className="text-sm text-gray-300 mt-2 font-medium">Total Peace of Mind</p>
                        </div>

                        <p className="text-sm text-gray-300 leading-relaxed">
                            This cover protects you from labour-heavy repair costs, which is where Tesla ownership often gets expensive.
                        </p>
                    </div>

                </div>
            </div>

            <div className="mt-8 text-center">
                <p className="text-sm font-bold text-tesla-charcoal">
                    One medium repair can easily cost more than a full year of cover.
                </p>
            </div>

        </div>
      </div>
    </section>
  );
};

export default RealityCheck;