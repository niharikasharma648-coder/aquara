import React, { useState } from 'react';
import { useHydration } from '../context/HydrationContext';
import { User, Droplets, Target, Award, Edit3, X, Check, ArrowRight, Flame } from 'lucide-react';

export default function UserProfile() {
  const { userProfile, updateProfile, calculatedTarget, weeklyData } = useHydration();
  const [isEditing, setIsEditing] = useState(false);
  const [editForm, setEditForm] = useState({
    name: userProfile.name,
    weight: userProfile.weight,
    height: userProfile.height,
    activity: userProfile.activity,
  });

  const handleSaveProfile = (e) => {
    e.preventDefault();
    updateProfile(editForm);
    setIsEditing(false);
  };

  return (
    <div className="min-h-screen pt-28 pb-24 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto w-full bg-[#0f1417] text-on-background">
      {/* Header */}
      <header className="mb-14 text-center md:text-left">
        <h1 className="font-display-lg text-4xl sm:text-5xl font-extrabold text-on-background mb-2">
          Your AQUORA profile
        </h1>
        <p className="font-body-lg text-base md:text-lg text-on-surface-variant">
          Manage your biometric hydration metrics and track long-term longitudinal fluid adherence.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        {/* Left Column: Avatar & Biological Metrics */}
        <div className="md:col-span-4 flex flex-col gap-8">
          {/* Avatar Section */}
          <div className="glass-card rounded-3xl p-8 flex flex-col items-center text-center border border-white/10 relative overflow-hidden">
            <div className="relative mb-6">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAHi3C3lwR8mb1zj_4udVPDIa_t9wLEpANVHi2wvX9jV3jDTtxk8Ag6QTPzc97usrSbpiM_9h8sLe4UCjpHZ8is0h5YOE7sZFuNF0U4Oxg5JSHeN1gl3Wiqf3M59FuiPTE3zVkmZS6F-hBxu3obTD-484miXF3NNOGXVK7s7HObyHCZHMMGeml2Qm53vLgSmeIinTJPxkIIHTZ3r-VPQPxAJvcwfqm9O179p485hOzTHG-pwItiDC0"
                alt="User avatar"
                className="w-32 h-32 rounded-full object-cover border-2 border-secondary p-1 shadow-[0_0_25px_rgba(100,255,218,0.3)]"
              />
              <div className="absolute bottom-1 right-1 bg-[#0A192F] p-1.5 rounded-full border border-secondary text-secondary">
                <Flame className="w-4 h-4 fill-secondary" />
              </div>
            </div>

            <h2 className="font-headline-md text-2xl font-bold text-on-background mb-1">
              {userProfile.name}
            </h2>

            <p className="font-body-md text-sm text-secondary mb-6 flex items-center justify-center gap-1.5 font-semibold">
              <Droplets className="w-4 h-4 fill-secondary" />
              <span>Hydration journey · {userProfile.streakDays} days streak</span>
            </p>

            <button
              onClick={() => {
                setEditForm({
                  name: userProfile.name,
                  weight: userProfile.weight,
                  height: userProfile.height,
                  activity: userProfile.activity,
                });
                setIsEditing(true);
              }}
              className="w-full border border-[#64FFDA] text-[#64FFDA] rounded-full py-3 font-label-caps text-xs tracking-wider uppercase font-bold hover:bg-[#64FFDA]/10 transition-all flex items-center justify-center gap-2"
            >
              <Edit3 className="w-4 h-4" />
              <span>Edit Metrics</span>
            </button>
          </div>

          {/* Personal Biological Metrics */}
          <div className="glass-card rounded-3xl p-8 border border-white/10">
            <h3 className="font-label-caps text-xs text-secondary mb-6 uppercase tracking-widest font-bold">
              Biological Metrics
            </h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center border-b border-white/5 pb-4">
                <span className="font-body-md text-sm text-on-surface-variant">Weight</span>
                <span className="font-headline-md text-xl font-bold text-on-background">
                  {userProfile.weight} <span className="text-xs text-on-surface-variant font-normal">kg</span>
                </span>
              </div>
              <div className="flex justify-between items-center border-b border-white/5 pb-4">
                <span className="font-body-md text-sm text-on-surface-variant">Height</span>
                <span className="font-headline-md text-xl font-bold text-on-background">
                  {userProfile.height} <span className="text-xs text-on-surface-variant font-normal">cm</span>
                </span>
              </div>
              <div className="flex justify-between items-center border-b border-white/5 pb-4">
                <span className="font-body-md text-sm text-on-surface-variant">Activity Level</span>
                <span className="font-body-md text-sm text-secondary capitalize font-semibold">
                  {userProfile.activity.replace('_', ' ')}
                </span>
              </div>
              <div className="flex justify-between items-center pt-1">
                <span className="font-body-md text-sm text-on-surface-variant">Climate</span>
                <span className="font-body-md text-sm text-secondary capitalize font-semibold">
                  {userProfile.climate}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Dashboard Stats & Weekly Bar Chart */}
        <div className="md:col-span-8 flex flex-col gap-8">
          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="glass-card rounded-2xl p-6 flex flex-col justify-between border border-white/10">
              <span className="font-label-caps text-xs text-on-surface-variant uppercase tracking-wider mb-4 font-semibold">
                Average Daily Intake
              </span>
              <div className="flex items-baseline gap-2">
                <span className="font-headline-lg text-4xl font-extrabold text-on-background">2.6</span>
                <span className="font-body-md text-base text-secondary font-semibold">L</span>
              </div>
            </div>

            <div className="glass-card rounded-2xl p-6 flex flex-col justify-between border border-white/10">
              <span className="font-label-caps text-xs text-on-surface-variant uppercase tracking-wider mb-4 font-semibold">
                Daily Calibrated Goal
              </span>
              <div className="flex items-baseline gap-2">
                <span className="font-headline-lg text-4xl font-extrabold text-on-background">{calculatedTarget.totalL}</span>
                <span className="font-body-md text-base text-on-surface-variant font-semibold">L</span>
              </div>
            </div>

            <div className="glass-card rounded-2xl p-6 flex flex-col justify-between relative overflow-hidden border border-secondary/30">
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/20 to-transparent pointer-events-none" />
              <span className="font-label-caps text-xs text-on-surface-variant uppercase tracking-wider mb-4 font-semibold">
                Goal Adherence
              </span>
              <div className="flex items-baseline gap-2 text-glow">
                <span className="font-headline-lg text-4xl font-extrabold text-secondary">93%</span>
              </div>
            </div>
          </div>

          {/* Weekly Hydration Bar Chart Section */}
          <div className="glass-card rounded-3xl p-8 flex-grow flex flex-col border border-white/10">
            <div className="flex justify-between items-center mb-8">
              <div>
                <h3 className="font-headline-md text-xl font-bold text-on-background">
                  Weekly Hydration
                </h3>
                <p className="text-xs text-on-surface-variant mt-0.5">Past 7 days volume vs target baseline</p>
              </div>
              <span className="font-label-caps text-xs text-secondary bg-secondary/10 border border-secondary/20 px-3.5 py-1 rounded-full font-semibold">
                Rolling 7 Days
              </span>
            </div>

            {/* Visual Interactive Bar Chart */}
            <div className="relative flex-grow flex items-end justify-between px-4 pb-8 pt-16 min-h-[260px]">
              {/* Background Grid Guidelines */}
              <div className="absolute inset-0 flex flex-col justify-between pointer-events-none px-4 pb-8 pt-16">
                <div className="w-full border-t border-white/5" />
                <div className="w-full border-t border-white/5" />
                <div className="w-full border-t border-white/5" />
              </div>

              {/* Target Line */}
              <div className="absolute top-[30%] left-0 w-full border-t border-dashed border-secondary/60 flex items-center z-10 pointer-events-none">
                <span className="absolute -left-2 -top-5 text-[11px] text-secondary font-label-caps bg-[#112240] px-2 py-0.5 rounded border border-secondary/30">
                  Target ({calculatedTarget.totalL}L)
                </span>
              </div>

              {/* Bars */}
              {weeklyData.map((d) => {
                const isCurrent = d.current;
                return (
                  <div
                    key={d.day}
                    className="relative flex flex-col items-center group h-full justify-end w-8 sm:w-10 z-10"
                  >
                    {/* Tooltip on hover */}
                    <div className="absolute -top-10 opacity-0 group-hover:opacity-100 transition-opacity bg-[#0A192F] text-xs text-secondary px-2 py-1 rounded border border-secondary/30 pointer-events-none shadow-md font-mono whitespace-nowrap">
                      {d.intake}L ({d.percent}%)
                    </div>

                    <div
                      className={`relative w-full rounded-t-full transition-all duration-500 ${
                        isCurrent
                          ? 'bg-[#64FFDA] shadow-[0_0_20px_rgba(100,255,218,0.6)] border border-[#64FFDA]'
                          : 'bg-[#112240] border border-white/10 group-hover:bg-[#1f3764]'
                      }`}
                      style={{ height: `${d.percent}%` }}
                    >
                      {!isCurrent && (
                        <div
                          className="absolute bottom-0 w-full bg-gradient-to-t from-secondary/40 to-secondary rounded-t-full"
                          style={{ height: `${d.percent * 0.8}%` }}
                        />
                      )}
                    </div>

                    <span className={`absolute -bottom-7 font-label-caps text-xs uppercase font-semibold ${isCurrent ? 'text-secondary font-bold' : 'text-on-surface-variant'}`}>
                      {d.day}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Edit Profile Modal */}
      {isEditing && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4 animate-in fade-in duration-200">
          <div className="glass-panel max-w-md w-full rounded-3xl p-8 border border-secondary/30 shadow-2xl relative">
            <button
              onClick={() => setIsEditing(false)}
              className="absolute top-6 right-6 p-2 rounded-full bg-white/5 hover:bg-white/15 text-on-surface transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <h3 className="font-headline-md text-2xl font-bold text-on-surface mb-6">
              Edit Biometrics
            </h3>

            <form onSubmit={handleSaveProfile} className="space-y-5">
              <div>
                <label className="block text-xs font-label-caps uppercase text-on-surface-variant mb-2 font-semibold">
                  Full Name
                </label>
                <input
                  type="text"
                  value={editForm.name}
                  onChange={(e) => setEditForm(prev => ({ ...prev, name: e.target.value }))}
                  className="input-glass w-full rounded-xl px-4 py-3 text-sm font-semibold"
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-label-caps uppercase text-on-surface-variant mb-2 font-semibold">
                    Weight (kg)
                  </label>
                  <input
                    type="number"
                    value={editForm.weight}
                    onChange={(e) => setEditForm(prev => ({ ...prev, weight: Number(e.target.value) }))}
                    className="input-glass w-full rounded-xl px-4 py-3 text-sm font-semibold"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs font-label-caps uppercase text-on-surface-variant mb-2 font-semibold">
                    Height (cm)
                  </label>
                  <input
                    type="number"
                    value={editForm.height}
                    onChange={(e) => setEditForm(prev => ({ ...prev, height: Number(e.target.value) }))}
                    className="input-glass w-full rounded-xl px-4 py-3 text-sm font-semibold"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-label-caps uppercase text-on-surface-variant mb-2 font-semibold">
                  Activity Level
                </label>
                <select
                  value={editForm.activity}
                  onChange={(e) => setEditForm(prev => ({ ...prev, activity: e.target.value }))}
                  className="input-glass w-full rounded-xl px-4 py-3 text-sm cursor-pointer"
                >
                  <option value="low">Low</option>
                  <option value="moderate">Moderate</option>
                  <option value="high">High</option>
                  <option value="very_high">Very High</option>
                </select>
              </div>

              <div className="pt-4 flex justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setIsEditing(false)}
                  className="px-5 py-2.5 rounded-full text-xs font-label-caps uppercase text-on-surface-variant hover:text-on-surface"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-[#64FFDA] text-[#0A192F] font-bold px-6 py-2.5 rounded-full text-xs font-label-caps uppercase hover:shadow-[0_0_15px_rgba(100,255,218,0.5)] transition-all"
                >
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
