import React from 'react';
import { CLIENT_BRANDS } from '../data/portfolioData';

export const BrandMarquee: React.FC = () => {
  // Duplicate brands array to create seamless infinite marquee loop
  const marqueeBrands = [...CLIENT_BRANDS, ...CLIENT_BRANDS];

  return (
    <section className="py-8 bg-white/[0.02] border-y border-white/10 overflow-hidden relative">
      <div className="portfolio-container mb-4 text-center">
        <p className="text-xs font-bold uppercase tracking-widest text-indigo-400/80">
          Trusted By Leading Brands Across Industries
        </p>
      </div>

      <div className="relative flex overflow-x-hidden group">
        {/* Left & Right Gradient Fades */}
        <div className="absolute top-0 bottom-0 left-0 w-24 z-10 bg-gradient-to-r from-[#07090e] to-transparent pointer-events-none"></div>
        <div className="absolute top-0 bottom-0 right-0 w-24 z-10 bg-gradient-to-l from-[#07090e] to-transparent pointer-events-none"></div>

        <div className="flex gap-6 animate-marquee whitespace-nowrap py-2">
          {marqueeBrands.map((brand, idx) => (
            <div
              key={idx}
              className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/[0.04] border border-white/10 hover:border-indigo-500/40 hover:bg-white/[0.08] transition-all cursor-pointer shadow-lg"
            >
              <span className="text-xl">{brand.logo}</span>
              <span className="font-heading font-bold text-gray-200 text-sm tracking-wide">
                {brand.name}
              </span>
              <span className="text-[10px] uppercase font-semibold tracking-wider text-indigo-300/60 bg-indigo-500/10 px-2 py-0.5 rounded-md">
                {brand.category}
              </span>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 35s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};
