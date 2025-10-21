import React from 'react';
import { Helmet } from 'react-helmet';
import PageTransition from '../components/PageTransition';
import About from '../components/About';
import Testimonials from '../components/Testimonials';
import { motion } from 'framer-motion';
import { Users, Smile, HeartHandshake, BookOpen } from 'lucide-react';
import Vision from '../components/Vision';
import CoreValues from '../components/CoreValues';
import Facility from '../components/Facility';

const PhilosophySection = () => {
  const principles = [
    { icon: Users, title: "Patient-First Approach", description: "Your goals and well-being are at the heart of everything we do. We listen, understand, and partner with you on your recovery journey." },
    { icon: Smile, title: "Positive & Supportive Environment", description: "We believe a positive mindset is key to recovery. Our clinic is a space of encouragement, support, and optimism." },
    { icon: HeartHandshake, title: "Education & Empowerment", description: "We empower you with the knowledge and tools to manage your condition, prevent future injuries, and maintain a healthy, active lifestyle." },
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
            Our Care <span className="gradient-text">Philosophy</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Our approach is built on a foundation of compassion, expertise, and a commitment to your long-term wellness.
          </p>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-8">
          {principles.map((principle, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              className="bg-card p-8 rounded-2xl shadow-lg border text-center"
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <principle.icon className="w-8 h-8 text-brand-teal" />
              </div>
              <h3 className="text-xl font-bold mb-3">{principle.title}</h3>
              <p className="text-muted-foreground">{principle.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const MissionSection = () => {
    return (
        <section className="py-20 bg-card border-y">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6 }}
                    className="text-center"
                >
                    <BookOpen className="w-12 h-12 text-brand-teal mx-auto mb-4" />
                    <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6 text-balance">
                       Our <span className="gradient-text">Mission</span>
                    </h2>
                    <p className="text-muted-foreground text-xl italic leading-relaxed">
                        "To deliver exceptional, patient-centered physiotherapy through advanced techniques and compassionate care, empowering individuals to achieve their highest level of physical function and quality of life."
                    </p>
                </motion.div>
            </div>
        </section>
    );
}

const AboutPage = () => {
  return (
    <PageTransition>
      <Helmet>
        <title>About Dr. Rutuja | Physiotherapy Specialist</title>
        <meta name="description" content="Learn about Dr. Rutuja, her qualifications, experience, and patient-centered care philosophy. A trusted partner in your recovery journey." />
      </Helmet>
      <div className="pt-20">
        <About />
        <PhilosophySection />
        <MissionSection />
        <Vision />
        <CoreValues />
        <Facility />
        {/* <Testimonials /> */}
      </div>
    </PageTransition>
  );
};

export default AboutPage;