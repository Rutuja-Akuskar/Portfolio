import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Linkedin, Heart, Youtube} from 'lucide-react';
import logo from '../assets/logo.png';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Testimonials', href: '/testimonials' },
    { name: 'Contact', href: '/contact' },
  ];

  const socialLinks = [
    { icon: Facebook, href: 'https://www.facebook.com/login/', color: 'hover:text-teal-600' },
    { icon: Instagram, href: 'https://www.instagram.com/accounts/login/', color: 'hover:text-teal-600' },
    { icon: Youtube, href: 'https://www.youtube.com/', color: 'hover:text-teal-400' },
    { icon: Linkedin, href: 'https://www.linkedin.com/', color: 'hover:text-teal-700' },
  ];

  return (
    <footer className="bg-card text-card-foreground border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Link to="/" className="flex items-center space-x-3 mb-4">
              <img src={logo} alt="Dr. Rutuja Logo" className="h-16 w-16" />
              <div>
                <p className="text-xl font-bold gradient-text">Dr. Rutuja</p>
                <p className="text-xs text-muted-foreground">Physiotherapy Clinic</p>
              </div>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Restoring movement, enhancing wellness. Your health is our priority.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <p className="font-bold text-lg mb-4">Quick Links</p>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-muted-foreground hover:text-brand-teal transition-colors cursor-pointer"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p className="font-bold text-lg mb-4">Contact Info</p>
            <ul className="space-y-2 text-muted-foreground text-sm">
              <li>Thatagat Chauk</li>
              <li>Amabjogai, 431517</li>
              <li className="pt-2">9373444125</li>
              <li>Rutujapt@gmail.com</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <p className="font-bold text-lg mb-4">Follow Us</p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ scale: 1.2, y: -5 }}
                  className="w-10 h-10 bg-accent rounded-full flex items-center justify-center text-muted-foreground hover:text-teal-600 transition-colors"
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
            <p className="text-muted-foreground text-sm mt-6 leading-relaxed">
              Stay connected for health tips and clinic updates.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="border-t border-border pt-8 text-center"
        >
          <p className="text-muted-foreground text-sm flex items-center justify-center gap-2">
            © 2025 Dr. Rutuja's Physiotherapy Clinic. Made with
            <Heart className="w-4 h-4 text-red-500 fill-red-500" />
            by Prasad.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;