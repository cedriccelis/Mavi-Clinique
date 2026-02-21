import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { BRAND } from '../constants/brand';

const protocols = [
  {
    num: "01",
    title: "Contour Protocol",
    desc: "Voor wie merkt dat definitie vervaagt.",
    list: ["HIFU lifting.", "Kaaklijn. Onderkin. Hals."],
    footer: ["Geen filler-effect.", "Wel structurele stimulatie."],
    cta: BRAND.cta.main
  },
  {
    num: "02",
    title: "Collagen Protocol",
    desc: "Voor wie textuur en elasticiteit wil verbeteren.",
    list: ["Microneedling.", "RF tightening.", "Opbouw in fases."],
    footer: ["Geen losse sessies.", "Altijd een plan."],
    cta: BRAND.cta.main
  },
  {
    num: "03",
    title: "Maintenance Protocol",
    desc: "Voor wie begrijpt dat onderhoud geen luxe is.",
    list: ["Hydrafacial in routine.", "Balans. Hydratatie. Controle."],
    footer: ["Glow is het gevolg van consistentie."],
    cta: BRAND.cta.maintenance
  }
];

export function System() {
  return (
    <section className="py-32 bg-stone-50 text-stone-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-24 text-center">
          <h2 className="text-4xl md:text-5xl font-serif">De Protocols</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          {protocols.map((p, i) => (
            <motion.div 
              key={p.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
              className="flex flex-col h-full bg-white p-10 border border-stone-200 hover:border-stone-400 transition-colors"
            >
              <div className="text-6xl font-serif text-stone-200 mb-8">{p.num}</div>
              <h3 className="text-xl font-medium mb-4 uppercase tracking-wide">{p.title}</h3>
              <p className="text-stone-500 mb-8 font-light italic">{p.desc}</p>
              
              <ul className="space-y-4 mb-12 flex-grow">
                {p.list.map((item, j) => (
                  <li key={j} className="flex items-center text-sm font-light text-stone-800">
                    <span className="w-1.5 h-1.5 bg-stone-900 rounded-full mr-4 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>

              <div className="pt-8 border-t border-stone-200 space-y-3 mb-10">
                {p.footer.map((f, j) => (
                  <p key={j} className="text-xs uppercase tracking-widest text-stone-500 font-medium">{f}</p>
                ))}
              </div>

              <Link 
                to="/consult"
                onClick={() => console.log('Event: click_consult_cta')}
                className="inline-flex items-center justify-center w-full py-4 text-xs uppercase tracking-widest text-white bg-stone-900 hover:bg-stone-800 transition-colors mt-auto"
              >
                {p.cta}
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
