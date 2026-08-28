import React, { useState, useEffect } from 'react';
import { Sparkles, Menu, X, ArrowUpRight, Palette, Layers, User, Mail } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Works', href: '#works', icon: Layers },
    { name: 'About', href: '#about', icon: User },
    { name: 'Services', href: '#services', icon: Palette },
    { name: 'Contact', href: '#contact', icon: Mail },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#07090e]/80 backdrop-blur-xl border-b border-white/10 py-3 shadow-2xl'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="portfolio-container flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-3 group text-decoration-none">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 via-purple-600 to-cyan-400 p-[1px] shadow-lg shadow-indigo-500/20 group-hover:scale-105 transition-transform duration-300">
            <div className="w-full h-full bg-[#0b0f19] rounded-[11px] flex items-center justify-center">
              <span className="font-heading font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400 text-lg">
                NK
              </span>
            </div>
          </div>
          <div>
            <span className="font-heading font-bold text-white text-lg tracking-tight block leading-tight group-hover:text-indigo-400 transition-colors">
              Nandha Kumar B
            </span>
            <span className="text-xs text-indigo-300/80 font-medium tracking-wide flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              Graphic Designer · UI/UX Designer
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 bg-white/[0.04] backdrop-blur-md border border-white/10 p-1.5 rounded-full shadow-inner">
          {navLinks.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.name}
                href={link.href}
                className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-300 hover:text-white hover:bg-white/10 rounded-full transition-all duration-200"
              >
                <Icon size={15} className="text-indigo-400" />
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Action Button & Experience Pill */}
        <div className="hidden md:flex items-center gap-4">
          <div className="hidden lg:flex items-center gap-2 px-3 py-1.5 bg-indigo-500/10 border border-indigo-500/20 rounded-full text-xs font-semibold text-indigo-300">
            <Sparkles size={13} className="text-indigo-400" />
            3+ Years Experience
          </div>
          <a href="#contact" className="btn-primary text-sm py-2 px-5">
            Let’s Connect
            <ArrowUpRight size={16} />
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-gray-300 hover:text-white bg-white/5 border border-white/10 rounded-xl"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-[#0c101d]/95 backdrop-blur-2xl border-b border-white/10 p-5 shadow-2xl animate-in slide-in-from-top duration-300">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-3 p-3 rounded-xl hover:bg-indigo-600/20 text-gray-200 font-medium"
                >
                  <Icon size={18} className="text-indigo-400" />
                  {link.name}
                </a>
              );
            })}
            <div className="pt-3 border-t border-white/10 flex flex-col gap-3">
              <div className="flex items-center justify-center gap-2 py-2 bg-indigo-500/10 border border-indigo-500/20 rounded-xl text-xs font-semibold text-indigo-300">
                <Sparkles size={14} className="text-indigo-400" />
                3+ Years Professional Experience
              </div>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="btn-primary justify-center text-center py-3"
              >
                Let’s Connect
                <ArrowUpRight size={18} />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
