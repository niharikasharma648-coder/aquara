import React from 'react';
import { useHydration } from '../context/HydrationContext';
import { Droplets, Sunrise, Sun, Moon, Activity, CheckCircle, ArrowRight, ShieldCheck, RefreshCw } from 'lucide-react';

export default function HydrationResult() {
  const { calculatedTarget, setCurrentScreen, userProfile } = useHydration();

  const timeBreakdown = [
    {
      title: 'Morning',
      time: '6:00 AM – 11:00 AM',
      amount: calculatedTarget.breakdown.morning,
      percent: 70,
      icon: Sunrise,
      desc: 'Kickstart cellular metabolism and replenish overnight loss.',
    },
    {
      title: 'Afternoon',
      time: '11:00 AM – 4:00 PM',
      amount: calculatedTarget.breakdown.afternoon,
      percent: 100,
      icon: Sun,
      desc: 'Sustain cognitive stamina and digest lunch comfortably.',
    },
    {
      title: 'Evening',
      time: '4:00 PM – 9:00 PM',
      amount: calculatedTarget.breakdown.evening,
      percent: 80,
      icon: Moon,
      desc: 'Gentle hydration wind-down before restorative sleep.',
    },
    {
      title: 'Exercise / Activity',
      time: 'During & post exertion',
      amount: calculatedTarget.breakdown.exercise,
      percent: 40,
      icon: Activity,
      desc: 'Electrolyte replenishment & muscle recovery.',
    },
  ];

  return (
    <div className="min-h-screen pt-28 pb-24 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto bg-[#0f1417] text-on-surface">
      {/* Title & Target Display */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 border border-secondary/20 mb-4">
          <CheckCircle className="w-3.5 h-3.5 text-secondary" />
          <span className="font-label-caps text-xs text-secondary font-semibold uppercase tracking-wider">
            Personal Target Calibrated
          </span>
        </div>

        <h1 className="font-headline-lg-mobile md:font-headline-lg text-3xl md:text-5xl font-extrabold text-on-surface mb-2">
          Your daily hydration target
        </h1>

        <div className="font-display-lg text-5xl md:text-7xl font-extrabold text-secondary mb-3 text-glow">
          {calculatedTarget.totalL} L
        </div>

        <p className="font-body-lg text-base md:text-lg text-on-surface-variant max-w-2xl mx-auto">
          Recommended daily water intake tailored for {userProfile.weight}kg, {userProfile.activity} activity (≈ {calculatedTarget.glasses} glasses per day).
        </p>

        <button
          onClick={() => {
            setCurrentScreen('calculator');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="mt-3 text-xs text-secondary/80 hover:text-secondary inline-flex items-center gap-1 hover:underline"
        >
          <RefreshCw className="w-3 h-3" />
          Recalculate biometrics
        </button>
      </div>

      {/* Main Grid: Central Animated Tank & Breakdown Cards */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-16 items-stretch">
        {/* Central Tank Graphic (5 cols) */}
        <div className="md:col-span-5 glass-panel rounded-3xl p-8 flex flex-col items-center justify-end relative h-[420px] overflow-hidden border border-white/10 shadow-2xl">
          {/* Animated Water Volume in Tank */}
          <div className="absolute inset-0 z-0 flex items-end">
            <div
              className="w-full bg-gradient-to-t from-[#00c7a5] via-[#41e4c0] to-[#64FFDA] opacity-25 rounded-b-2xl transition-all duration-1000 ease-out"
              style={{ height: '78%' }}
            />
          </div>

          {/* Glowing water lines */}
          <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-secondary/20 to-transparent pointer-events-none" />

          <div className="z-10 text-center mb-6 flex flex-col items-center">
            <div className="w-16 h-16 rounded-2xl bg-[#0A192F]/80 border border-secondary/40 flex items-center justify-center mb-4 shadow-[0_0_20px_rgba(100,255,218,0.4)] animate-float">
              <Droplets className="w-8 h-8 text-secondary" />
            </div>
            <p className="font-label-caps text-xs text-secondary tracking-widest uppercase font-bold">
              Your Personalized Fluid Reservoir
            </p>
            <p className="text-2xl font-extrabold text-on-surface mt-1">
              {calculatedTarget.totalMl} <span className="text-sm font-normal text-primary">ML / DAY</span>
            </p>
          </div>
        </div>

        {/* 4 Timing Breakdown Cards (7 cols) */}
        <div className="md:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {timeBreakdown.map((slot) => {
            const Icon = slot.icon;
            return (
              <div
                key={slot.title}
                className="glass-card rounded-2xl p-6 flex flex-col justify-between gap-4 border border-white/10 hover:border-secondary/30 transition-all group"
              >
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-label-caps text-xs text-on-surface-variant uppercase tracking-wider font-semibold">
                      {slot.title}
                    </span>
                    <div className="p-2 rounded-lg bg-secondary/10 text-secondary group-hover:scale-110 transition-transform">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>
                  <div className="text-[11px] text-on-surface-variant/70 mb-3">{slot.time}</div>
                  <div className="font-headline-md text-3xl font-extrabold text-on-surface">
                    {slot.amount} <span className="text-sm font-normal text-primary">L</span>
                  </div>
                </div>

                <div>
                  <div className="w-full h-1.5 bg-surface-container-high rounded-full overflow-hidden mb-2">
                    <div
                      className="h-full bg-secondary rounded-full shadow-[0_0_8px_rgba(65,228,192,0.8)] transition-all duration-1000"
                      style={{ width: `${slot.percent}%` }}
                    />
                  </div>
                  <p className="text-[11px] text-on-surface-variant leading-tight">
                    {slot.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Nutritionist Note */}
      <div className="glass-card rounded-3xl p-8 mb-12 max-w-4xl mx-auto flex flex-col md:flex-row gap-8 items-center border border-white/10">
        <div className="flex-shrink-0">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDRQwLaVRheIa7jidCs0jdfBelorsaxx2hmbnbfiprFY8v0qJu-hXPiLcd3Tz7QRVF0MmKYdrdasHG4sG5Jummxhn5k1w0ffq3PWtV-92Mv6e2WtLXIY0QL_O37bT05Ya_bAEJR5J1WuhGVZrxRCoVmBSTqNW8WVrqnZ9k0csUtASvvPKTFlp7VgT-sHc94KDqscLDPH1A-4G0GRAHRwqUwdBUleU54I8kH0u4K5fKz8Bq4yZT-UHw"
            alt="Nutritionist guidance"
            className="w-24 h-24 rounded-2xl object-cover border-2 border-secondary/40 shadow-lg"
          />
        </div>
        <div>
          <h3 className="font-headline-md text-xl font-bold text-on-surface mb-2">
            A note from our nutritionists
          </h3>
          <p className="font-body-md text-sm text-on-surface-variant mb-4 leading-relaxed">
            To optimize absorption and prevent kidney strain, aim to spread your intake evenly throughout the day rather than chugging large amounts at once. Start with a glass upon waking to kickstart your metabolism.
          </p>
          <div className="font-label-caps text-xs text-secondary flex items-center gap-1.5 font-semibold">
            <ShieldCheck className="w-4 h-4" />
            <span>Reviewed by AQUORA Nutrition Team</span>
          </div>
        </div>
      </div>

      {/* CTA to Daily Plan */}
      <div className="text-center">
        <button
          onClick={() => {
            setCurrentScreen('daily-plan');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="bg-[#64FFDA] text-[#0A192F] font-bold font-label-caps text-sm tracking-wider uppercase px-10 py-4 rounded-full hover:shadow-[0_0_25px_rgba(100,255,218,0.6)] hover:-translate-y-1 transition-all duration-300 inline-flex items-center gap-2"
        >
          <span>View Daily Hydration Plan & Trackers</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
