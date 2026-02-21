import React from 'react';
import { motion } from 'motion/react';

export function Authority() {
  return (
    <section className="py-32 bg-white text-stone-900">
      <div className="max-w-5xl mx-auto px-6 lg:px-8 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-serif leading-tight mb-20"
        >
          Niet elke huidbehandeling<br />
          <span className="italic text-stone-400">is huidstrategie.</span>
        </motion.h2>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-12 text-left text-lg font-light mb-20"
        >
          <div className="p-8 bg-stone-50 border border-stone-100">
            <p className="text-stone-500 mb-4 text-sm uppercase tracking-widest">Salons focussen op</p>
            <p className="text-3xl font-serif text-stone-400">Ontspanning.</p>
          </div>
          <div className="p-8 bg-stone-50 border border-stone-100">
            <p className="text-stone-500 mb-4 text-sm uppercase tracking-widest">Medische klinieken focussen op</p>
            <p className="text-3xl font-serif text-stone-400">Injectie.</p>
          </div>
          <div className="p-8 bg-stone-900 text-white shadow-xl shadow-stone-200">
            <p className="text-stone-400 mb-4 text-sm uppercase tracking-widest">Wij focussen op</p>
            <p className="text-3xl font-serif text-[#E8DDD4]">Structuur.</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="flex flex-col md:flex-row justify-center items-center space-y-6 md:space-y-0 md:space-x-8 text-sm uppercase tracking-widest font-medium text-stone-600">
            <span>Niet-invasieve contourversterking.</span>
            <span className="hidden md:block w-1.5 h-1.5 bg-stone-300 rounded-full" />
            <span>Collageenopbouw.</span>
            <span className="hidden md:block w-1.5 h-1.5 bg-stone-300 rounded-full" />
            <span>Langetermijnmaintenance.</span>
          </div>

          <div className="mt-24 text-3xl md:text-4xl font-serif italic text-stone-400">
            Dit is geen trend. Dit is discipline.
          </div>
        </motion.div>
      </div>
    </section>
  );
}
