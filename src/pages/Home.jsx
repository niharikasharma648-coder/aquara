import React from 'react';
import { useHydration } from '../context/HydrationContext';
import { Droplet, ArrowRight, ShieldCheck, Sliders, Activity, Sparkles, GlassWater } from 'lucide-react';

export default function Home() {
  const { setCurrentScreen, calculatedTarget } = useHydration();

  return (
    <div className="relative min-h-screen pt-28 pb-20 flex flex-col items-center justify-center bg-[#0A192F] overflow-hidden">
      {/* Background Liquid Wave Composition */}
      <div
        className="absolute inset-0 z-0 pointer-events-none opacity-30 mix-blend-screen bg-cover bg-center"
        style={{
          backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuAQjrIZrbTmn_4g-kaHL_qM6qdjJyOjJ500pPmzwALtnoVKfQL__0uxqAHmuM-hVCfcxjZ4oefCnSOvlRR1_qxymMlA6tvQZIkncSGQ0mijI6uXlNOsb3RlBtaqvwaR-rGOQPHLrs-6a2ogegwPAFOFhUhhkJhdv_PH4BOs-_JlrSaoXk76ZxUGg9v_vl_QTZ_yObYTNnzFUFUDSMHxfTXFnTFKcPJyfdnI6cmYYslowQHa5iGMdnk')`,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0A192F]/60 to-[#0A192F] z-0" />

      {/* Decorative Ambient Light Orbs */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-[#41e4c0]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-[#00c7a5]/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Hero Section Container */}
      <div className="container mx-auto px-margin-mobile md:px-margin-desktop max-w-container-max relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center min-h-[640px]">
        {/* Left Column: Hero Content */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-secondary/10 border border-secondary/20 w-fit">
            <Sparkles className="w-3.5 h-3.5 text-secondary animate-pulse" />
            <span className="font-label-caps text-xs text-secondary font-semibold uppercase tracking-wider">
              Science-backed hydration algorithms
            </span>
          </div>

          <h1 className="font-display-lg text-4xl sm:text-5xl lg:text-6xl font-extrabold text-on-surface leading-[1.1] tracking-tight">
            Your body knows when it needs water.{' '}
            <span className="text-gradient block mt-2">AQUORA tells you how much.</span>
          </h1>

          <p className="font-body-lg text-lg text-primary max-w-xl leading-relaxed">
            Get a personalized daily water intake recommendation based on your body, lifestyle, and environment — backed by guidance from qualified nutrition professionals.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <button
              onClick={() => {
                setCurrentScreen('calculator');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="bg-[#64FFDA] text-[#0A192F] font-bold px-8 py-4 rounded-full hover:shadow-[0_0_25px_rgba(100,255,218,0.5)] hover:-translate-y-1 transition-all duration-300 font-body-md text-base flex items-center justify-center gap-2 group"
            >
              <span>Calculate My Water Intake</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={() => {
                setCurrentScreen('dr-maya');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="border border-[#64FFDA] text-on-surface bg-transparent px-8 py-4 rounded-full hover:bg-[rgba(100,255,218,0.1)] transition-all duration-300 font-body-md text-base flex items-center justify-center gap-2"
            >
              <span>Meet Our Nutritionists</span>
              <ArrowRight className="w-4 h-4 text-secondary" />
            </button>
          </div>
        </div>

        {/* Right Column: Floating Hydration Card Preview */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end relative">
          {/* Ambient Card Glow */}
          <div className="absolute w-72 h-72 bg-secondary rounded-full filter blur-[100px] opacity-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

          <div className="glass-panel rounded-2xl p-8 max-w-sm w-full relative z-10 transform hover:scale-[1.02] transition-transform duration-500 shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/10">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-secondary/20 flex items-center justify-center border border-secondary/30">
                <Droplet className="w-5 h-5 text-secondary fill-secondary" />
              </div>
              <span className="font-label-caps text-xs text-on-surface-variant uppercase tracking-wider font-semibold">
                Personalized Recommendation
              </span>
            </div>

            <div className="mb-8">
              <div className="font-headline-lg text-5xl font-extrabold text-on-surface flex items-baseline gap-2">
                {calculatedTarget.totalL} <span className="font-body-lg text-2xl text-primary font-normal">L</span>
              </div>
              <div className="font-body-md text-sm text-primary mt-1">Recommended Daily Intake</div>
            </div>

            {/* Glasses visualization */}
            <div className="bg-[#112240] rounded-xl p-4 border border-white/5 flex items-center justify-between">
              <div className="flex -space-x-2">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="w-9 h-9 rounded-full bg-[#64FFDA]/20 border border-[#64FFDA]/50 flex items-center justify-center shadow-sm"
                  >
                    <GlassWater className="w-4 h-4 text-[#64FFDA]" />
                  </div>
                ))}
                <div className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-xs font-semibold text-primary">
                  +{Math.max(0, calculatedTarget.glasses - 3)}
                </div>
              </div>
              <span className="font-headline-md text-xl font-bold text-on-surface">
                {calculatedTarget.glasses} <span className="font-body-md text-sm text-primary font-normal">glasses</span>
              </span>
            </div>

            {/* Quick interactive jump */}
            <button
              onClick={() => {
                setCurrentScreen('daily-plan');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="mt-6 w-full py-2.5 rounded-lg text-xs font-label-caps uppercase tracking-wider text-secondary bg-secondary/10 hover:bg-secondary/20 transition-colors border border-secondary/20 flex items-center justify-center gap-1.5"
            >
              View Today's Tracking Schedule
              <ArrowRight className="w-3 h-3" />
            </button>
          </div>
        </div>
      </div>

      {/* Credibility Strip */}
      <div className="w-full mt-24 px-margin-mobile md:px-margin-desktop relative z-10">
        <div className="max-w-container-max mx-auto border-t border-white/10 pt-12">
          <p className="text-center font-label-caps text-xs text-on-surface-variant uppercase tracking-widest mb-10">
            Science-informed hydration guidance
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div
              onClick={() => setCurrentScreen('about')}
              className="flex flex-col items-center gap-3 p-4 rounded-xl hover:bg-white/5 transition-colors cursor-pointer group"
            >
              <div className="w-14 h-14 rounded-2xl bg-[#112240] border border-white/10 flex items-center justify-center group-hover:border-secondary/50 group-hover:scale-105 transition-all">
                <ShieldCheck className="w-7 h-7 text-secondary" />
              </div>
              <span className="font-body-md text-base font-semibold text-on-surface group-hover:text-secondary transition-colors">
                Nutritionist Reviewed
              </span>
              <p className="text-xs text-on-surface-variant max-w-xs">
                Every calculation methodology is reviewed by certified clinical nutrition specialists.
              </p>
            </div>

            <div
              onClick={() => setCurrentScreen('calculator')}
              className="flex flex-col items-center gap-3 p-4 rounded-xl hover:bg-white/5 transition-colors cursor-pointer group"
            >
              <div className="w-14 h-14 rounded-2xl bg-[#112240] border border-white/10 flex items-center justify-center group-hover:border-secondary/50 group-hover:scale-105 transition-all">
                <Sliders className="w-7 h-7 text-secondary" />
              </div>
              <span className="font-body-md text-base font-semibold text-on-surface group-hover:text-secondary transition-colors">
                Personalized Recommendations
              </span>
              <p className="text-xs text-on-surface-variant max-w-xs">
                Tailored fluid distribution accounts for height, mass, weather, and activity levels.
              </p>
            </div>

            <div
              onClick={() => setCurrentScreen('daily-plan')}
              className="flex flex-col items-center gap-3 p-4 rounded-xl hover:bg-white/5 transition-colors cursor-pointer group"
            >
              <div className="w-14 h-14 rounded-2xl bg-[#112240] border border-white/10 flex items-center justify-center group-hover:border-secondary/50 group-hover:scale-105 transition-all">
                <Activity className="w-7 h-7 text-secondary" />
              </div>
              <span className="font-body-md text-base font-semibold text-on-surface group-hover:text-secondary transition-colors">
                Lifestyle & Pacing Based
              </span>
              <p className="text-xs text-on-surface-variant max-w-xs">
                Timed pacing schedule prevents cellular saturation and maximizes nutrient absorption.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
