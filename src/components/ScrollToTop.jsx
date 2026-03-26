import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    let scrollTimeout;

    const handleScroll = () => {
      setIsVisible(false); // Hide while scrolling

      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }

      // Show button after scrolling has stopped for 250ms
      scrollTimeout = setTimeout(() => {
        if (window.scrollY > 300) {
          setIsVisible(true);
        }
      }, 250);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeout) clearTimeout(scrollTimeout);
    };
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          className="fixed bottom-4 right-4 z-50 cursor-pointer"
          onClick={scrollToTop}
        >
          <div className="bg-green-500 hover:bg-green-400 text-gray-900 w-10 h-10 rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(16,185,129,0.5)] hover:shadow-[0_0_25px_rgba(16,185,129,0.8)] transition-all">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default ScrollToTop;
