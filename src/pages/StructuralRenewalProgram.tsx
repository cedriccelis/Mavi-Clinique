import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { BRAND } from '../constants/brand';
import { ImageComparison, ImageComparisonImage, ImageComparisonSlider } from '@/components/ui/image-comparison';

const testimonials = [
  {
    quote: "Mijn huid voelt steviger én compacter. Niet opgeblazen, maar sterker.",
    author: "Katrien, 47"
  },
  {
    quote: "Het verschil zat niet in één week, maar in de maanden erna.",
    author: "Ilse, 52"
  },
  {
    quote: "Dit voelde als investeren in mijn huid, niet als een snelle oplossing.",
    author: "Ann, 44"
  }
];

const results = [
  {
    beforeImage: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=2070&auto=format&fit=crop",
    afterImage: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=2070&auto=format&fit=crop",
    caption: "Resultaat na volledig Structural Renewal traject. Gefaseerde aanpak. Geen injectables."
  },
  {
    beforeImage: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?q=80&w=2070&auto=format&fit=crop",
    afterImage: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?q=80&w=2070&auto=format&fit=crop",
    caption: "Resultaat na volledig Structural Renewal traject. Gefaseerde aanpak. Geen injectables."
  },
  {
    beforeImage: "https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?q=80&w=2070&auto=format&fit=crop",
    afterImage: "https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?q=80&w=2070&auto=format&fit=crop",
    caption: "Resultaat na volledig Structural Renewal traject. Gefaseerde aanpak. Geen injectables."
  }
];

export function StructuralRenewalProgram() {
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
            alt="Structural Renewal Program"
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
            <p className="text-xs uppercase tracking-[0.3em] text-stone-400 font-medium mb-8">Structural Renewal</p>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif tracking-tight leading-tight mb-8 text-white">
              Je huid veroudert niet plots.<br />
              <span className="italic text-stone-400">Ze verliest structuur in lagen.</span>
            </h1>
            <p className="text-xl md:text-2xl font-light text-[#E8DDD4] mb-12 max-w-3xl mx-auto">
              Structural Renewal is ons meest complete, gefaseerde huidversterkingsprogramma.
            </p>
            <div className="space-y-2 text-sm uppercase tracking-widest font-medium text-stone-400 mb-12">
              <p>Geen fillers.</p>
              <p>Geen chirurgie.</p>
              <p>Maar wél maximale structurele verbetering.</p>
            </div>
            <p className="text-lg font-serif italic text-white mb-12">Dit is geen behandeling. Dit is een traject.</p>
            
            <Link 
              to="/consult"
              className="group relative inline-flex flex-col items-center justify-center px-10 py-5 bg-[#E8DDD4] text-stone-900 transition-all hover:bg-white"
            >
              <span className="text-sm uppercase tracking-[0.2em] font-bold">Plan je Skin Strategy Consult</span>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* SECTION 1 - WANNEER IS DIT NODIG */}
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
                Wanneer is dit<br />
                <span className="italic text-stone-400">nodig?</span>
              </h2>
              <p className="text-xl font-light text-stone-600 mb-8">
                Soms is één stimulatie niet genoeg. Wanneer je merkt:
              </p>
              <ul className="space-y-6 text-lg font-light border-l border-stone-200 pl-8">
                <li>Verslapping én textuurverlies</li>
                <li>Verminderde densiteit</li>
                <li>Hals en kaaklijn minder strak</li>
                <li>Lijntjes die blijven</li>
                <li>Huid die "dunner" aanvoelt</li>
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
                Dan volstaat een losse aanpak niet.
              </p>
              <p className="text-3xl font-serif italic text-stone-900 pt-8 border-t border-stone-200">
                Dan werken we in lagen.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 2 & 3 - WAT IS HET & WAAROM GEFASEERD */}
      <section className="py-32 bg-[#E8DDD4] text-stone-900">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-24"
          >
            <h2 className="text-xs uppercase tracking-[0.2em] font-medium text-stone-600 mb-6">Wat is Structural Renewal?</h2>
            <p className="text-3xl md:text-4xl font-light leading-relaxed mb-12">
              Structural Renewal combineert diepe stimulatie, gecontroleerde huidvernieuwing en hersteloptimalisatie in één gefaseerd programma.
            </p>
            <p className="text-lg font-light text-stone-700 mb-8">
              We werken met:
            </p>
            <ul className="space-y-4 text-lg font-light text-stone-800 max-w-2xl mx-auto text-left mb-12">
              <li className="flex items-start"><span className="text-stone-500 mr-4">•</span> <span className="font-medium mr-2">HIFU</span> – diepe structurele stimulatie</li>
              <li className="flex items-start"><span className="text-stone-500 mr-4">•</span> <span className="font-medium mr-2">Microneedling</span> – collageenopbouw in de dermis</li>
              <li className="flex items-start"><span className="text-stone-500 mr-4">•</span> <span className="font-medium mr-2">LED Therapy</span> – herstel, inflammatieregulatie en fibroblastactivatie</li>
              <li className="flex items-start"><span className="text-stone-500 mr-4">•</span> <span className="font-medium mr-2">Hydrafacial</span> – huidconditie en ondersteuning</li>
              <li className="flex items-start"><span className="text-stone-500 mr-4">•</span> <span className="font-medium mr-2">RF</span> (indien nodig) – aanvullende versteviging</li>
            </ul>
            <div className="space-y-2 text-xl font-serif italic text-stone-900">
              <p>Elke fase bouwt verder op de vorige.</p>
              <p>Geen overbehandeling. Geen alles tegelijk. Wel strategie.</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-left bg-white p-12 md:p-16 shadow-xl shadow-stone-900/5"
          >
            <h3 className="text-3xl font-serif mb-8">Waarom gefaseerd?</h3>
            <p className="text-lg font-light text-stone-600 mb-8">
              Te veel stimulatie tegelijk kan:
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
              <li className="flex items-center text-stone-800"><span className="w-1.5 h-1.5 bg-stone-900 rounded-full mr-4" /> Inflammatie verhogen</li>
              <li className="flex items-center text-stone-800"><span className="w-1.5 h-1.5 bg-stone-900 rounded-full mr-4" /> Herstel vertragen</li>
              <li className="flex items-center text-stone-800"><span className="w-1.5 h-1.5 bg-stone-900 rounded-full mr-4" /> Collageenrespons verstoren</li>
            </ul>
            <p className="text-lg font-light text-stone-600 mb-8">
              Wij bouwen gecontroleerd op.
            </p>
            <div className="pt-8 border-t border-stone-200 space-y-2 text-sm uppercase tracking-widest font-medium text-stone-500">
              <p>Diepte → Densiteit → Verfijning → Onderhoud.</p>
              <p className="text-stone-900 pt-4">Dat is het verschil tussen behandeling en strategie.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 4 - ONZE AANPAK */}
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
              <p className="text-xs uppercase tracking-[0.2em] text-stone-400 font-medium mb-6">Fase 1</p>
              <h3 className="text-2xl font-serif mb-4">Diepte</h3>
              <p className="text-stone-600 font-light">HIFU activeert diepe huidlagen waar structurele verankering zit.</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="p-10 border border-stone-200"
            >
              <p className="text-xs uppercase tracking-[0.2em] text-stone-400 font-medium mb-6">Fase 2</p>
              <h3 className="text-2xl font-serif mb-4">Opbouw</h3>
              <p className="text-stone-600 font-light">Microneedling stimuleert nieuwe collageenaanmaak. LED Therapy ondersteunt herstel na elke sessie.</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="p-10 border border-stone-200"
            >
              <p className="text-xs uppercase tracking-[0.2em] text-stone-400 font-medium mb-6">Fase 3</p>
              <h3 className="text-2xl font-serif mb-4">Verfijning</h3>
              <p className="text-stone-600 font-light">Hydrafacial optimaliseert huidconditie en textuur.</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="p-10 border border-stone-200 bg-stone-50"
            >
              <p className="text-xs uppercase tracking-[0.2em] text-stone-400 font-medium mb-6">Fase 4</p>
              <h3 className="text-2xl font-serif mb-4">Evaluatie & Maintenance</h3>
              <p className="text-stone-600 font-light mb-6">We evalueren en bepalen het onderhoudsritme.</p>
              <p className="text-xs uppercase tracking-widest font-medium text-stone-800 pt-4 border-t border-stone-200">
                Geen standaardplanning. Wel gepersonaliseerde opbouw.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 5 - TIJDLIJN & RESULTAAT */}
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
                  <div className="text-lg font-serif text-stone-800">Herstel en lichte spanning.</div>
                </div>
              </div>
              
              <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-stone-200 text-stone-500 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow">
                  <div className="w-2 h-2 bg-stone-900 rounded-full"></div>
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 bg-white border border-stone-200 shadow-sm">
                  <div className="text-xs uppercase tracking-widest text-stone-400 mb-2">Week 4–8</div>
                  <div className="text-lg font-serif text-stone-800">Begin van versteviging en verfijning.</div>
                </div>
              </div>

              <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-stone-200 text-stone-500 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow">
                  <div className="w-2 h-2 bg-stone-900 rounded-full"></div>
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 bg-white border border-stone-200 shadow-sm">
                  <div className="text-xs uppercase tracking-widest text-stone-400 mb-2">Week 8–16</div>
                  <div className="text-lg font-serif text-stone-800">Zichtbare verbetering in contour én textuur.</div>
                </div>
              </div>

              <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-stone-200 text-stone-500 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow">
                  <div className="w-2 h-2 bg-stone-900 rounded-full"></div>
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 bg-white border border-stone-200 shadow-sm">
                  <div className="text-xs uppercase tracking-widest text-stone-400 mb-2">Maand 4–6</div>
                  <div className="text-lg font-serif text-stone-800">Maximale opbouw van densiteit.</div>
                </div>
              </div>
            </div>

            <div className="mt-20 text-center space-y-4 text-sm uppercase tracking-widest font-medium text-stone-500">
              <p>Dit traject vraagt tijd. Maar levert duurzame versterking.</p>
              <p className="text-stone-400 text-xs normal-case tracking-normal italic">Resultaten verschillen per huidtype en uitgangssituatie.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 6 - VOOR WIE */}
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
            <p className="text-xl font-light text-stone-400 mb-12">Structural Renewal is ideaal voor vrouwen 40+ of vrouwen met gecombineerde huidveroudering.</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 text-left max-w-3xl mx-auto mb-20">
              <div className="flex items-start"><span className="text-stone-500 mr-4">—</span> Structurele verbetering wil</div>
              <div className="flex items-start"><span className="text-stone-500 mr-4">—</span> Begrijpt dat herstel tijd vraagt</div>
              <div className="flex items-start"><span className="text-stone-500 mr-4">—</span> Lange termijn belangrijker vindt dan snelle hype</div>
            </div>

            <div className="inline-block border border-stone-700 bg-stone-800/50 px-8 py-6">
              <p className="text-[#E8DDD4] font-serif italic text-2xl">
                Niet geschikt als je een instant volume-effect zoekt.
              </p>
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
            <div className="mt-8 text-center text-sm uppercase tracking-widest font-medium text-stone-400">
              <p>Geen extreme claims. Wel duidelijke verbetering.</p>
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

      {/* SECTION 9 - WAAROM DIT ONS PREMIUM TRAJECT IS */}
      <section className="py-32 bg-stone-50 text-stone-900">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-serif mb-16">Waarom dit ons premium traject is</h2>
            <p className="text-xl font-light text-stone-500 mb-12">Omdat huidveroudering nooit één laag betreft. En omdat wij:</p>
            <ul className="space-y-6 text-lg font-light text-stone-800 max-w-xl mx-auto text-left mb-16">
              <li className="flex items-center"><span className="w-1.5 h-1.5 bg-stone-400 rounded-full mr-6" /> Niet in losse sessies geloven</li>
              <li className="flex items-center"><span className="w-1.5 h-1.5 bg-stone-400 rounded-full mr-6" /> Geen quick fixes verkopen</li>
              <li className="flex items-center"><span className="w-1.5 h-1.5 bg-stone-400 rounded-full mr-6" /> Geen injectables nodig hebben</li>
              <li className="flex items-center"><span className="w-1.5 h-1.5 bg-stone-400 rounded-full mr-6" /> Wel structurele opbouw begrijpen</li>
            </ul>
            <div className="text-3xl font-serif italic text-stone-400">
              <p>Wij bouwen huidkwaliteit.</p>
              <p>Geen volume. Geen hype. Wel kracht.</p>
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
              Versterk je huid in lagen.<br />
              <span className="italic text-stone-400">Niet in trends.</span>
            </h2>
            <Link 
              to="/consult"
              className="group relative inline-flex flex-col items-center justify-center px-12 py-6 bg-[#E8DDD4] text-stone-900 transition-all hover:bg-white"
            >
              <span className="text-sm uppercase tracking-[0.2em] font-bold mb-1">Plan je Skin Strategy Consult</span>
              <span className="text-[10px] uppercase tracking-widest opacity-70">Beperkt aantal trajectplaatsen per maand</span>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
