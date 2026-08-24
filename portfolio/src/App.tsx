import React, { useState } from 'react';
import type { BrandCaseStudy } from './data/portfolioData';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { BrandMarquee } from './components/BrandMarquee';
import { WorkGallery } from './components/WorkGallery';
import { CaseStudyModal } from './components/CaseStudyModal';
import { AboutSection } from './components/AboutSection';
import { ExperienceSection } from './components/ExperienceSection';
import { Services } from './components/Services';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ScrollProgress } from './components/ScrollProgress';

export const App: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<BrandCaseStudy | null>(null);

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  return (
    <div className="min-h-screen bg-[#07090e] text-white selection:bg-indigo-500 selection:text-white relative">
      <ScrollProgress />
      {/* Dynamic Ambient Background Orbs */}
      <div className="ambient-background">
        <div className="glow-orb glow-orb-1"></div>
        <div className="glow-orb glow-orb-2"></div>
        <div className="glow-orb glow-orb-3"></div>
      </div>

      {/* Main Layout Navigation */}
      <Navbar />

      {/* Main Page Sections */}
      <main className="relative z-10">
        <Hero />
        <BrandMarquee />
        <WorkGallery onSelectProject={(project) => setSelectedProject(project)} />
        <AboutSection />
        <ExperienceSection />
        <Services />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      <CaseStudyModal caseStudy={selectedProject} onClose={handleCloseModal} />
    </div>
  );
};

export default App;
