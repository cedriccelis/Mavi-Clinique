import React from 'react';
import { motion } from 'motion/react';

export function Positioning() {
  return (
    <section className="py-32 bg-stone-100 text-stone-900 text-center">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif leading-tight mb-16">
            Mavi is voor vrouwen<br />
            die hun gezicht willen versterken<br />
            <span className="italic text-stone-500">zonder hun identiteit te veranderen.</span>
          </h2>

          <div className="flex flex-col md:flex-row justify-center items-center space-y-6 md:space-y-0 md:space-x-12 text-sm uppercase tracking-[0.2em] font-medium text-stone-400 mb-24">
            <span>Subtiel.</span>
            <span className="hidden md:block w-1.5 h-1.5 bg-stone-300 rounded-full" />
            <span>Gestructureerd.</span>
            <span className="hidden md:block w-1.5 h-1.5 bg-stone-300 rounded-full" />
            <span>Doordacht.</span>
          </div>

          <button className="group relative inline-flex items-center justify-center px-10 py-5 text-xs uppercase tracking-[0.2em] text-white bg-stone-900 overflow-hidden transition-all hover:bg-stone-800">
            <span className="relative z-10 font-medium">Plan je Skin Strategy Consult</span>
          </button>
        </motion.div>
      </div>
    </section>
  );
}
