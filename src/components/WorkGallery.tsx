import React, { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Film, Images, Layers, Search } from 'lucide-react';
import { BRAND_CASE_STUDIES, type BrandCaseStudy, type PortfolioProject } from '../data/portfolioData';

interface WorkGalleryProps { onSelectProject: (project: BrandCaseStudy) => void; }

const categories: Array<{ id: 'All' | PortfolioProject['category']; label: string; icon: typeof Layers }> = [
  { id: 'All', label: 'All clients', icon: Layers },
  { id: 'Graphics Design', label: 'Creatives', icon: Images },
  { id: 'Logo & Brand Identity', label: 'Identity', icon: BookOpen },
];

export const WorkGallery: React.FC<WorkGalleryProps> = ({ onSelectProject }) => {
  const [activeCategory, setActiveCategory] = useState<'All' | PortfolioProject['category']>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const filtered = useMemo(() => BRAND_CASE_STUDIES.filter((project) => {
    const query = searchQuery.toLowerCase();
    return (activeCategory === 'All' || project.categories.includes(activeCategory)) && (!query || `${project.brand} ${project.title} ${project.tag} ${project.description}`.toLowerCase().includes(query));
  }), [activeCategory, searchQuery]);

  return <section id="works" className="py-24 relative">
    <div className="portfolio-container">
      <div className="mx-auto mb-12 max-w-3xl text-center">
        <p className="work-eyebrow">Selected client work</p>
        <h2 className="font-heading mt-3 text-4xl font-extrabold text-white sm:text-5xl">A collection of <span className="text-gradient-vibrant">brand stories.</span></h2>
        <p className="mt-4 text-base text-gray-400 sm:text-lg">Each client is one place for every creative direction — campaign design, identity, and motion work.</p>
      </div>

      <div className="work-controls mb-12 flex flex-col gap-4 rounded-[22px] p-3 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex flex-wrap gap-2">{categories.map(({ id, label, icon: Icon }) => <button key={id} onClick={() => setActiveCategory(id)} className={`work-filter ${activeCategory === id ? 'is-active' : ''}`}><Icon size={15} /> {label}<span>{id === 'All' ? BRAND_CASE_STUDIES.length : BRAND_CASE_STUDIES.filter((caseStudy) => caseStudy.categories.includes(id)).length}</span></button>)}</div>
        <label className="work-search"><Search size={16} /><input type="search" value={searchQuery} onChange={(event) => setSearchQuery(event.target.value)} placeholder="Find a client or project" /></label>
      </div>

      {filtered.length ? <motion.div layout className="work-case-grid">{filtered.map((project) => <motion.button layout key={project.id} onClick={() => onSelectProject(project)} className="work-case-card text-left" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <div className={`work-case-image ${project.isLogoCover ? 'work-case-logo' : ''}`}>{project.coverImage ? <img src={project.coverImage} alt={`${project.brand} logo`} loading="lazy" /> : <div className="work-case-placeholder"><Film size={28} /></div>}<span>{project.itemCount} assets</span></div>
        <div className="p-5"><div className="work-case-categories mb-4 flex flex-wrap justify-center gap-1.5">{project.categories.map((category) => <span className="badge-tag" key={category}>{category === 'Graphics Design' ? 'Creative' : category === 'Video Editing' ? 'Motion' : 'Identity'}</span>)}</div><h3 className="font-heading text-xl font-extrabold text-white">{project.brand}</h3><p className="mt-1.5 text-sm leading-relaxed text-gray-400">{project.description}</p><span className="work-case-link mt-5 inline-block">Open case study ↗</span></div>
      </motion.button>)}</motion.div> : <div className="rounded-[26px] border border-black/10 bg-white/50 py-20 text-center"><Search className="mx-auto text-gray-400" /><h3 className="mt-3 font-heading text-xl font-bold">No client found</h3><button className="btn-secondary mt-4 px-5 py-2 text-sm" onClick={() => { setActiveCategory('All'); setSearchQuery(''); }}>Reset search</button></div>}
    </div>
  </section>;
};
