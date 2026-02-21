import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { BRAND } from '../constants/brand';

const protocols = [
  {
    num: "01",
    title: "Contour Protocol",
    desc: "Voor verlies van definitie in:",
    list: ["Kaaklijn", "Onderkin", "Hals"],
    footer: ["Niet-invasieve stimulatie.", "Natuurlijke lift.", "Geleidelijke opbouw."],
    cta: BRAND.cta.main
  },
  {
    num: "02",
    title: "Collagen Protocol",
    desc: "Voor huidversteviging en textuur.",
    list: ["Microneedling trajecten", "Collageenstimulatie", "Elastine-ondersteuning"],
    footer: ["Geen losse sessies.", "Altijd een plan."],
    cta: BRAND.cta.main
  },
  {
    num: "03",
    title: "Maintenance Protocol",
    desc: "Structureel onderhoud van huidkwaliteit.",
    list: ["Hydrafacial", "Diepte-reiniging", "Hydratatiebalans"],
    footer: ["Glow is het gevolg.", "Structuur is de basis."],
    cta: BRAND.cta.maintenance
  }
];

export function System() {
  return (
    <section className="py-32 bg-stone-100 text-stone-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-24">
          <h2 className="text-xs uppercase tracking-[0.2em] font-medium text-stone-500 mb-6">Our System</h2>
          <p className="text-4xl md:text-5xl font-serif">Drie pijlers voor structurele verbetering.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          {protocols.map((p, i) => (
            <motion.div 
              key={p.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
              className="flex flex-col h-full"
            >
              <div className="text-7xl font-serif text-stone-300 mb-10">{p.num}</div>
              <h3 className="text-xl font-medium mb-4 uppercase tracking-wide">{p.title}</h3>
              <p className="text-stone-600 mb-8 font-light">{p.desc}</p>
              
              <ul className="space-y-4 mb-16 flex-grow">
                {p.list.map((item, j) => (
                  <li key={j} className="flex items-center text-sm font-light">
                    <span className="w-1.5 h-1.5 bg-stone-900 rounded-full mr-4" />
                    {item}
                  </li>
                ))}
              </ul>

              <div className="pt-8 border-t border-stone-300 space-y-3 mb-8">
                {p.footer.map((f, j) => (
                  <p key={j} className="text-xs uppercase tracking-widest text-stone-500 font-medium">{f}</p>
                ))}
              </div>

              <Link 
                to="/consult"
                onClick={() => console.log('Event: click_consult_cta')}
                className="inline-flex items-center text-xs uppercase tracking-widest text-stone-900 border-b border-stone-900 pb-1 hover:text-stone-500 hover:border-stone-500 transition-colors self-start mt-auto"
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
