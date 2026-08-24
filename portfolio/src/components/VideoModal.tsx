import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { PortfolioProject } from '../data/portfolioData';
import { X, Film, Play, Download } from 'lucide-react';

interface VideoModalProps {
  project: PortfolioProject | null;
  onClose: () => void;
}

export const VideoModal: React.FC<VideoModalProps> = ({ project, onClose }) => {
  const [selectedVideoIndex, setSelectedVideoIndex] = useState<number>(0);

  if (!project || !project.videos || project.videos.length === 0) return null;

  const videos = project.videos;
  const currentVid = videos[selectedVideoIndex];

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-xl">
        <div className="absolute inset-0" onClick={onClose}></div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="relative z-10 w-full max-w-5xl max-h-[90vh] bg-[#0c101d] border border-white/10 rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row"
        >
          {/* Main HTML5 Video Player Area */}
          <div className="relative flex-1 bg-black flex flex-col items-center justify-center min-h-[350px] md:min-h-[500px]">
            <video
              key={currentVid.url}
              controls
              autoPlay
              className="max-h-[75vh] w-full h-full object-contain"
            >
              <source src={currentVid.url} type="video/mp4" />
              Your browser does not support HTML5 video player.
            </video>
          </div>

          {/* Sidebar Info & Video Playlist */}
          <div className="w-full md:w-88 p-6 bg-[#0c101d] border-t md:border-t-0 md:border-l border-white/10 flex flex-col justify-between overflow-y-auto">
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

              {/* Playlist Selection if multiple videos */}
              {videos.length > 1 && (
                <div className="pt-4 border-t border-white/10">
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3 flex items-center gap-1.5">
                    <Film size={14} className="text-indigo-400" />
                    Video Playlist ({videos.length} Commercials)
                  </p>
                  <div className="space-y-2 max-h-48 overflow-y-auto pr-1">
                    {videos.map((vid, idx) => (
                      <button
                        key={idx}
                        onClick={() => setSelectedVideoIndex(idx)}
                        className={`w-full text-left p-3 rounded-xl border transition-all flex items-center justify-between ${
                          selectedVideoIndex === idx
                            ? 'bg-indigo-600/20 border-indigo-500 text-white'
                            : 'bg-white/5 border-white/5 text-gray-400 hover:bg-white/10 hover:text-white'
                        }`}
                      >
                        <div className="flex items-center gap-2 overflow-hidden">
                          <Play size={14} className={selectedVideoIndex === idx ? 'text-indigo-400 fill-indigo-400' : ''} />
                          <span className="text-xs font-semibold truncate">{vid.title}</span>
                        </div>
                        {selectedVideoIndex === idx && (
                          <span className="text-[10px] font-bold text-indigo-300 bg-indigo-500/20 px-2 py-0.5 rounded">
                            Playing
                          </span>
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Video Download Button */}
            <div className="pt-6 border-t border-white/10 space-y-2">
              <a
                href={currentVid.url}
                download
                className="btn-primary w-full justify-center text-sm py-2.5"
              >
                <Download size={16} />
                Download MP4 Video Asset
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
