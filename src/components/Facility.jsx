import React from 'react';
import { motion } from 'framer-motion';
import { Home } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import clinic from '../assets/clinic.jpg'; 

export default function Facility() {
  const { theme } = useTheme();

  return (
    <section className={`${theme === 'dark' ? 'bg-background/80 text-slate-100' : 'bg-white text-foreground'} py-20`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row items-center gap-8"
        >
          <div className="md:w-1/2">
            <Home className="w-12 h-12 text-brand-teal mb-4" />
            <h3 className="text-2xl font-bold">🏥 Our Facility</h3>
            <p className="mt-3 text-muted-foreground">Our clinic offers a warm, hygienic, and comfortable environment equipped with modern physiotherapy equipment for effective and safe treatment. We maintain strict cleanliness standards and ensure privacy for every patient during therapy sessions.</p>
          </div>

          <div className="md:w-1/2">
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img src={clinic} alt="Clinic facility" className="w-full h-64 object-cover" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
