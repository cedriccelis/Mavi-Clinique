import React from 'react';
import { motion } from 'motion/react';

export function Method() {
  return (
    <section className="py-32 bg-white text-stone-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-24">
          <h2 className="text-xs uppercase tracking-[0.2em] font-medium text-stone-500 mb-6">Our Method</h2>
          <p className="text-4xl md:text-5xl font-serif">Hoe we werken.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { step: "Step 1", title: "Assessment", desc: "We analyseren huidconditie en elasticiteit." },
            { step: "Step 2", title: "Structural Plan", desc: "Je krijgt een contour- of collageenstrategie." },
            { step: "Step 3", title: "Long-Term Build", desc: "Resultaat wordt opgebouwd. Onderhoud wordt ingepland." }
          ].map((s, i) => (
            <motion.div
              key={s.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
              className="p-12 border border-stone-200 flex flex-col items-center text-center hover:border-stone-900 transition-colors duration-500"
            >
              <span className="text-xs uppercase tracking-[0.2em] text-stone-400 font-medium mb-8">{s.step}</span>
              <h3 className="text-2xl font-serif mb-6">{s.title}</h3>
              <p className="text-base font-light text-stone-600">{s.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-24 text-center">
          <p className="text-3xl font-serif italic text-stone-400">Consistency &gt; Quick Fix.</p>
        </div>
      </div>
    </section>
  );
}
