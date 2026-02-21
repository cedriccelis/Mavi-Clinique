import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { BRAND } from '../constants/brand';

export function Hero() {
  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#E8DDD4] text-stone-900">
      <div className="absolute inset-0 w-full h-full">
        <img
          src="https://images.unsplash.com/photo-1509967419530-da38b4704bc6?q=80&w=2095&auto=format&fit=crop"
          alt="Mavi Clinique - Structural Skin Improvement"
          className="w-full h-full object-cover object-center opacity-40 mix-blend-multiply"
          referrerPolicy="no-referrer"
        />
        {/* Gradient overlay to ensure text readability and add depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#E8DDD4]/30 via-[#E8DDD4]/60 to-[#E8DDD4]" />
      </div>

      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-5xl mx-auto mt-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-8"
        >
          <p className="text-xs uppercase tracking-[0.3em] text-stone-600 font-medium mb-8">Mavi Clinique • Brasschaat</p>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif tracking-tight leading-none mb-8 text-stone-900 drop-shadow-sm">
            Lift.<br />
            Collagen.<br />
            <span className="italic text-stone-600">Structure.</span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl mx-auto space-y-6 text-stone-800"
        >
          <p className="text-lg md:text-xl font-light leading-relaxed">
            Strategische huidverbetering voor vrouwen 30+ <br className="hidden md:block"/>
            zonder injectables, zonder chirurgie, met langetermijnresultaat.
          </p>
          <div className="w-12 h-[1px] bg-stone-400 mx-auto my-8" />
          <p className="text-sm md:text-base font-light leading-relaxed text-stone-700">
            Vanaf 30 verliest de huid jaarlijks collageen. Contour vervaagt. Elasticiteit daalt.
            Dat is geen cosmetisch probleem. Dat is een structureel proces.
            <br /><br />
            <span className="text-stone-900 font-medium">Bij Mavi pakken we het structureel aan.</span>
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="mt-16"
        >
          <Link 
            to="/consult"
            onClick={() => console.log('Event: click_consult_cta')}
            className="group relative inline-flex items-center justify-center px-8 py-4 text-xs uppercase tracking-[0.2em] text-white bg-stone-900 overflow-hidden transition-all hover:bg-stone-800 shadow-xl shadow-[#E8DDD4]/50"
          >
            <span className="relative z-10 font-medium">{BRAND.cta.main}</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
