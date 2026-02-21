import React from 'react';
import { motion } from 'motion/react';

export function TargetAudience() {
  return (
    <section className="py-32 bg-stone-900 text-stone-50">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-xs uppercase tracking-[0.2em] font-medium text-stone-500 mb-8">Who this is for</h2>
            <p className="text-4xl md:text-5xl font-serif leading-tight mb-12">
              Voor vrouwen die:
            </p>
            <ul className="space-y-6 text-lg font-light text-stone-300">
              <li className="flex items-start">
                <span className="text-stone-500 mr-6">—</span>
                Geen fillers willen
              </li>
              <li className="flex items-start">
                <span className="text-stone-500 mr-6">—</span>
                Niet "gedaan" willen ogen
              </li>
              <li className="flex items-start">
                <span className="text-stone-500 mr-6">—</span>
                Investeren in de lange termijn
              </li>
              <li className="flex items-start">
                <span className="text-stone-500 mr-6">—</span>
                Discipline belangrijker vinden dan korting
              </li>
              <li className="flex items-start">
                <span className="text-stone-500 mr-6">—</span>
                Resultaat willen zonder drama
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="p-12 md:p-16 border border-stone-800 bg-stone-900/50 backdrop-blur-sm"
          >
            <div className="space-y-8 text-2xl md:text-3xl font-light text-stone-400">
              <p>Dit is geen spa.</p>
              <p>Dit is geen wellnessconcept.</p>
              <p className="text-white font-serif italic text-4xl md:text-5xl pt-10 border-t border-stone-800 mt-10">
                Dit is een skin clinic.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
