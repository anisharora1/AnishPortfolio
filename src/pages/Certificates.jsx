import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import freeCodeCampImg from '../assets/freeCodeCamp.jpg';
import nptelPdf from '../assets/NPTEL.pdf';
import courseraPdf from '../assets/CourseraCSE320-1.pdf';

function Certificates() {
  const [certificates] = useState([
    {
      _id: '1',
      title: 'freeCodeCamp Certification',
      issuer: 'freeCodeCamp',
      issueDate: '2023-10-10',
      imageUrl: freeCodeCampImg,
      credentialUrl: freeCodeCampImg,
      type: 'image'
    },
    {
      _id: '2',
      title: 'Meta Front-End Developer',
      issuer: 'Coursera & Meta',
      issueDate: '2024-05-20',
      imageUrl: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      credentialUrl: courseraPdf,
      type: 'pdf'
    },
    {
      _id: '3',
      title: 'Cloud Computing',
      issuer: 'NPTEL',
      issueDate: '2025-04-01',
      imageUrl: 'https://images.unsplash.com/photo-1523289333742-be1143f6b766?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      credentialUrl: nptelPdf,
      type: 'pdf'
    }
  ]);

  const [showAll, setShowAll] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [selectedCert, setSelectedCert] = useState(null);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize(); // Initialize
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const displayedCertificates = isMobile && !showAll ? certificates.slice(0, 2) : certificates;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 30 },
    visible: { opacity: 1, scale: 1, y: 0 }
  };

  return (
    <motion.div
      id="certificates"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      className='flex flex-col relative m-auto min-h-screen md:p-16 p-4 w-full md:max-w-[1250px] mt-10 rounded text-white'
    >
      <div className="flex flex-col items-center justify-center mb-16 relative">
        <div className="flex items-center justify-center w-full">
          <h1 className="text-[50px] md:text-[70px] font-bold text-white opacity-10 text-center relative tracking-widest uppercase">CERTIFICATES</h1>
          <h1 className="text-3xl md:text-4xl font-bold text-green-500 text-center absolute uppercase tracking-widest">CERTIFICATES</h1>
        </div>
        <div className="w-20 h-1 bg-green-500 mt-2 mb-4 rounded-full"></div>
        <p className="text-gray-400 text-center max-w-2xl px-4">Professional degrees and certifications tracking my continued learning.</p>
      </div>

      <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {displayedCertificates.map((cert, index) => (
          <motion.div
            key={cert._id}
            initial={{ opacity: 0, scale: 0.8, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: (index % 3) * 0.15 + 0.1 }}
            whileHover={{ y: -10 }}
            className="bg-gray-900/30 backdrop-blur-md border border-gray-800/50 rounded-xl overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.3)] transition-all hover:border-green-500/80 hover:shadow-[0_0_20px_rgba(16,185,129,0.3)] flex flex-col group cursor-pointer"
            onClick={() => setSelectedCert(cert)}
          >
            <div className="h-56 overflow-hidden relative">
              <motion.img
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.4 }}
                src={cert.imageUrl}
                alt={cert.title}
                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                onError={(e) => e.target.style.display = 'none'}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="bg-green-500/80 text-white px-4 py-2 rounded-lg font-semibold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  View Certificate
                </span>
              </div>
            </div>
            <div className="p-6 flex-1 flex flex-col relative z-10 bg-gray-900/90 rounded-t-2xl shadow-[0_-10px_15px_rgba(0,0,0,0.5)] border-t border-gray-800/50 backdrop-blur-md">
              <div className="flex justify-between items-start mb-1">
                <h3 className="text-xl font-bold text-white group-hover:text-green-400 transition-colors pr-2">{cert.title}</h3>
                <span className="flex items-center gap-1 text-xs font-bold bg-blue-500/20 text-blue-400 px-2 py-1 rounded border border-blue-500/30 shrink-0">
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                  Verified
                </span>
              </div>
              <div className="text-green-500 font-semibold text-sm mb-4">{cert.issuer}</div>

              <div className="flex justify-between items-center mt-auto pt-4 border-t border-gray-800">
                <span className="text-sm text-gray-500">{new Date(cert.issueDate).toLocaleDateString()}</span>
                <button
                  onClick={(e) => { e.stopPropagation(); setSelectedCert(cert); }}
                  className="text-sm bg-green-600 hover:bg-green-500 text-white font-semibold py-1.5 px-4 rounded transition-colors shadow-[0_0_10px_rgba(16,185,129,0.3)]"
                >
                  View
                </button>
              </div>
            </div>
          </motion.div>
        ))}
        {certificates.length === 0 && (
          <div className="col-span-full text-center text-gray-400 py-10">No certificates added yet.</div>
        )}
      </motion.div>

      {isMobile && certificates.length > 2 && (
        <div className="flex justify-center mt-10">
          <button
            onClick={() => setShowAll(!showAll)}
            className="px-8 py-3 bg-transparent border-2 border-green-500 text-green-500 font-semibold rounded-full hover:bg-green-500 hover:text-gray-900 transition-all shadow-[0_0_15px_rgba(16,185,129,0.2)] hover:shadow-[0_0_20px_rgba(16,185,129,0.6)]"
          >
            {showAll ? 'Show Less' : 'View All Certificates'}
          </button>
        </div>
      )}

      {/* Certificate Modal */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCert(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          >
            <motion.div
              initial={{ y: 50, opacity: 0, scale: 0.9 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 20, opacity: 0, scale: 0.9 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl bg-gray-900 rounded-2xl shadow-2xl border border-gray-700 overflow-hidden flex flex-col"
              style={{ maxHeight: '90vh' }}
            >
              <div className="flex justify-between items-center p-4 border-b border-gray-800 bg-gray-900/50">
                <h3 className="text-xl font-bold text-white">{selectedCert.title}</h3>
                <button
                  onClick={() => setSelectedCert(null)}
                  className="text-gray-400 hover:text-white bg-gray-800 hover:bg-gray-700 rounded-full w-8 h-8 flex items-center justify-center transition-colors"
                >
                  ✕
                </button>
              </div>

              <div className="p-1 overflow-auto flex-1 flex items-center justify-center bg-gray-800/50 min-h-[50vh]">
                {selectedCert.type === 'pdf' ? (
                  <iframe
                    src={selectedCert.credentialUrl}
                    className="w-full h-[70vh] rounded-xl"
                    title={selectedCert.title}
                  />
                ) : (
                  <img
                    src={selectedCert.credentialUrl}
                    alt={selectedCert.title}
                    className="max-w-full max-h-[75vh] object-contain rounded-xl"
                  />
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default Certificates
