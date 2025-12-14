import React from 'react';
import { Helmet } from 'react-helmet';
import PageTransition from '../components/PageTransition';
import Services from '../components/Services';
import DesignCarousel from '../components/DesignCarousel';
import { motion } from 'framer-motion';
import { CheckCircle, MessageSquare, Activity, ShieldQuestion } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Link } from 'react-router-dom';
import Skeleton3D from "../components/Skeleton3D";

const HowItWorksSection = () => {
  const steps = [
    { icon: MessageSquare, title: "1. Initial Consultation", description: "We begin with a thorough assessment to understand your condition, medical history, and personal health goals." },
    { icon: CheckCircle, title: "2. Personalized Plan", description: "Based on the assessment, we create a tailored treatment plan using a combination of our specialized services." },
    { icon: Activity, title: "3. Active Recovery", description: "We guide you through your treatment, making adjustments as you progress, and empower you with exercises for long-term success." },
  ];
  return (
    <section className="py-20 bg-card border-y">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6 text-balance">
            Your Path to <span className="gradient-text">Recovery</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Our process is simple, transparent, and designed to get you back to feeling your best as efficiently as possible.
          </p>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              className="bg-background p-8 rounded-2xl shadow-lg border text-center"
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <step.icon className="w-8 h-8 text-brand-teal" />
              </div>
              <h3 className="text-xl font-bold mb-3">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
            </motion.div>
          ))}
        </div>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="text-center mt-12"
        >
          <Button asChild size="lg" className="bg-brand-teal hover:bg-brand-green text-white">
            <Link to="/contact">Get Started Today</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

const ConditionsTreatedSection = () => {
    const conditions = [
        "Back & Neck Pain", "Sports Injuries", "Post-Surgical Rehab", "Arthritis Management",
        "Headaches & Migraines", "Sciatica", "Rotator Cuff Injuries", "Neurological Conditions"
    ];
    return (
        <section className="py-20 bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6 text-balance">
                        Conditions We <span className="gradient-text">Treat</span>
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
                        We provide expert care for a wide spectrum of musculoskeletal and neurological issues.
                    </p>
                </motion.div>
                <motion.div 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ staggerChildren: 0.05, delayChildren: 0.2 }}
                    className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
                >
                    {conditions.map((condition, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="bg-card p-4 rounded-lg shadow-md border flex items-center gap-3"
                        >
                            <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0" />
                            <span className="font-medium text-card-foreground">{condition}</span>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};


const ServicesPage = () => {
  return (
    <PageTransition>
      <Helmet>
        <title>Physiotherapy Services | Dr. Rutuja's Clinic</title>
        <meta name="description" content="Explore our comprehensive physiotherapy services, including manual therapy, sports injury rehab, electrotherapy, and post-surgery recovery programs." />
      </Helmet>
      <div className="pt-20">
        <Services />
        <DesignCarousel />
        <HowItWorksSection />
        <Skeleton3D />
        <ConditionsTreatedSection />
      </div>
    </PageTransition>
  );
};

export default ServicesPage;