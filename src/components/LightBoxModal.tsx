import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { PortfolioProject } from '../data/portfolioData';
import { X, ChevronLeft, ChevronRight, Download, Images } from 'lucide-react';

interface LightBoxModalProps {
  project: PortfolioProject | null;
  onClose: () => void;
}

export const LightBoxModal: React.FC<LightBoxModalProps> = ({ project, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isZoomed, setIsZoomed] = useState<boolean>(false);

  if (!project || !project.images) return null;

  const images = project.images;
  const currentImg = images[currentIndex];

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % images.length);
    setIsZoomed(false);
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    setIsZoomed(false);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-xl">
        {/* Close Backdrop Click */}
        <div className="absolute inset-0" onClick={onClose}></div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="relative z-10 w-full max-w-5xl max-h-[90vh] bg-[#0c101d] border border-white/10 rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row"
        >
          {/* Main Image Display Area */}
          <div className="relative flex-1 bg-black flex items-center justify-center min-h-[350px] md:min-h-[500px] overflow-hidden group">
            
            <img
              src={currentImg.url}
              alt={currentImg.filename}
              className={`max-h-[75vh] w-auto object-contain transition-transform duration-300 ${
                isZoomed ? 'scale-150 cursor-zoom-out' : 'cursor-zoom-in'
              }`}
              onClick={() => setIsZoomed(!isZoomed)}
            />

            {/* Navigation Arrows for Carousels */}
            {images.length > 1 && (
              <>
                <button
                  onClick={handlePrev}
                  className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/60 hover:bg-indigo-600 text-white border border-white/10 transition-colors shadow-lg"
                  aria-label="Previous slide"
                >
                  <ChevronLeft size={24} />
                </button>
                <button
                  onClick={handleNext}
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/60 hover:bg-indigo-600 text-white border border-white/10 transition-colors shadow-lg"
                  aria-label="Next slide"
                >
                  <ChevronRight size={24} />
                </button>
              </>
            )}

            {/* Slide Index Badge */}
            {images.length > 1 && (
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-black/70 backdrop-blur-md border border-white/10 text-xs font-semibold text-white flex items-center gap-2">
                <Images size={14} className="text-indigo-400" />
                Slide {currentIndex + 1} of {images.length}
              </div>
            )}
          </div>

          {/* Sidebar Project Details */}
          <div className="w-full md:w-80 p-6 bg-[#0c101d] border-t md:border-t-0 md:border-l border-white/10 flex flex-col justify-between overflow-y-auto">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="badge-tag">{project.brand}</span>
                <button
                  onClick={onClose}
                  className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white border border-white/10 transition-colors"
                >
                  <X size={20} />
                </button>
              </div>

              <div>
                <h3 className="font-heading font-bold text-xl text-white mb-1">
                  {project.title}
                </h3>
                <span className="text-xs font-semibold text-indigo-400 uppercase tracking-wider block mb-3">
                  {project.tag}
                </span>
                <p className="text-sm text-gray-300 leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Carousel Thumbnails Grid */}
              {images.length > 1 && (
                <div className="pt-4 border-t border-white/10">
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">
                    Carousel Slides ({images.length})
                  </p>
                  <div className="grid grid-cols-4 gap-2 max-h-40 overflow-y-auto pr-1">
                    {images.map((img, idx) => (
                      <button
                        key={idx}
                        onClick={() => {
                          setCurrentIndex(idx);
                          setIsZoomed(false);
                        }}
                        className={`aspect-square rounded-lg overflow-hidden border-2 transition-all ${
                          currentIndex === idx
                            ? 'border-indigo-500 scale-95 shadow-md'
                            : 'border-transparent opacity-60 hover:opacity-100'
                        }`}
                      >
                        <img src={img.url} alt="" className="w-full h-full object-cover" />
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Action Buttons */}
            <div className="pt-6 border-t border-white/10 space-y-2">
              <a
                href={currentImg.url}
                target="_blank"
                rel="noreferrer"
                download
                className="btn-primary w-full justify-center text-sm py-2.5"
              >
                <Download size={16} />
                Download High-Res Asset
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
