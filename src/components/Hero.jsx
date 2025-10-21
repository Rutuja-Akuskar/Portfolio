import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, HeartPulse, Award, Users, Clock } from 'lucide-react';
import { Button } from './ui/button';
import { useToast } from './ui/use-toast';
import { Link } from 'react-router-dom';
import ph from '../assets/ph.png';

const Hero = () => {
  const { toast } = useToast();
  const handleBookNow = () => {
    toast({
      title: "🚧 Feature Coming Soon!",
      description: "This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
    });
  };

  const stats = [
    { icon: Users, value: '5000+', label: 'Happy Patients' },
    { icon: Award, value: '15+', label: 'Specialized Care' },
    { icon: HeartPulse, value: '98%', label: 'Success Rate' },
    { icon: Clock, value: '24/7', label: 'Support' },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden pt-20 bg-background">
      <div className="absolute inset-0 bg-grid-pattern opacity-5 dark:opacity-[0.02]"></div>
      <motion.div
        className="absolute -top-20 -left-20 w-96 h-96 bg-brand-teal/10 rounded-full filter blur-3xl"
        animate={{ scale: [1, 1.1, 1], rotate: [0, 90, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -bottom-20 -right-20 w-96 h-96 bg-brand-green/10 rounded-full filter blur-3xl"
        animate={{ scale: [1, 1.2, 1], rotate: [0, -90, 0] }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-5xl md:text-6xl font-bold mb-6 leading-loose text-balance"
            >
              Move Freely, Live Fully with <span className="gradient-text">Expert Physiotherapy</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg text-muted-foreground mb-8 leading-relaxed"
            >
              Welcome to Dr. Rutuja's clinic, where we combine advanced techniques with personalized care to help you recover, regain strength, and live a pain-free life.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-4"
            >
              <Button asChild size="lg" className="bg-brand-teal hover:bg-brand-green text-white group">
                <Link to="/contact">
                  Book Appointment
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button onClick={handleBookNow} size="lg" variant="outline">
                Call Now: 9373444125
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative z-10 aspect-square">
              <img
                className="rounded-3xl shadow-2xl w-full h-full object-contain"
                alt="Professional physiotherapist assisting a patient with rehabilitation exercises in a bright, modern clinic"
                src={ph}
              />
            </div>      
            <motion.div
              className="absolute -bottom-4 -right-4 w-full h-full bg-gradient-to-br from-brand-green/20 to-brand-teal/20 rounded-3xl -z-10"
              animate={{ rotate: [0, 2, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-24"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 + index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-card rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all border"
            >
              <stat.icon className="w-10 h-10 text-brand-teal mb-3" />
              <h3 className="text-3xl font-bold gradient-text mb-1">{stat.value}</h3>
              <p className="text-muted-foreground text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;