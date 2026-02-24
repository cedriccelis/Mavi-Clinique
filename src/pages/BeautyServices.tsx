import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export function BeautyServices() {
  const services = [
    {
      title: 'Manicure & Gelnagels',
      description: 'Gedetailleerde verzorging van nagelriemen en nagelplaat, afgewerkt met hoogwaardige gel voor een langdurig, strak resultaat.',
    },
    {
      title: 'Brows',
      description: 'Vormgeving en kleuring afgestemd op jouw gezichtsstructuur. Voor een sprekende, maar natuurlijke uitdrukking.',
    },
    {
      title: 'Pedicure',
      description: 'Esthetische en verzorgende pedicure. Focus op gezonde nagels, zachte huid en een perfecte afwerking.',
    },
    {
      title: 'Waxing',
      description: 'Professionele ontharing met zachte, effectieve wax. Voor een glad resultaat met minimale irritatie.',
    },
  ];

  return (
    <div className="bg-stone-50 min-h-screen pt-24">
      {/* HERO */}
      <section className="py-24 bg-stone-100 text-stone-900 text-center border-b border-stone-200">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-serif mb-6">Beauty Services</h1>
            <p className="text-lg font-light text-stone-600">
              Aanvullende verzorgingen binnen Mavi Clinique.
            </p>
          </motion.div>
        </div>
      </section>

      {/* GRID LAYOUT */}
      <section className="py-24 bg-stone-50">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-10 border border-stone-200 flex flex-col h-full"
              >
                <h2 className="text-2xl font-serif mb-4 text-stone-900">{service.title}</h2>
                <p className="text-stone-600 font-light mb-10 flex-grow">
                  {service.description}
                </p>
                <button 
                  onClick={() => console.log(`Event: click_book_${service.title.toLowerCase().replace(/[^a-z0-9]/g, '_')}`)}
                  className="inline-flex items-center justify-center px-8 py-4 border border-stone-900 text-stone-900 text-xs uppercase tracking-widest font-medium hover:bg-stone-900 hover:text-white transition-colors w-full sm:w-auto self-start"
                >
                  Boek online
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
