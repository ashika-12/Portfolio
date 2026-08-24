import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Images, BookOpen, Building2, ShoppingBag, ArrowUpRight } from 'lucide-react';

export const Services: React.FC = () => {
  const serviceList = [
    {
      icon: Images,
      title: 'Social Media & Carousel Ads',
      desc: 'High-converting multi-slide carousels, festival posts, and performance ads designed for Instagram, Facebook, and LinkedIn.',
      tags: ['Instagram Carousels', 'Ad Creatives', 'Festive Creatives'],
      color: 'from-indigo-500 to-purple-500',
    },
    {
      icon: BookOpen,
      title: 'Brand Identity & Style Guides',
      desc: 'Complete logo design systems, brand guidelines, color palettes, typography specs, and PDF brand manuals.',
      tags: ['Logo Design', 'Brand Guidelines', 'Typography System'],
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: Building2,
      title: 'Real Estate & B2B Campaigns',
      desc: 'Luxury architectural launches, property brochures, corporate statics, and enterprise solutions branding.',
      tags: ['Property Launches', 'Brochures', 'B2B Statics'],
      color: 'from-emerald-500 to-teal-500',
    },
    {
      icon: ShoppingBag,
      title: 'FMCG & F&B Marketing',
      desc: 'Vibrant food & beverage social campaigns, packaging guidelines, distributor onboarding carousels.',
      tags: ['F&B Creatives', 'Packaging Guidelines', 'Retail Graphics'],
      color: 'from-amber-500 to-orange-500',
    },
  ];

  return (
    <section id="services" className="py-24 relative bg-[#07090e]">
      <div className="portfolio-container">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-semibold uppercase tracking-wider">
            <Sparkles size={14} className="text-indigo-400" />
            Core Expertise & Services
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-white">
            Comprehensive <span className="text-gradient-vibrant">Design & Motion</span> Solutions
          </h2>
          <p className="text-gray-400 text-base">
            Tailored creative services designed to elevate your brand presence and drive engagement.
          </p>
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {serviceList.map((srv, idx) => {
            const Icon = srv.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="glass-panel glass-panel-hover p-8 rounded-3xl flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-tr ${srv.color} p-[1px] shadow-lg group-hover:scale-110 transition-transform`}>
                    <div className="w-full h-full bg-[#0b0f19] rounded-[15px] flex items-center justify-center text-white">
                      <Icon size={26} />
                    </div>
                  </div>

                  <h3 className="font-heading font-bold text-xl text-white group-hover:text-indigo-300 transition-colors">
                    {srv.title}
                  </h3>

                  <p className="text-sm text-gray-300 leading-relaxed">
                    {srv.desc}
                  </p>
                </div>

                <div className="pt-6 border-t border-white/10 mt-6 space-y-3">
                  <div className="flex flex-wrap gap-1.5">
                    {srv.tags.map((t, i) => (
                      <span key={i} className="text-[11px] font-semibold text-indigo-300/80 bg-indigo-500/10 px-2.5 py-0.5 rounded-full border border-indigo-500/20">
                        #{t}
                      </span>
                    ))}
                  </div>

                  <a href="#contact" className="inline-flex items-center gap-1.5 text-xs font-bold text-indigo-400 hover:text-white transition-colors group-hover:translate-x-1 duration-200">
                    View capability <ArrowUpRight size={14} />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
