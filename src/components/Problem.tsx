import React from 'react';
import { motion } from 'motion/react';

export function Problem() {
  return (
    <section className="py-32 bg-[#E8DDD4] text-stone-900">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-6xl font-serif leading-tight mb-12">
              Wat verandert er<br />
              <span className="italic text-stone-600">echt na 30?</span>
            </h2>
            <ul className="space-y-6 text-lg font-light border-l border-stone-900/20 pl-8">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-stone-900 rounded-full mr-6 flex-shrink-0" /> 
                Je huid produceert minder collageen
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-stone-900 rounded-full mr-6 flex-shrink-0" /> 
                Spanning neemt af
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-stone-900 rounded-full mr-6 flex-shrink-0" /> 
                Kaaklijn verliest scherpte
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-stone-900 rounded-full mr-6 flex-shrink-0" /> 
                Fijne lijntjes blijven zichtbaar
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-stone-900 text-white p-12 md:p-16 shadow-2xl shadow-stone-900/20"
          >
            <div className="space-y-6 text-2xl md:text-3xl font-light text-stone-400">
              <p>Glow alleen lost dat niet op.</p>
              <p>Volume alleen lost dat niet op.</p>
              <p className="text-[#E8DDD4] font-serif italic text-4xl md:text-5xl pt-8 border-t border-stone-800 mt-8">
                Structuur wel.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
