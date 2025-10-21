import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { Button } from './ui/button';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className="relative w-9 h-9"
    >
      <AnimatePresence initial={false} mode="wait">
        <motion.div
          key={theme === 'light' ? 'sun' : 'moon'}
          initial={{ y: -20, opacity: 0, rotate: -90 }}
          animate={{ y: 0, opacity: 1, rotate: 0 }}
          exit={{ y: 20, opacity: 0, rotate: 90 }}
          transition={{ duration: 0.2 }}
          className="absolute"
        >
          {theme === 'light' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
        </motion.div>
      </AnimatePresence>
    </Button>
  );
};

export default ThemeToggle;