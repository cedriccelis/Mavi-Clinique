import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react';
import { BRAND } from '../constants/brand';

const testimonials = [
  {
    quote: "Mijn kaaklijn is subtiel maar duidelijk strakker. Geen 'gemaakt' effect.",
    author: "Sarah, 42"
  },
  {
    quote: "Het resultaat kwam geleidelijk. Dat gaf vertrouwen.",
    author: "Eveline, 38"
  },
  {
    quote: "Ik wilde geen fillers. Dit voelde natuurlijk.",
    author: "Annelies, 45"
  }
];

const results = [
  {
    image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=2070&auto=format&fit=crop",
    caption: "Resultaat na 12 weken – Contour Protocol. Geen fillers. Gefaseerde aanpak."
  },
  {
    image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?q=80&w=2070&auto=format&fit=crop",
    caption: "Resultaat na 12 weken – Contour Protocol. Geen fillers. Gefaseerde aanpak."
  },
  {
    image: "https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?q=80&w=2070&auto=format&fit=crop",
    caption: "Resultaat na 12 weken – Contour Protocol. Geen fillers. Gefaseerde aanpak."
  }
];

export function ContourProtocol() {
  const [currentResult, setCurrentResult] = useState(0);

  const nextResult = () => {
    setCurrentResult((prev) => (prev + 1) % results.length);
  };

  const prevResult = () => {
    setCurrentResult((prev) => (prev - 1 + results.length) % results.length);
  };

  return (
    <div className="bg-stone-50 min-h-screen pt-24">
      {/* HERO */}
      <section className="relative py-32 bg-stone-900 text-[#E8DDD4] overflow-hidden">
        <div className="absolute inset-0 w-full h-full opacity-20">
          <img
            src="https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=2070&auto=format&fit=crop"
            alt="Contour Protocol"
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
            <p className="text-xs uppercase tracking-[0.3em] text-stone-400 font-medium mb-8">Contour Protocol</p>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif tracking-tight leading-tight mb-8 text-white">
              Definitie verlies je niet.<br />
              <span className="italic text-stone-400">Je verliest structuur.</span>
            </h1>
            <p className="text-xl md:text-2xl font-light text-[#E8DDD4] mb-12 max-w-3xl mx-auto">
              Het Contour Protocol versterkt kaaklijn, onderkin en hals via gerichte diepe stimulatie.
            </p>
            <div className="space-y-2 text-sm uppercase tracking-widest font-medium text-stone-400 mb-12">
              <p>Geen fillers.</p>
              <p>Geen chirurgie.</p>
              <p>Wel structurele opbouw.</p>
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

      {/* SECTION 1 - WAT VERANDERT ER */}
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
                Wat verandert er<br />
                <span className="italic text-stone-400">rond je 30ste?</span>
              </h2>
              <ul className="space-y-6 text-lg font-light border-l border-stone-200 pl-8">
                <li>Collageen daalt jaarlijks</li>
                <li>Spanning vermindert</li>
                <li>De kaaklijn wordt zachter</li>
                <li>Onderkin wordt zichtbaarder</li>
                <li>Hals verliest definitie</li>
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-stone-50 p-12 border border-stone-100"
            >
              <p className="text-2xl font-light text-stone-600 mb-8">
                Dit is geen hydratatieprobleem.<br />
                Dit is een structureel proces.
              </p>
              <p className="text-3xl font-serif italic text-stone-900 pt-8 border-t border-stone-200">
                Glow alleen herstelt geen contour.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 2 & 3 - WAT IS HET & DIEPE STIMULATIE */}
      <section className="py-32 bg-[#E8DDD4] text-stone-900">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-24"
          >
            <h2 className="text-xs uppercase tracking-[0.2em] font-medium text-stone-600 mb-6">Wat is het Contour Protocol?</h2>
            <p className="text-3xl md:text-4xl font-light leading-relaxed mb-12">
              Het Contour Protocol is onze gefaseerde aanpak voor natuurlijke lifting zonder injectables.
            </p>
            <p className="text-lg font-light text-stone-700 mb-8">
              We combineren:
            </p>
            <ul className="space-y-4 text-lg font-light text-stone-800 max-w-2xl mx-auto text-left mb-12">
              <li className="flex items-start"><span className="text-stone-500 mr-4">•</span> HIFU voor diepe stimulatie</li>
              <li className="flex items-start"><span className="text-stone-500 mr-4">•</span> LED Therapy voor herstel en collageenondersteuning</li>
              <li className="flex items-start"><span className="text-stone-500 mr-4">•</span> RF waar nodig voor aanvullende versteviging</li>
              <li className="flex items-start"><span className="text-stone-500 mr-4">•</span> Strategische opvolging</li>
            </ul>
            <p className="text-xl font-serif italic text-stone-900">
              Dit is geen losse behandeling. Dit is een plan.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-left bg-white p-12 md:p-16 shadow-xl shadow-stone-900/5"
          >
            <h3 className="text-3xl font-serif mb-8">Diepe stimulatie</h3>
            <p className="text-lg font-light text-stone-600 mb-8">
              HIFU bereikt diepere huidlagen waar collageenstructuren zich bevinden. Daar gebeurt:
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
              <li className="flex items-center text-stone-800"><span className="w-1.5 h-1.5 bg-stone-900 rounded-full mr-4" /> Directe collageencontractie</li>
              <li className="flex items-center text-stone-800"><span className="w-1.5 h-1.5 bg-stone-900 rounded-full mr-4" /> Activatie van fibroblasten</li>
              <li className="flex items-center text-stone-800"><span className="w-1.5 h-1.5 bg-stone-900 rounded-full mr-4" /> Nieuwe collageenaanmaak</li>
              <li className="flex items-center text-stone-800"><span className="w-1.5 h-1.5 bg-stone-900 rounded-full mr-4" /> Geleidelijke versteviging</li>
            </ul>
            <p className="text-lg font-light text-stone-600 mb-8">
              LED Therapy ondersteunt het herstelproces en optimaliseert collageenactivatie in de weken na behandeling.
            </p>
            <div className="pt-8 border-t border-stone-200 space-y-2 text-sm uppercase tracking-widest font-medium text-stone-500">
              <p>Het resultaat bouwt op over 8–12 weken.</p>
              <p className="text-stone-900 pt-4">Geen abrupt effect. Geen volume. Wel versterking.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 4 - VOOR WIE */}
      <section className="py-32 bg-stone-900 text-stone-50">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-serif mb-12">Voor wie is dit geschikt?</h2>
            <p className="text-xl font-light text-stone-400 mb-12">Het Contour Protocol is ideaal voor vrouwen die:</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 text-left max-w-3xl mx-auto mb-20">
              <div className="flex items-start"><span className="text-stone-500 mr-4">—</span> Hun kaaklijn scherper willen definiëren</div>
              <div className="flex items-start"><span className="text-stone-500 mr-4">—</span> Onderkin of hals willen verstevigen</div>
              <div className="flex items-start"><span className="text-stone-500 mr-4">—</span> Geen fillers willen</div>
              <div className="flex items-start"><span className="text-stone-500 mr-4">—</span> Begrijpen dat huid tijd nodig heeft</div>
            </div>

            <div className="inline-block border border-stone-700 bg-stone-800/50 px-8 py-6">
              <p className="text-[#E8DDD4] font-serif italic text-2xl">
                Niet geschikt als je een instant, dramatisch volume-effect zoekt.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 5 - ONZE AANPAK */}
      <section className="py-32 bg-white text-stone-900">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-serif">Onze aanpak</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="p-10 border border-stone-200"
            >
              <p className="text-xs uppercase tracking-[0.2em] text-stone-400 font-medium mb-6">Stap 1</p>
              <h3 className="text-2xl font-serif mb-4">Analyse</h3>
              <p className="text-stone-600 font-light">We starten altijd met een huidanalyse. We beoordelen elasticiteit, zones en verwachtingen.</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="p-10 border border-stone-200"
            >
              <p className="text-xs uppercase tracking-[0.2em] text-stone-400 font-medium mb-6">Stap 2</p>
              <h3 className="text-2xl font-serif mb-4">Gerichte stimulatie</h3>
              <p className="text-stone-600 font-light">HIFU volgens persoonlijk plan. LED Therapy in de herstelperiode.</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="p-10 border border-stone-200 bg-stone-50"
            >
              <p className="text-xs uppercase tracking-[0.2em] text-stone-400 font-medium mb-6">Stap 3</p>
              <h3 className="text-2xl font-serif mb-4">Opvolging</h3>
              <p className="text-stone-600 font-light mb-6">Na 4–6 weken evalueren we. Indien nodig plannen we RF-versteviging of maintenance.</p>
              <p className="text-xs uppercase tracking-widest font-medium text-stone-800 pt-4 border-t border-stone-200">
                Geen overbehandeling. Geen gokwerk.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 6 - TIJDLIJN & RESULTAAT */}
      <section className="py-32 bg-stone-100 text-stone-900">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-serif mb-16 text-center">Tijdlijn & Resultaat</h2>
            
            <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-stone-300 before:to-transparent">
              <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-stone-200 text-stone-500 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow">
                  <div className="w-2 h-2 bg-stone-900 rounded-full"></div>
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 bg-white border border-stone-200 shadow-sm">
                  <div className="text-xs uppercase tracking-widest text-stone-400 mb-2">Week 0–2</div>
                  <div className="text-lg font-serif text-stone-800">Lichte spanning mogelijk.</div>
                </div>
              </div>
              
              <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-stone-200 text-stone-500 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow">
                  <div className="w-2 h-2 bg-stone-900 rounded-full"></div>
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 bg-white border border-stone-200 shadow-sm">
                  <div className="text-xs uppercase tracking-widest text-stone-400 mb-2">Week 4–8</div>
                  <div className="text-lg font-serif text-stone-800">Begin van zichtbare versteviging.</div>
                </div>
              </div>

              <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-stone-200 text-stone-500 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow">
                  <div className="w-2 h-2 bg-stone-900 rounded-full"></div>
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 bg-white border border-stone-200 shadow-sm">
                  <div className="text-xs uppercase tracking-widest text-stone-400 mb-2">Week 8–12</div>
                  <div className="text-lg font-serif text-stone-800">Maximale opbouw van resultaat.</div>
                </div>
              </div>
            </div>

            <div className="mt-20 text-center space-y-4 text-sm uppercase tracking-widest font-medium text-stone-500">
              <p>Onderhoud meestal na 9–12 maanden.</p>
              <p className="text-stone-400 text-xs normal-case tracking-normal italic">Resultaten verschillen per huid en worden opgebouwd via een gefaseerd protocol.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 7 - RESULTATEN (SLIDER) */}
      <section className="py-32 bg-white text-stone-900">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif mb-6">Resultaten van onze cliënten</h2>
          </div>
          
          <div className="relative max-w-3xl mx-auto">
            <div className="aspect-[4/3] overflow-hidden bg-stone-100 relative">
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentResult}
                  src={results[currentResult].image}
                  alt="Resultaat Contour Protocol"
                  className="w-full h-full object-cover grayscale"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  referrerPolicy="no-referrer"
                />
              </AnimatePresence>
            </div>
            
            <div className="mt-6 flex items-center justify-between">
              <button 
                onClick={prevResult}
                className="p-2 text-stone-400 hover:text-stone-900 transition-colors"
                aria-label="Vorige resultaat"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              
              <p className="text-sm font-light text-stone-500 italic text-center px-4">
                {results[currentResult].caption}
              </p>
              
              <button 
                onClick={nextResult}
                className="p-2 text-stone-400 hover:text-stone-900 transition-colors"
                aria-label="Volgende resultaat"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 8 - TESTIMONIALS */}
      <section className="py-32 bg-[#E8DDD4] text-stone-900">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif">Wat cliënten zeggen</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: idx * 0.1 }}
                className="bg-white p-10 shadow-xl shadow-stone-900/5 flex flex-col justify-between"
              >
                <p className="text-lg font-serif italic text-stone-800 mb-8">
                  "{testimonial.quote}"
                </p>
                <p className="text-sm uppercase tracking-widest font-medium text-stone-500">
                  — {testimonial.author}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 9 - WAAROM MAVI? */}
      <section className="py-32 bg-stone-50 text-stone-900">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-serif mb-16">Waarom Mavi?</h2>
            <ul className="space-y-6 text-lg font-light text-stone-800 max-w-xl mx-auto text-left mb-16">
              <li className="flex items-center"><span className="w-1.5 h-1.5 bg-stone-400 rounded-full mr-6" /> Niet behandelen zonder analyse</li>
              <li className="flex items-center"><span className="w-1.5 h-1.5 bg-stone-400 rounded-full mr-6" /> Geen standaardpakketten pushen</li>
              <li className="flex items-center"><span className="w-1.5 h-1.5 bg-stone-400 rounded-full mr-6" /> Geen overdreven claims</li>
              <li className="flex items-center"><span className="w-1.5 h-1.5 bg-stone-400 rounded-full mr-6" /> Werken met gefaseerde planning</li>
              <li className="flex items-center"><span className="w-1.5 h-1.5 bg-stone-400 rounded-full mr-6" /> Lange termijn belangrijker dan snelle verkoop</li>
            </ul>
            <div className="text-3xl font-serif italic text-stone-400">
              <p>Wij bouwen contour.</p>
              <p>Niet hype.</p>
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
              Versterk je gezicht.<br />
              <span className="italic text-stone-400">Verander je identiteit niet.</span>
            </h2>
            <Link 
              to="/consult"
              className="group relative inline-flex flex-col items-center justify-center px-12 py-6 bg-[#E8DDD4] text-stone-900 transition-all hover:bg-white"
            >
              <span className="text-sm uppercase tracking-[0.2em] font-bold">Plan je Skin Strategy Consult</span>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
