import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import { BRAND } from '../constants/brand';

const faqs = [
  {
    q: "Is Hydrafacial voldoende als anti-aging?",
    a: "Nee. Het ondersteunt, maar vervangt geen collageenstimulatie."
  },
  {
    q: "Is er downtime?",
    a: "Meestal niet. Huid kan tijdelijk licht rood zijn."
  },
  {
    q: "Kan ik dit combineren met RF?",
    a: "Ja, afhankelijk van je huidconditie plannen we dit strategisch."
  }
];

export function MaintenanceProtocol() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

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
            <p className="text-xs uppercase tracking-[0.3em] text-stone-400 font-medium mb-8">Maintenance Plan</p>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif tracking-tight leading-tight mb-8 text-white">
              Structuur bouw je op.<br />
              <span className="italic text-stone-400">Glow onderhoud je.</span>
            </h1>
            <p className="text-xl md:text-2xl font-light text-[#E8DDD4] mb-12 max-w-3xl mx-auto">
              Het Maintenance Protocol houdt je huid in balans tussen contour- en collagen trajecten.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link 
                to="/consult"
                onClick={() => console.log('Event: click_booking')}
                className="group relative inline-flex items-center justify-center px-10 py-5 bg-[#E8DDD4] text-stone-900 transition-all hover:bg-white w-full sm:w-auto"
              >
                <span className="text-sm uppercase tracking-[0.2em] font-bold">{BRAND.cta.maintenance}</span>
              </Link>
              <Link 
                to="/consult"
                onClick={() => console.log('Event: click_consult_cta')}
                className="group relative inline-flex items-center justify-center px-10 py-5 border border-[#E8DDD4] text-[#E8DDD4] transition-all hover:bg-[#E8DDD4] hover:text-stone-900 w-full sm:w-auto"
              >
                <span className="text-sm uppercase tracking-[0.2em] font-bold">{BRAND.cta.main}</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 1 - WAAROM MAINTENANCE? */}
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
                Waarom Maintenance?
              </h2>
              <p className="text-xl font-light text-stone-600 mb-8">
                Huidveroudering stopt niet na één traject.
              </p>
              <p className="text-lg font-light text-stone-800 mb-6">
                Zelfs wanneer contour en collageen verbeteren, blijft de huid:
              </p>
              <ul className="space-y-4 text-lg font-light border-l border-stone-200 pl-8 mb-8">
                <li>Blootgesteld aan stress</li>
                <li>Onderhevig aan hormonale schommelingen</li>
                <li>Gevoelig voor uitdroging</li>
                <li>Vatbaar voor verstopping</li>
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-stone-50 p-12 border border-stone-100"
            >
              <p className="text-3xl font-serif italic text-stone-900 mb-6">
                Maintenance is geen luxe.
              </p>
              <p className="text-2xl font-light text-stone-600 pt-6 border-t border-stone-200">
                Het is stabilisatie.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 2 - WAT IS HET MAINTENANCE PROTOCOL? */}
      <section className="py-32 bg-[#E8DDD4] text-stone-900">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-xs uppercase tracking-[0.2em] font-medium text-stone-600 mb-6">Wat is het Maintenance Protocol?</h2>
            <p className="text-3xl md:text-4xl font-light leading-relaxed mb-12">
              Het Maintenance Protocol is onze systematische aanpak om huidkwaliteit te behouden en versterken.
            </p>
            <p className="text-lg font-medium text-stone-800 mb-8 uppercase tracking-widest">We focussen op:</p>
            <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8 text-sm uppercase tracking-widest font-medium text-stone-700 mb-12">
              <span>Diepe reiniging</span>
              <span className="hidden md:block w-1.5 h-1.5 bg-stone-500 rounded-full" />
              <span>Milde exfoliatie</span>
              <span className="hidden md:block w-1.5 h-1.5 bg-stone-500 rounded-full" />
              <span>Hydratatiebalans</span>
              <span className="hidden md:block w-1.5 h-1.5 bg-stone-500 rounded-full" />
              <span>Huidbarrière</span>
            </div>
            <p className="text-xl font-serif italic text-stone-900 pt-8 border-t border-stone-400/30">
              Dit gebeurt via onze geavanceerde Hydrafacial techniek.
            </p>
          </motion.div>
        </div>
      </section>

      {/* SECTION 3 - HOE HET WERKT */}
      <section className="py-32 bg-white text-stone-900">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-serif">Hoe het werkt</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {[
              { step: "Stap 1", title: "Reiniging & Exfoliatie", desc: "Verwijderen van dode huidcellen en onzuiverheden." },
              { step: "Stap 2", title: "Extractie", desc: "Gecontroleerde verwijdering van verstoppingen." },
              { step: "Stap 3", title: "Hydratatie", desc: "Infusie van actieve ingrediënten aangepast aan huidconditie." },
              { step: "Stap 4", title: "Bescherming", desc: "Afsluiten met kalmerende en beschermende producten." }
            ].map((s, i) => (
              <motion.div
                key={s.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                className="p-8 border border-stone-200 bg-stone-50 flex flex-col"
              >
                <p className="text-xs uppercase tracking-[0.2em] text-stone-400 font-medium mb-4">{s.step}</p>
                <h3 className="text-xl font-serif mb-4">{s.title}</h3>
                <p className="text-stone-600 font-light">{s.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="max-w-3xl mx-auto bg-stone-900 text-white p-12 text-center"
          >
            <h3 className="text-xs uppercase tracking-[0.2em] text-stone-400 font-medium mb-8">Resultaat</h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-lg font-light text-stone-300 text-left">
              <li className="flex items-center"><span className="w-1.5 h-1.5 bg-[#E8DDD4] rounded-full mr-4" /> Frissere uitstraling</li>
              <li className="flex items-center"><span className="w-1.5 h-1.5 bg-[#E8DDD4] rounded-full mr-4" /> Betere opname van actieve stoffen</li>
              <li className="flex items-center"><span className="w-1.5 h-1.5 bg-[#E8DDD4] rounded-full mr-4" /> Ondersteuning van collageenopbouw</li>
              <li className="flex items-center"><span className="w-1.5 h-1.5 bg-[#E8DDD4] rounded-full mr-4" /> Verbeterde huidbalans</li>
            </ul>
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
            <p className="text-xl font-light text-stone-400 mb-12">Het Maintenance Protocol is ideaal voor:</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 text-left max-w-3xl mx-auto mb-20">
              <div className="flex items-start"><span className="text-stone-500 mr-4">—</span> Vrouwen in een Collagen of Contour traject</div>
              <div className="flex items-start"><span className="text-stone-500 mr-4">—</span> Huid die snel uitdroogt</div>
              <div className="flex items-start"><span className="text-stone-500 mr-4">—</span> Onzuiverheden of verstoppingen</div>
              <div className="flex items-start"><span className="text-stone-500 mr-4">—</span> Wie consistent verzorgd wil ogen</div>
              <div className="flex items-start"><span className="text-stone-500 mr-4">—</span> Wie huidveroudering wil vertragen</div>
            </div>

            <div className="inline-block border border-stone-700 bg-stone-800/50 px-8 py-6">
              <p className="text-[#E8DDD4] font-serif italic text-2xl">
                Niet bedoeld als vervanging voor structurele stimulatie.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 5 & 6 - FREQUENTIE & ESSENTIEEL IN SYSTEEM */}
      <section className="py-32 bg-stone-100 text-stone-900">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex flex-col justify-center"
            >
              <h2 className="text-3xl font-serif mb-8">Frequentie</h2>
              <p className="text-xl font-light text-stone-800 mb-6">Gemiddeld elke 4–6 weken.</p>
              <p className="text-lg font-light text-stone-600 mb-8">Bij intensieve trajecten kan dit tijdelijk frequenter zijn.</p>
              <p className="text-2xl font-serif italic text-stone-900 pt-8 border-t border-stone-300">
                Consistency bepaalt resultaat.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white p-12 shadow-xl shadow-stone-200/50 border border-stone-200"
            >
              <h2 className="text-2xl font-serif mb-8">Waarom dit essentieel is in ons systeem</h2>
              <div className="space-y-4 text-lg font-light text-stone-800 mb-10">
                <p><span className="font-medium">Contour</span> bouwt structuur.</p>
                <p><span className="font-medium">Collagen</span> bouwt densiteit.</p>
                <p><span className="font-medium">Maintenance</span> bewaakt kwaliteit.</p>
              </div>
              <p className="text-sm uppercase tracking-widest font-medium text-stone-500 mb-6">Zonder maintenance:</p>
              <ul className="space-y-3 text-stone-600 font-light mb-10">
                <li className="flex items-center"><span className="w-1.5 h-1.5 bg-stone-400 rounded-full mr-4" /> Verliest huid sneller balans</li>
                <li className="flex items-center"><span className="w-1.5 h-1.5 bg-stone-400 rounded-full mr-4" /> Wordt herstel trager</li>
                <li className="flex items-center"><span className="w-1.5 h-1.5 bg-stone-400 rounded-full mr-4" /> Vermindert effect van stimulatie</li>
              </ul>
              <p className="text-xl font-serif italic text-stone-900 pt-8 border-t border-stone-200">
                Glow is het gevolg van discipline.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 7 - MEMBERSHIP OPTIE */}
      <section className="py-32 bg-[#E8DDD4] text-stone-900">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-xs uppercase tracking-[0.2em] font-medium text-stone-600 mb-6">Membership Optie</h2>
            <p className="text-3xl md:text-4xl font-serif mb-12">
              Voor wie structureel wil onderhouden bieden we een Maintenance Membership.
            </p>
            
            <div className="bg-white p-12 text-left max-w-2xl mx-auto shadow-xl shadow-stone-900/5 mb-12">
              <p className="text-sm uppercase tracking-widest font-medium text-stone-500 mb-8">Voordelen:</p>
              <ul className="space-y-6 text-lg font-light text-stone-800">
                <li className="flex items-center"><span className="w-1.5 h-1.5 bg-stone-900 rounded-full mr-6" /> Gereserveerde momenten in agenda</li>
                <li className="flex items-center"><span className="w-1.5 h-1.5 bg-stone-900 rounded-full mr-6" /> Lagere sessieprijs</li>
                <li className="flex items-center"><span className="w-1.5 h-1.5 bg-stone-900 rounded-full mr-6" /> Prioritaire opvolging</li>
                <li className="flex items-center"><span className="w-1.5 h-1.5 bg-stone-900 rounded-full mr-6" /> RF add-on mogelijkheid</li>
              </ul>
            </div>

            <div className="text-2xl font-light text-stone-800">
              <p>Maintenance wordt routine.</p>
              <p className="font-serif italic mt-2">Geen losse boeking.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 8 - FAQ */}
      <section className="py-32 bg-white text-stone-900">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif">Veelgestelde vragen</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="border-b border-stone-200">
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full py-6 flex items-center justify-between text-left group"
                >
                  <h3 className="text-lg md:text-xl font-serif text-stone-800 group-hover:text-stone-500 transition-colors pr-8">
                    {faq.q}
                  </h3>
                  <ChevronDown 
                    className={`w-5 h-5 text-stone-400 transition-transform duration-300 flex-shrink-0 ${
                      openFaq === idx ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <AnimatePresence>
                  {openFaq === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="pb-6 text-stone-600 font-light leading-relaxed">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
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
              Consistentie is sterker<br />
              <span className="italic text-stone-400">dan intensiteit.</span>
            </h2>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link 
                to="/consult"
                onClick={() => console.log('Event: click_booking')}
                className="group relative inline-flex items-center justify-center px-10 py-5 bg-[#E8DDD4] text-stone-900 transition-all hover:bg-white w-full sm:w-auto"
              >
                <span className="text-sm uppercase tracking-[0.2em] font-bold">{BRAND.cta.maintenance}</span>
              </Link>
              <span className="text-stone-500 italic font-serif">Of</span>
              <Link 
                to="/consult"
                onClick={() => console.log('Event: click_consult_cta')}
                className="group relative inline-flex items-center justify-center px-10 py-5 border border-stone-700 text-white transition-all hover:bg-stone-800 w-full sm:w-auto"
              >
                <span className="text-sm uppercase tracking-[0.2em] font-bold">{BRAND.cta.main}</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
