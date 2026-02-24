import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { BRAND } from '../constants/brand';

export function SkinAnalysis() {
  return (
    <div className="bg-stone-50 min-h-screen pt-24">
      {/* HERO */}
      <section className="relative py-32 bg-stone-900 text-[#E8DDD4] overflow-hidden">
        <div className="absolute inset-0 w-full h-full opacity-20">
          <img
            src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=2080&auto=format&fit=crop"
            alt="Skin Analysis"
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
            <p className="text-xs uppercase tracking-[0.3em] text-stone-400 font-medium mb-8">Skin Analysis</p>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif tracking-tight leading-tight mb-8 text-white">
              Elke huid is anders.<br />
              <span className="italic text-stone-400">Dus elke strategie ook.</span>
            </h1>
            <p className="text-xl md:text-2xl font-light text-[#E8DDD4] mb-12 max-w-3xl mx-auto">
              Onze geavanceerde huidanalyse brengt structuur, elasticiteit en huidconditie in kaart voordat we behandelen.
            </p>
            
            <Link 
              to="/consult"
              onClick={() => console.log('Event: click_consult_cta')}
              className="group relative inline-flex flex-col items-center justify-center px-10 py-5 bg-[#E8DDD4] text-stone-900 transition-all hover:bg-white"
            >
              <span className="text-sm uppercase tracking-[0.2em] font-bold mb-1">{BRAND.cta.main}</span>
              <span className="text-[10px] uppercase tracking-widest opacity-70">Analyse + persoonlijk behandelplan</span>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* SECTION 1 - WAAROM ANALYSE ESSENTIEEL IS */}
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
                We behandelen niet<br />
                <span className="italic text-stone-400">op gevoel.</span>
              </h2>
              <div className="space-y-8 text-lg font-light text-stone-600 mb-8">
                <div>
                  <p className="text-sm uppercase tracking-widest font-medium text-stone-400 mb-2">De meeste behandelingen starten met een vraag:</p>
                  <p className="text-xl text-stone-800">"Wat stoort je?"</p>
                </div>
                <div>
                  <p className="text-sm uppercase tracking-widest font-medium text-stone-400 mb-2">Wij starten met:</p>
                  <p className="text-xl text-stone-800">"Wat toont je huid?"</p>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-stone-50 p-12 border border-stone-100"
            >
              <p className="text-sm uppercase tracking-widest font-medium text-stone-500 mb-6">Zonder analyse:</p>
              <ul className="space-y-4 text-lg font-light text-stone-800 mb-8">
                <li className="flex items-center"><span className="w-1.5 h-1.5 bg-stone-400 rounded-full mr-4" /> Wordt er gegokt</li>
                <li className="flex items-center"><span className="w-1.5 h-1.5 bg-stone-400 rounded-full mr-4" /> Wordt er standaard behandeld</li>
                <li className="flex items-center"><span className="w-1.5 h-1.5 bg-stone-400 rounded-full mr-4" /> Worden verwachtingen verkeerd ingeschat</li>
              </ul>
              <p className="text-xl font-serif italic text-stone-900 pt-8 border-t border-stone-200">
                Analyse voorkomt overbehandeling én onderbehandeling.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 2 - WAT WE METEN */}
      <section className="py-32 bg-[#E8DDD4] text-stone-900">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-serif mb-8">Wat we meten</h2>
              <p className="text-xl font-light text-stone-700 mb-12">
                Met onze professionele huidanalyser brengen we in kaart:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-lg font-light text-stone-800 mb-12">
                <div className="flex items-center"><span className="w-1.5 h-1.5 bg-stone-900 rounded-full mr-4" /> Elasticiteit</div>
                <div className="flex items-center"><span className="w-1.5 h-1.5 bg-stone-900 rounded-full mr-4" /> Textuur</div>
                <div className="flex items-center"><span className="w-1.5 h-1.5 bg-stone-900 rounded-full mr-4" /> Poriëndichtheid</div>
                <div className="flex items-center"><span className="w-1.5 h-1.5 bg-stone-900 rounded-full mr-4" /> Pigmentzones</div>
                <div className="flex items-center"><span className="w-1.5 h-1.5 bg-stone-900 rounded-full mr-4" /> Hydratatieniveau</div>
                <div className="flex items-center"><span className="w-1.5 h-1.5 bg-stone-900 rounded-full mr-4" /> Zoneverschillen in spanning</div>
              </div>
              <div className="pt-8 border-t border-stone-400/30">
                <p className="text-2xl font-serif italic text-stone-900">Dit geeft ons een objectief startpunt.</p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white p-12 shadow-xl shadow-stone-900/5 text-center"
            >
              <div className="space-y-6 text-3xl font-light text-stone-600">
                <p>Geen aannames.</p>
                <p>Geen standaardprotocol.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 3 - WAT DIT VOOR JOU BETEKENT */}
      <section className="py-32 bg-white text-stone-900">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-serif mb-12">Wat dit voor jou betekent</h2>
            <p className="text-xl font-light text-stone-500 mb-12">De analyse bepaalt:</p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left max-w-2xl mx-auto mb-16">
              <div className="p-6 border border-stone-200 bg-stone-50">
                <p className="text-stone-800 font-light">Of contourstimulatie nodig is</p>
              </div>
              <div className="p-6 border border-stone-200 bg-stone-50">
                <p className="text-stone-800 font-light">Of collageenopbouw prioriteit heeft</p>
              </div>
              <div className="p-6 border border-stone-200 bg-stone-50">
                <p className="text-stone-800 font-light">Of maintenance volstaat</p>
              </div>
              <div className="p-6 border border-stone-200 bg-stone-50">
                <p className="text-stone-800 font-light">Of combinaties zinvol zijn</p>
              </div>
            </div>

            <div className="space-y-4 text-lg font-light text-stone-600 mb-12">
              <p>Soms volstaat één krachtige stimulatie.</p>
              <p>Soms werken we gefaseerd.</p>
            </div>

            <div className="text-3xl font-serif italic text-stone-900 pt-12 border-t border-stone-200">
              <p>We behandelen wat nodig is.</p>
              <p>Niet wat populair is.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 4 - HOE EEN CONSULT VERLOOPT */}
      <section className="py-32 bg-stone-100 text-stone-900">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-serif">Hoe een consult verloopt</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="p-10 bg-white border border-stone-200"
            >
              <p className="text-xs uppercase tracking-[0.2em] text-stone-400 font-medium mb-6">Stap 1</p>
              <h3 className="text-2xl font-serif mb-6">Intakegesprek</h3>
              <p className="text-sm uppercase tracking-widest font-medium text-stone-500 mb-4">We bespreken:</p>
              <ul className="space-y-3 text-stone-600 font-light">
                <li>• Doelen</li>
                <li>• Huidgeschiedenis</li>
                <li>• Medische achtergrond</li>
                <li>• Verwachtingen</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="p-10 bg-white border border-stone-200"
            >
              <p className="text-xs uppercase tracking-[0.2em] text-stone-400 font-medium mb-6">Stap 2</p>
              <h3 className="text-2xl font-serif mb-6">Digitale huidanalyse</h3>
              <p className="text-stone-800 font-medium mb-6">We brengen structuur en focuszones visueel in kaart.</p>
              <p className="text-sm uppercase tracking-widest font-medium text-stone-500 mb-4">Dit helpt:</p>
              <ul className="space-y-3 text-stone-600 font-light">
                <li>• Objectief beoordelen</li>
                <li>• Realistische tijdlijn bepalen</li>
                <li>• Resultaat monitoren</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="p-10 bg-stone-900 text-white shadow-xl shadow-stone-200/50"
            >
              <p className="text-xs uppercase tracking-[0.2em] text-stone-400 font-medium mb-6">Stap 3</p>
              <h3 className="text-2xl font-serif mb-6 text-[#E8DDD4]">Persoonlijk plan</h3>
              <p className="text-sm uppercase tracking-widest font-medium text-stone-400 mb-4">Je krijgt:</p>
              <ul className="space-y-3 text-stone-300 font-light mb-8">
                <li>• Een duidelijke strategie</li>
                <li>• Fase-indeling</li>
                <li>• Indicatieve investering</li>
                <li>• Tijdslijn</li>
              </ul>
              <div className="pt-6 border-t border-stone-700">
                <p className="text-[#E8DDD4] font-medium">Geen druk. Wel duidelijkheid.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 5 - VOOR WIE IS DIT BEDOELD? */}
      <section className="py-32 bg-stone-900 text-stone-50">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-serif mb-12">Voor wie is dit bedoeld?</h2>
            <p className="text-xl font-light text-stone-400 mb-12">De Skin Strategy Consult is ideaal voor wie:</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 text-left max-w-3xl mx-auto mb-20">
              <div className="flex items-start"><span className="text-stone-500 mr-4">—</span> Serieuze huidverbetering wil</div>
              <div className="flex items-start"><span className="text-stone-500 mr-4">—</span> Twijfelt tussen behandelingen</div>
              <div className="flex items-start"><span className="text-stone-500 mr-4">—</span> Geen injectables wil</div>
              <div className="flex items-start"><span className="text-stone-500 mr-4">—</span> Langetermijnresultaat belangrijk vindt</div>
            </div>

            <div className="inline-block border border-stone-700 bg-stone-800/50 px-8 py-6">
              <p className="text-[#E8DDD4] font-serif italic text-2xl">
                Niet nodig voor wie enkel een losse beautybehandeling wil boeken.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 6 - WAT HET VERSCHIL MAAKT */}
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
                Wat het verschil<br />
                <span className="italic text-stone-400">maakt</span>
              </h2>
              <p className="text-xl font-light text-stone-600 mb-4">
                Een behandeling kan mooi zijn.
              </p>
              <p className="text-2xl font-medium text-stone-900 mb-12">
                Maar een plan maakt het verschil.
              </p>
              <p className="text-3xl font-serif italic text-stone-400 pt-8 border-t border-stone-200">
                Dat is het verschil tussen salon en clinic.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-stone-50 p-12 border border-stone-100"
            >
              <p className="text-sm uppercase tracking-widest font-medium text-stone-500 mb-8">Met analyse kunnen we:</p>
              <ul className="space-y-6 text-lg font-light text-stone-800">
                <li className="flex items-center"><span className="w-1.5 h-1.5 bg-stone-400 rounded-full mr-4" /> Resultaat beter voorspellen</li>
                <li className="flex items-center"><span className="w-1.5 h-1.5 bg-stone-400 rounded-full mr-4" /> Overstimulatie vermijden</li>
                <li className="flex items-center"><span className="w-1.5 h-1.5 bg-stone-400 rounded-full mr-4" /> Tijd efficiënter inzetten</li>
                <li className="flex items-center"><span className="w-1.5 h-1.5 bg-stone-400 rounded-full mr-4" /> Budget strategisch spreiden</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 7 - INVESTERING */}
      <section className="py-32 bg-[#E8DDD4] text-stone-900 text-center">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-xs uppercase tracking-[0.2em] font-medium text-stone-600 mb-8">Investering</h2>
            <p className="text-3xl md:text-4xl font-serif mb-12">
              De Skin Strategy Consult omvat:
            </p>
            
            <div className="flex justify-center mb-12">
              <ul className="text-left space-y-4 text-lg font-light text-stone-800">
                <li className="flex items-center"><span className="text-stone-500 mr-4">✔</span> Intake</li>
                <li className="flex items-center"><span className="text-stone-500 mr-4">✔</span> Huidanalyse</li>
                <li className="flex items-center"><span className="text-stone-500 mr-4">✔</span> Persoonlijk behandelplan</li>
                <li className="flex items-center"><span className="text-stone-500 mr-4">✔</span> Advies op maat</li>
              </ul>
            </div>

            <div className="inline-block bg-white px-12 py-8 shadow-xl shadow-stone-900/5 mb-8">
              <p className="text-sm uppercase tracking-widest text-stone-500 mb-2">Investering:</p>
              <p className="text-4xl font-serif text-stone-900 mb-2">€50</p>
              <p className="text-xs font-light text-stone-500">(kan nadien in mindering gebracht worden bij opstart traject)</p>
            </div>

            <p className="text-lg font-medium text-stone-700 italic">
              Dit verhoogt commitment én kwaliteit van leads.
            </p>
          </motion.div>
        </div>
      </section>

      {/* SECTION 8 - STATUS FRAME */}
      <section className="py-32 bg-stone-100 text-stone-900 text-center">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-serif mb-12">Niet iedereen start meteen een traject.</h2>
            <p className="text-xl font-light text-stone-500 mb-8">Soms is het antwoord:</p>
            
            <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8 text-lg font-light text-stone-800 mb-16">
              <span className="italic">"Nog niet nodig."</span>
              <span className="hidden md:block w-1.5 h-1.5 bg-stone-300 rounded-full" />
              <span className="italic">"Maintenance volstaat."</span>
              <span className="hidden md:block w-1.5 h-1.5 bg-stone-300 rounded-full" />
              <span className="italic">"Wacht nog 6 maanden."</span>
            </div>

            <p className="text-2xl font-medium text-stone-900 pt-12 border-t border-stone-300">
              Wij behandelen alleen wanneer het zinvol is.
            </p>
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
              Wil je weten wat jouw huid<br />
              <span className="italic text-stone-400">écht nodig heeft?</span>
            </h2>
            <Link 
              to="/consult"
              onClick={() => console.log('Event: click_consult_cta')}
              className="group relative inline-flex flex-col items-center justify-center px-12 py-6 bg-[#E8DDD4] text-stone-900 transition-all hover:bg-white"
            >
              <span className="text-sm uppercase tracking-[0.2em] font-bold mb-1">{BRAND.cta.main}</span>
              <span className="text-[10px] uppercase tracking-widest opacity-70">Beperkt aantal consultmomenten per week.</span>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
