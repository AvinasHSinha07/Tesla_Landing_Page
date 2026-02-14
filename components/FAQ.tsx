import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { FAQS } from '../constants';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-6 max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-16 text-tesla-charcoal">
            Common Questions
        </h2>
        
        <div className="space-y-4">
          {FAQS.map((faq, idx) => (
            <div key={idx} className="bg-white rounded-2xl border border-gray-100 overflow-hidden transition-all hover:shadow-md">
              <button 
                className="w-full flex justify-between items-center p-6 text-left focus:outline-none"
                onClick={() => toggleFaq(idx)}
              >
                <span className={`text-lg font-semibold transition-colors ${openIndex === idx ? 'text-tesla-red' : 'text-tesla-charcoal'}`}>
                  {faq.question}
                </span>
                <ChevronDown 
                  size={20} 
                  className={`text-gray-400 transition-transform duration-300 ${openIndex === idx ? 'rotate-180 text-tesla-red' : ''}`} 
                />
              </button>
              <div 
                className={`transition-all duration-300 ease-in-out ${
                  openIndex === idx ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 pb-6 text-gray-600 leading-relaxed font-light border-t border-gray-50 pt-4">
                    {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;