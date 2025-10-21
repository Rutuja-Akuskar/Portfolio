import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Activity, Zap, Trophy, HeartPulse, Brain, Baby, ArrowRight, UserCheck } from 'lucide-react';
import { Button } from './ui/button';
import { useToast } from './ui/use-toast';

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const { toast } = useToast();

  const services = [
    {
      icon: Activity,
      title: 'Manual Therapy',
      description: 'Hands-on techniques to reduce pain and restore function.',
      color: 'text-blue-500 bg-blue-500/10'
    },
    {
      icon: Zap,
      title: 'Electrotherapy',
      description: 'Advanced modalities for pain relief and muscle rehab.',
      color: 'text-purple-500 bg-purple-500/10'
    },
    {
      icon: Trophy,
      title: 'Sports Injury Rehab',
      description: 'Specialized treatment to get athletes back in the game.',
      color: 'text-orange-500 bg-orange-500/10'
    },
    {
      icon: HeartPulse,
      title: 'Post-Surgery Rehab',
      description: 'Comprehensive recovery programs after surgical procedures.',
      color: 'text-green-500 bg-green-500/10'
    },
    {
      icon: UserCheck,
      title: 'Pain Management',
      description: 'Evidence-based approaches to chronic and acute pain.',
      color: 'text-indigo-500 bg-indigo-500/10'
    },
    {
      icon: Brain,
      title: 'Neuro Rehabilitation',
      description: 'Specialized care for neurological conditions and stroke.',
      color: 'text-violet-500 bg-violet-500/10'
    },
    {
      icon: Baby,
      title: 'Pediatric Physiotherapy',
      description: 'Gentle, effective treatments for developmental needs.',
      color: 'text-pink-500 bg-pink-500/10'
    },
    {
      icon: HeartPulse,
      title: 'Geriatric Care',
      description: 'Programs for seniors to maintain mobility and independence.',
      color: 'text-teal-500 bg-teal-500/10'
    },
  ];

  const handleBookNow = () => {
    toast({
      title: "🚧 Feature Coming Soon!",
      description: "This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
    });
  };

  return (
    <section id="services" ref={ref} className="py-20 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-brand-teal font-semibold text-sm uppercase tracking-wider">Our Services</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-balance">
            Comprehensive <span className="gradient-text">Treatment Options</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            We offer a wide range of specialized physiotherapy services designed to meet your unique health needs and recovery goals.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="group bg-card rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all border flex flex-col"
            >
              <div
                className={`w-14 h-14 rounded-xl ${service.color} flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110 group-hover:rotate-12`}
              >
                <service.icon className="w-7 h-7" />
              </div>

              <h3 className="text-xl font-bold mb-3 text-card-foreground">
                {service.title}
              </h3>
              <p className="text-muted-foreground mb-4 leading-relaxed flex-grow">
                {service.description}
              </p>

              {/* <Button
                onClick={handleBookNow}
                variant="link"
                className="p-0 h-auto text-brand-teal hover:text-brand-green font-semibold self-start"
              >
                Learn More
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button> */}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;