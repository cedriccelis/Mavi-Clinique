import React from 'react';
import { motion } from 'motion/react';

export function TargetAudience() {
  return (
    <section className="py-32 bg-mavi-depth text-mavi-primary">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-xs uppercase tracking-[0.2em] font-medium text-mavi-accent mb-8">Who this is for</h2>
            <p className="text-4xl md:text-5xl font-serif leading-tight mb-12">
              Voor vrouwen die:
            </p>
            <ul className="space-y-6 text-lg font-light text-mavi-primary/80">
              <li className="flex items-start">
                <span className="text-mavi-accent mr-6">—</span>
                Geen fillers willen
              </li>
              <li className="flex items-start">
                <span className="text-mavi-accent mr-6">—</span>
                Niet "gedaan" willen ogen
              </li>
              <li className="flex items-start">
                <span className="text-mavi-accent mr-6">—</span>
                Investeren in de lange termijn
              </li>
              <li className="flex items-start">
                <span className="text-mavi-accent mr-6">—</span>
                Discipline belangrijker vinden dan korting
              </li>
              <li className="flex items-start">
                <span className="text-mavi-accent mr-6">—</span>
                Resultaat willen zonder drama
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="p-12 md:p-16 border border-mavi-primary/20 bg-mavi-depth/50 backdrop-blur-sm"
          >
            <div className="space-y-8 text-2xl md:text-3xl font-light text-mavi-primary/70">
              <p>Dit is geen spa.</p>
              <p>Dit is geen wellnessconcept.</p>
              <p className="text-mavi-accent font-serif italic text-4xl md:text-5xl pt-10 border-t border-mavi-primary/20 mt-10">
                Dit is een skin clinic.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
