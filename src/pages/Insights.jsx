import React, { useState } from 'react';
import { useHydration } from '../context/HydrationContext';
import { BookOpen, ArrowRight, Sparkles, Activity, FlaskConical, X, Clock, UserCheck } from 'lucide-react';

export default function Insights() {
  const { setCurrentScreen } = useHydration();
  const [selectedArticle, setSelectedArticle] = useState(null);

  const articles = [
    {
      id: 1,
      tag: 'Hydration Basics',
      title: 'How much water should you actually drink?',
      summary: 'Beyond the traditional 8 glasses a day, discover the precise scientific formulation for your unique physiology and lifestyle.',
      readTime: '4 min read',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuArbdwUAqPVXTnJjLcvtd4hQ5oSDIPHoNKDhAZE2lPUjmalogaZyOQH07zvNAhG3Nfe2DgoxL6pgWBDk-4GvEgF1nf7zbmqlriUYv_25PtOFb6QTbk7TbVucvTH5qAadBbHM6jv-Okee6Ri-DPWcRIzxFQcyLWJx187AYcA_9projT0YZx0jm5SEQX0sFHC1Ng1BxmJzAykc-38mDMSe5dxtscINlehM6A9N0z68CTCbbkUXeNi_mY',
      cols: 'md:col-span-8',
      content: `The ubiquitous "8x8 rule" (eight 8-ounce glasses daily) originated in 1945 without rigorous empirical backing. Modern clinical research shows individual requirements vary between 2.2L to over 4.5L daily depending on four core variables:
      
1. **Lean Body Mass**: Muscle tissue is approximately 75% water, whereas adipose tissue contains only about 10%. High lean mass creates greater intracellular fluid demands.
2. **Metabolic Excretion & Respiration**: Basal metabolic rate dictates insensible water loss through lung evaporation and transdermal diffusion.
3. **Electrolyte Homeostasis**: Intake must be matched with sodium, potassium, and chloride to avoid cellular hyper- or hypo-osmolality.
4. **Paced Chrono-Hydration**: Drinking 1000ml in one sitting causes rapid renal filtration before cellular aquaporins can transport water molecules into intracellular fluid. Pacing 200-300ml per hour ensures 90%+ absorption efficacy.`,
    },
    {
      id: 2,
      tag: 'Wellness',
      title: '5 signs you may not be drinking enough water.',
      summary: "Learn to decode your body's subtle signals before mild dehydration affects your cognitive and physical performance.",
      readTime: '3 min read',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAnLy0_8_uPsXOE_OksZyIAUiVmjiEnVcPBEDkJh4jmlQVU9t1R4rfxdlEmsbOy7_yfV2hpU2bM8hmmbtMcCtk-mBMbC4uSf8MGZMPl-xGDPkjiRcRd3lRI4x6qkKCFzG8fJPgwqlQSD4GFqjpu3pjTua7s5aIGmLRP4KcttGSajIuRqx_COppDGdsncvFZTmXvHp0ocwIM6HjQL8B7KV4wr7OjyYVWKVVmAXHtxw9qkpuZ06mJpzk',
      cols: 'md:col-span-4',
      content: `Mild dehydration (1-2% body weight fluid loss) triggers neuro-cognitive degradation before conscious thirst manifests. Look out for:
      
• **Late-afternoon cognitive fatigue**: Brain parenchyma volume shrinks slightly during fluid depletion, triggering tension and brain fog.
• **Post-meal sugar cravings**: When glycogenolysis is impaired by low liver water availability, the body signals false carbohydrate hunger.
• **Elevated resting heart rate**: Reduced plasma volume forces the heart to beat faster to maintain blood pressure and oxygen delivery.
• **Dry mucosal barriers**: Oral and ocular dryness indicate systemic fluid rationing.
• **Dark amber urine color**: Concentrated specific gravity above 1.020 signals elevated renal preservation stress.`,
    },
    {
      id: 3,
      tag: 'Performance',
      title: 'Does exercise change your hydration needs?',
      summary: 'Understanding sweat rate, thermal regulation, and how to calibrate your fluid intake for peak athletic exertion.',
      readTime: '5 min read',
      icon: Activity,
      cols: 'md:col-span-6',
      content: `During vigorous physical activity, muscular work generates heat, converting only 20-25% of energy into mechanical motion while 75-80% is dissipated as thermal energy.

• **Sweat Rates**: Average athletes lose between 0.8L to 2.4L of sweat per hour in warm climates.
• **Pre-Hydration Protocol**: Consume 5-7 ml per kg of body weight 4 hours prior to exertion.
• **During Exertion**: Ingest 150-250 ml of hypotonic fluid every 15-20 minutes.
• **Post-Exercise Recovery**: Weigh yourself pre- and post-workout. For every 1 kg lost, rehydrate with 1.25 to 1.5 Litres of water combined with balanced electrolytes.`,
    },
    {
      id: 4,
      tag: 'Nutrition Science',
      title: 'Water, electrolytes & cellular osmolarity.',
      summary: 'Why plain distilled water isn’t always enough. Delve into the critical role of sodium, potassium, and magnesium.',
      readTime: '4 min read',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDoD_KTQMHybSRJrFKJE27_xWACQsDnS2qWfQ6U4TU1eUnMlL-31zCcfDVo_OZc8UP_NC1TOL8h-5R7K3HjI6SCzw6lYhkR9RmlcpJfkkfnK1nwPhf3XTxOlErNF8tmj52ipbhhQViVECrXIHlVXNm4ejQydCOXEDgLsoE4yJFH41TPk-t8otE_Ctrl8cAx_311lHvVheHLxwHfcJEN5IUYcpsV8BuBC35FXgrXGY55EzyOLiBNAQ8',
      icon: FlaskConical,
      cols: 'md:col-span-6',
      content: `Water follows solutes through semipermeable cellular membranes. Without adequate osmolyte concentration:

• **The Sodium-Potassium Pump**: Intracellular fluid relies on potassium, while extracellular fluid relies on sodium. Imbalance creates cellular edema or shrinkage.
• **Hyponatremia Risk**: Drinking excessive plain water without electrolytes during intense sweat loss dilutes blood sodium, potentially causing nausea, dizziness, or cerebral swelling.
• **Magnesium Co-factor**: Magnesium acts as an enzymatic gatekeeper for cellular ATP and muscle contraction relaxation phases.`,
    },
  ];

  return (
    <div className="min-h-screen pt-28 pb-24 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto w-full bg-[#0f1417] text-on-background">
      {/* Header Section */}
      <section className="mb-16 text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 border border-secondary/20 mb-4">
          <BookOpen className="w-3.5 h-3.5 text-secondary" />
          <span className="font-label-caps text-xs text-secondary font-semibold uppercase tracking-wider">
            Hydration Academy & Science
          </span>
        </div>
        <h1 className="font-display-lg text-4xl sm:text-5xl font-extrabold text-on-background mb-4">
          AQUORA Insights
        </h1>
        <p className="font-body-lg text-base md:text-lg text-on-surface-variant">
          Simple nutrition knowledge and clinical physiological principles for better everyday hydration.
        </p>
      </section>

      {/* Bento Grid Layout */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-8">
        {articles.map((article) => {
          const Icon = article.icon;
          return (
            <article
              key={article.id}
              onClick={() => setSelectedArticle(article)}
              className={`glass-card rounded-3xl overflow-hidden ${article.cols} flex flex-col group cursor-pointer hover:border-secondary/40 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)] transition-all duration-300 border border-white/10 relative`}
            >
              {article.image ? (
                <div className="h-60 md:h-72 w-full relative overflow-hidden bg-primary-container">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80 mix-blend-screen"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F] via-[#0A192F]/60 to-transparent" />
                </div>
              ) : (
                <div className="absolute top-0 right-0 w-40 h-40 bg-secondary/10 blur-3xl rounded-full pointer-events-none" />
              )}

              <div className={`p-8 md:p-10 flex-grow flex flex-col justify-between relative z-10 ${article.image ? '-mt-16' : ''}`}>
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-label-caps text-xs text-secondary font-bold uppercase tracking-widest">
                      {article.tag}
                    </span>
                    <span className="text-xs text-on-surface-variant flex items-center gap-1 font-mono">
                      <Clock className="w-3 h-3 text-secondary" />
                      {article.readTime}
                    </span>
                  </div>

                  <h2 className="font-headline-md text-2xl md:text-3xl font-bold text-on-background mb-3 group-hover:text-secondary transition-colors leading-tight">
                    {article.title}
                  </h2>

                  <p className="font-body-md text-sm md:text-base text-on-surface-variant mb-6 leading-relaxed">
                    {article.summary}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-white/5 mt-auto">
                  <div className="flex items-center text-secondary font-label-caps text-xs uppercase tracking-wider font-bold group-hover:underline">
                    <span>Read Full Guide</span>
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                  {Icon && (
                    <div className="w-10 h-10 rounded-xl bg-secondary/10 border border-secondary/20 flex items-center justify-center text-secondary">
                      <Icon className="w-5 h-5" />
                    </div>
                  )}
                </div>
              </div>
            </article>
          );
        })}
      </section>

      {/* Article Reader Modal */}
      {selectedArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4 animate-in fade-in duration-200">
          <div className="glass-panel max-w-2xl w-full max-h-[85vh] overflow-y-auto rounded-3xl p-8 md:p-10 border border-secondary/30 shadow-2xl relative">
            <button
              onClick={() => setSelectedArticle(null)}
              className="absolute top-6 right-6 p-2 rounded-full bg-white/5 hover:bg-white/15 text-on-surface transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 border border-secondary/20 mb-4">
              <span className="font-label-caps text-xs text-secondary font-bold uppercase tracking-wider">
                {selectedArticle.tag}
              </span>
            </div>

            <h2 className="font-headline-lg text-2xl md:text-4xl font-extrabold text-on-surface mb-4">
              {selectedArticle.title}
            </h2>

            <div className="flex items-center gap-4 text-xs text-on-surface-variant pb-6 mb-6 border-b border-white/10">
              <span className="flex items-center gap-1 font-mono">
                <Clock className="w-3.5 h-3.5 text-secondary" />
                {selectedArticle.readTime}
              </span>
              <span>•</span>
              <span className="text-secondary font-semibold">Reviewed by Dr. Maya Sharma</span>
            </div>

            <div className="font-body-md text-sm md:text-base text-on-surface-variant leading-relaxed whitespace-pre-line space-y-4">
              {selectedArticle.content}
            </div>

            <div className="mt-8 pt-6 border-t border-white/10 flex justify-between items-center">
              <button
                onClick={() => {
                  setSelectedArticle(null);
                  setCurrentScreen('calculator');
                }}
                className="bg-[#64FFDA] text-[#0A192F] font-bold px-6 py-2.5 rounded-full text-xs uppercase tracking-wider hover:shadow-[0_0_15px_rgba(100,255,218,0.5)] transition-all"
              >
                Calculate My Target
              </button>
              <button
                onClick={() => setSelectedArticle(null)}
                className="text-xs text-on-surface-variant hover:text-on-surface"
              >
                Close Article
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
