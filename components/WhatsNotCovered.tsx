import React from 'react';
import { XCircle } from 'lucide-react';
import { EXCLUSIONS } from '../constants';

const WhatsNotCovered: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="bg-gray-50 rounded-3xl p-8 lg:p-12 border border-gray-100">
            <div className="grid lg:grid-cols-12 gap-12">
                
                <div className="lg:col-span-4">
                    <h2 className="text-2xl font-display font-bold text-tesla-charcoal mb-4">What's Not Covered</h2>
                    <p className="text-gray-500 mb-6">
                        To keep the policy fair, transparent, and affordable, we exclude items that are already covered by Tesla or considered consumables.
                    </p>
                    <div className="text-xs font-medium text-gray-400 bg-white p-4 rounded-xl border border-gray-100">
                        Note: The battery and drive unit are already covered under Tesla’s original warranty for significantly longer (8 Years) than most other components.
                    </div>
                </div>

                <div className="lg:col-span-8">
                    <div className="grid md:grid-cols-2 gap-x-8 gap-y-4">
                        {EXCLUSIONS.map((item, idx) => (
                            <div key={idx} className="flex items-start gap-3 group">
                                <XCircle size={20} className="text-gray-300 group-hover:text-red-400 transition-colors shrink-0 mt-0.5" />
                                <div>
                                    <p className="font-bold text-gray-700 text-sm">{item.item}</p>
                                    <p className="text-xs text-gray-400">{item.reason}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
      </div>
    </section>
  );
};

export default WhatsNotCovered;