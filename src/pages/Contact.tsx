import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, Calendar, Instagram, Facebook } from 'lucide-react';

export function Contact() {
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
            <p className="text-xs uppercase tracking-[0.3em] text-stone-500 font-medium mb-8">Contact</p>
            <h1 className="text-5xl md:text-7xl font-serif tracking-tight leading-tight mb-8 text-stone-900">
              Plan je bezoek<br />
              <span className="italic text-stone-500">aan Mavi.</span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* CONTACT INFO GRID */}
      <section className="py-32 bg-white text-stone-900">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            
            {/* Bezoek onze clinic */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-stone-50 p-10 border border-stone-100"
            >
              <div className="w-10 h-10 bg-stone-900 text-white flex items-center justify-center mb-8">
                <MapPin className="w-5 h-5" />
              </div>
              <h2 className="text-xl font-serif mb-4">Bezoek onze clinic</h2>
              <div className="space-y-1 text-stone-600 font-light mb-6">
                <p className="font-medium text-stone-900">Mavi Clinique</p>
                <p>De Prolistraat 58</p>
                <p>2930 Brasschaat</p>
                <p>België</p>
              </div>
              <p className="text-sm font-light text-stone-500 italic border-t border-stone-200 pt-4">
                Onze clinic bevindt zich in een rustige omgeving met parkeermogelijkheid in de straat.
              </p>
            </motion.div>

            {/* Contactgegevens */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="bg-stone-50 p-10 border border-stone-100"
            >
              <div className="w-10 h-10 bg-stone-900 text-white flex items-center justify-center mb-8">
                <Phone className="w-5 h-5" />
              </div>
              <h2 className="text-xl font-serif mb-4">Contactgegevens</h2>
              <div className="space-y-4 text-stone-600 font-light mb-6">
                <a href="tel:+32499118526" className="flex items-center hover:text-stone-900 transition-colors">
                  <Phone className="w-4 h-4 mr-3 text-stone-400" />
                  +32 499 11 85 26
                </a>
                <a href="mailto:contact@mavi.beauty" className="flex items-center hover:text-stone-900 transition-colors">
                  <Mail className="w-4 h-4 mr-3 text-stone-400" />
                  contact@mavi.beauty
                </a>
              </div>
              <p className="text-sm font-light text-stone-500 italic border-t border-stone-200 pt-4">
                Wij beantwoorden berichten tijdens openingsuren.
              </p>
            </motion.div>

            {/* Openingsuren */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-stone-50 p-10 border border-stone-100"
            >
              <div className="w-10 h-10 bg-stone-900 text-white flex items-center justify-center mb-8">
                <Clock className="w-5 h-5" />
              </div>
              <h2 className="text-xl font-serif mb-4">Openingsuren</h2>
              <div className="space-y-3 text-stone-600 font-light mb-6">
                <div className="flex justify-between">
                  <span>Dinsdag – Vrijdag</span>
                  <span>10:00 – 18:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Zaterdag</span>
                  <span>10:00 – 16:00</span>
                </div>
                <div className="flex justify-between text-stone-400">
                  <span>Zondag & Maandag</span>
                  <span>Gesloten</span>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* AFSPRAKEN & SOCIALS */}
      <section className="py-32 bg-[#E8DDD4] text-stone-900">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            
            {/* Afspraken */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-white p-12 shadow-xl shadow-stone-900/5"
            >
              <div className="flex items-center mb-8">
                <Calendar className="w-6 h-6 mr-4 text-stone-400" />
                <h2 className="text-3xl font-serif">Afspraken</h2>
              </div>
              <p className="text-lg font-medium text-stone-900 mb-6">
                Behandelingen werken uitsluitend op afspraak.
              </p>
              <div className="space-y-4 text-stone-600 font-light mb-8">
                <p>
                  Voor Skin Programs starten we steeds met een <span className="font-medium text-stone-800">Skin Strategy Consult</span>. Zo kunnen we een gefaseerd plan opstellen dat past bij jouw huid.
                </p>
                <p>
                  Beauty services zijn rechtstreeks online te boeken.
                </p>
              </div>
            </motion.div>

            {/* Volg Mavi */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white p-12 shadow-xl shadow-stone-900/5 flex flex-col justify-center"
            >
              <h2 className="text-3xl font-serif mb-8">Volg Mavi</h2>
              <div className="space-y-6">
                <a 
                  href="https://www.instagram.com/maviclinique/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center text-lg font-light text-stone-600 hover:text-stone-900 transition-colors group"
                >
                  <Instagram className="w-5 h-5 mr-4 text-stone-400 group-hover:text-stone-900 transition-colors" />
                  Instagram
                </a>
                <a 
                  href="https://www.facebook.com/p/MaviClinique-100063691895430/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center text-lg font-light text-stone-600 hover:text-stone-900 transition-colors group"
                >
                  <Facebook className="w-5 h-5 mr-4 text-stone-400 group-hover:text-stone-900 transition-colors" />
                  Facebook
                </a>
                <a 
                  href="https://www.tiktok.com/@mavibeauty" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center text-lg font-light text-stone-600 hover:text-stone-900 transition-colors group"
                >
                  <svg className="w-5 h-5 mr-4 text-stone-400 group-hover:text-stone-900 transition-colors" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                  </svg>
                  TikTok
                </a>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* FINAL CTA - SKIN STRATEGY CONSULT */}
      <section className="py-32 bg-stone-900 text-white text-center">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-xs uppercase tracking-[0.3em] text-stone-400 font-medium mb-8">Skin Strategy Consult</p>
            <h2 className="text-4xl md:text-5xl font-serif mb-8">
              Wil je weten welk traject<br />
              <span className="italic text-stone-400">geschikt is voor jouw huid?</span>
            </h2>
            <p className="text-lg font-light text-stone-300 mb-12">
              Plan een consult met digitale huidanalyse. Op basis daarvan bepalen we samen de juiste aanpak.
            </p>
            <Link 
              to="/consult"
              className="inline-flex items-center justify-center px-12 py-5 bg-[#E8DDD4] text-stone-900 text-xs uppercase tracking-[0.2em] font-bold hover:bg-white transition-colors"
            >
              Plan je Skin Strategy Consult
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
