import React from 'react';
import { useHydration } from '../context/HydrationContext';
import { Droplet, Plus, Check, FlaskConical, Clock, Sparkles, CheckCircle2, RotateCcw } from 'lucide-react';

export default function DailyPlan() {
  const {
    calculatedTarget,
    intakeLoggedMl,
    logQuickIntake,
    progressPercent,
    scheduleItems,
    toggleScheduleItem,
    setIntakeLoggedMl,
  } = useHydration();

  const currentLitres = (intakeLoggedMl / 1000).toFixed(1);
  const targetLitres = calculatedTarget.totalL;

  // SVG Progress Ring calculations (radius 120, circumference 753.9)
  const radius = 100;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (progressPercent / 100) * circumference;

  return (
    <div className="min-h-screen pt-28 pb-28 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto relative z-10 flex flex-col items-center bg-[#0f1417]">
      {/* Header Section */}
      <header className="text-center mb-12 flex flex-col items-center max-w-2xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 border border-secondary/20 mb-4">
          <Sparkles className="w-3.5 h-3.5 text-secondary" />
          <span className="font-label-caps text-xs text-secondary font-semibold uppercase tracking-wider">
            Active Hydration Tracker
          </span>
        </div>
        <h1 className="font-headline-lg-mobile md:font-headline-lg text-3xl md:text-5xl font-extrabold text-on-background mb-3">
          Your hydration plan
        </h1>
        <p className="font-body-lg text-base md:text-lg text-on-surface-variant">
          Small amounts, paced consistently throughout the day.
        </p>
      </header>

      {/* Top Overview Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl mb-16">
        {/* Daily Progress Card (2 columns) */}
        <div className="glass-card rounded-3xl p-8 md:col-span-2 flex flex-col sm:flex-row items-center justify-between gap-8 relative overflow-hidden group border border-white/10">
          <div className="absolute -right-20 -top-20 w-64 h-64 bg-secondary/10 rounded-full blur-3xl group-hover:bg-secondary/20 transition-all duration-700 pointer-events-none" />

          <div className="flex-1 space-y-6 z-10 text-center sm:text-left">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-secondary/15 text-secondary font-label-caps text-xs uppercase font-bold">
                {progressPercent >= 100 ? 'Goal Achieved 🎉' : progressPercent >= 60 ? 'On Track' : 'In Progress'}
              </div>
              <h2 className="font-headline-md text-2xl md:text-3xl font-bold text-on-background">
                {progressPercent >= 100 ? 'Hydration Target Met' : 'Optimal Pacing'}
              </h2>
              <p className="font-body-md text-sm text-on-surface-variant max-w-sm">
                You are maintaining balanced cellular hydration and metabolic fluid balance today.
              </p>
            </div>

            {/* Quick Add Buttons */}
            <div className="flex flex-wrap gap-3 justify-center sm:justify-start">
              <button
                onClick={() => logQuickIntake(250)}
                className="group flex items-center gap-2 bg-[#64FFDA] text-[#0A192F] px-6 py-3.5 rounded-full font-label-caps text-xs tracking-wider uppercase font-bold transition-all hover:shadow-[0_0_20px_rgba(100,255,218,0.5)] hover:-translate-y-0.5 active:translate-y-0"
              >
                <Droplet className="w-4 h-4 fill-[#0A192F]" />
                <span>+ 250 ML</span>
              </button>

              <button
                onClick={() => logQuickIntake(500)}
                className="group flex items-center gap-2 bg-[#112240] text-secondary border border-secondary/40 px-5 py-3.5 rounded-full font-label-caps text-xs tracking-wider uppercase font-bold transition-all hover:bg-secondary/10 hover:-translate-y-0.5"
              >
                <Plus className="w-4 h-4" />
                <span>+ 500 ML</span>
              </button>

              <button
                onClick={() => setIntakeLoggedMl(0)}
                title="Reset intake for today"
                className="p-3 rounded-full bg-white/5 hover:bg-white/10 text-on-surface-variant hover:text-on-surface transition-colors"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Circular Progress Ring */}
          <div className="relative flex items-center justify-center w-52 h-52 shrink-0 z-10">
            <svg className="w-full h-full transform -rotate-90" viewBox="0 0 240 240">
              {/* Track */}
              <circle
                cx="120"
                cy="120"
                r={radius}
                fill="transparent"
                stroke="rgba(255,255,255,0.06)"
                strokeWidth="14"
              />
              {/* Glow Drop */}
              <circle
                cx="120"
                cy="120"
                r={radius}
                fill="transparent"
                stroke="#41e4c0"
                strokeWidth="14"
                strokeDasharray={circumference}
                strokeDashoffset={strokeDashoffset}
                strokeLinecap="round"
                className="transition-all duration-700 ease-out"
              />
            </svg>

            {/* Inner Content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
              <span className="font-display-lg text-4xl font-extrabold text-on-background">
                {progressPercent}<span className="text-xl text-secondary">%</span>
              </span>
              <span className="font-label-caps text-xs text-on-surface-variant mt-1 font-semibold">
                {currentLitres}L / {targetLitres}L
              </span>
            </div>
          </div>
        </div>

        {/* Absorption Rate / Science Card */}
        <div className="glass-card rounded-3xl p-8 flex flex-col justify-between border border-white/10">
          <div className="flex justify-between items-start mb-6">
            <div className="p-3 rounded-2xl bg-secondary/10 text-secondary border border-secondary/20">
              <FlaskConical className="w-6 h-6" />
            </div>
            <span className="px-3 py-1 bg-surface-container-high rounded-full font-label-caps text-xs text-secondary border border-white/5 font-semibold">
              Insights
            </span>
          </div>

          <div>
            <h3 className="font-body-lg text-lg text-on-background mb-1 font-bold">
              Absorption Rate
            </h3>
            <p className="font-body-md text-xs text-on-surface-variant mb-4 leading-relaxed">
              Your current timed pacing allows for maximum cellular uptake and prevents osmotic imbalances.
            </p>
            <div className="w-full h-2.5 bg-surface-container-highest rounded-full overflow-hidden">
              <div className="h-full bg-secondary w-[85%] rounded-full shadow-[0_0_12px_rgba(65,228,192,0.8)]" />
            </div>
            <div className="flex justify-between items-center text-[10px] text-on-surface-variant mt-1.5">
              <span>Optimal Uptake</span>
              <span className="text-secondary font-bold">85% Capacity</span>
            </div>
          </div>
        </div>
      </div>

      {/* Timeline Planner Section */}
      <div className="w-full max-w-4xl">
        <div className="flex items-center justify-between mb-8 pl-4 md:pl-0">
          <h3 className="font-label-caps text-xs text-on-surface-variant tracking-[0.15em] uppercase font-bold">
            Today's Chrono-Hydration Schedule
          </h3>
          <span className="text-xs text-secondary font-semibold">
            {scheduleItems.filter(i => i.completed).length} of {scheduleItems.length} Logged
          </span>
        </div>

        <div className="relative pl-6 md:pl-10">
          {/* Vertical Timeline Guide Line */}
          <div className="absolute top-4 bottom-4 left-[27px] md:left-[43px] w-[2px] bg-gradient-to-b from-secondary via-secondary/40 to-white/5 rounded-full" />

          <div className="space-y-6">
            {scheduleItems.map((item, index) => {
              const isDone = item.completed;
              return (
                <div key={item.id} className="relative flex items-start gap-6 md:gap-8 group">
                  {/* Timeline Dot / Checkbox */}
                  <button
                    onClick={() => toggleScheduleItem(item.id)}
                    className={`absolute -left-6 md:-left-8 mt-2 w-5 h-5 rounded-full flex items-center justify-center z-10 border-2 transition-all ${
                      isDone
                        ? 'bg-secondary border-background shadow-[0_0_12px_rgba(65,228,192,0.6)]'
                        : 'bg-[#1b2023] border-white/30 hover:border-secondary'
                    }`}
                    title={isDone ? 'Mark as incomplete' : 'Mark as logged'}
                  >
                    {isDone && <Check className="w-3 h-3 text-[#0A192F] stroke-[3]" />}
                  </button>

                  {/* Time Label */}
                  <div className="w-20 pt-2 shrink-0">
                    <span className={`font-label-caps text-xs font-semibold ${isDone ? 'text-secondary' : 'text-on-surface-variant'}`}>
                      {item.time}
                    </span>
                  </div>

                  {/* Card content */}
                  <div
                    className={`flex-1 glass-card rounded-2xl p-5 md:p-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 transition-all border ${
                      isDone
                        ? 'border-secondary/20 bg-[#112240]/40'
                        : 'border-white/10 hover:border-secondary/30'
                    }`}
                  >
                    <div>
                      <h4 className={`font-body-lg text-base font-semibold mb-0.5 ${isDone ? 'text-on-background line-through opacity-70' : 'text-on-background'}`}>
                        {item.title}
                      </h4>
                      <p className="font-body-md text-xs text-on-surface-variant">
                        {item.description}
                      </p>
                    </div>

                    <div className="flex items-center gap-3 w-full md:w-auto justify-between md:justify-end">
                      <div className="flex items-center gap-2 bg-secondary/10 px-3.5 py-1.5 rounded-full border border-secondary/20">
                        <Droplet className="w-3.5 h-3.5 text-secondary fill-secondary" />
                        <span className="font-label-caps text-xs text-secondary font-bold">
                          {item.amountMl} ml
                        </span>
                      </div>

                      <button
                        onClick={() => toggleScheduleItem(item.id)}
                        className={`px-4 py-1.5 rounded-full text-xs font-label-caps uppercase font-bold transition-all ${
                          isDone
                            ? 'bg-white/5 text-on-surface-variant hover:bg-white/10'
                            : 'bg-[#64FFDA] text-[#0A192F] hover:shadow-[0_0_15px_rgba(100,255,218,0.5)]'
                        }`}
                      >
                        {isDone ? 'Logged ✓' : 'Log Now'}
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
