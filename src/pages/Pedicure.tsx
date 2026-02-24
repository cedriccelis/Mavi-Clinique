import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export function Pedicure() {
  const treatments = [
    {
      name: 'Basis pedicure',
      description: 'Complete verzorging van de voeten met focus op nagels en huid.',
      duration: '45 min',
      price: '€38'
    },
    {
      name: 'Pedicure + gellak',
      description: 'Basis pedicure met duurzame kleurafwerking voor een langdurig resultaat.',
      duration: '45 min',
      price: '€55'
    },
    {
      name: 'Pedicure + BIAB',
      description: 'Extra versteviging van de nagel gecombineerd met volledige pedicure.',
      duration: '45 min',
      price: '€57'
    },
    {
      name: 'Pedicure + verwijderen gellak',
      description: 'Pedicure inclusief professioneel verwijderen van bestaande gellak.',
      duration: '45 min',
      price: '€43'
    }
  ];

  return (
    <div className="bg-stone-50 min-h-screen pt-24">
      {/* HERO */}
      <section className="relative py-32 bg-stone-100 text-stone-900 overflow-hidden border-b border-stone-200">
        <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-xs uppercase tracking-[0.3em] text-stone-500 font-medium mb-8">Pedicure</p>
            <h1 className="text-5xl md:text-7xl font-serif tracking-tight leading-tight mb-8 text-stone-900">
              Verzorgde voeten,<br />
              <span className="italic text-stone-500">het hele jaar door.</span>
            </h1>
            <p className="text-xl font-light text-stone-600 mb-12 max-w-2xl mx-auto">
              Professionele pedicure met focus op hygiëne, comfort en een langdurig verzorgd resultaat.
            </p>
            
            <button 
              onClick={() => console.log('Event: click_book_pedicure')}
              className="inline-flex items-center justify-center px-10 py-5 bg-stone-900 text-white text-xs uppercase tracking-[0.2em] font-medium hover:bg-stone-800 transition-colors"
            >
              Boek je afspraak online
            </button>
          </motion.div>
        </div>
      </section>

      {/* SECTION 1 - ONZE AANPAK */}
      <section className="py-32 bg-white text-stone-900">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-serif leading-tight mb-8">
                Een pedicure is<br />
                <span className="italic text-stone-400">meer dan esthetiek.</span>
              </h2>
              <p className="text-xl font-light text-stone-600 mb-8">
                Wij werken zorgvuldig aan:
              </p>
              <ul className="space-y-4 text-lg font-light border-l border-stone-200 pl-8 mb-8">
                <li>Nagelverzorging</li>
                <li>Verzorging van nagelriemen</li>
                <li>Verwijderen van overtollige eelt</li>
                <li>Netjes en professioneel afwerken</li>
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-stone-50 p-12 border border-stone-100"
            >
              <p className="text-2xl font-serif italic text-stone-900">
                Comfort, hygiëne en precisie staan centraal.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 2 - ONZE BEHANDELINGEN */}
      <section className="py-32 bg-[#E8DDD4] text-stone-900">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-serif">Onze Behandelingen</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {treatments.map((treatment, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-10 shadow-sm border border-stone-200 flex flex-col"
              >
                <h3 className="text-2xl font-serif mb-4 text-stone-900">{treatment.name}</h3>
                <p className="text-stone-600 font-light mb-8 flex-grow">{treatment.description}</p>
                <div className="flex justify-between items-center pt-6 border-t border-stone-200 text-sm font-medium text-stone-800">
                  <span className="uppercase tracking-widest text-stone-500 text-xs">{treatment.duration}</span>
                  <span className="text-lg">{treatment.price}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3 - ONDERHOUD & KWALITEIT */}
      <section className="py-32 bg-white text-stone-900">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-stone-50 p-12 border border-stone-200"
            >
              <h2 className="text-2xl font-serif mb-6">Onderhoud</h2>
              <p className="text-lg font-light text-stone-600 mb-6">Wij adviseren pedicure om de 4–6 weken, afhankelijk van huidconditie en persoonlijke voorkeur.</p>
              <p className="text-sm uppercase tracking-widest font-medium text-stone-500 mb-4">Consistente verzorging voorkomt:</p>
              <ul className="space-y-3 text-stone-800 font-light mb-8">
                <li className="flex items-center"><span className="w-1.5 h-1.5 bg-stone-400 rounded-full mr-4" /> Overmatige eeltvorming</li>
                <li className="flex items-center"><span className="w-1.5 h-1.5 bg-stone-400 rounded-full mr-4" /> Ingroeiende nagels</li>
                <li className="flex items-center"><span className="w-1.5 h-1.5 bg-stone-400 rounded-full mr-4" /> Ongelijkmatige nagelgroei</li>
              </ul>
              <p className="text-lg font-serif italic text-stone-900 pt-6 border-t border-stone-200">
                Verzorging is onderhoud, geen eenmalige oplossing.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-stone-50 p-12 border border-stone-200"
            >
              <h2 className="text-2xl font-serif mb-6">Hygiëne & Kwaliteit</h2>
              <p className="text-stone-600 font-light mb-6">Wij werken met:</p>
              <ul className="space-y-3 text-stone-800 font-light mb-8">
                <li className="flex items-center"><span className="w-1.5 h-1.5 bg-stone-400 rounded-full mr-4" /> Gedesinfecteerde instrumenten</li>
                <li className="flex items-center"><span className="w-1.5 h-1.5 bg-stone-400 rounded-full mr-4" /> Professionele producten</li>
                <li className="flex items-center"><span className="w-1.5 h-1.5 bg-stone-400 rounded-full mr-4" /> Zorgvuldige voorbereiding</li>
                <li className="flex items-center"><span className="w-1.5 h-1.5 bg-stone-400 rounded-full mr-4" /> Correcte afwerking</li>
              </ul>
              <p className="text-lg font-serif italic text-stone-900 pt-6 border-t border-stone-200">
                Rustige aanpak. Geen haastwerk.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 4 - COMBINEER MET SKIN */}
      <section className="py-32 bg-stone-100 text-stone-900 text-center">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-serif mb-8">Combineer met Skin</h2>
            <p className="text-xl font-light text-stone-600 mb-8">
              Veel cliënten combineren hun pedicure met:
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-8 text-sm uppercase tracking-widest font-medium text-stone-800 mb-12">
              <span>Maintenance Protocol</span>
              <span className="hidden sm:block w-1.5 h-1.5 bg-stone-400 rounded-full" />
              <span>Hydrafacial</span>
              <span className="hidden sm:block w-1.5 h-1.5 bg-stone-400 rounded-full" />
              <span>Skin Strategy Consult</span>
            </div>

            <p className="text-xl font-serif italic text-stone-900 mb-12">
              Benieuwd wat jouw huid nodig heeft?
            </p>
            <Link 
              to="/analysis"
              className="inline-flex items-center justify-center px-8 py-4 border border-stone-900 text-stone-900 text-xs uppercase tracking-widest font-medium hover:bg-stone-900 hover:text-white transition-colors"
            >
              Ontdek onze Skin Analysis
            </Link>
          </motion.div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-32 bg-stone-900 text-white text-center">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-serif mb-8">
              Verzorgde voeten<br />
              <span className="italic text-stone-400">beginnen met precisie.</span>
            </h2>
            <p className="text-lg font-light text-stone-300 mb-12">
              Boek je pedicure eenvoudig online via ons boekingssysteem.
            </p>
            <button 
              onClick={() => console.log('Event: click_book_pedicure')}
              className="inline-flex items-center justify-center px-12 py-5 bg-[#E8DDD4] text-stone-900 text-xs uppercase tracking-[0.2em] font-bold hover:bg-white transition-colors"
            >
              Boek online
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
