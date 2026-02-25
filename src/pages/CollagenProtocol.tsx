import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { BRAND } from '../constants/brand';
import { ImageComparison, ImageComparisonImage, ImageComparisonSlider } from '@/components/ui/image-comparison';

const testimonials = [
  {
    quote: "Mijn huid voelt steviger en egaler, zonder dat het onnatuurlijk oogt.",
    author: "Nathalie, 39"
  },
  {
    quote: "De glow kwam snel, maar de echte verbetering zag ik na enkele weken.",
    author: "Sofie, 41"
  },
  {
    quote: "Geen drastische verandering, maar wel duidelijk verschil.",
    author: "Lien, 36"
  }
];

const results = [
  {
    beforeImage: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?q=80&w=2070&auto=format&fit=crop",
    afterImage: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?q=80&w=2070&auto=format&fit=crop",
    caption: "Resultaat na 3 sessies Collagen Reset. Gefaseerde aanpak. Geen injectables."
  },
  {
    beforeImage: "https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?q=80&w=2070&auto=format&fit=crop",
    afterImage: "https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?q=80&w=2070&auto=format&fit=crop",
    caption: "Resultaat na 3 sessies Collagen Reset. Gefaseerde aanpak. Geen injectables."
  },
  {
    beforeImage: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=2070&auto=format&fit=crop",
    afterImage: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=2070&auto=format&fit=crop",
    caption: "Resultaat na 3 sessies Collagen Reset. Gefaseerde aanpak. Geen injectables."
  }
];

export function CollagenProtocol() {
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
            src="https://images.unsplash.com/photo-1556228578-0d85b1a4d571?q=80&w=2070&auto=format&fit=crop"
            alt="Collagen Reset"
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
            <p className="text-xs uppercase tracking-[0.3em] text-stone-400 font-medium mb-8">Collagen Reset</p>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif tracking-tight leading-tight mb-8 text-white">
              Elasticiteit verlies je niet.<br />
              <span className="italic text-stone-400">Je verliest densiteit.</span>
            </h1>
            <p className="text-xl md:text-2xl font-light text-[#E8DDD4] mb-12 max-w-3xl mx-auto">
              Fijne lijntjes ontstaan niet plots. Ze bouwen zich op. Collagen Reset activeert je huid van binnenuit.
            </p>
            <div className="space-y-2 text-sm uppercase tracking-widest font-medium text-stone-400 mb-12">
              <p>Geen fillers.</p>
              <p>Geen volume.</p>
              <p>Wel versterking.</p>
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
                Wat verandert in<br />
                <span className="italic text-stone-400">je huid?</span>
              </h2>
              <p className="text-xl font-light text-stone-600 mb-8">
                Vanaf je 30ste:
              </p>
              <ul className="space-y-6 text-lg font-light border-l border-stone-200 pl-8">
                <li>Collageenproductie daalt</li>
                <li>Huidstructuur wordt losser</li>
                <li>Poriën worden zichtbaarder</li>
                <li>Lijntjes worden permanenter</li>
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
                Dit is geen oppervlakkig probleem.<br />
                Dit is verlies van densiteit.
              </p>
              <p className="text-3xl font-serif italic text-stone-900 pt-8 border-t border-stone-200">
                Hydratatie alleen lost dit niet op.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 2 & 3 - WAT IS HET & HOE WERKT HET */}
      <section className="py-32 bg-[#E8DDD4] text-stone-900">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-24"
          >
            <h2 className="text-xs uppercase tracking-[0.2em] font-medium text-stone-600 mb-6">Wat is Collagen Reset?</h2>
            <p className="text-3xl md:text-4xl font-light leading-relaxed mb-12">
              Collagen Reset is ons gefaseerd programma voor verbetering van huidstructuur, fijne lijntjes, poriën en verminderde elasticiteit.
            </p>
            <p className="text-lg font-light text-stone-700 mb-8">
              We combineren:
            </p>
            <ul className="space-y-4 text-lg font-light text-stone-800 max-w-2xl mx-auto text-left mb-12">
              <li className="flex items-start"><span className="text-stone-500 mr-4">•</span> Microneedling voor gecontroleerde collageenstimulatie</li>
              <li className="flex items-start"><span className="text-stone-500 mr-4">•</span> LED Therapy voor herstel en optimale fibroblastactivatie</li>
              <li className="flex items-start"><span className="text-stone-500 mr-4">•</span> Hydrafacial ondersteuning voor huidconditie</li>
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
            <h3 className="text-3xl font-serif mb-8">Hoe werkt het?</h3>
            <p className="text-lg font-light text-stone-600 mb-8">
              Microneedling creëert gecontroleerde microkanalen in de huid. Dat triggert:
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
              <li className="flex items-center text-stone-800"><span className="w-1.5 h-1.5 bg-stone-900 rounded-full mr-4" /> Activatie van fibroblasten</li>
              <li className="flex items-center text-stone-800"><span className="w-1.5 h-1.5 bg-stone-900 rounded-full mr-4" /> Nieuwe collageenaanmaak</li>
              <li className="flex items-center text-stone-800"><span className="w-1.5 h-1.5 bg-stone-900 rounded-full mr-4" /> Verbetering van huiddichtheid</li>
              <li className="flex items-center text-stone-800"><span className="w-1.5 h-1.5 bg-stone-900 rounded-full mr-4" /> Verfijning van textuur</li>
            </ul>
            <p className="text-lg font-light text-stone-600 mb-8">
              LED Therapy wordt na elke sessie ingezet om inflammatie te reguleren, herstel te versnellen en collageenrespons te optimaliseren.
            </p>
            <div className="pt-8 border-t border-stone-200 space-y-2 text-sm uppercase tracking-widest font-medium text-stone-500">
              <p>Het resultaat bouwt op over meerdere sessies.</p>
              <p className="text-stone-900 pt-4">Geen abrupt effect. Wel structurele verbetering.</p>
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
            <p className="text-xl font-light text-stone-400 mb-12">Collagen Reset is ideaal voor vrouwen die:</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 text-left max-w-3xl mx-auto mb-20">
              <div className="flex items-start"><span className="text-stone-500 mr-4">—</span> Fijne lijntjes willen verzachten</div>
              <div className="flex items-start"><span className="text-stone-500 mr-4">—</span> Hun huidstructuur willen verfijnen</div>
              <div className="flex items-start"><span className="text-stone-500 mr-4">—</span> Poriën willen verkleinen</div>
              <div className="flex items-start"><span className="text-stone-500 mr-4">—</span> Geen injectables willen</div>
              <div className="flex items-start"><span className="text-stone-500 mr-4">—</span> Begrijpen dat huid tijd nodig heeft</div>
            </div>

            <div className="inline-block border border-stone-700 bg-stone-800/50 px-8 py-6">
              <p className="text-[#E8DDD4] font-serif italic text-2xl">
                Niet geschikt als je een instant volumeverandering zoekt.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 5 - ONZE AANPAK */}
      <section className="py-32 bg-white text-stone-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-serif">Onze aanpak</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="p-10 border border-stone-200"
            >
              <p className="text-xs uppercase tracking-[0.2em] text-stone-400 font-medium mb-6">Stap 1</p>
              <h3 className="text-2xl font-serif mb-4">Analyse</h3>
              <p className="text-stone-600 font-light">We starten met een huidanalyse. We bepalen elasticiteit, textuur en doelstelling.</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="p-10 border border-stone-200"
            >
              <p className="text-xs uppercase tracking-[0.2em] text-stone-400 font-medium mb-6">Stap 2</p>
              <h3 className="text-2xl font-serif mb-4">Stimulatie</h3>
              <p className="text-stone-600 font-light">Microneedling volgens persoonlijk plan. LED Therapy na elke sessie.</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="p-10 border border-stone-200"
            >
              <p className="text-xs uppercase tracking-[0.2em] text-stone-400 font-medium mb-6">Stap 3</p>
              <h3 className="text-2xl font-serif mb-4">Ondersteuning</h3>
              <p className="text-stone-600 font-light">Hydrafacial of aanvullende ondersteuning waar nodig.</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="p-10 border border-stone-200 bg-stone-50"
            >
              <p className="text-xs uppercase tracking-[0.2em] text-stone-400 font-medium mb-6">Stap 4</p>
              <h3 className="text-2xl font-serif mb-4">Evaluatie</h3>
              <p className="text-stone-600 font-light mb-6">Na 3 sessies beoordelen we de opbouw van densiteit.</p>
              <p className="text-xs uppercase tracking-widest font-medium text-stone-800 pt-4 border-t border-stone-200">
                Geen overbehandeling. Geen agressieve aanpak.
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
                  <div className="text-lg font-serif text-stone-800">Huid kan licht rood zijn. Snelle herstelfase.</div>
                </div>
              </div>
              
              <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-stone-200 text-stone-500 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow">
                  <div className="w-2 h-2 bg-stone-900 rounded-full"></div>
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 bg-white border border-stone-200 shadow-sm">
                  <div className="text-xs uppercase tracking-widest text-stone-400 mb-2">Week 4–6</div>
                  <div className="text-lg font-serif text-stone-800">Begin van verfijning zichtbaar.</div>
                </div>
              </div>

              <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-stone-200 text-stone-500 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow">
                  <div className="w-2 h-2 bg-stone-900 rounded-full"></div>
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 bg-white border border-stone-200 shadow-sm">
                  <div className="text-xs uppercase tracking-widest text-stone-400 mb-2">Week 8–12</div>
                  <div className="text-lg font-serif text-stone-800">Verbetering in textuur en spanning wordt duidelijker.</div>
                </div>
              </div>
            </div>

            <div className="mt-20 text-center space-y-4 text-sm uppercase tracking-widest font-medium text-stone-500">
              <p>Onderhoud wordt meestal elke 6–12 maanden geadviseerd.</p>
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
                <motion.div
                  key={currentResult}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0"
                >
                  <ImageComparison className="w-full h-full" enableHover>
                    <ImageComparisonImage
                      src={results[currentResult].beforeImage}
                      className="grayscale"
                      alt="Voor"
                      position="left"
                    />
                    <ImageComparisonImage
                      src={results[currentResult].afterImage}
                      alt="Na"
                      position="right"
                    />
                    <ImageComparisonSlider className="w-0.5 bg-white/50 backdrop-blur-xs">
                      <div className="absolute top-1/2 left-1/2 size-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white shadow-sm"></div>
                    </ImageComparisonSlider>
                  </ImageComparison>
                </motion.div>
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
              <li className="flex items-center"><span className="w-1.5 h-1.5 bg-stone-400 rounded-full mr-6" /> Analyse-first</li>
              <li className="flex items-center"><span className="w-1.5 h-1.5 bg-stone-400 rounded-full mr-6" /> Geen standaardpakketten</li>
              <li className="flex items-center"><span className="w-1.5 h-1.5 bg-stone-400 rounded-full mr-6" /> Geen overdreven claims</li>
              <li className="flex items-center"><span className="w-1.5 h-1.5 bg-stone-400 rounded-full mr-6" /> Gefaseerde planning</li>
              <li className="flex items-center"><span className="w-1.5 h-1.5 bg-stone-400 rounded-full mr-6" /> Lange termijn belangrijker dan snelle verkoop</li>
            </ul>
            <div className="text-3xl font-serif italic text-stone-400">
              <p>Wij bouwen densiteit.</p>
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
              Versterk je huidstructuur.<br />
              <span className="italic text-stone-400">Niet alleen je glow.</span>
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
