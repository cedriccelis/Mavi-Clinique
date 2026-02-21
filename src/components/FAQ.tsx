import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    q: "Waarom bieden jullie geen losse facials aan?",
    a: "Omdat een eenmalige behandeling slechts een tijdelijke 'glow' geeft. Wij geloven in structurele huidverbetering. Dat vereist een strategie, opbouw en consistentie. Daarom werken we uitsluitend met protocollen en trajecten."
  },
  {
    q: "Doen jullie ook injectables (botox/fillers)?",
    a: "Nee. Onze expertise ligt volledig bij niet-invasieve huidverbetering. We stimuleren de huid om zélf collageen en elastine aan te maken, voor een natuurlijke lift zonder het risico op overcorrectie."
  },
  {
    q: "Hoeveel behandelingen heb ik nodig?",
    a: "Dit hangt af van je huidige huidconditie, leeftijd en doelen. Tijdens het Skin Strategy Consult maken we een huidanalyse en stellen we een persoonlijk plan op. Meestal zien we de beste resultaten bij een traject van 3 tot 6 maanden."
  },
  {
    q: "Wat houdt het Skin Strategy Consult in?",
    a: "Tijdens dit consult bespreken we je wensen, analyseren we je huid (elasticiteit, textuur, volume) en bepalen we welk protocol (Contour, Collagen of Maintenance) het beste bij je past. Je krijgt een eerlijk en haalbaar plan."
  }
];

export function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section className="py-32 bg-stone-50 text-stone-900">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-xs uppercase tracking-[0.2em] font-medium text-stone-500 mb-6">FAQ</h2>
          <p className="text-4xl md:text-5xl font-serif">Veelgestelde vragen.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="border-b border-stone-200">
              <button
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                className="w-full py-8 flex items-center justify-between text-left group"
              >
                <h3 className="text-xl md:text-2xl font-serif text-stone-800 group-hover:text-stone-500 transition-colors pr-8">
                  {faq.q}
                </h3>
                <ChevronDown 
                  className={`w-6 h-6 text-stone-400 transition-transform duration-300 flex-shrink-0 ${
                    openIdx === idx ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <AnimatePresence>
                {openIdx === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden"
                  >
                    <p className="pb-8 text-stone-600 font-light leading-relaxed">
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
