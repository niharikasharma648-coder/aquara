import React from 'react';
import { useHydration } from '../context/HydrationContext';
import { Quote, ArrowRight, GraduationCap, User, Activity, Droplets, Award, CheckCircle2 } from 'lucide-react';

export default function NutritionistProfile() {
  const { setCurrentScreen } = useHydration();

  const expertiseList = [
    'Cellular Hydration Dynamics',
    'Metabolic Fluid Balance',
    'Electrolyte & Osmolyte Optimization',
    'Endurance Performance Recovery',
  ];

  return (
    <div className="min-h-screen pt-28 pb-20 bg-[#0f1417] text-on-background">
      <main className="w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-12 flex flex-col gap-16">
        {/* Hero / Portrait Section */}
        <section className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
          <div className="md:col-span-5 relative">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden relative glass-panel p-3 border border-white/10 shadow-2xl">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCIHONcq_R5gTLMW-MoFRnVSQ288q9RjihdMCfOvGxrZ0QmBI0S4lmcqef6LtkcpaTJpG02E9M5ZKuvF7bF8_er2gMrQBB0LGcPbTRQyWDF6ICj9wUjbP_b1lhMqMooXBwQol42VcNrUM6qtZGfRWITX7gpF1VMXI7rMcHCsFnuyJqwBfhUKWa3u_97liMXpyxtLwd0_vvUtM9RwvXpSCrbfq6wvUC3NDfOGBmI7sjmjY7Z6c81W5I"
                alt="Dr. Maya Sharma"
                className="w-full h-full object-cover rounded-2xl"
              />
              <div className="absolute bottom-6 right-6 bg-[#0a192f]/90 text-secondary font-label-caps text-xs px-4 py-2 rounded-full border border-secondary/30 backdrop-blur-md font-semibold">
                Registered Specialist
              </div>
            </div>
          </div>

          <div className="md:col-span-7 flex flex-col gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 border border-secondary/20 mb-3">
                <span className="w-2 h-2 rounded-full bg-secondary animate-ping" />
                <span className="font-label-caps text-xs text-secondary font-semibold uppercase tracking-wider">
                  Lead Scientific Advisor
                </span>
              </div>
              <h1 className="font-display-lg text-4xl sm:text-5xl font-extrabold text-on-surface mb-2">
                Dr. Maya Sharma
              </h1>
              <p className="font-headline-md text-xl md:text-2xl text-secondary font-semibold">
                Registered Nutritionist & Hydration Specialist
              </p>
            </div>

            <div className="glass-panel rounded-2xl p-8 my-2 relative overflow-hidden border border-white/10">
              <Quote className="w-24 h-24 text-white/5 absolute -top-4 -left-4 pointer-events-none" />
              <p className="font-body-lg text-lg md:text-xl text-primary relative z-10 italic leading-relaxed">
                “Good hydration isn't about drinking as much water as possible. It's about giving your body what it needs, at the right intervals, consistently.”
              </p>
            </div>

            <div className="flex flex-wrap gap-4 mt-2">
              <button
                onClick={() => {
                  setCurrentScreen('daily-plan');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="bg-[#64FFDA] text-[#0A192F] font-bold rounded-full px-8 py-4 font-body-md text-base hover:shadow-[0_0_25px_rgba(100,255,218,0.5)] hover:-translate-y-1 transition-all duration-300 flex items-center gap-2"
              >
                <span>Explore Your Hydration Plan</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => {
                  setCurrentScreen('contact');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="border border-[#64FFDA] text-on-surface font-semibold rounded-full px-8 py-4 font-body-md text-base hover:bg-[#64FFDA]/10 transition-colors duration-300 flex items-center gap-2"
              >
                <span>Ask Dr. Sharma a Question</span>
                <GraduationCap className="w-4 h-4 text-secondary" />
              </button>
            </div>
          </div>
        </section>

        {/* Bento Grid for Detailed Bio & Credentials */}
        <section className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* About */}
          <div className="md:col-span-8 glass-card rounded-2xl p-8 flex flex-col gap-4 border border-white/10">
            <div className="flex items-center gap-3 text-secondary mb-2">
              <User className="w-6 h-6" />
              <h2 className="font-headline-md text-2xl font-bold text-on-surface">About Dr. Sharma</h2>
            </div>
            <p className="font-body-md text-base text-on-surface-variant leading-relaxed">
              With over 15 years of clinical experience bridging the gap between metabolic science and daily wellness, Dr. Maya Sharma pioneers precision hydration strategies. Her methodology moves beyond generic intake recommendations, utilizing biomarker analysis to architect bespoke fluid regimens that optimize cognitive function and physical recovery.
            </p>
            <p className="font-body-md text-base text-on-surface-variant leading-relaxed">
              Formerly a lead researcher at the Institute for Restorative Physiology, she now drives the scientific foundation of AQUORA's personalized tracking algorithms and electrolyte balance guidelines.
            </p>
          </div>

          {/* Areas of Expertise */}
          <div className="md:col-span-4 glass-card rounded-2xl p-8 flex flex-col gap-4 border border-white/10">
            <div className="flex items-center gap-3 text-secondary mb-2">
              <Activity className="w-6 h-6" />
              <h2 className="font-headline-md text-2xl font-bold text-on-surface">Expertise</h2>
            </div>
            <ul className="flex flex-col gap-3 font-body-md text-sm text-on-surface-variant">
              {expertiseList.map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Philosophy */}
          <div className="md:col-span-6 glass-card rounded-2xl p-8 flex flex-col gap-4 border border-white/10">
            <div className="flex items-center gap-3 text-secondary mb-2">
              <Droplets className="w-6 h-6" />
              <h2 className="font-headline-md text-2xl font-bold text-on-surface">Hydration Philosophy</h2>
            </div>
            <p className="font-body-md text-base text-on-surface-variant leading-relaxed">
              True hydration is metabolic harmony. Dr. Sharma believes that achieving optimal fluid balance requires an understanding of individual lifestyle metrics, environmental factors, and precise pacing timing—not just volume tracking.
            </p>
          </div>

          {/* Qualifications */}
          <div className="md:col-span-6 glass-card rounded-2xl p-8 flex flex-col gap-4 border border-white/10">
            <div className="flex items-center gap-3 text-secondary mb-2">
              <Award className="w-6 h-6" />
              <h2 className="font-headline-md text-2xl font-bold text-on-surface">Qualifications & Accreditations</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 bg-[#112240] rounded-xl border border-white/5">
                <p className="font-label-caps text-xs text-secondary mb-1 uppercase tracking-wider font-semibold">Ph.D. Nutritional Sciences</p>
                <p className="font-body-md text-sm text-on-surface-variant">Stanford University</p>
              </div>
              <div className="p-4 bg-[#112240] rounded-xl border border-white/5">
                <p className="font-label-caps text-xs text-secondary mb-1 uppercase tracking-wider font-semibold">Board Certified</p>
                <p className="font-body-md text-sm text-on-surface-variant">Clinical Nutrition Specialist (CNS)</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
