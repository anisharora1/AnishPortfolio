import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiHome, FiUser, FiCode, FiBriefcase, FiMail } from 'react-icons/fi';

const navItems = [
  { id: 'home', icon: <FiHome size={22} />, tooltip: 'Home' },
  { id: 'about', icon: <FiUser size={22} />, tooltip: 'About' },
  { id: 'skills', icon: <FiCode size={22} />, tooltip: 'Skills' },
  { id: 'projects', icon: <FiBriefcase size={22} />, tooltip: 'Projects' },
  { id: 'contact', icon: <FiMail size={22} />, tooltip: 'Contact' },
];

function VerticalNav() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      let currentSection = 'home';
      for (const item of navItems) {
        const section = document.getElementById(item.id);
        if (section) {
          const rect = section.getBoundingClientRect();
          // Adjust threshold - if top of section is across mid-screen or covers most screen
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= 100) {
            currentSection = item.id;
          }
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    // Initial check
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <AnimatePresence>
      {activeSection !== 'home' && (
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.5 }}
          className="fixed z-50 bottom-4 left-1/2 -translate-x-1/2 md:bottom-auto md:left-8 md:top-1/2 md:-translate-y-1/2 md:translate-x-0"
        >
          <div className="bg-gray-900/80 backdrop-blur-md px-6 py-3 md:px-3 md:py-6 rounded-full border border-gray-800 shadow-[0_0_20px_rgba(0,0,0,0.5)] flex flex-row md:flex-col gap-4 md:gap-6 items-center">
            {navItems.map((item) => (
              <div key={item.id} className="relative group flex items-center justify-center">
                <button 
                  onClick={() => handleClick(item.id)}
                  className={`p-2 md:p-3 rounded-full transition-all duration-300 ${activeSection === item.id ? 'bg-green-500 text-gray-900 shadow-[0_0_15px_rgba(16,185,129,0.6)] scale-110' : 'text-gray-400 hover:text-green-400 hover:bg-gray-800/80 hover:scale-110'}`}
                  aria-label={item.tooltip}
                >
                  {item.icon}
                </button>
                <div className="hidden md:block absolute left-full ml-4 px-3 py-1 bg-gray-900 text-green-400 text-sm font-semibold rounded-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none border border-gray-800 shadow-lg">
                  {item.tooltip}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default VerticalNav;
