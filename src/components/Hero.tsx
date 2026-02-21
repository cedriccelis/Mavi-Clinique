import React from 'react';
import { motion } from 'motion/react';

export function Hero() {
  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden bg-stone-900 text-white">
      <div className="absolute inset-0 w-full h-full">
        <img
          src="https://images.unsplash.com/photo-1608281353114-142510214619?q=80&w=2070&auto=format&fit=crop"
          alt="Mavi Clinique"
          className="w-full h-full object-cover opacity-30 grayscale"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-stone-900/60 via-stone-900/80 to-stone-900" />
      </div>

      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-5xl mx-auto mt-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-8"
        >
          <p className="text-xs uppercase tracking-[0.3em] text-stone-400 font-medium mb-8">Mavi Clinique • Brasschaat</p>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif tracking-tight leading-none mb-8">
            Lift.<br />
            Collagen.<br />
            <span className="italic text-stone-300">Structure.</span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl mx-auto space-y-6 text-stone-300"
        >
          <p className="text-lg md:text-xl font-light leading-relaxed">
            Strategische huidverbetering voor vrouwen 30+ <br className="hidden md:block"/>
            zonder injectables, zonder chirurgie, met langetermijnresultaat.
          </p>
          <div className="w-12 h-[1px] bg-stone-700 mx-auto my-8" />
          <p className="text-sm md:text-base font-light leading-relaxed">
            Vanaf 30 verliest de huid jaarlijks collageen. Contour vervaagt. Elasticiteit daalt.
            Dat is geen cosmetisch probleem. Dat is een structureel proces.
            <br /><br />
            <span className="text-white font-medium">Bij Mavi pakken we het structureel aan.</span>
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="mt-16"
        >
          <button className="group relative inline-flex items-center justify-center px-8 py-4 text-xs uppercase tracking-[0.2em] text-stone-900 bg-white overflow-hidden transition-all hover:bg-stone-200">
            <span className="relative z-10 font-medium">Plan je Skin Strategy Consult</span>
          </button>
        </motion.div>
      </div>
    </section>
  );
}
