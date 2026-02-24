import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export function LEDTherapy() {
  return (
    <div className="bg-stone-50 min-h-screen pt-24">
      {/* HERO */}
      <section className="relative py-32 bg-stone-100 text-stone-900 overflow-hidden border-b border-stone-200">
        <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-xs uppercase tracking-[0.3em] text-stone-500 font-medium mb-8">Skin Programs</p>
            <h1 className="text-5xl md:text-7xl font-serif tracking-tight leading-tight mb-8 text-stone-900">
              LED Therapy.<br />
              <span className="italic text-stone-500">Ondersteunend herstel.</span>
            </h1>
            <p className="text-xl font-light text-stone-600 mb-12 max-w-2xl mx-auto">
              Geavanceerde lichttherapie voor celvernieuwing, kalmering en een versneld herstelproces.
            </p>
            
            <Link 
              to="/consult"
              className="inline-flex items-center justify-center px-10 py-5 bg-stone-900 text-white text-xs uppercase tracking-[0.2em] font-medium hover:bg-stone-800 transition-colors"
            >
              Plan je Skin Strategy Consult
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-32 bg-white text-stone-900">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-serif mb-8">Lichtenergie voor de huid</h2>
            <p className="text-lg font-light text-stone-600 mb-8">
              LED Therapy is een essentiële ondersteuning binnen onze Skin Programs. Het stimuleert de collageenproductie, vermindert ontstekingen en versnelt het natuurlijke genezingsproces van de huid na intensieve behandelingen.
            </p>
            <p className="text-lg font-light text-stone-600">
              Deze behandeling wordt vaak ingezet als onderdeel van een breder traject voor optimaal resultaat.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
