import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { FAQS } from '../constants';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 max-w-2xl">
        <h2 className="text-2xl font-display font-bold text-center mb-12 text-tesla-charcoal">
            Frequently Asked Questions
        </h2>
        
        <div className="space-y-2">
          {FAQS.map((faq, idx) => (
            <div key={idx} className="border-b border-gray-100 last:border-0">
              <button 
                className="w-full flex justify-between items-start py-6 text-left focus:outline-none group"
                onClick={() => toggleFaq(idx)}
              >
                <span className={`text-base font-bold pr-8 transition-colors ${openIndex === idx ? 'text-tesla-red' : 'text-tesla-charcoal group-hover:text-gray-600'}`}>
                  {faq.question}
                </span>
                <span className={`mt-1 transition-transform duration-300 ${openIndex === idx ? 'rotate-180 text-tesla-red' : 'text-gray-300'}`}>
                    {openIndex === idx ? <Minus size={20} /> : <Plus size={20} />}
                </span>
              </button>
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === idx ? 'max-h-48 opacity-100 pb-6' : 'max-h-0 opacity-0'
                }`}
              >
                <p className="text-gray-500 text-sm leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;