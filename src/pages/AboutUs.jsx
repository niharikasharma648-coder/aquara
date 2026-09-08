import React from 'react';
import { useHydration } from '../context/HydrationContext';
import { FlaskConical, BarChart3, Droplets, Zap, ArrowRight, Award, CheckCircle2 } from 'lucide-react';

export default function AboutUs() {
  const { setCurrentScreen } = useHydration();

  const teamMembers = [
    {
      id: 'maya',
      name: 'Dr. Maya Sharma',
      role: 'Lead Physiologist',
      bio: 'Specializing in cellular hydration dynamics and endurance performance optimization. Stanford Ph.D.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCrW1v0cwjkcXGUAp2x-VfcT5wm6gP-eCZ0t4hQZlo6IwdAF2kWQItRlkydD0Q_p2el1Wq23iY1Av0c_-F-y2HyMmPHHzNmfvwD9L0ycUnicXAdH6xGi5Vr2KDXpYVToWyzC0PcHxeIBSzmWuxPJ-cQbolLxHTaUpusrdy0lf-Vi4no96wWYhziuOhLLl8Z7Q6ThTVr_8TJ4Xa_Qlk-AwsqGGTPyQIZPDSbKvW-OZiNjMfHS0UYIRY',
      hasFullBio: true,
    },
    {
      id: 'james',
      name: 'James Vance, MS',
      role: 'Sports Nutritionist',
      bio: 'Expert in translating complex biometric data into actionable daily hydration strategies and electrolyte balancing.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAVbQBsDRCt9hdknDptoFX5r03OkHs7n2odMDfBb1ysiT1Ez3GJX9ZfjCvQ2MHGKrn8nw4RfGkF6cbngh9MylWH4JJ-O2U0_4QhUNeEdHk6GmpAyHfGCmfGkRX9Vqi9ZVZFUWblelB164XmghFFhenGFwhNZuukg5gCp7-Vx5BUne7boDPAo4d4rzv9ihLRUo1HUz0ku5B8ouEkxMbzPDB3h2zy-_UGlSSVyxNOOAgPcTnxp2C3NFM',
    },
    {
      id: 'elena',
      name: 'Dr. Elena Rostova',
      role: 'Clinical Researcher',
      bio: "Driving AQUORA's scientific method and overseeing clinical efficacy trials on cognitive hydration preservation.",
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCj6FTHEvOnuQ8fq6xTmkucVZ7pVmfPr6fZvM38kGLrkKI_A7C0eV4PAfV7swhQwZ4NEkeVKb2eY2w2HOlnCvufOL7XDrNZPNy5zw5dCwq_nlOEZrj84CtViCTcqKd8A8J44eS26BXVr2zCqmMgaPlqK5nCoR3Ybf8PepGmkbRKJfaZmvjdUPH0kbMJtH64OeTW3OJgCpohOkfgfn2TQn-ZZnmR5qb10DWYxQPYrKEocW0KZgA2lds',
    },
  ];

  return (
    <div className="min-h-screen pt-28 pb-20 flex flex-col bg-[#0f1417]">
      {/* Hero Section */}
      <section className="relative min-h-[500px] flex items-center bg-[#0a192f] overflow-hidden rounded-b-[48px] border-b border-white/5">
        <div className="absolute inset-0 opacity-25 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-secondary/40 via-primary-container to-primary-container pointer-events-none" />
        
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop relative z-10 w-full py-16">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 border border-secondary/20 mb-6">
              <Award className="w-3.5 h-3.5 text-secondary" />
              <span className="font-label-caps text-xs text-secondary font-semibold uppercase tracking-wider">
                Our Mission & Foundation
              </span>
            </div>

            <h1 className="font-display-lg text-4xl sm:text-5xl lg:text-6xl font-extrabold text-on-surface mb-6 text-glow leading-tight">
              Better hydration starts with understanding your body.
            </h1>
            <p className="font-body-lg text-lg text-primary max-w-2xl leading-relaxed">
              At AQUORA, we bridge the gap between high-science and daily wellness. Our mission is to make hydration personal, precise, and effortlessly integrated into your life.
            </p>
          </div>
        </div>
      </section>

      {/* 4-Card Bento Grid */}
      <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-24">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-headline-lg text-3xl md:text-4xl font-bold text-on-surface mb-4">
            The Pillars of AQUORA
          </h2>
          <p className="text-on-surface-variant text-base">
            Engineered from ground up to replace outdated arbitrary rules with individual precision.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Card 1 */}
          <div className="glass-card rounded-3xl p-10 flex flex-col h-full transform hover:-translate-y-2 transition-transform duration-300 border border-white/10 hover:border-secondary/30 group">
            <div className="mb-6 h-14 w-14 rounded-2xl bg-secondary/10 flex items-center justify-center border border-secondary/20 group-hover:scale-110 transition-transform">
              <FlaskConical className="w-7 h-7 text-secondary" />
            </div>
            <h3 className="font-headline-md text-2xl font-bold mb-4 text-on-surface group-hover:text-secondary transition-colors">
              Personalized Recommendations
            </h3>
            <p className="font-body-md text-base text-on-surface-variant leading-relaxed">
              Generic advice doesn't work. We analyze your unique physiological data — including mass, climate, height, and exercise intensity — to create a hydration strategy tailored specifically to you.
            </p>
          </div>

          {/* Card 2 (Staggered offset) */}
          <div className="glass-card rounded-3xl p-10 flex flex-col h-full transform hover:-translate-y-2 transition-transform duration-300 md:translate-y-8 border border-white/10 hover:border-secondary/30 group">
            <div className="mb-6 h-14 w-14 rounded-2xl bg-secondary/10 flex items-center justify-center border border-secondary/20 group-hover:scale-110 transition-transform">
              <BarChart3 className="w-7 h-7 text-secondary" />
            </div>
            <h3 className="font-headline-md text-2xl font-bold mb-4 text-on-surface group-hover:text-secondary transition-colors">
              Science-informed Guidance
            </h3>
            <p className="font-body-md text-base text-on-surface-variant leading-relaxed">
              Every recommendation is backed by peer-reviewed research and validated by our team of expert nutritionists and physiologists to prevent hyponatremia and optimize cellular volume.
            </p>
          </div>

          {/* Card 3 */}
          <div className="glass-card rounded-3xl p-10 flex flex-col h-full transform hover:-translate-y-2 transition-transform duration-300 border border-white/10 hover:border-secondary/30 group">
            <div className="mb-6 h-14 w-14 rounded-2xl bg-secondary/10 flex items-center justify-center border border-secondary/20 group-hover:scale-110 transition-transform">
              <Droplets className="w-7 h-7 text-secondary" />
            </div>
            <h3 className="font-headline-md text-2xl font-bold mb-4 text-on-surface group-hover:text-secondary transition-colors">
              Simple & Intuitive
            </h3>
            <p className="font-body-md text-base text-on-surface-variant leading-relaxed">
              Complex science translated into elegant, intuitive tools. Hydration tracking shouldn't feel like a chore — it should feel like second nature with effortless timed pacing cues.
            </p>
          </div>

          {/* Card 4 (Staggered offset) */}
          <div className="glass-card rounded-3xl p-10 flex flex-col h-full transform hover:-translate-y-2 transition-transform duration-300 md:translate-y-8 border border-white/10 hover:border-secondary/30 group">
            <div className="mb-6 h-14 w-14 rounded-2xl bg-secondary/10 flex items-center justify-center border border-secondary/20 group-hover:scale-110 transition-transform">
              <Zap className="w-7 h-7 text-secondary" />
            </div>
            <h3 className="font-headline-md text-2xl font-bold mb-4 text-on-surface group-hover:text-secondary transition-colors">
              Actionable & Paced
            </h3>
            <p className="font-body-md text-base text-on-surface-variant leading-relaxed">
              Clear steps and timely nudges ensure you meet your hydration goals, optimizing your cognitive energy, digestion, and athletic recovery throughout the morning, afternoon, and evening.
            </p>
          </div>
        </div>
      </section>

      {/* Nutrition Team Section */}
      <section className="bg-[#171c1f] py-24 rounded-t-[48px] border-t border-white/5 mt-12">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="mb-16 md:flex justify-between items-end gap-8">
            <div className="max-w-2xl">
              <h2 className="font-headline-lg text-3xl md:text-5xl font-bold text-on-surface mb-4">
                Guided by nutrition professionals
              </h2>
              <p className="font-body-lg text-lg text-on-surface-variant">
                Our protocols are developed by leading experts in sports nutrition, clinical dietetics, and human cellular physiology.
              </p>
            </div>
            <button
              onClick={() => {
                setCurrentScreen('dr-maya');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="mt-6 md:mt-0 px-6 py-3.5 border border-secondary text-secondary hover:bg-secondary hover:text-[#0A192F] rounded-full transition-all duration-300 flex items-center gap-2 font-label-caps text-xs tracking-wider uppercase font-bold"
            >
              <span>View Lead Specialist Profile</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <div
                key={member.id}
                onClick={() => {
                  if (member.hasFullBio) {
                    setCurrentScreen('dr-maya');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }
                }}
                className={`glass-card rounded-3xl overflow-hidden group transition-all duration-300 border border-white/10 hover:border-secondary/40 ${
                  member.hasFullBio ? 'cursor-pointer hover:-translate-y-1' : ''
                }`}
              >
                <div className="h-64 bg-[#112240] relative overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover opacity-85 group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a192f] via-transparent to-transparent" />
                </div>
                <div className="p-8">
                  <h4 className="font-headline-md text-xl font-bold text-on-surface mb-1 group-hover:text-secondary transition-colors">
                    {member.name}
                  </h4>
                  <p className="font-label-caps text-xs text-secondary uppercase tracking-wider mb-4 font-semibold">
                    {member.role}
                  </p>
                  <p className="font-body-md text-sm text-on-surface-variant leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
