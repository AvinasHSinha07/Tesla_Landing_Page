import React from 'react';
import { ShieldCheck } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-100 pt-20 pb-10">
      <div className="container mx-auto px-6 text-center">
        
        <div className="flex flex-col items-center justify-center mb-12">
            <div className="w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center mb-4 text-tesla-charcoal">
                <ShieldCheck size={28} />
            </div>
            <h3 className="text-2xl font-display font-bold text-tesla-charcoal">WARRANTY<span className="font-light">PLUS</span></h3>
            <p className="text-gray-400 mt-2">Clear. Honest. Built for Tesla.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-2xl mx-auto border-t border-gray-100 pt-10">
            <a href="#" className="text-sm text-gray-500 hover:text-tesla-red transition-colors">Terms of Service</a>
            <a href="#" className="text-sm text-gray-500 hover:text-tesla-red transition-colors">Privacy Policy</a>
            <a href="#" className="text-sm text-gray-500 hover:text-tesla-red transition-colors">Contact Support</a>
        </div>

        <div className="mt-12 text-xs text-gray-300">
            <p>&copy; {new Date().getFullYear()} WarrantyPlus. All rights reserved.</p>
            <p className="mt-2">Not affiliated with, endorsed by, or connected to Tesla, Inc.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;