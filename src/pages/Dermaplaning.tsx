import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export function Dermaplaning() {
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
            <p className="text-xs uppercase tracking-[0.3em] text-stone-500 font-medium mb-8">Dermaplaning</p>
            <h1 className="text-5xl md:text-7xl font-serif tracking-tight leading-tight mb-8 text-stone-900">
              Direct verfijnde huid.<br />
              <span className="italic text-stone-500">Zonder downtime.</span>
            </h1>
            <p className="text-xl font-light text-stone-600 mb-12 max-w-2xl mx-auto">
              Professionele exfoliatie die dode huidcellen en vellushaartjes verwijdert voor een egaler en frisser huidoppervlak.
            </p>
            
            <Link 
              to="/consult"
              className="inline-flex items-center justify-center px-10 py-5 bg-stone-900 text-white text-xs uppercase tracking-[0.2em] font-medium hover:bg-stone-800 transition-colors"
            >
              Plan je afspraak
            </Link>
          </motion.div>
        </div>
      </section>

      {/* SECTION 1 - WAT IS DERMAPLANING? */}
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
                Wat is<br />
                <span className="italic text-stone-400">Dermaplaning?</span>
              </h2>
              <p className="text-xl font-light text-stone-600 mb-8">
                Dermaplaning is een gecontroleerde manuele exfoliatie waarbij:
              </p>
              <ul className="space-y-4 text-lg font-light border-l border-stone-200 pl-8 mb-8">
                <li>Dode huidcellen worden verwijderd</li>
                <li>Fijn donshaartje wordt weggehaald</li>
                <li>De huidstructuur gladder wordt</li>
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
                Het resultaat is een zachtere, egalere huid met een onmiddellijke glow.
              </p>
              <div className="space-y-2 text-lg font-light text-stone-600 pt-6 border-t border-stone-200">
                <p>Geen agressieve peeling.</p>
                <p>Geen chemische belasting.</p>
                <p>Geen downtime.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 2 - VOOR WIE IS DIT GESCHIKT? & WAT MAG JE VERWACHTEN? */}
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
              <h2 className="text-2xl font-serif mb-8">Voor wie is dit geschikt?</h2>
              <p className="text-stone-600 font-light mb-6">Dermaplaning is geschikt voor:</p>
              <ul className="space-y-4 text-lg font-light text-stone-800 mb-8">
                <li className="flex items-center"><span className="text-stone-400 mr-4">—</span> Doffe huid</li>
                <li className="flex items-center"><span className="text-stone-400 mr-4">—</span> Ongelijkmatige textuur</li>
                <li className="flex items-center"><span className="text-stone-400 mr-4">—</span> Droge huid</li>
                <li className="flex items-center"><span className="text-stone-400 mr-4">—</span> Make-up die niet mooi ligt</li>
                <li className="flex items-center"><span className="text-stone-400 mr-4">—</span> Voorbereiding op andere behandelingen</li>
              </ul>
              <div className="pt-6 border-t border-stone-200">
                <p className="text-stone-900 font-medium mb-2">Niet geschikt bij actieve acne of ontstekingen.</p>
                <p className="text-stone-600 font-light text-sm italic">Tijdens de Skin Analysis beoordelen we of deze behandeling passend is.</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white p-12 shadow-xl shadow-stone-900/5"
            >
              <h2 className="text-2xl font-serif mb-8">Wat mag je verwachten?</h2>
              <p className="text-sm uppercase tracking-widest font-medium text-stone-500 mb-6">Direct zichtbaar verschil</p>
              <p className="text-stone-600 font-light mb-6">Na de behandeling voelt de huid:</p>
              <ul className="space-y-4 text-lg font-light text-stone-800 mb-8">
                <li className="flex items-center"><span className="text-stone-400 mr-4">—</span> Zachter</li>
                <li className="flex items-center"><span className="text-stone-400 mr-4">—</span> Gladder</li>
                <li className="flex items-center"><span className="text-stone-400 mr-4">—</span> Heldere uitstraling</li>
                <li className="flex items-center"><span className="text-stone-400 mr-4">—</span> Betere productopname</li>
              </ul>
              <div className="pt-6 border-t border-stone-200 space-y-4">
                <p className="text-stone-800 font-medium">Make-up ligt egaler. Huidverzorging wordt beter opgenomen.</p>
                <p className="text-stone-600 font-light text-sm">Dit is geen liftende behandeling. We verbeteren de huidoppervlakte, niet de diepe structuur.</p>
                <p className="text-stone-600 font-light text-sm italic">Resultaten verschillen per huid en worden opgebouwd via een gefaseerd protocol.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 3 - DERMAPLANING BINNEN SKIN PROGRAMS & INVESTERING */}
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
              <h2 className="text-2xl font-serif mb-6">Binnen Skin Programs</h2>
              <p className="text-stone-600 font-light mb-6">Dermaplaning wordt vaak ingezet als:</p>
              <ul className="space-y-3 text-stone-800 font-light mb-8">
                <li className="flex items-center"><span className="w-1.5 h-1.5 bg-stone-400 rounded-full mr-4" /> Voorbereiding op Microneedling</li>
                <li className="flex items-center"><span className="w-1.5 h-1.5 bg-stone-400 rounded-full mr-4" /> Voorbereiding op Hydrafacial</li>
                <li className="flex items-center"><span className="w-1.5 h-1.5 bg-stone-400 rounded-full mr-4" /> Onderdeel van Maintenance</li>
                <li className="flex items-center"><span className="w-1.5 h-1.5 bg-stone-400 rounded-full mr-4" /> Glow-moment tussen intensievere trajecten</li>
              </ul>
              <p className="text-lg font-serif italic text-stone-900 pt-6 border-t border-stone-200">
                Het versterkt andere behandelingen, maar vervangt ze niet.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-stone-50 p-12 border border-stone-200 flex flex-col justify-between"
            >
              <div>
                <h2 className="text-2xl font-serif mb-6">Tijdsduur & Investering</h2>
                <div className="space-y-6 text-lg font-light text-stone-800 mb-8">
                  <div className="flex justify-between border-b border-stone-200 pb-2">
                    <span className="text-stone-500">Duur</span>
                    <span>± 45 minuten</span>
                  </div>
                  <div className="flex justify-between border-b border-stone-200 pb-2">
                    <span className="text-stone-500">Investering</span>
                    <span className="font-medium">€49</span>
                  </div>
                </div>
              </div>
              <p className="text-lg font-serif italic text-stone-900 pt-6 border-t border-stone-200">
                Combineerbaar met Hydrafacial of LED.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 4 - VEILIGHEID & AANPAK */}
      <section className="py-32 bg-stone-100 text-stone-900 text-center">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-serif mb-8">Veiligheid & Aanpak</h2>
            <p className="text-xl font-light text-stone-600 mb-8">
              Bij Mavi werken we:
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-8 text-sm uppercase tracking-widest font-medium text-stone-800 mb-12">
              <span>Hygiënisch en gecontroleerd</span>
              <span className="hidden sm:block w-1.5 h-1.5 bg-stone-400 rounded-full" />
              <span>Met professionele technieken</span>
              <span className="hidden sm:block w-1.5 h-1.5 bg-stone-400 rounded-full" />
              <span>Zonder agressieve druk</span>
              <span className="hidden sm:block w-1.5 h-1.5 bg-stone-400 rounded-full" />
              <span>Met respect voor huidbarrière</span>
            </div>

            <p className="text-xl font-serif italic text-stone-900">
              We behandelen nooit over ontstoken huidzones.
            </p>
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
              Wil je weten of Dermaplaning<br />
              <span className="italic text-stone-400">past binnen jouw huidplan?</span>
            </h2>
            <Link 
              to="/consult"
              className="inline-flex items-center justify-center px-12 py-5 bg-[#E8DDD4] text-stone-900 text-xs uppercase tracking-[0.2em] font-bold hover:bg-white transition-colors mt-8"
            >
              Plan je Skin Strategy Consult
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
