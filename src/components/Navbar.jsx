import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { Button } from './ui/button';
import { useToast } from './ui/use-toast';
import ThemeToggle from './ThemeToggle';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { toast } = useToast();

  const handleBookNow = () => {
    toast({
      title: "🚧 Feature Coming Soon!",
      description: "This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
      duration: 4000,
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Gallery', href: '/gallery' },
    {name: 'Blogs', href: '/BlogsPage' },
    { name: 'Testimonials', href: '/testimonials' },
    { name: 'Ethics & Practices', href: '/EthicsPractices' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-background/80 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center space-x-3">
            <motion.div whileHover={{ scale: 1.05, rotate: 10 }}>
              <img src={logo} alt="Dr. Rutuja Logo" className="h-16 w-16 sm:h-18 sm:w-18 lg:h-28 lg:w-28" />
            </motion.div>
            <div>
              <p className="text-xl font-bold gradient-text">Dr. Rutuja</p>
              <p className="text-xs text-muted-foreground">Physiotherapy Clinic</p>
            </div>
          </Link>

          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <motion.div key={link.name} className="relative">
                <Link
                  to={link.href}
                  className={`font-medium transition-colors ${
                    location.pathname === link.href
                      ? 'text-brand-teal'
                      : 'text-foreground/80 hover:text-brand-teal'
                  }`}
                >
                  {link.name}
                  {location.pathname === link.href && (
                    <motion.div
                      className="absolute -bottom-2 left-0 right-0 h-0.5 bg-brand-teal"
                      layoutId="underline"
                      initial={false}
                    />
                  )}
                </Link>
              </motion.div>
            ))}
            <div className="flex items-center gap-2">
              <ThemeToggle />
              {/* <Button onClick={handleBookNow} className="bg-brand-teal hover:bg-brand-green text-white">
                <Phone className="w-4 h-4 mr-2" />
                Book Now
              </Button> */}
            </div>
          </div>

          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg hover:bg-accent transition-colors"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background/95 backdrop-blur-md border-t"
          >
            <div className="px-4 pt-2 pb-4 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`block py-2 text-lg font-medium transition-colors ${
                    location.pathname === link.href ? 'text-brand-teal' : 'text-foreground hover:text-brand-teal'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Button onClick={handleBookNow} className="w-full bg-brand-teal hover:bg-brand-green text-white mt-2">
                <Phone className="w-4 h-4 mr-2" />
                Book Now
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;