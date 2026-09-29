import React from 'react';
import { useHydration } from '../context/HydrationContext';
import { Droplets, ShieldCheck, Heart, Sparkles } from 'lucide-react';

export default function Footer() {
  const { setCurrentScreen } = useHydration();

  const handleNav = (screen) => {
    setCurrentScreen(screen);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full py-16 bg-[#0a0f12] border-t border-white/5 relative z-10">
      <div className="flex flex-col md:flex-row justify-between items-start px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto gap-8">
        {/* Brand info */}
        <div className="flex flex-col gap-3 max-w-sm">
          <div
            onClick={() => handleNav('home')}
            className="flex items-center gap-2 cursor-pointer group"
          >
            <div className="w-7 h-7 rounded-lg bg-secondary/20 border border-secondary/30 flex items-center justify-center">
              <Droplets className="w-4 h-4 text-secondary" />
            </div>
            <span className="font-headline-md text-2xl font-bold tracking-tight text-on-surface group-hover:text-secondary transition-colors">
              AQUORA
            </span>
          </div>
          <p className="font-body-md text-sm text-on-surface-variant">
            Hydration, calculated for you. High-science precision combined with restorative daily wellness.
          </p>
          <div className="font-body-md text-xs text-primary/70 mt-2">
            © 2024 AQUORA. Precision Hydration.
          </div>
        </div>

        {/* Quick Links */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 text-sm">
          <div className="flex flex-col gap-2.5">
            <span className="font-label-caps text-xs text-secondary tracking-wider uppercase font-bold">Platform</span>
            <button onClick={() => handleNav('insights')} className="text-left text-on-surface-variant hover:text-secondary transition-colors">Science & Insights</button>
            <button onClick={() => handleNav('daily-plan')} className="text-left text-on-surface-variant hover:text-secondary transition-colors">Daily Tracking</button>
            <button onClick={() => handleNav('calculator')} className="text-left text-on-surface-variant hover:text-secondary transition-colors">Calculator</button>
          </div>

          <div className="flex flex-col gap-2.5">
            <span className="font-label-caps text-xs text-secondary tracking-wider uppercase font-bold">Team</span>
            <button onClick={() => handleNav('about')} className="text-left text-on-surface-variant hover:text-secondary transition-colors">About Us</button>
            <button onClick={() => handleNav('dr-maya')} className="text-left text-on-surface-variant hover:text-secondary transition-colors">Dr. Maya Sharma</button>
            <button onClick={() => handleNav('contact')} className="text-left text-on-surface-variant hover:text-secondary transition-colors">Contact Team</button>
          </div>

          <div className="flex flex-col gap-2.5 col-span-2 sm:col-span-1">
            <span className="font-label-caps text-xs text-secondary tracking-wider uppercase font-bold">Legal</span>
            <span className="text-on-surface-variant hover:text-on-surface cursor-pointer">Privacy Policy</span>
            <span className="text-on-surface-variant hover:text-on-surface cursor-pointer">Terms of Service</span>
            <span className="text-on-surface-variant hover:text-on-surface cursor-pointer">Scientific Method</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
