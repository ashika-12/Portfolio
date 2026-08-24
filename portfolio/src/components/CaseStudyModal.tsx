import React, { useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { BookOpen, Film, Images, Play, X } from 'lucide-react';
import type { BrandCaseStudy, PortfolioProject } from '../data/portfolioData';

interface CaseStudyModalProps {
  caseStudy: BrandCaseStudy | null;
  onClose: () => void;
}

const categoryLabel: Record<PortfolioProject['category'], string> = {
  'Graphics Design': 'Creatives',
  'Logo & Brand Identity': 'Identity',
  'Video Editing': 'Motion',
};

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({ caseStudy, onClose }) => {
  const projects = caseStudy?.projects ?? [];
  const [activeIndex, setActiveIndex] = useState(0);
  const [assetIndex, setAssetIndex] = useState(0);
  const active = projects[activeIndex];

  const assets = useMemo(() => {
    if (!active) return [];
    if (active.images) return active.images;
    if (active.pages) return active.pages;
    return active.videos ?? [];
  }, [active]);

  if (!caseStudy || !active) return null;
  const current = assets[assetIndex] ?? assets[0];
  const isVideo = active.category === 'Video Editing';
  const isIdentity = active.category === 'Logo & Brand Identity';
  const Icon = isVideo ? Film : isIdentity ? BookOpen : Images;

  const chooseProject = (index: number) => {
    setActiveIndex(index);
    setAssetIndex(0);
  };

  return (
    <AnimatePresence>
      <div className="case-modal fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6">
        <button className="absolute inset-0 case-modal-backdrop" aria-label="Close project" onClick={onClose} />
        <motion.article
          initial={{ opacity: 0, y: 18, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 18, scale: 0.98 }}
          className="case-modal-card relative z-10 flex w-full max-w-6xl max-h-[92vh] flex-col overflow-hidden rounded-[28px] md:flex-row"
        >
          <section className="case-modal-stage relative flex min-h-[320px] flex-1 items-center justify-center overflow-hidden p-5 md:min-h-[640px] md:p-10">
            {isVideo && current && 'url' in current ? (
              <video key={current.url} controls autoPlay className="max-h-[68vh] w-full rounded-2xl object-contain shadow-2xl">
                <source src={current.url} type="video/mp4" />
              </video>
            ) : current && 'url' in current ? (
              <img src={current.url} alt={'filename' in current ? current.filename : 'Case study asset'} className="max-h-[68vh] max-w-full rounded-xl object-contain shadow-xl" />
            ) : null}
          </section>

          <aside className="case-modal-sidebar flex w-full flex-col overflow-y-auto p-6 md:w-[360px]">
            <div className="flex items-center justify-between gap-3">
              <span className="badge-tag">{caseStudy.brand}</span>
              <button className="case-modal-close" aria-label="Close project" onClick={onClose}><X size={19} /></button>
            </div>
            <div className="mt-5">
              <p className="case-modal-kicker">Client case study</p>
              <h2 className="font-heading text-2xl font-extrabold text-white">{caseStudy.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-gray-300">{caseStudy.description}</p>
            </div>

            {projects.length > 1 && (
              <div className="case-modal-tabs mt-6 flex flex-wrap gap-2">
                {projects.map((project, index) => {
                  const ProjectIcon = project.category === 'Video Editing' ? Film : project.category === 'Logo & Brand Identity' ? BookOpen : Images;
                  return <button key={project.id} onClick={() => chooseProject(index)} className={index === activeIndex ? 'is-active' : ''}><ProjectIcon size={14} /> {categoryLabel[project.category]}</button>;
                })}
              </div>
            )}

            <div className="mt-6 border-t border-white/10 pt-5">
              <div className="flex items-center justify-between gap-3"><p className="case-modal-kicker flex items-center gap-2"><Icon size={14} /> {categoryLabel[active.category]}</p><span className="text-xs text-gray-400">{assets.length} assets</span></div>
              <h3 className="mt-2 font-heading text-lg font-bold text-white">{active.title}</h3>
              {assets.length > 1 && <div className="case-modal-assets mt-4 grid grid-cols-4 gap-2">{assets.map((asset, index) => (
                <button key={`${'filename' in asset ? asset.filename : 'video'}-${index}`} onClick={() => setAssetIndex(index)} className={assetIndex === index ? 'is-active' : ''}>
                  {isVideo ? <span><Play size={14} fill="currentColor" /></span> : <img src={asset.url} alt="" />}
                </button>
              ))}</div>}
            </div>

          </aside>
        </motion.article>
      </div>
    </AnimatePresence>
  );
};
