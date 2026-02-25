import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { BRAND } from '../constants/brand';

export function MaintenanceProtocol() {
  return (
    <div className="bg-stone-50 min-h-screen pt-24">
      {/* HERO */}
      <section className="relative py-32 bg-stone-900 text-[#E8DDD4] overflow-hidden">
        <div className="absolute inset-0 w-full h-full opacity-20">
          <img
            src="https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?q=80&w=2070&auto=format&fit=crop"
            alt="Maintenance Protocol"
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
            <p className="text-xs uppercase tracking-[0.3em] text-stone-400 font-medium mb-8">Maintenance Protocol</p>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif tracking-tight leading-tight mb-8 text-white">
              Resultaat is geen eindpunt.<br />
              <span className="italic text-stone-400">Het is een fase.</span>
            </h1>
            <p className="text-xl md:text-2xl font-light text-[#E8DDD4] mb-12 max-w-3xl mx-auto">
              Na een huidtraject begint het behoud. Collageen wordt niet éénmalig aangemaakt. Het wordt continu afgebroken.
            </p>
            <div className="space-y-2 text-sm uppercase tracking-widest font-medium text-stone-400 mb-12">
              <p>Niet opnieuw starten.</p>
              <p>Wel beschermen wat is opgebouwd.</p>
            </div>
            
            <Link 
              to="/consult"
              className="group relative inline-flex flex-col items-center justify-center px-10 py-5 bg-[#E8DDD4] text-stone-900 transition-all hover:bg-white"
            >
              <span className="text-sm uppercase tracking-[0.2em] font-bold">Plan je Skin Strategy Consult</span>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* SECTION 1 - WAAROM ONDERHOUD NOODZAKELIJK IS */}
      <section className="py-32 bg-white text-stone-900">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-serif leading-tight mb-12">
                Waarom onderhoud<br />
                <span className="italic text-stone-400">noodzakelijk is</span>
              </h2>
              <p className="text-xl font-light text-stone-600 mb-8">
                Na een Contour, Collagen Reset of Structural Renewal traject heeft je huid:
              </p>
              <ul className="space-y-6 text-lg font-light border-l border-stone-200 pl-8 mb-12">
                <li>Meer spanning</li>
                <li>Betere densiteit</li>
                <li>Verbeterde textuur</li>
                <li>Actieve collageenaanmaak</li>
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
                Zonder onderhoud:
              </p>
              <ul className="space-y-4 text-lg font-light text-stone-800 mb-8">
                <li className="flex items-start"><span className="text-stone-400 mr-4">—</span> Daalt collageenactiviteit opnieuw</li>
                <li className="flex items-start"><span className="text-stone-400 mr-4">—</span> Verslapt de huid geleidelijk</li>
                <li className="flex items-start"><span className="text-stone-400 mr-4">—</span> Vermindert de houdbaarheid van je resultaat</li>
              </ul>
              <p className="text-3xl font-serif italic text-stone-900 pt-8 border-t border-stone-200">
                Maintenance voorkomt terugval.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 2 - HOE WIJ MAINTENANCE AANPAKKEN */}
      <section className="py-32 bg-[#E8DDD4] text-stone-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-24">
            <h2 className="text-xs uppercase tracking-[0.2em] font-medium text-stone-600 mb-6">Hoe wij Maintenance aanpakken</h2>
            <p className="text-4xl md:text-5xl font-serif mb-8">Wij werken in lagen.</p>
            <p className="text-xl font-light text-stone-700">Elke behandeling heeft een duidelijke rol.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {/* 1. Huidconditie */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="bg-white p-10 shadow-xl shadow-stone-900/5 flex flex-col"
            >
              <p className="text-xs uppercase tracking-[0.2em] text-stone-400 font-medium mb-6">1. Huidconditie</p>
              <h3 className="text-2xl font-serif mb-4">Hydrafacial</h3>
              <p className="text-stone-600 font-light mb-8 flex-grow">Vormt de basis van elk onderhoudsplan. Het zorgt voor diepe reiniging, verwijdering van dode huidcellen, hydratatie en verbeterde opname van actieve ingrediënten.</p>
              <div className="pt-6 border-t border-stone-200">
                <p className="text-sm font-medium text-stone-900">Een gezonde huidbarrière zorgt ervoor dat structurele stimulatie beter behouden blijft.</p>
              </div>
            </motion.div>

            {/* 2. Collageenonderhoud */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white p-10 shadow-xl shadow-stone-900/5 flex flex-col"
            >
              <p className="text-xs uppercase tracking-[0.2em] text-stone-400 font-medium mb-6">2. Collageenonderhoud</p>
              <h3 className="text-2xl font-serif mb-4">Microneedling</h3>
              <p className="text-stone-600 font-light mb-8 flex-grow">Wordt ingezet wanneer huiddensiteit opnieuw begint af te nemen, textuur verfijning nodig heeft of collageenactiviteit opnieuw gestimuleerd moet worden.</p>
              <div className="pt-6 border-t border-stone-200">
                <p className="text-sm font-medium text-stone-900">Niet in kuurvorm, maar strategisch en periodiek. Houdt de huid compact.</p>
              </div>
            </motion.div>

            {/* 3. Versteviging */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="bg-white p-10 shadow-xl shadow-stone-900/5 flex flex-col"
            >
              <p className="text-xs uppercase tracking-[0.2em] text-stone-400 font-medium mb-6">3. Versteviging</p>
              <h3 className="text-2xl font-serif mb-4">Monopolaire RF</h3>
              <p className="text-stone-600 font-light mb-8 flex-grow">Wordt gebruikt om huidspanning actief te houden, lichte laxiteit te corrigeren en de dermis warm te stimuleren.</p>
              <div className="pt-6 border-t border-stone-200">
                <p className="text-sm font-medium text-stone-900">Onderhoud van structuur, geen vervanging van HIFU. Werkt subtiel maar effectief.</p>
              </div>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* 4. Hersteloptimalisatie */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-white p-10 shadow-xl shadow-stone-900/5 flex flex-col"
            >
              <p className="text-xs uppercase tracking-[0.2em] text-stone-400 font-medium mb-6">4. Hersteloptimalisatie</p>
              <h3 className="text-2xl font-serif mb-4">LED Therapy</h3>
              <p className="text-stone-600 font-light mb-8 flex-grow">Ingezet na RF, na Microneedling of als collageenbooster. Helpt bij het reguleren van inflammatie, versnellen van herstel en ondersteunen van fibroblastactiviteit.</p>
              <div className="pt-6 border-t border-stone-200">
                <p className="text-sm font-medium text-stone-900">LED versterkt de respons van andere behandelingen.</p>
              </div>
            </motion.div>

            {/* 5. Structurele heractivatie */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="bg-white p-10 shadow-xl shadow-stone-900/5 flex flex-col"
            >
              <p className="text-xs uppercase tracking-[0.2em] text-stone-400 font-medium mb-6">5. Structurele heractivatie</p>
              <h3 className="text-2xl font-serif mb-4">HIFU Touch-up</h3>
              <p className="text-stone-600 font-light mb-8 flex-grow">Wanneer diepere spanning vermindert, kan een gerichte HIFU-touch-up nodig zijn. Dit gebeurt meestal na 9–12 maanden.</p>
              <div className="pt-6 border-t border-stone-200">
                <p className="text-sm font-medium text-stone-900">Niet automatisch. Wel wanneer analyse dit aantoont.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 3 - HOE BEPALEN WE JOUW RITME? */}
      <section className="py-32 bg-stone-100 text-stone-900">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-serif leading-tight mb-8">
                Hoe bepalen we jouw<br />
                <span className="italic text-stone-400">onderhoudsritme?</span>
              </h2>
              <p className="text-xl font-light text-stone-600 mb-8">
                Maintenance is persoonlijk. We evalueren:
              </p>
              <ul className="space-y-4 text-lg font-light border-l border-stone-300 pl-8 mb-12">
                <li>Huiddikte</li>
                <li>Elasticiteit</li>
                <li>Leeftijd</li>
                <li>Reactie op eerdere stimulatie</li>
                <li>Doelstelling</li>
              </ul>
              <p className="text-lg font-medium text-stone-900">
                Op basis daarvan stellen we een onderhoudsplan op.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white p-12 shadow-sm border border-stone-200 text-center"
            >
              <div className="space-y-6 text-2xl font-light text-stone-600 mb-8">
                <p>Geen vaste pakketten.</p>
                <p>Geen standaard schema's.</p>
              </div>
              <p className="text-3xl font-serif italic text-stone-900 pt-8 border-t border-stone-200">
                Wel begeleiding.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 4 - WAT MAG JE VERWACHTEN & VOOR WIE */}
      <section className="py-32 bg-white text-stone-900">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-serif mb-12">Wat mag je verwachten?</h2>
              <p className="text-lg font-light text-stone-600 mb-8">Maintenance zorgt voor:</p>
              <ul className="space-y-6 text-lg font-light text-stone-800 mb-12">
                <li className="flex items-center"><span className="w-1.5 h-1.5 bg-stone-900 rounded-full mr-4" /> Langere houdbaarheid van contour</li>
                <li className="flex items-center"><span className="w-1.5 h-1.5 bg-stone-900 rounded-full mr-4" /> Stabiele huiddensiteit</li>
                <li className="flex items-center"><span className="w-1.5 h-1.5 bg-stone-900 rounded-full mr-4" /> Betere textuur</li>
                <li className="flex items-center"><span className="w-1.5 h-1.5 bg-stone-900 rounded-full mr-4" /> Minder snelle terugval</li>
                <li className="flex items-center"><span className="w-1.5 h-1.5 bg-stone-900 rounded-full mr-4" /> Vertraagde zichtbare veroudering</li>
              </ul>
              <div className="p-6 bg-stone-50 border border-stone-100">
                <p className="text-lg font-medium text-stone-900">Het geeft geen drastische verandering.</p>
                <p className="text-lg font-serif italic text-stone-600 mt-2">Het voorkomt achteruitgang.</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-3xl md:text-4xl font-serif mb-12">Voor wie is dit bedoeld?</h2>
              <p className="text-lg font-light text-stone-600 mb-8">Voor vrouwen die:</p>
              <ul className="space-y-6 text-lg font-light text-stone-800 mb-12">
                <li className="flex items-start"><span className="text-stone-400 mr-4">—</span> Hun investering willen beschermen</li>
                <li className="flex items-start"><span className="text-stone-400 mr-4">—</span> Preventief willen werken</li>
                <li className="flex items-start"><span className="text-stone-400 mr-4">—</span> Begrijpen dat huidveroudering een proces is</li>
                <li className="flex items-start"><span className="text-stone-400 mr-4">—</span> Lange termijn belangrijker vinden dan snelle resultaten</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 5 - WAAROM MAVI MAINTENANCE ANDERS IS */}
      <section className="py-32 bg-stone-50 text-stone-900">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-serif mb-16">Waarom Mavi Maintenance anders is</h2>
            <p className="text-xl font-light text-stone-500 mb-12">Wij:</p>
            <ul className="space-y-6 text-lg font-light text-stone-800 max-w-xl mx-auto text-left mb-16">
              <li className="flex items-center"><span className="w-1.5 h-1.5 bg-stone-400 rounded-full mr-6" /> Overbehandelen niet</li>
              <li className="flex items-center"><span className="w-1.5 h-1.5 bg-stone-400 rounded-full mr-6" /> Werken niet met vaste onderhoudspakketten</li>
              <li className="flex items-center"><span className="w-1.5 h-1.5 bg-stone-400 rounded-full mr-6" /> Evalueren structureel</li>
              <li className="flex items-center"><span className="w-1.5 h-1.5 bg-stone-400 rounded-full mr-6" /> Denken in fases</li>
            </ul>
            <div className="text-3xl font-serif italic text-stone-400">
              <p>Maintenance is geen herhaling.</p>
              <p>Het is strategische begeleiding.</p>
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
            <p className="text-xs uppercase tracking-[0.3em] text-stone-400 font-medium mb-8">Plan je evaluatie</p>
            <h2 className="text-5xl md:text-7xl font-serif leading-tight mb-16">
              Wil je weten waar jouw<br />
              <span className="italic text-stone-400">huid nu staat?</span>
            </h2>
            <Link 
              to="/consult"
              className="group relative inline-flex flex-col items-center justify-center px-12 py-6 bg-[#E8DDD4] text-stone-900 transition-all hover:bg-white"
            >
              <span className="text-sm uppercase tracking-[0.2em] font-bold mb-1">Plan je Skin Strategy Consult</span>
              <span className="text-[10px] uppercase tracking-widest opacity-70">We bepalen samen jouw onderhoudsritme</span>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
