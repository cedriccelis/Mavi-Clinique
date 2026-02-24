import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export function About() {
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
            <p className="text-xs uppercase tracking-[0.3em] text-stone-500 font-medium mb-8">Over Mavi</p>
            <h1 className="text-5xl md:text-7xl font-serif tracking-tight leading-tight mb-8 text-stone-900">
              Gebouwd vanuit visie.<br />
              <span className="italic text-stone-500">Gedreven door structuur.</span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* WAAROM MAVI IS ONTSTAAN */}
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
                Waarom Mavi<br />
                <span className="italic text-stone-400">is ontstaan</span>
              </h2>
              <p className="text-xl font-light text-stone-600 mb-8">
                Mavi is niet toevallig gestart. We zagen in de markt:
              </p>
              <ul className="space-y-4 text-lg font-light border-l border-stone-200 pl-8 mb-8">
                <li>Snelle behandelingen zonder plan</li>
                <li>Acties en kortingen zonder strategie</li>
                <li>Apparatuur zonder duidelijke positionering</li>
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
                En we besloten het anders te doen.
              </p>
              <div className="space-y-2 text-lg font-light text-stone-600 pt-6 border-t border-stone-200">
                <p>Huidveroudering vraagt structuur.</p>
                <p>Geen impulsen. Geen trends.</p>
                <p className="pt-4 font-medium text-stone-900">Zo is Mavi ontstaan. Niet als salon. Maar als clinic met visie.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CEDRIC & JOYCE */}
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
              <h2 className="text-2xl font-serif mb-2">Cedric</h2>
              <p className="text-sm uppercase tracking-widest font-medium text-stone-500 mb-8">De Architect achter Mavi</p>
              <p className="text-stone-600 font-light mb-6">Cedric bouwde Mavi vanuit een duidelijke ondernemersvisie:</p>
              <div className="space-y-2 text-lg font-light text-stone-800 mb-8">
                <p>Geen volume-business.</p>
                <p>Geen race naar de laagste prijs.</p>
                <p>Geen "iedereen bedienen".</p>
              </div>
              <p className="text-stone-600 font-light mb-4">Wel:</p>
              <ul className="space-y-3 text-lg font-light text-stone-800 mb-8">
                <li className="flex items-center"><span className="w-1.5 h-1.5 bg-stone-900 rounded-full mr-4" /> Premium positionering</li>
                <li className="flex items-center"><span className="w-1.5 h-1.5 bg-stone-900 rounded-full mr-4" /> Gefaseerde trajecten</li>
                <li className="flex items-center"><span className="w-1.5 h-1.5 bg-stone-900 rounded-full mr-4" /> Heldere strategie</li>
                <li className="flex items-center"><span className="w-1.5 h-1.5 bg-stone-900 rounded-full mr-4" /> Lange termijn denken</li>
              </ul>
              <div className="pt-6 border-t border-stone-200 space-y-4">
                <p className="text-stone-800 font-medium">Hij kijkt niet alleen naar behandelingen. Hij kijkt naar het totaalbeeld.</p>
                <p className="text-stone-600 font-light text-sm">Wat moet Mavi over 5 jaar zijn? Hoe bouwen we autoriteit? Hoe zorgen we dat elke klant een doordacht plan krijgt?</p>
                <p className="text-stone-900 font-serif italic pt-2">Mavi is geen toeval. Het is een bewuste keuze.</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white p-12 shadow-xl shadow-stone-900/5"
            >
              <h2 className="text-2xl font-serif mb-2">Joyce</h2>
              <p className="text-sm uppercase tracking-widest font-medium text-stone-500 mb-8">De Klinische Kracht</p>
              <p className="text-stone-600 font-light mb-6">Joyce vertaalt die visie naar de behandelruimte.</p>
              <div className="space-y-2 text-lg font-light text-stone-800 mb-8">
                <p>Ze werkt niet op gevoel.</p>
                <p>Ze werkt met structuur.</p>
              </div>
              <p className="text-stone-600 font-light mb-4">Elke huid krijgt:</p>
              <ul className="space-y-3 text-lg font-light text-stone-800 mb-8">
                <li className="flex items-center"><span className="w-1.5 h-1.5 bg-stone-900 rounded-full mr-4" /> Analyse</li>
                <li className="flex items-center"><span className="w-1.5 h-1.5 bg-stone-900 rounded-full mr-4" /> Evaluatie</li>
                <li className="flex items-center"><span className="w-1.5 h-1.5 bg-stone-900 rounded-full mr-4" /> Gefaseerde aanpak</li>
              </ul>
              <p className="text-stone-600 font-light mb-4">Ze focust op:</p>
              <ul className="space-y-3 text-lg font-light text-stone-800 mb-8">
                <li className="flex items-center"><span className="text-stone-400 mr-4">—</span> Structurele lifting</li>
                <li className="flex items-center"><span className="text-stone-400 mr-4">—</span> Collageenopbouw</li>
                <li className="flex items-center"><span className="text-stone-400 mr-4">—</span> Verbetering van huiddensiteit</li>
                <li className="flex items-center"><span className="text-stone-400 mr-4">—</span> Langetermijnresultaat</li>
              </ul>
              <div className="pt-6 border-t border-stone-200 space-y-2">
                <p className="text-stone-600 font-light text-sm">Geen overbehandeling. Geen snelle oplossingen.</p>
                <p className="text-stone-900 font-serif italic pt-2">Rustig. Doordacht. Professioneel.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* WAT ONS ANDERS MAAKT & ONZE MISSIE */}
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
              <h2 className="text-2xl font-serif mb-6">Wat ons anders maakt</h2>
              <p className="text-stone-600 font-light mb-6">Wij combineren:</p>
              <div className="space-y-2 text-lg font-medium text-stone-900 mb-8 text-center bg-white py-6 border border-stone-100">
                <p>Strategisch ondernemerschap</p>
                <p className="text-stone-400">+</p>
                <p>Klinische uitvoering</p>
              </div>
              <p className="text-stone-600 font-light mb-4">Dat betekent:</p>
              <ul className="space-y-3 text-stone-800 font-light mb-8">
                <li className="flex items-start"><span className="w-1.5 h-1.5 bg-stone-400 rounded-full mr-4 mt-2" /> We investeren enkel in technologie die past binnen onze visie</li>
                <li className="flex items-center"><span className="w-1.5 h-1.5 bg-stone-400 rounded-full mr-4" /> We werken met vaste Skin Programs</li>
                <li className="flex items-center"><span className="w-1.5 h-1.5 bg-stone-400 rounded-full mr-4" /> We begeleiden in trajecten</li>
                <li className="flex items-center"><span className="w-1.5 h-1.5 bg-stone-400 rounded-full mr-4" /> We plannen vooruit</li>
              </ul>
              <p className="text-lg font-serif italic text-stone-900 pt-6 border-t border-stone-200">
                Geen chaos. Geen willekeur.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-stone-50 p-12 border border-stone-200"
            >
              <h2 className="text-2xl font-serif mb-6">Onze missie</h2>
              <p className="text-lg font-medium text-stone-900 mb-8">
                Wij willen het niet-invasieve alternatief zijn voor injectables.
              </p>
              <div className="space-y-2 text-lg font-light text-stone-600 mb-8">
                <p>Structurele lifting.</p>
                <p>Collageenopbouw.</p>
                <p>Huidverbetering zonder chirurgie.</p>
              </div>
              <p className="text-stone-600 font-light mb-4">Op een manier die:</p>
              <ul className="space-y-3 text-stone-800 font-light mb-8">
                <li className="flex items-center"><span className="w-1.5 h-1.5 bg-stone-400 rounded-full mr-4" /> Veilig is</li>
                <li className="flex items-center"><span className="w-1.5 h-1.5 bg-stone-400 rounded-full mr-4" /> Doordacht is</li>
                <li className="flex items-center"><span className="w-1.5 h-1.5 bg-stone-400 rounded-full mr-4" /> Realistisch is</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ONZE KLANTEN & BELOFTE */}
      <section className="py-32 bg-stone-100 text-stone-900 text-center">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-serif mb-8">Onze klanten</h2>
            <p className="text-xl font-light text-stone-600 mb-8">
              Onze klanten zijn niet op zoek naar een snelle glow. Ze zijn:
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-8 text-sm uppercase tracking-widest font-medium text-stone-800 mb-12">
              <span>Resultaatgericht</span>
              <span className="hidden sm:block w-1.5 h-1.5 bg-stone-400 rounded-full" />
              <span>Bewust</span>
              <span className="hidden sm:block w-1.5 h-1.5 bg-stone-400 rounded-full" />
              <span>Bereid om te investeren in hun huid</span>
              <span className="hidden sm:block w-1.5 h-1.5 bg-stone-400 rounded-full" />
              <span>Geïnteresseerd in natuurlijke verjonging</span>
            </div>

            <p className="text-xl font-serif italic text-stone-900 mb-16">
              Wij werken liever met minder klanten — maar met de juiste klanten.
            </p>

            <div className="pt-16 border-t border-stone-300">
              <h2 className="text-xs uppercase tracking-[0.2em] font-medium text-stone-500 mb-6">Onze belofte</h2>
              <p className="text-3xl font-serif text-stone-900">
                Wij behandelen niet om te behandelen.<br />
                <span className="italic text-stone-500">Wij werken met strategie.</span>
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* BEZOEK MAVI & FINAL CTA */}
      <section className="py-32 bg-stone-900 text-white text-center">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-serif mb-12">Bezoek Mavi</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-stone-300 font-light mb-16">
              <div>
                <p className="font-medium text-white mb-2">Adres</p>
                <p>De Prolistraat 58</p>
                <p>2930 Brasschaat</p>
              </div>
              <div>
                <p className="font-medium text-white mb-2">Openingsuren</p>
                <p>Dinsdag – Vrijdag: 10:00 – 18:00</p>
                <p>Zaterdag: 10:00 – 16:00</p>
              </div>
              <div>
                <p className="font-medium text-white mb-2">Contact</p>
                <p>+32 499 11 85 26</p>
                <a href="mailto:contact@mavi.beauty" className="hover:text-white transition-colors">contact@mavi.beauty</a>
              </div>
            </div>

            <div className="pt-16 border-t border-stone-800">
              <p className="text-xl font-serif italic text-stone-400 mb-8">
                Wil je weten welk traject past bij jouw huid?
              </p>
              <Link 
                to="/consult"
                className="inline-flex items-center justify-center px-12 py-5 bg-[#E8DDD4] text-stone-900 text-xs uppercase tracking-[0.2em] font-bold hover:bg-white transition-colors"
              >
                Plan je Skin Strategy Consult
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
