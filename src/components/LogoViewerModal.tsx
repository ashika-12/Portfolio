import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { PortfolioProject } from '../data/portfolioData';
import { X, ChevronLeft, ChevronRight, Download, BookOpen, FileText } from 'lucide-react';

interface LogoViewerModalProps {
  project: PortfolioProject | null;
  onClose: () => void;
}

export const LogoViewerModal: React.FC<LogoViewerModalProps> = ({ project, onClose }) => {
  const [currentPageIndex, setCurrentPageIndex] = useState<number>(0);

  if (!project || !project.pages) return null;

  const pages = project.pages;
  const currentPage = pages[currentPageIndex];

  const handleNext = () => {
    setCurrentPageIndex((prev) => (prev + 1) % pages.length);
  };

  const handlePrev = () => {
    setCurrentPageIndex((prev) => (prev - 1 + pages.length) % pages.length);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-xl">
        <div className="absolute inset-0" onClick={onClose}></div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="relative z-10 w-full max-w-6xl max-h-[90vh] bg-[#0c101d] border border-white/10 rounded-3xl overflow-hidden shadow-2xl flex flex-col lg:flex-row"
        >
          {/* Main Booklet Viewer */}
          <div className="relative flex-1 bg-[#07090e] p-6 flex flex-col items-center justify-between min-h-[400px] lg:min-h-[550px] overflow-hidden">
            
            {/* Header info bar */}
            <div className="w-full flex items-center justify-between pb-3 border-b border-white/10 text-xs font-medium text-gray-300">
              <span className="flex items-center gap-2 font-bold text-indigo-400">
                <BookOpen size={16} />
                {project.brand} Visual Identity Guidelines
              </span>
              <span className="bg-white/10 px-3 py-1 rounded-full text-white font-semibold">
                Page {currentPageIndex + 1} of {pages.length}
              </span>
            </div>

            {/* Active Page Image */}
            <div className="relative flex-1 my-4 flex items-center justify-center max-h-[60vh] w-full">
              {currentPage ? (
                <img
                  src={currentPage.url}
                  alt={`Page ${currentPageIndex + 1}`}
                  className="max-h-full max-w-full object-contain rounded-xl shadow-2xl border border-white/10"
                />
              ) : (
                <div className="text-gray-400">Preview loading...</div>
              )}

              {/* Prev / Next buttons */}
              {pages.length > 1 && (
                <>
                  <button
                    onClick={handlePrev}
                    className="absolute left-2 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/70 hover:bg-indigo-600 text-white border border-white/10 transition-colors shadow-xl"
                  >
                    <ChevronLeft size={24} />
                  </button>
                  <button
                    onClick={handleNext}
                    className="absolute right-2 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/70 hover:bg-indigo-600 text-white border border-white/10 transition-colors shadow-xl"
                  >
                    <ChevronRight size={24} />
                  </button>
                </>
              )}
            </div>

            {/* Bottom thumbnail strip */}
            {pages.length > 1 && (
              <div className="w-full flex items-center justify-center gap-2 overflow-x-auto py-2 border-t border-white/10">
                {pages.map((p, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentPageIndex(idx)}
                    className={`h-12 w-9 rounded border-2 overflow-hidden flex-shrink-0 transition-all ${
                      currentPageIndex === idx
                        ? 'border-indigo-500 scale-110 shadow-lg'
                        : 'border-transparent opacity-50 hover:opacity-100'
                    }`}
                  >
                    <img src={p.url} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right Info Sidebar */}
          <div className="w-full lg:w-88 p-6 bg-[#0c101d] border-t lg:border-t-0 lg:border-l border-white/10 flex flex-col justify-between overflow-y-auto">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="badge-tag">{project.tag}</span>
                <button
                  onClick={onClose}
                  className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white border border-white/10 transition-colors"
                >
                  <X size={20} />
                </button>
              </div>

              <div>
                <h3 className="font-heading font-bold text-2xl text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-300 leading-relaxed mb-4">
                  {project.description}
                </p>

                <div className="p-4 bg-indigo-500/10 border border-indigo-500/20 rounded-2xl space-y-2">
                  <div className="flex items-center gap-2 text-xs font-bold text-indigo-300 uppercase tracking-wider">
                    <FileText size={14} /> Brand Identity Package
                  </div>
                  <ul className="text-xs text-gray-300 space-y-1.5 list-disc list-inside">
                    <li>Logo Mark Architecture & Grid</li>
                    <li>Primary & Secondary Color Palettes</li>
                    <li>Brand Typography System</li>
                    <li>Stationery & Digital Guidelines</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Download PDF Button */}
            <div className="pt-6 border-t border-white/10 space-y-3">
              {project.pdfUrl && (
                <a
                  href={project.pdfUrl}
                  target="_blank"
                  rel="noreferrer"
                  download
                  className="btn-primary w-full justify-center text-sm py-3"
                >
                  <Download size={18} />
                  Download Full PDF Guidelines
                </a>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
