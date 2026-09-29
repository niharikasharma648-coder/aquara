import React, { useState } from 'react';
import { useHydration } from '../context/HydrationContext';
import { Menu, X, Droplets, Sparkles } from 'lucide-react';

export default function Navbar() {
  const { currentScreen, setCurrentScreen } = useHydration();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Science', screen: 'insights' },
    { label: 'Tracking', screen: 'daily-plan' },
    { label: 'About', screen: 'about' },
    { label: 'Contact', screen: 'contact' },
  ];

  const handleNavClick = (screen) => {
    setCurrentScreen(screen);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#0f1417]/80 backdrop-blur-xl border-b border-white/5 shadow-lg transition-all duration-300">
      <div className="flex justify-between items-center px-margin-mobile md:px-margin-desktop py-4 max-w-container-max mx-auto">
        {/* Brand Logo */}
        <button
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-2 group text-left focus:outline-none"
        >
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#41e4c0] to-[#00c7a5] flex items-center justify-center shadow-[0_0_15px_rgba(65,228,192,0.4)] group-hover:scale-105 transition-transform">
            <Droplets className="w-5 h-5 text-[#0A192F]" />
          </div>
          <span className="font-headline-md text-2xl md:text-3xl font-extrabold tracking-tighter text-on-surface group-hover:text-secondary transition-colors">
            AQUORA
          </span>
        </button>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-8 font-label-caps text-label-caps">
          {navLinks.map((link) => {
            const isActive = currentScreen === link.screen;
            return (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.screen)}
                className={`transition-all duration-200 uppercase tracking-widest text-xs py-1 relative ${
                  isActive
                    ? 'text-secondary font-bold border-b-2 border-secondary'
                    : 'text-on-surface-variant hover:text-on-surface hover:opacity-100'
                }`}
              >
                {link.label}
              </button>
            );
          })}
        </div>

        {/* Action Button */}
        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={() => handleNavClick('calculator')}
            className="bg-[#64FFDA] text-[#0A192F] font-bold px-6 py-2.5 rounded-full hover:shadow-[0_0_20px_rgba(100,255,218,0.5)] hover:-translate-y-[2px] transition-all duration-300 font-label-caps text-xs tracking-wider uppercase flex items-center gap-1.5"
          >
            <Sparkles className="w-3.5 h-3.5" />
            Calculate My Intake
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-on-surface p-2 focus:outline-none"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0a0f12]/95 backdrop-blur-2xl border-b border-white/10 px-6 py-6 flex flex-col gap-4 animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => {
              const isActive = currentScreen === link.screen;
              return (
                <button
                  key={link.label}
                  onClick={() => handleNavClick(link.screen)}
                  className={`text-left py-2.5 px-4 rounded-lg text-sm font-semibold transition-all ${
                    isActive
                      ? 'bg-secondary/15 text-secondary border border-secondary/20'
                      : 'text-on-surface-variant hover:text-on-surface hover:bg-white/5'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </div>

          <button
            onClick={() => handleNavClick('calculator')}
            className="w-full bg-[#64FFDA] text-[#0A192F] font-bold py-3 rounded-full text-center text-xs tracking-wider uppercase shadow-[0_0_15px_rgba(100,255,218,0.4)] mt-2"
          >
            Calculate My Intake
          </button>
        </div>
      )}
    </nav>
  );
}
