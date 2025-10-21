import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import pre from '../assets/pre.jpg';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { useToast } from './ui/use-toast';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    message: '',
  });

  const contactInfo = [
    { icon: MapPin, title: 'Visit Us', details: ['Thatagat Chauk', 'Amabjogai, 431517'] },
    { icon: Phone, title: 'Call Us', details: ['9373444125'] },
    { icon: Mail, title: 'Email Us', details: ['Rutujapt@gmail.com'] },
    { icon: Clock, title: 'Working Hours', details: ['Mon - Fri: 8am - 7pm', 'Sat: 9am - 2pm'] },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    toast({
      title: "✅ Appointment Request Sent!",
      description: "We've received your request and will contact you shortly to confirm.",
    });
    setFormData({ name: '', phone: '', date: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" ref={ref} className="py-20 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-brand-teal font-semibold text-sm uppercase tracking-wider">Get In Touch</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-balance">
            Book Your <span className="gradient-text">Appointment Today</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Ready to take the first step towards a pain-free life? Reach out to us. We're here to help.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
  <motion.div
    initial={{ opacity: 0, x: -50 }}
    animate={isInView ? { opacity: 1, x: 0 } : {}}
    transition={{ duration: 0.8 }}
  >
    {/* ✅ Background image container */}
    <div
      className="bg-contain bg-center bg-no-repeat rounded-3xl shadow-2xl p-8 md:p-10 border relative overflow-hidden"
      style={{
        backgroundImage: `url(${pre})`,
      }}
    >
  {/* Lighter overlay so the prescription image remains visible but text stays readable (no blur) */}
  {/* <div className="absolute inset-0 bg-white/60 rounded-3xl"></div> */}

      {/* ✅ Form content (kept on top) */}
      <div className="relative z-10">
        <h3 className="text-2xl font-bold mb-6 mt-40">Send us a message</h3>
        <form onSubmit={handleSubmit} className="space-y-6">
  {/* Full Name */}
  <div className="flex flex-col md:flex-row md:items-center md:space-x-4">
    <Label htmlFor="name" className="md:w-32 md:text-right mb-1 md:mb-0">
      Full Name
    </Label>
    <Input
      id="name"
      name="name"
      value={formData.name}
      onChange={handleChange}
      placeholder="Enter your name here"
      className="flex-1"
      required
    />
  </div>

  {/* Phone Number */}
  <div className="flex flex-col md:flex-row md:items-center md:space-x-4">
    <Label htmlFor="phone" className="md:w-32 md:text-right mb-1 md:mb-0">
      Phone Number
    </Label>
    <Input
      id="phone"
      name="phone"
      type="tel"
      value={formData.phone}
      onChange={handleChange}
      placeholder="Enter your phone number here"
      className="flex-1"
      required
    />
  </div>

  {/* Preferred Date */}
  <div className="flex flex-col md:flex-row md:items-center md:space-x-4">
    <Label htmlFor="date" className="md:w-32 md:text-right mb-1 md:mb-0">
      Preferred Date
    </Label>
    <Input
      id="date"
      name="date"
      type="date"
      value={formData.date}
      onChange={handleChange}
      className="flex-1"
      required
    />
  </div>

  {/* Your Message */}
  <div className="flex flex-col md:flex-row md:items-start md:space-x-4">
    <Label htmlFor="message" className="md:w-32 md:text-right mb-1 md:mb-0">
      Your Message
    </Label>
    <Textarea
      id="message"
      name="message"
      value={formData.message}
      onChange={handleChange}
      placeholder="Tell us about your concerns..."
      className="flex-1 min-h-32"
      required
    />
  </div>

  {/* Submit Button */}
  <Button
    type="submit"
    className="w-full bg-brand-teal hover:bg-brand-green text-white group"
    size="lg"
  >
    <Send className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" />
    Request Appointment
  </Button>
</form>

      </div>
    </div>
  </motion.div>


          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="grid grid-cols-2 gap-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="bg-card rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all border"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <info.icon className="w-6 h-6 text-brand-teal" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">{info.title}</h4>
                      {info.details.map((detail, i) => (
                        <p key={i} className="text-muted-foreground text-sm">{detail}</p>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6 }}
              className="bg-card rounded-2xl overflow-hidden shadow-lg border"
            >
              <div className="w-full h-80 md:h-96 relative">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d258.26882437459415!2d76.38903953234212!3d18.72529397397931!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc55e5da95a09b9%3A0x451ba3e3868b1d54!2sTathagat%20Chowk!5e1!3m2!1sen!2sin!4v1760900363352!5m2!1sen!2sin"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Clinic Location"
                  className="absolute inset-0 w-full h-full rounded-2xl border-0"
                  style={{ border: 0 }}
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;