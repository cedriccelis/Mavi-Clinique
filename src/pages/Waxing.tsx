import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export function Waxing() {
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
            <p className="text-xs uppercase tracking-[0.3em] text-stone-500 font-medium mb-8">Waxing</p>
            <h1 className="text-5xl md:text-7xl font-serif tracking-tight leading-tight mb-8 text-stone-900">
              Snelle bijwerking.<br />
              <span className="italic text-stone-500">Efficiënt gecombineerd.</span>
            </h1>
            <p className="text-xl font-light text-stone-600 mb-12 max-w-2xl mx-auto">
              Waxing is bij Mavi uitsluitend beschikbaar als aanvullende service bij nagels of pedicure.
            </p>
            
            <button 
              onClick={() => console.log('Event: click_book_waxing')}
              className="inline-flex items-center justify-center px-10 py-5 bg-stone-900 text-white text-xs uppercase tracking-[0.2em] font-medium hover:bg-stone-800 transition-colors"
            >
              Boek in combinatie met je afspraak
            </button>
          </motion.div>
        </div>
      </section>

      {/* SECTION 1 - WAAROM ENKEL ALS AANVULLING? */}
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
                Waarom enkel<br />
                <span className="italic text-stone-400">als aanvulling?</span>
              </h2>
              <p className="text-xl font-light text-stone-600 mb-8">
                Onze focus ligt op:
              </p>
              <ul className="space-y-4 text-lg font-light border-l border-stone-200 pl-8 mb-8">
                <li>Structurele huidverbetering</li>
                <li>Laser Program</li>
                <li>Premium beauty-onderhoud</li>
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-stone-50 p-12 border border-stone-100"
            >
              <p className="text-xl font-medium text-stone-800 mb-6">
                Waxing is daarom geen aparte instroombehandeling meer.
              </p>
              <p className="text-lg font-light text-stone-600">
                We bieden het aan als praktische aanvulling voor bestaande cliënten tijdens hun afspraak.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 2 - BESCHIKBAAR IN COMBINATIE MET & ZONES */}
      <section className="py-32 bg-[#E8DDD4] text-stone-900">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-white p-12 shadow-xl shadow-stone-900/5"
            >
              <h2 className="text-2xl font-serif mb-8">Beschikbaar in combinatie met:</h2>
              <ul className="space-y-4 text-lg font-light text-stone-800 mb-8">
                <li className="flex items-center"><span className="w-1.5 h-1.5 bg-stone-900 rounded-full mr-4" /> Manicure & Gelnagels</li>
                <li className="flex items-center"><span className="w-1.5 h-1.5 bg-stone-900 rounded-full mr-4" /> Pedicure</li>
              </ul>
              <div className="pt-6 border-t border-stone-200">
                <p className="text-stone-900 font-medium uppercase tracking-widest text-sm">Niet afzonderlijk boekbaar.</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white p-12 shadow-xl shadow-stone-900/5"
            >
              <h2 className="text-2xl font-serif mb-8">Beschikbare Zones</h2>
              <p className="text-stone-600 font-light mb-6">Kleine zones zoals:</p>
              <ul className="space-y-4 text-lg font-light text-stone-800 mb-8">
                <li className="flex items-center"><span className="w-1.5 h-1.5 bg-stone-900 rounded-full mr-4" /> Bovenlip</li>
                <li className="flex items-center"><span className="w-1.5 h-1.5 bg-stone-900 rounded-full mr-4" /> Kin</li>
                <li className="flex items-center"><span className="w-1.5 h-1.5 bg-stone-900 rounded-full mr-4" /> Wenkbrauwzone</li>
                <li className="flex items-center"><span className="w-1.5 h-1.5 bg-stone-900 rounded-full mr-4" /> Kleine gelaatszones</li>
              </ul>
              <div className="pt-6 border-t border-stone-200">
                <p className="text-stone-600 font-light text-sm italic">Specifieke zones worden besproken tijdens je boeking.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 3 - HOE BOEKEN & KWALITEIT */}
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
              <h2 className="text-2xl font-serif mb-6">Hoe boeken?</h2>
              <p className="text-stone-600 font-light mb-6">Tijdens het online boeken van:</p>
              <div className="space-y-2 text-lg font-medium text-stone-900 mb-6">
                <p>Manicure</p>
                <p className="text-sm font-light text-stone-500 italic">of</p>
                <p>Pedicure</p>
              </div>
              <p className="text-stone-600 font-light mb-8">kan je waxing als extra service toevoegen.</p>
              <p className="text-lg font-serif italic text-stone-900 pt-6 border-t border-stone-200">
                Zo combineren we efficiënt binnen één afspraak.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-stone-50 p-12 border border-stone-200"
            >
              <h2 className="text-2xl font-serif mb-6">Kwaliteit & Hygiëne</h2>
              <p className="text-stone-600 font-light mb-6">Wij werken met:</p>
              <ul className="space-y-3 text-stone-800 font-light mb-8">
                <li className="flex items-center"><span className="w-1.5 h-1.5 bg-stone-400 rounded-full mr-4" /> Professionele waxproducten</li>
                <li className="flex items-center"><span className="w-1.5 h-1.5 bg-stone-400 rounded-full mr-4" /> Hygiënische werkwijze</li>
                <li className="flex items-center"><span className="w-1.5 h-1.5 bg-stone-400 rounded-full mr-4" /> Zorgvuldige afwerking</li>
              </ul>
              <p className="text-lg font-serif italic text-stone-900 pt-6 border-t border-stone-200">
                Snelle service. Correct uitgevoerd.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 4 - POSITIONERING & SUBTIELE DOORSTROOM */}
      <section className="py-32 bg-stone-100 text-stone-900 text-center">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-xs uppercase tracking-[0.2em] font-medium text-stone-500 mb-8">Positionering</h2>
            <p className="text-2xl font-serif mb-6">Waxing is bij Mavi geen focusdienst.</p>
            <p className="text-lg font-light text-stone-600 mb-16">
              Voor langdurige haarreductie verwijzen wij naar ons Laser Program.
            </p>

            <div className="pt-16 border-t border-stone-300">
              <p className="text-xl font-serif italic text-stone-900 mb-8">
                Wil je een langdurigere oplossing voor ongewenste haargroei?
              </p>
              <Link 
                to="/laser"
                className="inline-flex items-center justify-center px-8 py-4 border border-stone-900 text-stone-900 text-xs uppercase tracking-widest font-medium hover:bg-stone-900 hover:text-white transition-colors"
              >
                Ontdek ons Laser Program
              </Link>
            </div>
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
            <h2 className="text-3xl md:text-4xl font-serif mb-8">
              Boek je manicure of pedicure online<br />
              <span className="italic text-stone-400">en voeg waxing toe als aanvullende service.</span>
            </h2>
            <button 
              onClick={() => console.log('Event: click_book_waxing')}
              className="inline-flex items-center justify-center px-12 py-5 bg-[#E8DDD4] text-stone-900 text-xs uppercase tracking-[0.2em] font-bold hover:bg-white transition-colors mt-8"
            >
              Boek online
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
