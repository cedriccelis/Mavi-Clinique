import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export function Brows() {
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
            <p className="text-xs uppercase tracking-[0.3em] text-stone-500 font-medium mb-8">Brows Shaping & Tinting</p>
            <h1 className="text-5xl md:text-7xl font-serif tracking-tight leading-tight mb-8 text-stone-900">
              Perfect gevormde wenkbrauwen.<br />
              <span className="italic text-stone-500">Zonder overdrijving.</span>
            </h1>
            <p className="text-xl font-light text-stone-600 mb-12 max-w-2xl mx-auto">
              Professionele shaping en tinting voor een natuurlijke, verzorgde uitstraling.
            </p>
            
            <button 
              onClick={() => console.log('Event: click_book_brows')}
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
                Wenkbrauwen bepalen de<br />
                <span className="italic text-stone-400">expressie van je gezicht.</span>
              </h2>
              <p className="text-xl font-light text-stone-600 mb-8">
                Bij Mavi werken we met:
              </p>
              <ul className="space-y-4 text-lg font-light border-l border-stone-200 pl-8 mb-8">
                <li>Nauwkeurige vormbepaling</li>
                <li>Gecontroleerde wax- of epilatietechniek</li>
                <li>Kleur afgestemd op huid- en haartype</li>
                <li>Evenwichtige, natuurlijke afwerking</li>
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-stone-50 p-12 border border-stone-100"
            >
              <p className="text-2xl font-serif italic text-stone-900 mb-4">
                Geen overdreven, harde lijnen.
              </p>
              <p className="text-lg font-light text-stone-600">
                Wel subtiele versterking van je gelaat.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 2 - TINTING + SHAPING */}
      <section className="py-32 bg-[#E8DDD4] text-stone-900">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-serif mb-8">Tinting + Shaping</h2>
              <p className="text-xl font-light text-stone-700 mb-8">Deze behandeling omvat:</p>
              <ul className="space-y-4 text-lg font-light text-stone-800 mb-12">
                <li className="flex items-center"><span className="w-1.5 h-1.5 bg-stone-900 rounded-full mr-4" /> Vormcorrectie van de wenkbrauwen</li>
                <li className="flex items-center"><span className="w-1.5 h-1.5 bg-stone-900 rounded-full mr-4" /> Professioneel epileren of waxen</li>
                <li className="flex items-center"><span className="w-1.5 h-1.5 bg-stone-900 rounded-full mr-4" /> Kleuren van de wenkbrauwen</li>
                <li className="flex items-center"><span className="w-1.5 h-1.5 bg-stone-900 rounded-full mr-4" /> Nette, symmetrische afwerking</li>
              </ul>
              
              <div className="flex space-x-12 pt-8 border-t border-stone-400/30 text-stone-900">
                <div>
                  <p className="text-sm uppercase tracking-widest text-stone-600 mb-1">Duur</p>
                  <p className="text-2xl font-serif">30 min</p>
                </div>
                <div>
                  <p className="text-sm uppercase tracking-widest text-stone-600 mb-1">Prijs</p>
                  <p className="text-2xl font-serif">€30</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white p-12 shadow-xl shadow-stone-900/5"
            >
              <h3 className="text-sm uppercase tracking-widest font-medium text-stone-500 mb-8">Resultaat:</h3>
              <ul className="space-y-6 text-xl font-light text-stone-800">
                <li className="flex items-center"><span className="text-stone-400 mr-4">✔</span> Meer definitie</li>
                <li className="flex items-center"><span className="text-stone-400 mr-4">✔</span> Vollere uitstraling</li>
                <li className="flex items-center"><span className="text-stone-400 mr-4">✔</span> Minder dagelijkse make-up nodig</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 3 - ONDERHOUD & VOOR WIE */}
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
              <p className="text-lg font-light text-stone-600 mb-6">Wij adviseren onderhoud om de 3–5 weken, afhankelijk van haargroei en gewenste intensiteit.</p>
              <p className="text-sm uppercase tracking-widest font-medium text-stone-500 mb-4">Regelmatige verzorging zorgt voor:</p>
              <ul className="space-y-3 text-stone-800 font-light">
                <li className="flex items-center"><span className="w-1.5 h-1.5 bg-stone-400 rounded-full mr-4" /> Strakke vorm</li>
                <li className="flex items-center"><span className="w-1.5 h-1.5 bg-stone-400 rounded-full mr-4" /> Constante kleur</li>
                <li className="flex items-center"><span className="w-1.5 h-1.5 bg-stone-400 rounded-full mr-4" /> Natuurlijke balans</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-stone-50 p-12 border border-stone-200"
            >
              <h2 className="text-2xl font-serif mb-6">Voor wie is dit geschikt?</h2>
              <p className="text-sm uppercase tracking-widest font-medium text-stone-500 mb-4">Ideaal voor wie:</p>
              <ul className="space-y-4 text-stone-800 font-light">
                <li className="flex items-start"><span className="text-stone-400 mr-4">—</span> Meer definitie rond de ogen wenst</li>
                <li className="flex items-start"><span className="text-stone-400 mr-4">—</span> Lichte of ongelijkmatige wenkbrauwen heeft</li>
                <li className="flex items-start"><span className="text-stone-400 mr-4">—</span> Tijd wil besparen in de ochtendroutine</li>
                <li className="flex items-start"><span className="text-stone-400 mr-4">—</span> Een verzorgde, minimalistische look verkiest</li>
              </ul>
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
              Veel cliënten combineren brow shaping met:
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-8 text-sm uppercase tracking-widest font-medium text-stone-800 mb-12">
              <span>Maintenance Protocol</span>
              <span className="hidden sm:block w-1.5 h-1.5 bg-stone-400 rounded-full" />
              <span>Hydrafacial</span>
              <span className="hidden sm:block w-1.5 h-1.5 bg-stone-400 rounded-full" />
              <span>Manicure of pedicure</span>
            </div>

            <p className="text-xl font-serif italic text-stone-900 mb-12">
              Wil je meer dan alleen verzorging?
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
              Subtiele aanpassing.<br />
              <span className="italic text-stone-400">Groot verschil.</span>
            </h2>
            <p className="text-lg font-light text-stone-300 mb-12">
              Boek je afspraak eenvoudig online via ons boekingssysteem.
            </p>
            <button 
              onClick={() => console.log('Event: click_book_brows')}
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
