import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Sparkles, Image, Award, CheckCircle2, ExternalLink } from 'lucide-react';
import portrait from '../assets/nandha-portrait.png';

export const Hero: React.FC = () => {
  const stats = [
    { label: 'Design Experience', value: '3+', icon: Image, color: 'from-indigo-500 to-purple-500' },
    { label: 'Creative Focus', value: '4', icon: Award, color: 'from-purple-500 to-pink-500' },
    { label: 'Years Experience', value: '3+', icon: Sparkles, color: 'from-cyan-500 to-blue-500' },
    { label: 'Satisfaction Rate', value: '100%', icon: CheckCircle2, color: 'from-emerald-500 to-teal-500' },
  ];

  const tags = [
    'Graphic Design',
    'UI/UX Design',
    'Branding & Visual Communication',
    'Social Media Creatives',
  ];

  return (
    <section className="relative pt-36 pb-20 md:pt-44 md:pb-28 overflow-hidden bg-grid-pattern">
      <div className="portfolio-container relative z-10">
        <div className="hero-content max-w-4xl mx-auto text-center space-y-8">
          
          {/* Top Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/25 text-indigo-300 text-sm font-semibold shadow-lg shadow-indigo-500/10"
          >
            <span className="flex h-2 w-2 rounded-full bg-indigo-400 animate-ping"></span>
            <Sparkles size={16} className="text-indigo-400" />
            Graphic Designer · UI/UX Designer · Branding Specialist
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1]"
          >
            I’m Nandha, a{' '}
            <span className="text-gradient-vibrant block sm:inline">
              Graphic Designer
            </span>{' '}
            & Visual Storyteller.
          </motion.h1>

          {/* Bio Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto font-normal leading-relaxed"
          >
            Hi, I’m <strong className="text-white font-semibold">Nandha Kumar B</strong>. I’m a graphic designer with <span className="text-indigo-300 font-semibold">3+ years of hands-on experience</span> in branding and marketing design, creating engaging concepts that strengthen identity and storytelling.
          </motion.p>

          {/* Skill Tags */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-2 pt-2"
          >
            {tags.map((tag, idx) => (
              <span
                key={idx}
                className="badge-tag hover:border-indigo-400 hover:text-white transition-all cursor-default"
              >
                #{tag}
              </span>
            ))}
          </motion.div>

          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap items-center justify-center gap-4 pt-4"
          >
            <a href="#works" className="btn-primary py-3.5 px-8 text-base">
              Explore My Works<ArrowDown size={18} />
            </a>
            <a href="#contact" className="btn-secondary py-3.5 px-8 text-base">
              Let’s Connect
              <ExternalLink size={18} className="text-gray-400" />
            </a>
          </motion.div>

          {/* Stats Bar */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="pt-12 grid grid-cols-2 md:grid-cols-4 gap-4"
          >
            {stats.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <div
                  key={idx}
                  className="glass-panel p-5 rounded-2xl text-center group hover:border-indigo-500/40 transition-all"
                >
                  <div className="w-10 h-10 mx-auto mb-3 rounded-xl bg-gradient-to-tr from-white/5 to-white/10 flex items-center justify-center border border-white/10 group-hover:scale-110 transition-transform">
                    <Icon size={20} className="text-indigo-400" />
                  </div>
                  <div className={`font-heading text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r ${stat.color}`}>
                    {stat.value}
                  </div>
                  <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider mt-1">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </motion.div>

        </div>
        <motion.figure
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="hero-portrait"
        >
          <img src={portrait} alt="Nandha Kumar B" />
        </motion.figure>
      </div>
    </section>
  );
};
