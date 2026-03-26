import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ToggleAnimationButton() {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 200) {
                setIsVisible(false);
            } else {
                setIsVisible(true);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div 
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, y: 10, transition: { duration: 0.3 } }}
                    onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                    className="flex flex-col absolute items-center justify-center p-4 bottom-4 left-1/2 transform -translate-x-1/2 cursor-pointer transition-transform hover:scale-110"
                >
            {/* Toggle Animation Button */}
            <div className="relative flex items-center justify-center">
                {/* Outer rounded rectangle border */}
                <div className="absolute w-6 h-11 border-2 border-green-500 rounded-full shadow-[0_0_10px_rgba(34,197,94,0.3)]" />

                {/* Inner circle with infinite animation */}
                <div
                    className="relative w-2 h-2 bg-green-400 rounded-full"
                    style={{
                        animation: 'moveUpDown 2s infinite ease-in-out'
                    }}
                />
            </div>

            <style>{`
        @keyframes moveUpDown {
          0%, 100% {
            transform: translateY(12px);
          }
          50% {
            transform: translateY(-12px);
          }
        }
      `}</style>
                </motion.div>
            )}
        </AnimatePresence>
    );
}