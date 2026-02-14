import React, { useState } from 'react';
import { Plus, Minus, Check, Zap } from 'lucide-react';
import { COVERAGE_DATA } from '../constants';
import { CoveredItem } from '../types';

const CoverageExplorer: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  return (
    <section className="py-24 lg:py-32 bg-tesla-gray">
      <div className="container mx-auto px-6 lg:px-12">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">What's Covered?</h2>
            <p className="text-lg text-gray-600">
                Comprehensive protection for the <span className="font-semibold text-tesla-charcoal">Non-Battery</span> components that actually fail.
            </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
            {/* Left Column: Highlights Grid */}
            <div className="lg:col-span-5 order-2 lg:order-1">
                <div className="bg-white p-8 rounded-3xl shadow-tesla border border-gray-100 h-full relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-8 opacity-5">
                        <Zap size={120} />
                    </div>
                    
                    <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                        <span className="w-1 h-6 bg-tesla-red rounded-full"></span>
                        Cover Highlights
                    </h3>
                    
                    <ul className="space-y-6">
                        {[
                            { title: 'Any UK Tesla Main Dealer', desc: 'We don\'t force you to use 3rd party garages.' },
                            { title: 'Suspension to 80k Miles', desc: 'Huge USP. We cover wear & tear on bushes & arms.', highlight: true },
                            { title: 'Tech & Media Unit', desc: 'Screens, MCUs and Autopilot computers covered.' },
                            { title: 'Fast Claims Payout', desc: 'We pay the dealer directly in most cases.' },
                        ].map((feat, i) => (
                            <li key={i} className="flex gap-4">
                                <div className={`shrink-0 w-6 h-6 rounded-full flex items-center justify-center mt-0.5 ${feat.highlight ? 'bg-tesla-red text-white' : 'bg-gray-100 text-gray-600'}`}>
                                    <Check size={14} strokeWidth={3} />
                                </div>
                                <div>
                                    <p className={`font-bold ${feat.highlight ? 'text-tesla-red' : 'text-tesla-charcoal'}`}>{feat.title}</p>
                                    <p className="text-sm text-gray-500 mt-1 leading-relaxed">{feat.desc}</p>
                                </div>
                            </li>
                        ))}
                    </ul>

                    <div className="mt-10 bg-gray-50 rounded-xl p-4 text-center">
                        <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Labour Rate Cap</p>
                        <p className="text-3xl font-bold text-tesla-charcoal mt-1">£150<span className="text-sm font-medium text-gray-400">/hr</span></p>
                    </div>
                </div>
            </div>

            {/* Right Column: Interactive Accordion */}
            <div className="lg:col-span-7 order-1 lg:order-2 space-y-4">
                 {COVERAGE_DATA.map((item, idx) => (
                    <AccordionItem 
                        key={idx} 
                        item={item} 
                        isOpen={activeIndex === idx} 
                        onClick={() => setActiveIndex(activeIndex === idx ? -1 : idx)} 
                    />
                 ))}
            </div>
        </div>
      </div>
    </section>
  );
};

const AccordionItem: React.FC<{ item: CoveredItem; isOpen: boolean; onClick: () => void }> = ({ item, isOpen, onClick }) => {
  const Icon = item.icon;

  return (
    <div 
      className={`group border rounded-2xl transition-all duration-300 overflow-hidden ${
        isOpen ? 'border-tesla-red/20 bg-white shadow-lg ring-1 ring-tesla-red/10' : 'border-white bg-white shadow-sm hover:border-gray-200'
      }`}
    >
      <button 
        onClick={onClick}
        className="w-full flex items-center justify-between p-6 lg:p-7 text-left focus:outline-none"
      >
        <div className="flex items-center gap-6">
          <div className={`p-3.5 rounded-xl transition-all duration-300 ${isOpen ? 'bg-tesla-red text-white rotate-3 shadow-lg' : 'bg-gray-50 text-gray-400 group-hover:bg-gray-100'}`}>
            <Icon size={24} strokeWidth={isOpen ? 2.5 : 2} />
          </div>
          <div>
            <h3 className={`text-lg font-bold font-display ${isOpen ? 'text-tesla-charcoal' : 'text-gray-700'}`}>{item.category}</h3>
            <p className={`text-sm mt-1 transition-colors ${isOpen ? 'text-gray-500' : 'text-gray-400'}`}>{isOpen ? 'Includes parts & labour' : item.description}</p>
          </div>
        </div>
        <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${isOpen ? 'bg-tesla-red text-white rotate-180' : 'bg-gray-50 text-gray-400'}`}>
          {isOpen ? <Minus size={16} /> : <Plus size={16} />}
        </div>
      </button>

      <div 
        className={`transition-[max-height,opacity] duration-300 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-7 pb-8 pt-0 pl-[5.5rem]">
            <div className="grid md:grid-cols-2 gap-8 border-t border-gray-100 pt-6">
                <div>
                    <ul className="space-y-3">
                        {item.items.map((subItem, i) => (
                            <li key={i} className="flex items-start gap-2.5 text-sm text-gray-600">
                                <div className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2 shrink-0"></div>
                                {subItem}
                            </li>
                        ))}
                    </ul>
                </div>
                <div>
                     <div className="bg-gray-50 rounded-lg p-4 border border-gray-100">
                         <p className="text-[10px] uppercase tracking-bold text-gray-400 font-bold mb-1">Typical Repair Cost</p>
                         <p className="text-xl font-bold text-tesla-red">{item.repairCostRange}</p>
                     </div>
                     {item.usp && (
                        <p className="text-xs text-orange-600 font-bold mt-3 flex items-center gap-1">
                            ★ {item.usp}
                        </p>
                    )}
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default CoverageExplorer;