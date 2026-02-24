import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export function Manicure() {
  const treatments = [
    {
      name: 'Gel',
      description: 'Voor wie houdt van een strakke, duurzame kleur met natuurlijke lengte.',
      duration: '60 min',
      price: '€58'
    },
    {
      name: 'Extra long gel',
      description: 'Voor langere nagels met extra versteviging en balans.',
      duration: '60 min',
      price: '€63'
    },
    {
      name: 'BIAB (Builder in a Bottle)',
      description: 'Versteviging van de natuurlijke nagel met een subtiele, verzorgde look. Ideaal voor wie natuurlijke groei wil ondersteunen.',
      duration: '60 min',
      price: '€60'
    },
    {
      name: 'Babyboom / French',
      description: 'Klassieke, elegante afwerking met zachte overloop of strakke French.',
      duration: '75 min',
      price: '€65'
    },
    {
      name: 'Nieuwe set gel + verlenging',
      description: 'Voor wie extra lengte of vormcorrectie wenst.',
      duration: '75 min',
      price: '€80'
    },
    {
      name: 'Verwijderen gel / BIAB',
      description: 'Professioneel verwijderen zonder schade aan de natuurlijke nagel.',
      duration: '30 min',
      price: '€30'
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
            <p className="text-xs uppercase tracking-[0.3em] text-stone-500 font-medium mb-8">Manicure & Gelnagels</p>
            <h1 className="text-5xl md:text-7xl font-serif tracking-tight leading-tight mb-8 text-stone-900">
              Altijd perfect<br />
              <span className="italic text-stone-500">verzorgde nagels.</span>
            </h1>
            <p className="text-xl font-light text-stone-600 mb-12 max-w-2xl mx-auto">
              Gelnagels en BIAB met focus op precisie, duurzaamheid en een verzorgde uitstraling.
            </p>
            
            <button 
              onClick={() => console.log('Event: click_book_manicure')}
              className="inline-flex items-center justify-center px-10 py-5 bg-stone-900 text-white text-xs uppercase tracking-[0.2em] font-medium hover:bg-stone-800 transition-colors"
            >
              Boek je afspraak online
            </button>
          </motion.div>
        </div>
      </section>

      {/* SECTION 1 - ONZE NAGELBEHANDELINGEN */}
      <section className="py-32 bg-white text-stone-900">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-1"
            >
              <h2 className="text-3xl md:text-4xl font-serif mb-8">Onze Nagelbehandelingen</h2>
              <div className="space-y-6 text-lg font-light text-stone-600">
                <p>Wij werken met een duidelijke structuur en professionele voorbereiding van de natuurlijke nagel.</p>
                <p>Hygiëne, correcte opbouw en een egale afwerking staan centraal.</p>
                <div className="pt-6 border-t border-stone-200 text-stone-800 font-medium">
                  <p>Geen haastwerk.</p>
                  <p>Geen overmatige beschadiging van de nagelplaat.</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              {treatments.map((treatment, index) => (
                <div key={index} className="bg-stone-50 p-8 border border-stone-200 flex flex-col">
                  <h3 className="text-xl font-serif mb-4 text-stone-900">{treatment.name}</h3>
                  <p className="text-stone-600 font-light mb-8 flex-grow">{treatment.description}</p>
                  <div className="flex justify-between items-center pt-4 border-t border-stone-200 text-sm font-medium text-stone-800">
                    <span className="uppercase tracking-widest text-stone-500 text-xs">{treatment.duration}</span>
                    <span>{treatment.price}</span>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 2 - ONDERHOUD & KWALITEIT */}
      <section className="py-32 bg-stone-100 text-stone-900">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-white p-12 shadow-sm border border-stone-200"
            >
              <h2 className="text-2xl font-serif mb-6">Onderhoud</h2>
              <p className="text-lg font-light text-stone-600 mb-6">Wij adviseren onderhoud om de 3–4 weken.</p>
              <p className="text-stone-600 font-light mb-8">Correct onderhoud voorkomt lifting en beschadiging en houdt de nagelplaat gezond.</p>
              <p className="text-lg font-serif italic text-stone-900 pt-6 border-t border-stone-200">
                Consistentie zorgt voor het mooiste resultaat.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white p-12 shadow-sm border border-stone-200"
            >
              <h2 className="text-2xl font-serif mb-6">Kwaliteit & Hygiëne</h2>
              <p className="text-stone-600 font-light mb-6">Wij werken met:</p>
              <ul className="space-y-3 text-stone-800 font-light mb-8">
                <li className="flex items-center"><span className="w-1.5 h-1.5 bg-stone-400 rounded-full mr-4" /> Gedesinfecteerde materialen</li>
                <li className="flex items-center"><span className="w-1.5 h-1.5 bg-stone-400 rounded-full mr-4" /> Correcte voorbereiding</li>
                <li className="flex items-center"><span className="w-1.5 h-1.5 bg-stone-400 rounded-full mr-4" /> Professionele producten</li>
                <li className="flex items-center"><span className="w-1.5 h-1.5 bg-stone-400 rounded-full mr-4" /> Zorgvuldige afwerking</li>
              </ul>
              <p className="text-lg font-serif italic text-stone-900 pt-6 border-t border-stone-200">
                Kwaliteit boven snelheid.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 3 - SUBTIELE DOORSTROOM */}
      <section className="py-32 bg-[#E8DDD4] text-stone-900 text-center">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-2xl font-light text-stone-800 mb-8">
              Veel cliënten combineren hun nagelafspraak met een huidbehandeling of Maintenance.
            </p>
            <p className="text-xl font-serif italic text-stone-900 mb-12">
              Benieuwd wat jouw huid nodig heeft?
            </p>
            <Link 
              to="/analysis"
              className="inline-flex items-center justify-center px-8 py-4 border border-stone-900 text-stone-900 text-xs uppercase tracking-widest font-medium hover:bg-stone-900 hover:text-[#E8DDD4] transition-colors"
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
              Strakke nagels.<br />
              <span className="italic text-stone-400">Professionele afwerking.</span>
            </h2>
            <p className="text-lg font-light text-stone-300 mb-12">
              Boek je afspraak eenvoudig online via ons boekingssysteem.
            </p>
            <button 
              onClick={() => console.log('Event: click_book_manicure')}
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
