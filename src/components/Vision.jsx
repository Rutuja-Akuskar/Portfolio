import React from 'react';
import { motion } from 'framer-motion';
import { Globe } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

export default function Vision() {
  const { theme } = useTheme();

  return (
    <section className={`${theme === 'dark' ? 'bg-background/80 text-slate-100' : 'bg-white text-foreground'} py-20`}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <Globe className="w-10 h-10 text-brand-teal mx-auto mb-3" />
          <h3 className="text-xl md:text-2xl font-bold">🌍 Our Vision</h3>
          <p className="mt-3 max-w-3xl mx-auto text-muted-foreground">To be recognized as a leading center of excellence in physiotherapy and rehabilitation, inspiring healthier, more active communities across [Your City/Region].</p>
        </motion.div>
      </div>
    </section>
  );
}
