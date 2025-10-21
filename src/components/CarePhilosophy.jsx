import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { motion } from 'framer-motion';
import { Search, BookOpen, Dumbbell, ShieldCheck } from 'lucide-react';

const features = [
  { icon: Search, title: 'Early & Accurate Diagnosis', desc: 'Identify root causes quickly with precise clinical assessment.' },
  { icon: BookOpen, title: 'Evidence-based Techniques', desc: 'Manual therapy and modern modalities backed by research.' },
  { icon: Dumbbell, title: 'Strength & Mobility', desc: 'Restore function with progressive strength and mobility programs.' },
  { icon: ShieldCheck, title: 'Preventive Care', desc: 'Long-term plans to reduce recurrence and promote wellness.' },
];

export default function CarePhilosophy() {
  const { theme } = useTheme();

  return (
    <section id="philosophy" className={`${theme === 'dark' ? 'bg-card text-slate-100' : 'bg-white text-foreground'} py-20`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1"
          >
            <p className="text-sm font-semibold text-brand-teal uppercase">Our Care Philosophy</p>
            <h2 className="text-3xl md:text-4xl font-bold mt-4">We combine clinical expertise with personal attention</h2>
            <p className="mt-4 text-muted-foreground">Every treatment begins with careful assessment, followed by a results-driven therapy plan designed around your comfort, progress, and goals. We don’t just treat symptoms — we treat the root cause.</p>
            <p className="mt-6 text-muted-foreground">Each session is customized to you — because no two recoveries are the same.</p>
          </motion.div>

          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((f, i) => (
                <motion.article
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.12, duration: 0.5 }}
                  className={`p-6 rounded-2xl shadow-lg border ${theme === 'dark' ? 'bg-background/60 border-border' : 'bg-card'}`}>
                  <div className="flex items-start gap-4">
                    <div className="flex-none w-12 h-12 rounded-lg bg-brand-teal/10 text-brand-teal flex items-center justify-center">
                      <f.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">{f.title}</h3>
                      <p className="mt-1 text-sm text-muted-foreground">{f.desc}</p>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
