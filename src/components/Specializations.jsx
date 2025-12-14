import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';
import { Activity, HeartPulse, UserCheck, Home, UserPlus, Target } from 'lucide-react';

const items = [
  { icon: Activity, title: 'Pain Relief & Joint Care', desc: 'Targeted treatment for knee, back, shoulder, and neck pain.' },
  { icon: HeartPulse, title: 'Sports Rehabilitation', desc: 'Safe, progressive recovery for athletes and active individuals.' },
  { icon: Target, title: 'Posture & Alignment', desc: 'Prevent strain and restore natural body balance.' },
  { icon: UserCheck, title: 'Neuro-Rehabilitation', desc: 'Supportive care for stroke recovery and mobility challenges.' },
  { icon: UserPlus, title: 'Pediatric Physiotherapy', desc: 'Gentle and effective therapy for growing children.' },
  { icon: Home, title: 'Home Visit Programs', desc: 'Professional physiotherapy in the comfort of your home.' },
];

export default function Specializations() {
  const { theme } = useTheme();

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.6, ease: 'easeOut' },
    }),
  };

  return (
    <section
      id="specializations"
      className={`py-20 ${theme === 'dark' ? 'bg-card text-slate-100' : 'bg-background text-foreground'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-sm font-semibold text-teal-600 uppercase">Our Specializations</p>
          <h2 className="text-3xl md:text-4xl font-bold mt-4">
            We provide focused physiotherapy solutions tailored to your specific needs
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground mt-3">
            Each session is customized — because no two recoveries are the same.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((it, idx) => (
            <motion.div
              key={idx}
              custom={idx}
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ y: -8, scale: 1.03 }}
              transition={{ type: 'spring', stiffness: 200, damping: 15 }}
              className={`p-6 rounded-2xl border ${
                theme === 'dark' ? 'border-border bg-card/60' : 'bg-card'
              } shadow-sm hover:shadow-md transition-all duration-300`}
            >
              <div className="flex items-start gap-4">
                {/* Icon Animation */}
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  transition={{ type: 'spring', stiffness: 200 }}
                  className="w-12 h-12 flex items-center justify-center rounded-lg bg-teal-600/10 text-teal-600"
                >
                  <it.icon className="w-6 h-6" />
                </motion.div>

                {/* Text */}
                <div>
                  <h3 className="text-lg font-semibold">{it.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{it.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
