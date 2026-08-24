import { motion } from 'framer-motion';
import { BriefcaseBusiness, GraduationCap } from 'lucide-react';

const experience = [
  { role: 'Graphic Designer & Video Editor', company: 'SalesflowX', period: 'Aug 2024 – Aug 2026 / Present', detail: 'Design digital marketing creatives, campaign visuals, and promotional videos for corporate clients. Collaborate with marketing and product teams to deliver visuals aligned with brand tone.' },
  { role: 'Graphic Designer & Video Editor', company: 'Irrigation Products International', period: 'Feb 2024 – Aug 2024', detail: 'Designed magazine layouts, advertisements, banners, and digital assets while maintaining consistency across print and technology-focused corporate communications.' },
  { role: 'Graphic Designer, 3D Assistant & Texturing Artist', company: 'ConnectAccessories', period: 'Dec 2022 – Jan 2024', detail: 'Developed 3D product visualizations and supported texturing, lighting, creative renders, and motion assets for brand presentations.' },
  { role: 'Videographer & Video Editor', company: 'DreamsDigitalStudio', period: 'Nov 2021 – Dec 2022', detail: 'Produced and edited promotional videos and advertisements, building hands-on expertise in motion editing and visual storytelling.' },
];

export const ExperienceSection = () => <section id="experience" className="py-24 relative border-t border-white/5">
  <div className="portfolio-container grid gap-12 lg:grid-cols-[.75fr_1.25fr]">
    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
      <p className="work-eyebrow">Professional journey</p>
      <h2 className="font-heading mt-3 text-3xl font-extrabold text-white sm:text-4xl">Experience that connects <span className="text-gradient-vibrant">ideas to outcomes.</span></h2>
      <div className="mt-8 rounded-[18px] border border-black/10 bg-white/55 p-6">
        <div className="flex items-center gap-3"><GraduationCap size={20} /><h3 className="font-heading text-base font-bold">Education</h3></div>
        <p className="mt-4 text-sm font-semibold">Bachelor of Vocation (B.Voc), Multimedia & Animation</p>
        <p className="mt-1 text-sm text-gray-500">Bharathiar University, Coimbatore · 2020 – 2023</p>
        <p className="mt-4 text-sm font-semibold">HSC & SSLC</p>
        <p className="mt-1 text-sm text-gray-500">St. Antony’s Hr. Sec. School, Coonoor, Nilgiris</p>
        <p className="mt-5 text-sm font-semibold">Certifications</p>
        <p className="mt-1 text-sm leading-relaxed text-gray-500">Graphic Design & Visual Branding · Professional Video Editing (Udemy) · Consumer Psychology (NPTEL)</p>
      </div>
    </motion.div>
    <div className="space-y-3">{experience.map((item, index) => <motion.article key={item.company} initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: index * .08 }} className="experience-item rounded-[18px] border border-black/10 bg-white/55 p-6">
      <div className="flex items-start gap-4"><span className="mt-1 grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-black text-white"><BriefcaseBusiness size={16} /></span><div><p className="text-xs font-semibold tracking-wider text-gray-500 uppercase">{item.period}</p><h3 className="font-heading mt-1 text-base font-bold">{item.role}</h3><p className="mt-1 text-sm font-semibold text-[#b85f42]">{item.company}</p><p className="mt-3 text-sm leading-relaxed text-gray-500">{item.detail}</p></div></div>
    </motion.article>)}</div>
  </div>
</section>;
