import React, { useState } from 'react';
import { Plus, Minus, ArrowUpRight } from 'lucide-react';
import { COVERAGE_DATA } from '../constants';
import { CoveredItem } from '../types';

const CoverageExplorer: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-tesla-charcoal mb-4">What's Covered?</h2>
                <p className="text-gray-600 max-w-xl">
                    Comprehensive protection for the components that actually fail. We focus on non-battery tech and mechanical systems.
                </p>
            </div>
            <div className="hidden md:block">
                <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Interactive Guide</span>
            </div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {COVERAGE_DATA.map((item, idx) => (
                <BentoCard key={idx} item={item} index={idx} />
            ))}
        </div>

      </div>
    </section>
  );
};

const BentoCard: React.FC<{ item: CoveredItem; index: number }> = ({ item, index }) => {
  const [isOpen, setIsOpen] = useState(false);
  const Icon = item.icon;

  // Make suspension card span 2 cols on large screens for emphasis if it's the 4th item (index 3)
  const isWide = index === 3;

  return (
    <div 
        className={`relative bg-gray-50 rounded-3xl border border-gray-100 transition-all duration-300 hover:shadow-lg hover:border-gray-200 group ${isWide ? 'lg:col-span-2' : ''}`}
    >
        <div className="p-8 h-full flex flex-col">
            <div className="flex justify-between items-start mb-6">
                <div className={`p-3 rounded-xl transition-colors ${item.usp ? 'bg-tesla-red text-white' : 'bg-white text-tesla-charcoal shadow-sm'}`}>
                    <Icon size={24} />
                </div>
                <button 
                    onClick={() => setIsOpen(!isOpen)}
                    className="p-2 rounded-full hover:bg-white transition-colors text-gray-400 hover:text-tesla-charcoal"
                >
                    {isOpen ? <Minus size={20} /> : <Plus size={20} />}
                </button>
            </div>

            <div className="mb-4">
                <h3 className="text-xl font-bold text-tesla-charcoal mb-2">{item.category}</h3>
                {item.usp && (
                     <div className="inline-block bg-yellow-400/10 text-yellow-700 text-xs font-bold px-2 py-1 rounded mb-2 border border-yellow-400/20">
                         ★ {item.usp}
                     </div>
                )}
                <p className="text-sm text-gray-500 font-medium">{item.description}</p>
            </div>

            {/* Expandable Content */}
            <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-64 opacity-100 mt-4' : 'max-h-0 opacity-0'}`}>
                <ul className="space-y-2 mb-4">
                    {item.items.map((sub, i) => (
                        <li key={i} className="text-sm text-tesla-charcoal flex items-center gap-2">
                            <div className="w-1 h-1 bg-tesla-red rounded-full"></div>
                            {sub}
                        </li>
                    ))}
                </ul>
            </div>
            
            <div className="mt-auto pt-6 border-t border-gray-200/50 flex items-center justify-between">
                <div>
                    <p className="text-[10px] uppercase font-bold text-gray-400 tracking-wider">Typical Repair</p>
                    <p className="text-sm font-bold text-tesla-charcoal">{item.repairCostRange}</p>
                </div>
                {!isOpen && (
                    <button onClick={() => setIsOpen(true)} className="text-xs font-bold text-tesla-red flex items-center gap-1 group-hover:gap-2 transition-all">
                        View Parts <ArrowUpRight size={14} />
                    </button>
                )}
            </div>
        </div>
    </div>
  );
};

export default CoverageExplorer;