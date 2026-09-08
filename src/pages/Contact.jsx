import React, { useState } from 'react';
import { Mail, Clock, Send, CheckCircle2, Sparkles, MessageSquare } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen pt-28 pb-24 flex items-center justify-center relative overflow-hidden bg-primary-container text-on-background">
      {/* Ambient background glow elements */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] rounded-full bg-secondary-fixed blur-[140px]" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-primary blur-[140px]" />
      </div>

      <main className="w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column: Text Info */}
          <div className="flex flex-col gap-6 max-w-lg">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 border border-secondary/20 w-fit">
              <Sparkles className="w-3.5 h-3.5 text-secondary" />
              <span className="font-label-caps text-xs text-secondary font-semibold uppercase tracking-wider">
                Direct Nutritionist Access
              </span>
            </div>

            <h1 className="font-headline-lg-mobile md:font-headline-lg text-3xl md:text-5xl font-extrabold text-on-surface leading-tight">
              Have a question about hydration?
            </h1>

            <p className="font-body-lg text-base md:text-lg text-on-surface-variant leading-relaxed">
              Our nutrition team is here to help. Whether you need assistance adjusting your protocol, interpreting electrolyte dynamics, or understanding our scientific method, reach out below.
            </p>

            <div className="mt-6 flex flex-col gap-4">
              <div className="flex items-center gap-4 text-on-surface-variant p-4 rounded-2xl bg-[#112240]/40 border border-white/5">
                <div className="p-2.5 rounded-xl bg-secondary/10 text-secondary">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-label-caps text-on-surface-variant uppercase font-semibold">Clinical Inquiries</div>
                  <span className="font-body-md text-base text-on-surface font-mono">experts@aquora.science</span>
                </div>
              </div>

              <div className="flex items-center gap-4 text-on-surface-variant p-4 rounded-2xl bg-[#112240]/40 border border-white/5">
                <div className="p-2.5 rounded-xl bg-secondary/10 text-secondary">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-label-caps text-on-surface-variant uppercase font-semibold">Response SLA</div>
                  <span className="font-body-md text-base text-on-surface">Guaranteed response within 24 hours</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="glass-card rounded-3xl p-8 md:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/10">
            {submitted ? (
              <div className="py-12 flex flex-col items-center text-center animate-in fade-in zoom-in-95 duration-300">
                <div className="w-16 h-16 rounded-full bg-secondary/20 border border-secondary text-secondary flex items-center justify-center mb-6 shadow-[0_0_25px_rgba(100,255,218,0.4)]">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-headline-md text-2xl font-bold text-on-surface mb-2">
                  Message Transmitted
                </h3>
                <p className="font-body-md text-sm text-on-surface-variant max-w-sm mb-6">
                  Thank you, {formData.name}. Dr. Maya Sharma and our clinical team have received your inquiry and will respond to <span className="text-secondary font-mono">{formData.email}</span> shortly.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: '', email: '', message: '' });
                  }}
                  className="px-6 py-2.5 rounded-full border border-secondary/40 text-secondary text-xs uppercase font-label-caps hover:bg-secondary/10 transition-colors font-bold"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div className="flex flex-col gap-2">
                  <label className="font-label-caps text-xs text-on-surface uppercase tracking-wider font-semibold" htmlFor="name">
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                    placeholder="Enter your full name"
                    className="bg-[#112240] border border-white/10 rounded-xl px-4 py-3.5 text-on-surface font-body-md focus:outline-none input-glow transition-all text-sm"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="font-label-caps text-xs text-on-surface uppercase tracking-wider font-semibold" htmlFor="email">
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                    placeholder="you@example.com"
                    className="bg-[#112240] border border-white/10 rounded-xl px-4 py-3.5 text-on-surface font-body-md focus:outline-none input-glow transition-all text-sm"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="font-label-caps text-xs text-on-surface uppercase tracking-wider font-semibold" htmlFor="message">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows="4"
                    required
                    value={formData.message}
                    onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                    placeholder="How can our clinical team assist your hydration journey?"
                    className="bg-[#112240] border border-white/10 rounded-xl px-4 py-3.5 text-on-surface font-body-md focus:outline-none input-glow transition-all resize-none text-sm"
                  />
                </div>

                <button
                  type="submit"
                  className="bg-[#64FFDA] text-[#0A192F] font-bold rounded-full py-4 px-8 font-label-caps text-xs tracking-wider uppercase hover:shadow-[0_0_25px_rgba(100,255,218,0.5)] hover:-translate-y-0.5 transition-all duration-300 w-full flex items-center justify-center gap-2 mt-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Talk to AQUORA Clinical Team</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
