import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { BRAND } from '../constants/brand';

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
          <h2 className="text-xs uppercase tracking-[0.2em] font-medium text-stone-500 mb-8">Structure beats trends.</h2>
          <p className="text-3xl md:text-5xl font-serif leading-tight mb-16 text-stone-400">
            Je hoeft niet drastisch te veranderen<br />
            om er sterker uit te zien.<br /><br />
            <span className="text-stone-900">Je moet je huid leren ondersteunen<br />
            in plaats van te camoufleren.</span><br /><br />
            <span className="italic">Dat is wat we doen.</span>
          </p>

          <div className="mt-32 pt-32 border-t border-stone-300">
            <h2 className="text-5xl md:text-7xl font-serif leading-tight mb-12">
              Lift. Collagen. Confidence.
            </h2>
            
            <Link 
              to="/consult"
              onClick={() => console.log('Event: click_consult_cta')}
              className="group relative inline-flex flex-col items-center justify-center px-10 py-5 bg-stone-900 text-white transition-all hover:bg-stone-800"
            >
              <span className="text-sm uppercase tracking-[0.2em] font-bold mb-1">{BRAND.cta.main}</span>
              <span className="text-[10px] uppercase tracking-widest text-stone-400">Beperkt aantal consultmomenten per week.</span>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
