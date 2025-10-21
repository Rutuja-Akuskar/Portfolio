import React, { useState, useRef, useEffect } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import ath from '../assets/ath.jpeg';
import off from '../assets/off.jpeg';
import old from '../assets/old.jpeg';

const Testimonials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: 'Michael Johnson',
      role: 'Professional Athlete',
      image: ath,
      rating: 5,
      text: 'Dr. Rutuja\'s expertise got me back on the field faster than I ever thought possible. The personalized care plan was a game-changer for my recovery.',
    },
    {
      name: 'Emily Rodriguez',
      role: 'Office Professional',
      image: off,
      rating: 5,
      text: 'After years of chronic back pain, I finally found relief here. The attention to detail and compassionate approach made all the difference. I feel like a new person!',
    },
    {
      name: 'David Chen',
      role: 'Senior Citizen',
      image: old,
      rating: 5,
      text: 'The geriatric care program has dramatically improved my mobility. The staff is patient and incredibly knowledgeable. I couldn\'t be happier with the results.',
    },
  ];

  useEffect(() => {
    if (!isInView) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [isInView, testimonials.length]);


  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" ref={ref} className="py-20 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-brand-teal font-semibold text-sm uppercase tracking-wider">Patient Stories</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-balance">
            What Our <span className="gradient-text">Patients Say</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Real experiences from people who've transformed their lives through our dedicated care and expertise.
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="bg-card rounded-3xl shadow-2xl p-8 md:p-12 relative border"
            >
              <Quote className="absolute top-8 left-8 w-16 h-16 text-primary/10" />
              
              <div className="flex flex-col md:flex-row items-center gap-8 relative z-10">
                <motion.div
                  initial={{ scale: 0.5 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                  className="flex-shrink-0"
                >
                  <div className="w-32 h-32 rounded-full overflow-hidden ring-4 ring-primary/20">
                    <img
                      className="w-full h-full object-cover"
                      alt={testimonials[currentIndex].name}
                      src={testimonials[currentIndex].image}
                    />
                  </div>
                </motion.div>

                <div className="flex-1 text-center md:text-left">
                  <div className="flex justify-center md:justify-start gap-1 mb-4">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3 + i * 0.05 }}
                      >
                        <Star className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                      </motion.div>
                    ))}
                  </div>

                  <p className="text-foreground text-lg mb-6 leading-relaxed italic">
                    "{testimonials[currentIndex].text}"
                  </p>

                  <div>
                    <h4 className="font-bold text-xl text-card-foreground">
                      {testimonials[currentIndex].name}
                    </h4>
                    <p className="text-brand-teal font-medium">
                      {testimonials[currentIndex].role}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-16 bg-card hover:bg-accent p-3 rounded-full shadow-lg transition-all hover:scale-110 border"
          >
            <ChevronLeft className="w-6 h-6 text-foreground" />
          </button>

          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-16 bg-card hover:bg-accent p-3 rounded-full shadow-lg transition-all hover:scale-110 border"
          >
            <ChevronRight className="w-6 h-6 text-foreground" />
          </button>

          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all ${
                  index === currentIndex ? 'w-8 bg-brand-teal' : 'w-2 bg-muted-foreground/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;