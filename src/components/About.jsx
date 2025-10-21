import React from 'react';
import { motion, useInView } from 'framer-motion';
import { Award, GraduationCap, HeartPulse, Target } from 'lucide-react';
import { useRef } from 'react';
import download from '../assets/download.jpeg';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const achievements = [
    { icon: GraduationCap, title: 'MPT in Orthopedics', desc: 'Advanced musculoskeletal degree' },
    { icon: Award, title: 'IAP Certified', desc: 'Indian Association of Physiotherapists' },
    { icon: HeartPulse, title: '15+ Specialized Care', desc: 'Extensive clinical practice' },
    { icon: Target, title: 'Patient-Centered', desc: 'Holistic & personalized care' },
  ];

  return (
    <section id="about" ref={ref} className="py-20 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-brand-teal font-semibold text-sm uppercase tracking-wider">About Dr. Rutuja</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-balance">
            Your Dedicated Partner in <span className="gradient-text">Recovery</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Combining deep expertise with a compassionate approach to guide you back to optimal health and movement.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative z-10 aspect-[4/5]">
              <img
                className="rounded-3xl shadow-2xl w-full h-auto object-cover"
                alt="Portrait of Dr. Rutuja, a friendly and professional physiotherapist, in her modern clinic office"
                src={download}
              />
            </div>
             <motion.div
              className="absolute -top-4 -left-4 w-full h-full bg-gradient-to-br from-brand-teal/20 to-brand-green/20 rounded-3xl -z-10"
              animate={{ rotate: [0, -2, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-3xl font-bold mb-6">Expertise You Can Trust</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Dr. Rutuja.S.Akuskar is dedicated to helping patients regain mobility, reduce pain, and achieve their optimal physical health through personalized physiotherapy solutions. Every treatment plan is tailored to the individual, focusing on long-term wellness rather than temporary relief.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Our clinic emphasizes a holistic approach, addressing the root causes of discomfort and promoting overall body strength and flexibility. By combining advanced techniques with compassionate care, we ensure each patient receives the attention and guidance they deserve.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              We are committed to enhancing quality of life, whether it’s recovering from injuries, managing chronic conditions, or improving functional movement. Our team works closely with patients to set achievable goals and celebrate every milestone along the journey to recovery.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              At the core of our practice is a belief in empowering patients. We educate, motivate, and support each individual, helping them take control of their health and maintain lasting results beyond the clinic.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {achievements.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="bg-card rounded-xl p-5 shadow-lg hover:shadow-xl transition-all border"
                >
                  <item.icon className="w-8 h-8 text-brand-teal mb-3" />
                  <h4 className="font-semibold text-card-foreground mb-1">{item.title}</h4>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;