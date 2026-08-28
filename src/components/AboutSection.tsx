import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, CheckCircle2, PenTool } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const tools = [
    { name: 'Adobe Photoshop', category: 'Graphic Design & Campaigns', level: '95%', icon: '🎨' },
    { name: 'Adobe Illustrator', category: 'Logo Design & Branding', level: '90%', icon: '✏️' },
    { name: 'Figma', category: 'UI/UX Design', level: '90%', icon: '❖' },
    { name: 'Canva', category: 'Social Media Creatives', level: '95%', icon: '🚀' },
  ];

  const highlights = [
    '3+ years of hands-on experience in branding and marketing design',
    'Digital marketing creatives, campaign visuals, and promotional videos for corporate clients',
    'Print, magazine, advertisement, banner, and technology-focused digital design',
    '3D product visualization, texturing, lighting, and brand presentation support',
    'Brand consistency across print, digital, and corporate communication assets',
    'Design expertise across UI/UX, branding, presentations, and social media',
  ];

  return (
    <section id="about" className="py-24 relative bg-white/[0.01] border-t border-white/5">
      <div className="portfolio-container">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Bio & Experience Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-semibold uppercase tracking-wider">
              <Sparkles size={14} className="text-indigo-400" />
              About Nandha Kumar B
            </div>

            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-white">
              Building <span className="text-gradient-vibrant">brand stories</span> through design, motion & clarity
            </h2>

            <p className="text-gray-300 text-base leading-relaxed">
              I am a passionate <strong className="text-white">Graphic Designer, UI/UX Designer, and Branding & Visual Communication Specialist</strong> with 3+ years of experience. I create visually engaging concepts that build stronger brand identity and clear storytelling.
            </p>

            <p className="text-gray-400 text-sm leading-relaxed">
              My work spans product campaigns and digital marketing assets, blending design, motion, and creativity to deliver compelling results across print and digital platforms.
            </p>

            {/* Highlights List */}
            <div className="space-y-3 pt-2">
              {highlights.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-indigo-400 flex-shrink-0 mt-1" />
                  <span className="text-sm font-medium text-gray-200">{item}</span>
                </div>
              ))}
            </div>

          </motion.div>

          {/* Right Column: Software Tools Arsenal */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6"
          >
            <div className="glass-panel p-8 rounded-3xl space-y-6">
              
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <div>
                  <h3 className="font-heading font-bold text-xl text-white">
                    Design Tools & Mastery
                  </h3>
                  <p className="text-xs text-indigo-400 font-semibold mt-0.5">
                    Industry standard creative software arsenal
                  </p>
                </div>
                <div className="w-10 h-10 rounded-xl bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
                  <PenTool size={20} />
                </div>
              </div>

              {/* Tools List */}
              <div className="space-y-4">
                {tools.map((tool, idx) => (
                  <div key={idx} className="space-y-1.5">
                    <div className="flex items-center justify-between text-sm">
                      <span className="font-bold text-white flex items-center gap-2">
                        <span className="text-base">{tool.icon}</span>
                        {tool.name}
                      </span>
                      <span className="text-xs font-semibold text-indigo-300">
                        {tool.level}
                      </span>
                    </div>
                    
                    {/* Progress Bar */}
                    <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden p-[1px] border border-white/5">
                      <div
                        className="h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-400 rounded-full transition-all duration-1000"
                        style={{ width: tool.level }}
                      ></div>
                    </div>
                    
                    <span className="text-[11px] text-gray-400 font-medium">
                      {tool.category}
                    </span>
                  </div>
                ))}
              </div>

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
