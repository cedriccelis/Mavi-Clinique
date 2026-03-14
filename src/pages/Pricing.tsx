import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { BRAND } from '../constants/brand';

export function Pricing() {
  return (
    <div className="bg-stone-50 min-h-screen pt-24">
      {/* HERO */}
      <section className="relative py-32 bg-stone-900 text-[#E8DDD4] overflow-hidden">
        <div className="absolute inset-0 w-full h-full opacity-20">
          <img
            src="https://images.unsplash.com/photo-1556228578-0d85b1a4d571?q=80&w=2070&auto=format&fit=crop"
            alt="Prijslijst"
            className="w-full h-full object-cover grayscale"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-stone-900/50 to-stone-900" />
        </div>
        
        <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-xs uppercase tracking-[0.3em] text-stone-400 font-medium mb-8">Investering</p>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif tracking-tight leading-tight mb-8 text-white">
              Transparantie in<br />
              <span className="italic text-stone-400">elke fase.</span>
            </h1>
            <p className="text-xl md:text-2xl font-light text-[#E8DDD4] mb-12 max-w-3xl mx-auto">
              Echte huidverbetering is maatwerk. Daarom werken wij met trajecten en vanaf-prijzen, afgestemd op jouw huidanalyse.
            </p>
          </motion.div>
        </div>
      </section>

      {/* PRICING CONTENT */}
      <section className="py-32 bg-white text-stone-900">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          
          {/* CONSULT */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-24"
          >
            <h2 className="text-3xl font-serif mb-8 border-b border-stone-200 pb-4">Analyse & Advies</h2>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center py-6 border-b border-stone-100">
              <div className="mb-4 md:mb-0">
                <h3 className="text-xl font-medium text-stone-800">Skin Strategy Consult</h3>
                <p className="text-stone-500 font-light mt-1">Intake, digitale huidanalyse en persoonlijk behandelplan.</p>
                <p className="text-xs text-stone-400 italic mt-2">Wordt in mindering gebracht bij opstart van een traject.</p>
              </div>
              <div className="text-2xl font-serif text-stone-900">€50</div>
            </div>
          </motion.div>

          {/* SKIN PROGRAMS */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mb-24"
          >
            <h2 className="text-3xl font-serif mb-8 border-b border-stone-200 pb-4">Skin Programs</h2>
            <p className="text-stone-500 font-light mb-8 italic">
              Onze signature programma's zijn gefaseerde trajecten. De exacte investering wordt bepaald tijdens je consult, afhankelijk van de benodigde zones en sessies.
            </p>
            
            <div className="space-y-0">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center py-8 border-b border-stone-100">
                <div className="mb-4 md:mb-0 pr-8">
                  <h3 className="text-xl font-medium text-stone-800">Contour Protocol</h3>
                  <p className="text-stone-500 font-light mt-1">Focus op kaaklijn, hals en diepe structurele lifting (HIFU).</p>
                </div>
                <div className="text-xl font-serif text-stone-900 whitespace-nowrap">
                  <span className="text-sm font-light text-stone-500 mr-2">vanaf</span>€450
                </div>
              </div>

              <div className="flex flex-col md:flex-row justify-between items-start md:items-center py-8 border-b border-stone-100">
                <div className="mb-4 md:mb-0 pr-8">
                  <h3 className="text-xl font-medium text-stone-800">Collagen Reset</h3>
                  <p className="text-stone-500 font-light mt-1">Focus op densiteit, fijne lijntjes en textuurverfijning.</p>
                </div>
                <div className="text-xl font-serif text-stone-900 whitespace-nowrap">
                  <span className="text-sm font-light text-stone-500 mr-2">vanaf</span>€350
                </div>
              </div>

              <div className="flex flex-col md:flex-row justify-between items-start md:items-center py-8 border-b border-stone-100">
                <div className="mb-4 md:mb-0 pr-8">
                  <h3 className="text-xl font-medium text-stone-800">Structural Renewal</h3>
                  <p className="text-stone-500 font-light mt-1">Ons meest complete traject. Combinatie van diepte, opbouw en verfijning.</p>
                </div>
                <div className="text-xl font-serif text-stone-900 whitespace-nowrap">
                  <span className="text-sm font-light text-stone-500 mr-2">vanaf</span>€850
                </div>
              </div>

              <div className="flex flex-col md:flex-row justify-between items-start md:items-center py-8 border-b border-stone-100">
                <div className="mb-4 md:mb-0 pr-8">
                  <h3 className="text-xl font-medium text-stone-800">Maintenance Plan</h3>
                  <p className="text-stone-500 font-light mt-1">Onderhoud van behaalde resultaten. Gepersonaliseerd per kwartaal of halfjaar.</p>
                </div>
                <div className="text-xl font-serif text-stone-900 whitespace-nowrap">
                  <span className="text-sm font-light text-stone-500 mr-2">vanaf</span>€150
                </div>
              </div>
            </div>
          </motion.div>

          {/* ADDITIONAL SKIN SERVICES */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-24"
          >
            <h2 className="text-3xl font-serif mb-8 border-b border-stone-200 pb-4">Aanvullende Huidbehandelingen</h2>
            
            <div className="space-y-0">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center py-6 border-b border-stone-100">
                <div className="mb-4 md:mb-0">
                  <h3 className="text-xl font-medium text-stone-800">LED Therapy</h3>
                  <p className="text-stone-500 font-light mt-1">Losse sessie voor herstel en collageenstimulatie.</p>
                </div>
                <div className="text-xl font-serif text-stone-900">€50</div>
              </div>

              <div className="flex flex-col md:flex-row justify-between items-start md:items-center py-6 border-b border-stone-100">
                <div className="mb-4 md:mb-0">
                  <h3 className="text-xl font-medium text-stone-800">Dermaplaning</h3>
                  <p className="text-stone-500 font-light mt-1">Verwijderen van dode huidcellen en donshaartjes.</p>
                </div>
                <div className="text-xl font-serif text-stone-900">€75</div>
              </div>
            </div>
          </motion.div>

          {/* LASER PROGRAM */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mb-24"
          >
            <h2 className="text-3xl font-serif mb-8 border-b border-stone-200 pb-4">Laser Program</h2>
            <p className="text-stone-500 font-light mb-8 italic">
              Laser is een proces. Wij adviseren trajecten van 8 sessies voor optimaal resultaat. Andere zones op aanvraag tijdens consult.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="border border-stone-200 p-8 bg-stone-50">
                <h3 className="text-2xl font-serif mb-6">Oksels</h3>
                <div className="space-y-4 text-stone-600 font-light">
                  <div className="flex justify-between border-b border-stone-200 pb-2">
                    <span>Losse sessie</span>
                    <span>€85</span>
                  </div>
                  <div className="flex justify-between text-stone-900 font-medium pt-2">
                    <span>Traject (8 sessies)</span>
                    <span>vanaf €580</span>
                  </div>
                </div>
              </div>
              
              <div className="border border-stone-200 p-8 bg-stone-50">
                <h3 className="text-2xl font-serif mb-6">Bikinilijn</h3>
                <div className="space-y-4 text-stone-600 font-light">
                  <div className="flex justify-between border-b border-stone-200 pb-2">
                    <span>Losse sessie</span>
                    <span>€120</span>
                  </div>
                  <div className="flex justify-between text-stone-900 font-medium pt-2">
                    <span>Traject (8 sessies)</span>
                    <span>vanaf €820</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* BEAUTY SERVICES */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h2 className="text-3xl font-serif mb-8 border-b border-stone-200 pb-4">Beauty Services</h2>
            
            <div className="space-y-0">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center py-6 border-b border-stone-100">
                <div className="mb-4 md:mb-0">
                  <h3 className="text-xl font-medium text-stone-800">Manicure & Gelnagels</h3>
                </div>
                <div className="text-xl font-serif text-stone-900 whitespace-nowrap">
                  <span className="text-sm font-light text-stone-500 mr-2">vanaf</span>€60
                </div>
              </div>

              <div className="flex flex-col md:flex-row justify-between items-start md:items-center py-6 border-b border-stone-100">
                <div className="mb-4 md:mb-0">
                  <h3 className="text-xl font-medium text-stone-800">Pedicure</h3>
                </div>
                <div className="text-xl font-serif text-stone-900 whitespace-nowrap">
                  <span className="text-sm font-light text-stone-500 mr-2">vanaf</span>€55
                </div>
              </div>

              <div className="flex flex-col md:flex-row justify-between items-start md:items-center py-6 border-b border-stone-100">
                <div className="mb-4 md:mb-0">
                  <h3 className="text-xl font-medium text-stone-800">Brows</h3>
                  <p className="text-stone-500 font-light mt-1">Shaping & Tinting</p>
                </div>
                <div className="text-xl font-serif text-stone-900 whitespace-nowrap">
                  <span className="text-sm font-light text-stone-500 mr-2">vanaf</span>€35
                </div>
              </div>

              <div className="flex flex-col md:flex-row justify-between items-start md:items-center py-6 border-b border-stone-100">
                <div className="mb-4 md:mb-0">
                  <h3 className="text-xl font-medium text-stone-800">Waxing</h3>
                  <p className="text-stone-500 font-light mt-1">Enkel in combinatie met andere beauty services.</p>
                </div>
                <div className="text-xl font-serif text-stone-900 whitespace-nowrap">
                  <span className="text-sm font-light text-stone-500 mr-2">vanaf</span>€20
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-32 bg-stone-900 text-white text-center">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-7xl font-serif leading-tight mb-16">
              Klaar voor jouw<br />
              <span className="italic text-stone-400">persoonlijke plan?</span>
            </h2>
            <Link 
              to="/consult"
              className="group relative inline-flex flex-col items-center justify-center px-12 py-6 bg-[#E8DDD4] text-stone-900 transition-all hover:bg-white"
            >
              <span className="text-sm uppercase tracking-[0.2em] font-bold mb-1">{BRAND.cta.main}</span>
              <span className="text-[10px] uppercase tracking-widest opacity-70">Intake + huidanalyse</span>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
