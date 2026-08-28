import React from 'react';
import { ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 bg-[#05070a] border-t border-white/10 relative text-sm text-gray-400">
      <div className="portfolio-container flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Brand Copyright */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-indigo-600 to-cyan-400 p-[1px]">
            <div className="w-full h-full bg-[#0b0f19] rounded-[7px] flex items-center justify-center font-bold text-xs text-white">
              NK
            </div>
          </div>
          <div>
            <p className="font-heading font-bold text-white text-sm">
              Nandha Kumar B
            </p>
            <p className="text-xs text-gray-400">
              Graphic Designer · UI/UX Designer · Branding & Visual Communication
            </p>
          </div>
        </div>

        {/* Center Credits */}
        <div className="text-xs text-center text-gray-400">
          &copy; {new Date().getFullYear()} Nandha Kumar B. All Rights Reserved. Built with passion & precision.
        </div>

        {/* Back to top button */}
        <button
          onClick={scrollToTop}
          className="p-3 rounded-full bg-white/5 border border-white/10 hover:border-indigo-500/50 hover:bg-white/10 text-gray-300 hover:text-white transition-all shadow-lg flex items-center gap-2 text-xs font-semibold"
        >
          Back to Top
          <ArrowUp size={16} />
        </button>

      </div>
    </footer>
  );
};
