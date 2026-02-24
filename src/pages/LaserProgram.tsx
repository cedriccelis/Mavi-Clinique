import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { BRAND } from '../constants/brand';

export function LaserProgram() {
  return (
    <div className="bg-stone-50 min-h-screen pt-24">
      {/* HERO */}
      <section className="relative py-32 bg-stone-900 text-[#E8DDD4] overflow-hidden">
        <div className="absolute inset-0 w-full h-full opacity-20">
          <img
            src="https://images.unsplash.com/photo-1552693673-1bf958298935?q=80&w=2073&auto=format&fit=crop"
            alt="Laser Program"
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
            <p className="text-xs uppercase tracking-[0.3em] text-stone-400 font-medium mb-8">Laser Program</p>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif tracking-tight leading-tight mb-8 text-white">
              Haar groeit in fases.<br />
              <span className="italic text-stone-400">Daarom werken wij in trajecten.</span>
            </h1>
            <p className="text-xl md:text-2xl font-light text-[#E8DDD4] mb-12 max-w-3xl mx-auto">
              Professionele laserbehandeling voor langdurige haarreductie — afgestemd op huidtype, haarkleur en groeicyclus.
            </p>
            
            <Link 
              to="/consult"
              onClick={() => console.log('Event: click_laser_consult')}
              className="group relative inline-flex flex-col items-center justify-center px-10 py-5 bg-[#E8DDD4] text-stone-900 transition-all hover:bg-white"
            >
              <span className="text-sm uppercase tracking-[0.2em] font-bold mb-1">Plan je Laser Consult</span>
              <span className="text-[10px] uppercase tracking-widest opacity-70">Intake + huidanalyse + persoonlijk zoneplan</span>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* SECTION 1 - WAAROM LASER GEEN EENMALIGE BEHANDELING IS */}
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
                Waarom laser geen<br />
                <span className="italic text-stone-400">eenmalige behandeling is</span>
              </h2>
              <p className="text-xl font-light text-stone-600 mb-8">
                Haren groeien niet allemaal tegelijk.
              </p>
              <p className="text-lg font-light text-stone-800 mb-6">
                Ze doorlopen drie fasen:
              </p>
              <ul className="space-y-4 text-lg font-light border-l border-stone-200 pl-8 mb-8">
                <li>Actieve groeifase</li>
                <li>Overgangsfase</li>
                <li>Rustfase</li>
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-stone-50 p-12 border border-stone-100"
            >
              <p className="text-xl font-light text-stone-600 mb-8">
                Laser is enkel effectief in de actieve groeifase. Omdat niet elke haar zich tegelijk in die fase bevindt, werken wij in vaste trajecten.
              </p>
              <div className="space-y-4 text-2xl font-serif italic text-stone-900 pt-8 border-t border-stone-200">
                <p>Niet in losse sessies.</p>
                <p>Consistentie bepaalt resultaat.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 2 - HOE LASER WERKT */}
      <section className="py-32 bg-[#E8DDD4] text-stone-900">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-serif">Hoe Laser Werkt</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="p-12 border border-stone-300/30 bg-white/50 backdrop-blur-sm"
            >
              <p className="text-lg font-light text-stone-800 mb-8">
                De laserenergie wordt geabsorbeerd door melanine in de haar. Dit veroorzaakt:
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center text-stone-800"><span className="w-1.5 h-1.5 bg-stone-900 rounded-full mr-4" /> Gerichte warmte in de haarfollikel</li>
                <li className="flex items-center text-stone-800"><span className="w-1.5 h-1.5 bg-stone-900 rounded-full mr-4" /> Beschadiging van de groeicellen</li>
                <li className="flex items-center text-stone-800"><span className="w-1.5 h-1.5 bg-stone-900 rounded-full mr-4" /> Verminderde hergroei</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="p-12 border border-stone-300/30 bg-white/50 backdrop-blur-sm"
            >
              <p className="text-lg font-medium text-stone-900 mb-8 uppercase tracking-widest text-sm">Resultaat:</p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center text-stone-800"><span className="w-1.5 h-1.5 bg-stone-900 rounded-full mr-4" /> Langdurige haarreductie</li>
                <li className="flex items-center text-stone-800"><span className="w-1.5 h-1.5 bg-stone-900 rounded-full mr-4" /> Dunnere teruggroei</li>
                <li className="flex items-center text-stone-800"><span className="w-1.5 h-1.5 bg-stone-900 rounded-full mr-4" /> Minder dichtheid</li>
                <li className="flex items-center text-stone-800"><span className="w-1.5 h-1.5 bg-stone-900 rounded-full mr-4" /> Minder irritatie</li>
              </ul>
              <div className="pt-8 border-t border-stone-300/50">
                <p className="text-sm font-light text-stone-600">Geen belofte van 100% permanente verwijdering bij iedereen. Wel significante reductie bij correcte indicatie.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 3 - ONS LASER PROTOCOL */}
      <section className="py-32 bg-white text-stone-900">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-serif">Ons Laser Protocol</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="p-10 border border-stone-200"
            >
              <p className="text-xs uppercase tracking-[0.2em] text-stone-400 font-medium mb-6">Fase 1</p>
              <h3 className="text-2xl font-serif mb-4">Intake & Analyse</h3>
              <p className="text-stone-600 font-light mb-6">Tijdens je Laser Consult bekijken we:</p>
              <ul className="space-y-2 text-sm font-light text-stone-500 mb-8">
                <li>• Huidtype & Haarkleur</li>
                <li>• Haardichtheid</li>
                <li>• Zonegrootte</li>
                <li>• Medische voorgeschiedenis</li>
              </ul>
              <div className="pt-6 border-t border-stone-200">
                <p className="text-stone-800 font-medium text-sm">We bepalen of laser geschikt is en stellen een persoonlijk zoneschema op.</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="p-10 border border-stone-200 bg-stone-50"
            >
              <p className="text-xs uppercase tracking-[0.2em] text-stone-400 font-medium mb-6">Fase 2</p>
              <h3 className="text-2xl font-serif mb-4">Actieve Behandelperiode</h3>
              <p className="text-stone-800 font-medium mb-6">Wij werken standaard met een traject van <span className="text-stone-900 font-bold">8 sessies per zone</span>.</p>
              <p className="text-sm uppercase tracking-widest text-stone-500 mb-4">Interval afhankelijk van zone:</p>
              <ul className="space-y-2 text-sm font-light text-stone-600 mb-8">
                <li className="flex justify-between"><span>Oksels</span> <span>±4 weken</span></li>
                <li className="flex justify-between"><span>Bikinilijn</span> <span>±6 weken</span></li>
                <li className="flex justify-between"><span>Benen</span> <span>±8 weken</span></li>
              </ul>
              <div className="pt-6 border-t border-stone-200">
                <p className="text-stone-800 font-medium text-sm italic">Deze timing volgt de natuurlijke groeicyclus.</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="p-10 border border-stone-200"
            >
              <p className="text-xs uppercase tracking-[0.2em] text-stone-400 font-medium mb-6">Fase 3</p>
              <h3 className="text-2xl font-serif mb-4">Stabilisatie</h3>
              <p className="text-stone-600 font-light mb-6">Na afronding van het traject:</p>
              <ul className="space-y-2 text-sm font-light text-stone-500 mb-8">
                <li>• Evaluatie</li>
                <li>• Eventuele onderhoudssessie indien nodig</li>
                <li>• Individueel advies</li>
              </ul>
              <div className="pt-6 border-t border-stone-200">
                <p className="text-stone-800 font-light text-sm">Hormonen kunnen invloed hebben op lange termijn hergroei.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 4 - VOOR WIE IS DIT GESCHIKT? */}
      <section className="py-32 bg-stone-900 text-stone-50">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-serif mb-16">Voor wie is dit geschikt?</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 text-left max-w-4xl mx-auto">
              <div>
                <p className="text-xl font-light text-stone-400 mb-8">Laser is ideaal voor:</p>
                <ul className="space-y-4 text-lg font-light text-stone-200">
                  <li className="flex items-start"><span className="text-stone-500 mr-4">—</span> Donkere haren</li>
                  <li className="flex items-start"><span className="text-stone-500 mr-4">—</span> Ingegroeide haren</li>
                  <li className="flex items-start"><span className="text-stone-500 mr-4">—</span> Irritatie na scheren</li>
                  <li className="flex items-start"><span className="text-stone-500 mr-4">—</span> Terugkerende stoppels</li>
                  <li className="flex items-start"><span className="text-stone-500 mr-4">—</span> Wie tijd wil besparen</li>
                </ul>
              </div>
              
              <div>
                <p className="text-xl font-light text-stone-400 mb-8">Minder geschikt bij:</p>
                <ul className="space-y-4 text-lg font-light text-stone-500">
                  <li className="flex items-start"><span className="text-stone-700 mr-4">—</span> Zeer lichte of grijze haren</li>
                  <li className="flex items-start"><span className="text-stone-700 mr-4">—</span> Zwangerschap</li>
                  <li className="flex items-start"><span className="text-stone-700 mr-4">—</span> Actieve huidinfecties</li>
                  <li className="flex items-start"><span className="text-stone-700 mr-4">—</span> Bepaalde medicatie (bespreken tijdens consult)</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 5 - VEILIGHEID & REALISME */}
      <section className="py-32 bg-stone-100 text-stone-900">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-serif leading-tight mb-8">
                Veiligheid &<br />
                <span className="italic text-stone-400">Realisme</span>
              </h2>
              <p className="text-xl font-medium text-stone-800 mb-8">
                Wij behandelen enkel na intake.
              </p>
              <p className="text-sm uppercase tracking-widest text-stone-500 font-medium mb-6">Belangrijk:</p>
              <ul className="space-y-4 text-lg font-light border-l border-stone-300 pl-8 mb-8">
                <li>Geen zonblootstelling voor/na behandeling</li>
                <li>Geen waxen tussen sessies</li>
                <li>Correcte intervallen respecteren</li>
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white p-12 shadow-xl shadow-stone-200/50"
            >
              <p className="text-3xl font-serif italic text-stone-900 mb-4">
                Laser is een proces.
              </p>
              <p className="text-2xl font-light text-stone-500">
                Geen snelle oplossing.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 6 - INVESTERING */}
      <section className="py-32 bg-white text-stone-900 text-center">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-xs uppercase tracking-[0.2em] font-medium text-stone-400 mb-8">Investering</h2>
            <p className="text-3xl md:text-4xl font-light leading-relaxed mb-8">
              Wij werken met trajectprijzen per zone.
            </p>
            <p className="text-xl font-medium text-stone-800 mb-16 uppercase tracking-widest">Standaard traject: 8 sessies</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 max-w-2xl mx-auto">
              <div className="border border-stone-200 p-8 bg-stone-50">
                <h3 className="text-2xl font-serif mb-6">Oksels</h3>
                <div className="space-y-4 text-stone-600 font-light">
                  <div className="flex justify-between border-b border-stone-200 pb-2">
                    <span>Los</span>
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
                    <span>Los</span>
                    <span>€120</span>
                  </div>
                  <div className="flex justify-between text-stone-900 font-medium pt-2">
                    <span>Traject (8 sessies)</span>
                    <span>vanaf €820</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4 text-lg font-light text-stone-500">
              <p>Grotere zones worden individueel bepaald tijdens consult.</p>
              <p className="text-stone-800 font-medium italic">Trajecten bieden lichte prijsoptimalisatie en structurele planning.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 7 - WAAROM MAVI? */}
      <section className="py-32 bg-stone-50 text-stone-900">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-serif mb-16">Waarom Mavi?</h2>
            <p className="text-xl font-light text-stone-500 mb-12">Omdat wij:</p>
            <ul className="space-y-6 text-lg font-light text-stone-800 max-w-xl mx-auto text-left mb-16">
              <li className="flex items-center"><span className="w-1.5 h-1.5 bg-stone-400 rounded-full mr-6" /> Niet behandelen zonder intake</li>
              <li className="flex items-center"><span className="w-1.5 h-1.5 bg-stone-400 rounded-full mr-6" /> Geen losse sessies promoten</li>
              <li className="flex items-center"><span className="w-1.5 h-1.5 bg-stone-400 rounded-full mr-6" /> Geen onrealistische beloftes maken</li>
              <li className="flex items-center"><span className="w-1.5 h-1.5 bg-stone-400 rounded-full mr-6" /> Werken volgens groeicycluslogica</li>
              <li className="flex items-center"><span className="w-1.5 h-1.5 bg-stone-400 rounded-full mr-6" /> Huidtype en veiligheid prioriteit geven</li>
            </ul>
            <div className="text-3xl font-serif italic text-stone-400">
              <p>Laser is techniek.</p>
              <p>Planning maakt het verschil.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 8 - COMBINATIE MET SKIN STRATEGY */}
      <section className="py-32 bg-white text-stone-900 text-center">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-serif mb-12">Combinatie met Skin Strategy</h2>
            <p className="text-xl font-light text-stone-600 mb-8">Veel cliënten combineren laser met:</p>
            
            <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8 text-sm uppercase tracking-widest font-medium text-stone-800 mb-12">
              <span>Collagen Protocol</span>
              <span className="hidden md:block w-1.5 h-1.5 bg-stone-300 rounded-full" />
              <span>Maintenance</span>
              <span className="hidden md:block w-1.5 h-1.5 bg-stone-300 rounded-full" />
              <span>Structurele huidverbetering</span>
            </div>
            
            <p className="text-lg font-light text-stone-500 italic">
              Tijdens je consult bekijken we dit indien gewenst.
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
              Wil je langdurige reductie<br />
              <span className="italic text-stone-400">met een plan?</span>
            </h2>
            <Link 
              to="/consult"
              onClick={() => console.log('Event: click_laser_consult')}
              className="group relative inline-flex flex-col items-center justify-center px-12 py-6 bg-[#E8DDD4] text-stone-900 transition-all hover:bg-white"
            >
              <span className="text-sm uppercase tracking-[0.2em] font-bold mb-1">Plan je Laser Consult</span>
              <span className="text-[10px] uppercase tracking-widest opacity-70">Beperkt aantal intakeplaatsen per week</span>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
