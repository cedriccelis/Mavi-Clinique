import React from 'react';
import { motion } from 'motion/react';

export function Authority() {
  return (
    <section className="py-32 bg-white text-stone-900">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl lg:text-7xl font-serif leading-tight mb-20"
        >
          We do not offer facials.<br />
          <span className="italic text-stone-400">We rebuild skin structure.</span>
        </motion.h2>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-16 text-left max-w-5xl mx-auto items-start"
        >
          <div className="md:col-span-1 text-xl md:text-2xl font-light leading-relaxed">
            De meeste salons focussen op ontspanning.<br />
            <span className="font-medium mt-4 block">Wij focussen op huidarchitectuur.</span>
          </div>
          <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-12 text-sm uppercase tracking-widest font-medium text-stone-500">
            <ul className="space-y-6">
              <li className="text-stone-900 flex items-center"><span className="w-4 h-[1px] bg-stone-900 mr-4" /> Contour.</li>
              <li className="text-stone-900 flex items-center"><span className="w-4 h-[1px] bg-stone-900 mr-4" /> Collageen.</li>
              <li className="text-stone-900 flex items-center"><span className="w-4 h-[1px] bg-stone-900 mr-4" /> Onderhoud.</li>
            </ul>
            <ul className="space-y-6">
              <li>Geen quick fixes.</li>
              <li>Geen oppervlakkige glow.</li>
              <li>Geen overcorrectie.</li>
              <li className="text-stone-900 pt-6 border-t border-stone-200 mt-6">Alleen strategie.</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
