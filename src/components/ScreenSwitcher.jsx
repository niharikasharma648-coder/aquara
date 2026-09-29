import React, { useState } from 'react';
import { useHydration } from '../context/HydrationContext';
import { Layers, ChevronDown, Check, Sparkles, Home, Info, UserCheck, Calculator, CheckCircle2, Calendar, BookOpen, Mail } from 'lucide-react';

export default function ScreenSwitcher() {
  const { currentScreen, setCurrentScreen } = useHydration();
  const [isOpen, setIsOpen] = useState(false);

  const screens = [
    { id: 'home', label: 'Home / Hero', folder: 'aquora_home_1 / home_2', icon: Home },
    { id: 'about', label: 'About Us', folder: 'aquora_about_us', icon: Info },
    { id: 'dr-maya', label: 'Dr. Maya Sharma', folder: 'aquora_dr._maya_sharma', icon: UserCheck },
    { id: 'calculator', label: 'Hydration Calculator', folder: 'aquora_hydration_calculator', icon: Calculator },
    { id: 'result', label: 'Your Result', folder: 'aquora_your_result', icon: CheckCircle2 },
    { id: 'daily-plan', label: 'Daily Hydration Plan', folder: 'aquora_daily_plan', icon: Calendar },
    { id: 'insights', label: 'Science & Insights', folder: 'aquora_insights', icon: BookOpen },
    { id: 'contact', label: 'Contact Us', folder: 'aquora_contact', icon: Mail },
  ];

  const currentObj = screens.find(s => s.id === currentScreen) || screens[0];

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen && (
        <div className="mb-3 bg-[#112240]/95 backdrop-blur-2xl border border-secondary/30 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.6)] p-3 w-80 max-h-[480px] overflow-y-auto animate-in fade-in zoom-in-95 duration-200">
          <div className="px-3 py-2 border-b border-white/10 mb-2 flex items-center justify-between">
            <span className="font-label-caps text-xs text-secondary font-bold uppercase tracking-wider flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              Converted Stitch Screens
            </span>
            <span className="text-[10px] text-on-surface-variant bg-white/5 px-2 py-0.5 rounded-full">
              8 Screens
            </span>
          </div>

          <div className="space-y-1">
            {screens.map((screen) => {
              const Icon = screen.icon;
              const isSelected = currentScreen === screen.id;
              return (
                <button
                  key={screen.id}
                  onClick={() => {
                    setCurrentScreen(screen.id);
                    setIsOpen(false);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className={`w-full text-left px-3 py-2.5 rounded-xl transition-all flex items-center justify-between group ${
                    isSelected
                      ? 'bg-secondary/20 text-secondary border border-secondary/40 font-semibold'
                      : 'text-on-surface-variant hover:text-on-surface hover:bg-white/5'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`p-1.5 rounded-lg ${isSelected ? 'bg-secondary text-[#0A192F]' : 'bg-white/5 text-on-surface-variant group-hover:text-secondary'}`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-sm">{screen.label}</div>
                      <div className="text-[10px] opacity-60 font-mono">{screen.folder}</div>
                    </div>
                  </div>
                  {isSelected && <Check className="w-4 h-4 text-secondary" />}
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Floating Pill Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2.5 bg-[#112240] hover:bg-[#1b2f52] text-on-surface border border-secondary/40 px-4 py-3 rounded-full shadow-[0_10px_30px_rgba(0,0,0,0.5)] hover:shadow-[0_0_20px_rgba(100,255,218,0.3)] transition-all duration-300 font-label-caps text-xs tracking-wider"
      >
        <Layers className="w-4 h-4 text-secondary" />
        <span className="font-semibold text-secondary">{currentObj.label}</span>
        <ChevronDown className={`w-3.5 h-3.5 text-on-surface-variant transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
    </div>
  );
}
