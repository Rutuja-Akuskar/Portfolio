import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';

const values = [
  { title: 'Compassion', desc: 'Every patient’s story matters.' },
  { title: 'Integrity', desc: 'Transparent, ethical, and professional practice.' },
  { title: 'Innovation', desc: 'Adopting the latest therapy techniques and tools.' },
  { title: 'Commitment', desc: 'Dedicated to continuous learning and patient success.' },
];

export default function CoreValues() {
  const { theme } = useTheme();

  return (
    <section className={`${theme === 'dark' ? 'bg-card text-slate-100' : 'bg-background text-foreground'} py-20`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h3 className="text-xl md:text-2xl font-bold">💪 Our Core Values</h3>
          <p className="mt-3 max-w-3xl mx-auto text-muted-foreground">We combine clinical expertise with personal attention.</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v, i) => (
            <motion.div key={i} className="p-6 rounded-2xl bg-card/60 border shadow-sm text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <h4 className="font-semibold text-lg mb-2">{v.title}</h4>
              <p className="text-sm text-muted-foreground">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
