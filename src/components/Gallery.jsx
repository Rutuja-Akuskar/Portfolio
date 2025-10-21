import React, { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, X, Maximize } from 'lucide-react';
import img1 from '../assets/img1.jpeg';
import img2 from '../assets/img2.jpeg';
import img3 from '../assets/img3.jpeg';
import img4 from '../assets/img4.jpeg';
import img5 from '../assets/img5.jpeg';
import img6 from '../assets/img6.jpeg';

const Gallery = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    { src: img1, alt: 'image1' },
    { src: img2, alt: 'image2' },
    { src: img3, alt: 'image3' },
    { src: img4, alt: 'image4' },
    { src: img5, alt: 'image5' },
    { src: img6, alt: 'image6' },
  ];

  return (
    <section id="gallery" ref={ref} className="py-20 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-brand-teal font-semibold text-sm uppercase tracking-wider">Our Clinic</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-balance">
            Explore Our <span className="gradient-text">State-of-the-Art Facility</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            A welcoming and professional environment designed for your comfort, recovery, and well-being.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4"
        >
          {images.map((image, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              onClick={() => setSelectedImage(image)}
              className="relative aspect-square rounded-xl overflow-hidden shadow-lg cursor-pointer group"
            >
              <img src={image.src} alt={image.alt} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <Maximize className="w-8 h-8 text-white" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="relative max-w-4xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 text-white/70 hover:text-white transition-colors"
              >
                <X className="w-8 h-8" />
              </button>
              <img src={selectedImage.src} alt={selectedImage.alt} className="max-h-[90vh] w-auto rounded-lg" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;