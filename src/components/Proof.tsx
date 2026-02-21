import React from 'react';
import { motion } from 'motion/react';
import { BRAND } from '../constants/brand';
import { Link } from 'react-router-dom';

export function Proof() {
  return (
    <section className="py-32 bg-stone-900 text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-12"
          >
            <div>
              <h2 className="text-xs uppercase tracking-[0.2em] font-medium text-stone-500 mb-6">Proof of Concept</h2>
              <p className="text-4xl md:text-5xl font-serif leading-tight">
                Zichtbaar resultaat.<br />
                <span className="italic text-stone-400">Onzichtbare ingreep.</span>
              </p>
            </div>

            <div className="space-y-8">
              <div className="border-l border-stone-700 pl-6">
                <p className="text-lg font-light italic text-stone-300 mb-4">
                  "Na 3 maanden in het Contour Protocol is mijn kaaklijn strakker dan 5 jaar geleden. Zonder dat iemand ziet dat ik 'iets' heb laten doen."
                </p>
                <p className="text-xs uppercase tracking-widest text-stone-500">— Sophie, 42</p>
              </div>
              <div className="border-l border-stone-700 pl-6">
                <p className="text-lg font-light italic text-stone-300 mb-4">
                  "Geen zweverige beloftes, maar een strak plan. De huidstructuur is compleet veranderd."
                </p>
                <p className="text-xs uppercase tracking-widest text-stone-500">— Elena, 38</p>
              </div>
            </div>

            <Link 
              to="/consult"
              onClick={() => console.log('Event: click_consult_cta')}
              className="inline-flex items-center text-sm uppercase tracking-widest text-white border-b border-white pb-1 hover:text-stone-300 hover:border-stone-300 transition-colors"
            >
              {BRAND.cta.main}
            </Link>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-[600px] w-full"
          >
            <img 
              src="https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=2070&auto=format&fit=crop" 
              alt="Professional skincare treatment" 
              className="absolute inset-0 w-full h-full object-cover grayscale opacity-80"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-stone-900/20 mix-blend-multiply" />
            
            <div className="absolute bottom-8 right-8 bg-stone-900/90 backdrop-blur-md px-6 py-4 border border-stone-700">
              <p className="text-xs uppercase tracking-widest text-stone-400 mb-1">Resultaat</p>
              <p className="text-lg font-serif italic text-white">Natuurlijke lift</p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
