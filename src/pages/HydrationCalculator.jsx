import React, { useState } from 'react';
import { useHydration } from '../context/HydrationContext';
import { Sparkles, Info, ArrowRight, CheckCircle, Scale, Ruler, Calendar, Activity, Sun, Dumbbell } from 'lucide-react';

export default function HydrationCalculator() {
  const { userProfile, updateProfile, setCurrentScreen } = useHydration();

  const [formData, setFormData] = useState({
    weight: userProfile.weight,
    height: userProfile.height,
    age: userProfile.age,
    sex: userProfile.sex,
    activity: userProfile.activity,
    climate: userProfile.climate,
    exercise: userProfile.exercise,
  });

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateProfile(formData);
    setCurrentScreen('result');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen pt-28 pb-20 flex flex-col items-center justify-center bg-[#0f1417] relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute inset-0 pointer-events-none opacity-25">
        <div className="absolute top-0 right-0 w-96 h-96 bg-secondary-fixed rounded-full mix-blend-screen filter blur-[120px] translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-tertiary-container rounded-full mix-blend-screen filter blur-[140px] -translate-x-1/2 translate-y-1/4" />
      </div>

      <main className="w-full max-w-[920px] mx-auto px-margin-mobile md:px-margin-desktop py-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 border border-secondary/20 mb-4">
            <Sparkles className="w-3.5 h-3.5 text-secondary" />
            <span className="font-label-caps text-xs text-secondary font-semibold uppercase tracking-wider">
              Precision Intake Calculator
            </span>
          </div>
          <h1 className="font-headline-lg-mobile md:font-headline-lg text-3xl md:text-5xl font-extrabold text-on-surface mb-3">
            Let’s calculate what your body needs.
          </h1>
          <p className="font-body-lg text-base md:text-lg text-on-surface-variant max-w-2xl mx-auto">
            Tell us a little about yourself. We’ll turn your information into a personalized, science-calibrated daily hydration target.
          </p>
        </div>

        {/* Progress Indicator */}
        <div className="flex items-center justify-center mb-10 gap-3 md:gap-6 px-4">
          <div className="flex items-center text-secondary font-semibold">
            <span className="w-7 h-7 rounded-full bg-secondary/20 border border-secondary text-secondary flex items-center justify-center text-xs mr-2 font-mono">01</span>
            <span className="font-body-md text-sm md:text-base">About You</span>
          </div>
          <div className="h-[2px] w-8 md:w-16 bg-secondary/40" />
          <div className="flex items-center text-secondary font-semibold">
            <span className="w-7 h-7 rounded-full bg-secondary/20 border border-secondary text-secondary flex items-center justify-center text-xs mr-2 font-mono">02</span>
            <span className="font-body-md text-sm md:text-base">Lifestyle</span>
          </div>
          <div className="h-[2px] w-8 md:w-16 bg-outline-variant/40" />
          <div className="flex items-center text-on-surface-variant opacity-60">
            <span className="w-7 h-7 rounded-full bg-white/5 border border-white/20 text-on-surface-variant flex items-center justify-center text-xs mr-2 font-mono">03</span>
            <span className="font-body-md text-sm md:text-base">Your Result</span>
          </div>
        </div>

        {/* Main Form Glass Panel */}
        <div className="glass-panel rounded-3xl p-8 md:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/10 mb-8">
          <form onSubmit={handleSubmit} className="space-y-10">
            {/* Step 1: Weight, Height, Age */}
            <div>
              <h2 className="font-label-caps text-xs text-secondary font-bold uppercase tracking-widest mb-4 flex items-center gap-2">
                <Scale className="w-4 h-4" />
                Biometrics
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Weight */}
                <div>
                  <label className="block font-label-caps text-xs text-on-surface-variant mb-2 uppercase tracking-wider" htmlFor="weight">
                    WEIGHT
                  </label>
                  <div className="relative">
                    <input
                      id="weight"
                      type="number"
                      min="30"
                      max="250"
                      value={formData.weight}
                      onChange={(e) => handleChange('weight', Number(e.target.value))}
                      className="input-glass w-full rounded-xl px-4 py-3.5 font-body-lg text-lg font-semibold"
                      placeholder="72"
                      required
                    />
                    <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
                      <span className="font-body-md text-sm text-on-surface-variant">kg</span>
                    </div>
                  </div>
                </div>

                {/* Height */}
                <div>
                  <label className="block font-label-caps text-xs text-on-surface-variant mb-2 uppercase tracking-wider" htmlFor="height">
                    HEIGHT
                  </label>
                  <div className="relative">
                    <input
                      id="height"
                      type="number"
                      min="100"
                      max="250"
                      value={formData.height}
                      onChange={(e) => handleChange('height', Number(e.target.value))}
                      className="input-glass w-full rounded-xl px-4 py-3.5 font-body-lg text-lg font-semibold"
                      placeholder="178"
                      required
                    />
                    <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
                      <span className="font-body-md text-sm text-on-surface-variant">cm</span>
                    </div>
                  </div>
                </div>

                {/* Age */}
                <div>
                  <label className="block font-label-caps text-xs text-on-surface-variant mb-2 uppercase tracking-wider" htmlFor="age">
                    AGE
                  </label>
                  <div className="relative">
                    <input
                      id="age"
                      type="number"
                      min="12"
                      max="110"
                      value={formData.age}
                      onChange={(e) => handleChange('age', Number(e.target.value))}
                      className="input-glass w-full rounded-xl px-4 py-3.5 font-body-lg text-lg font-semibold"
                      placeholder="28"
                      required
                    />
                    <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
                      <span className="font-body-md text-sm text-on-surface-variant">yrs</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Biological Sex */}
            <div>
              <label className="block font-label-caps text-xs text-on-surface-variant mb-3 uppercase tracking-wider">
                BIOLOGICAL SEX
              </label>
              <div className="flex flex-wrap gap-4">
                {[
                  { value: 'male', label: 'Male' },
                  { value: 'female', label: 'Female' },
                  { value: 'prefer_not_to_say', label: 'Prefer not to say' },
                ].map((item) => {
                  const isChecked = formData.sex === item.value;
                  return (
                    <button
                      key={item.value}
                      type="button"
                      onClick={() => handleChange('sex', item.value)}
                      className={`px-6 py-3 rounded-full text-sm font-semibold border transition-all flex items-center gap-2 ${
                        isChecked
                          ? 'bg-secondary/20 border-secondary text-secondary shadow-[0_0_15px_rgba(100,255,218,0.3)]'
                          : 'bg-[#112240] border-white/10 text-on-surface hover:bg-white/5'
                      }`}
                    >
                      <span className={`w-3 h-3 rounded-full border ${isChecked ? 'bg-secondary border-secondary' : 'border-white/30'}`} />
                      {item.label}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />

            {/* Step 2: Lifestyle, Climate, Exercise */}
            <div>
              <h2 className="font-label-caps text-xs text-secondary font-bold uppercase tracking-widest mb-4 flex items-center gap-2">
                <Activity className="w-4 h-4" />
                Environment & Activity
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Daily Activity */}
                <div>
                  <label className="block font-label-caps text-xs text-on-surface-variant mb-2 uppercase tracking-wider" htmlFor="activity">
                    DAILY ACTIVITY
                  </label>
                  <select
                    id="activity"
                    value={formData.activity}
                    onChange={(e) => handleChange('activity', e.target.value)}
                    className="input-glass w-full rounded-xl px-4 py-3.5 font-body-md text-sm cursor-pointer"
                  >
                    <option value="low">Low (Desk job, sedentary)</option>
                    <option value="moderate">Moderate (Some walking)</option>
                    <option value="high">High (Active job/lifestyle)</option>
                    <option value="very_high">Very High (Intense labor)</option>
                  </select>
                </div>

                {/* Climate */}
                <div>
                  <label className="block font-label-caps text-xs text-on-surface-variant mb-2 uppercase tracking-wider" htmlFor="climate">
                    CLIMATE
                  </label>
                  <select
                    id="climate"
                    value={formData.climate}
                    onChange={(e) => handleChange('climate', e.target.value)}
                    className="input-glass w-full rounded-xl px-4 py-3.5 font-body-md text-sm cursor-pointer"
                  >
                    <option value="cool">Cool / Temperate</option>
                    <option value="moderate">Moderate</option>
                    <option value="hot">Hot / Arid</option>
                    <option value="very_hot">Very Hot & Humid</option>
                  </select>
                </div>

                {/* Daily Exercise */}
                <div>
                  <label className="block font-label-caps text-xs text-on-surface-variant mb-2 uppercase tracking-wider" htmlFor="exercise">
                    DAILY EXERCISE
                  </label>
                  <select
                    id="exercise"
                    value={formData.exercise}
                    onChange={(e) => handleChange('exercise', e.target.value)}
                    className="input-glass w-full rounded-xl px-4 py-3.5 font-body-md text-sm cursor-pointer"
                  >
                    <option value="none">None / Rest day</option>
                    <option value="30min">30 minutes</option>
                    <option value="60min">60 minutes</option>
                    <option value="90min">90+ minutes</option>
                  </select>
                </div>
              </div>
            </div>

            {/* CTA Submit Button */}
            <div className="pt-4 flex justify-center">
              <button
                type="submit"
                className="bg-[#64FFDA] text-[#0A192F] font-bold py-4 px-12 rounded-full hover:shadow-[0_0_30px_rgba(100,255,218,0.6)] hover:-translate-y-1 transition-all duration-300 font-headline-md text-lg flex items-center gap-2"
              >
                <span>Calculate My Hydration</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </form>
        </div>

        {/* Footer Note */}
        <p className="text-center font-body-md text-xs text-on-surface-variant opacity-70 flex items-center justify-center gap-1.5">
          <Info className="w-4 h-4 text-secondary" />
          <span>Your result is calculated dynamically using ACSM physiological fluid guidelines.</span>
        </p>
      </main>
    </div>
  );
}
