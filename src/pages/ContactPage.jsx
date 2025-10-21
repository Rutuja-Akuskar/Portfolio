import React from 'react';
import { Helmet } from 'react-helmet';
import PageTransition from '../components/PageTransition';
import Contact from '../components/Contact';
import { motion } from 'framer-motion';
import { HelpCircle, CalendarDays, Map } from 'lucide-react';

const FaqSection = () => {
    const faqs = [
        { q: "Do I need a doctor's referral?", a: "No, you do not need a doctor's referral to see a physiotherapist in our clinic. You can book an appointment directly with us." },
        { q: "What should I wear to my appointment?", a: "Please wear comfortable, loose-fitting clothing that allows easy access to the area we will be treating." },
        { q: "How long is each physiotherapy session?", a: "Your initial assessment will be approximately 60 minutes, and subsequent follow-up appointments are typically 30-45 minutes." },
    ];
    return (
        <section className="py-20 bg-card border-y">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                 <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6 text-balance">
                       Frequently Asked <span className="gradient-text">Questions</span>
                    </h2>
                </motion.div>
                <div className="space-y-4">
                  {faqs.map((faq, index) => (
                    <motion.div 
                      key={index}
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="bg-background p-6 rounded-lg border"
                    >
                      <h3 className="font-semibold text-lg mb-2">{faq.q}</h3>
                      <p className="text-muted-foreground">{faq.a}</p>
                    </motion.div>
                  ))}
                </div>
            </div>
        </section>
    );
};


const ContactPage = () => {
  return (
    <PageTransition>
      <Helmet>
        <title>Contact & Appointments | Dr. Rutuja's Clinic</title>
        <meta name="description" content="Get in touch with Dr. Rutuja's physiotherapy clinic to book an appointment. Find our contact details, address, working hours, and answers to FAQs." />
      </Helmet>
      <div className="pt-20">
        <Contact />
        {/* <FaqSection /> */}
      </div>
    </PageTransition>
  );
};

export default ContactPage;