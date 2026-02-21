import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { BRAND } from '../constants/brand';

export function Method() {
  return (
    <section className="py-32 bg-white text-stone-900">
      <div className="max-w-5xl mx-auto px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-6xl font-serif leading-tight mb-8">
            We starten niet met behandelen.<br />
            <span className="italic text-stone-400">We starten met meten.</span>
          </h2>
          
          <p className="text-lg font-light text-stone-600 mb-16">
            Met onze huidanalyser bepalen we:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            <div className="p-8 border border-stone-200">
              <p className="text-sm uppercase tracking-widest font-medium text-stone-800">Waar spanning verloren gaat</p>
            </div>
            <div className="p-8 border border-stone-200">
              <p className="text-sm uppercase tracking-widest font-medium text-stone-800">Welke zones prioriteit krijgen</p>
            </div>
            <div className="p-8 border border-stone-200">
              <p className="text-sm uppercase tracking-widest font-medium text-stone-800">Wat realistisch is binnen jouw tijdlijn</p>
            </div>
          </div>

          <div className="space-y-4 text-2xl font-light text-stone-400 mb-16">
            <p>Geen gokwerk.</p>
            <p>Geen verkooppraat.</p>
            <p className="text-stone-900 font-serif italic text-3xl pt-8">Strategie.</p>
          </div>

          <Link 
            to="/consult"
            onClick={() => console.log('Event: click_consult_cta')}
            className="group relative inline-flex items-center justify-center px-10 py-5 text-xs uppercase tracking-[0.2em] text-white bg-stone-900 overflow-hidden transition-all hover:bg-stone-800"
          >
            <span className="relative z-10 font-medium">{BRAND.cta.main}</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
