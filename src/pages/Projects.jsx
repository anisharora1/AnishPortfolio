import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

function Projects() {
  const [projects, setProjects] = useState([
    {
      _id: '1',
      title: 'Classifieds Platform (OLX-Style)',
      description: 'ApnaHero is a full-stack classifieds platform that allows users to post, browse, and manage listings in real time. It includes secure authentication using Clerk and real-time chat functionality powered by Socket.io for seamless communication between buyers and sellers. The platform is fully responsive across all devices and integrates Google Analytics to track user engagement and improve the user experience.',
      imageUrl: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      technologies: ['React JS', 'JavaScript', 'Express JS', 'Node JS', 'MongoDB', 'Tailwind CSS', 'Clerk Authentication'],
      projectUrl: 'https://www.apnahero.in/',
      githubUrl: 'https://github.com/anisharora1/apnahero'
    },
    {
      _id: '2',
      title: 'Multi-User Blog Platform (Medium-Style)',
      description: 'A dynamic, multi-user blog platform built with React and Node.js, inspired by Medium. It allows users to create accounts, publish articles, and engage with content through likes and comments. The platform features a modern, responsive interface with real-time updates and secure user authentication.',
      imageUrl: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      technologies: ['React JS', 'JavaScript', 'Express JS', 'Node JS', 'MongoDB', 'Tailwind CSS', 'Authentication'],
      projectUrl: '#',
      githubUrl: 'https://github.com/anisharora1/mindFroge'
    },
    {
      _id: '3',
      title: 'Static Client Project (React)',
      description: 'A static client project built with React, showcasing modern web development practices. This project features a responsive design, interactive UI components, and optimized performance. It serves as a solid foundation for building complex client-side applications with clean, maintainable code.',
      imageUrl: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      technologies: ['React JS', 'JavaScript', 'Tailwind CSS'],
      projectUrl: 'https://myschool-jkl8.vercel.app/',
      githubUrl: 'https://github.com/anisharora1/myschool'
    }
  ]);

  const [showAll, setShowAll] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize(); // Initialize
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const displayedProjects = isMobile && !showAll ? projects.slice(0, 2) : projects;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.div
      id="projects"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      className='flex flex-col relative m-auto min-h-screen md:p-16 p-4 w-full md:max-w-[1250px] mt-10 rounded text-white'
    >
      <div className="flex flex-col items-center justify-center mb-16 relative">
        <div className="flex items-center justify-center w-full">
          <h1 className="text-[50px] md:text-[70px] font-bold text-white opacity-10 text-center relative tracking-widest uppercase">PROJECTS</h1>
          <h1 className="text-3xl md:text-4xl font-bold text-green-500 text-center absolute uppercase tracking-widest">PROJECTS</h1>
        </div>
        <div className="w-20 h-1 bg-green-500 mt-2 mb-4 rounded-full"></div>
        <p className="text-gray-400 text-center max-w-2xl px-4">A showcase of my recent work, side projects, and open source contributions.</p>
      </div>

      <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {displayedProjects.map((project, index) => (
          <motion.div
            key={project._id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: (index % 3) * 0.15 + 0.1 }}
            whileHover={{ y: -10 }}
            className="bg-gray-900/30 backdrop-blur-md border border-gray-800/50 rounded-xl overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.3)] transition-all hover:border-green-500/80 hover:shadow-[0_0_20px_rgba(16,185,129,0.3)]"
          >
            <div className="h-48 overflow-hidden">
              <motion.img
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-full object-cover"
                onError={(e) => e.target.src = 'https://via.placeholder.com/400x300?text=No+Image'}
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-green-400 mb-2">{project.title}</h3>
              <p className="text-gray-400 line-clamp-3 mb-4">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.slice(0, 4).map((tech, i) => (
                  <span key={i} className="text-xs px-2 py-1 bg-gray-800 text-green-300 rounded border border-gray-700">{tech}</span>
                ))}
                {project.technologies.length > 4 && <span className="text-xs px-2 py-1 bg-gray-800 text-gray-400 rounded">+{project.technologies.length - 4}</span>}
              </div>

              <div className="flex gap-4">
                <a href={project.projectUrl} target="_blank" rel="noreferrer" className="flex-1 text-center bg-green-600 hover:bg-green-700 text-white py-2 rounded transition-colors font-semibold">Live Demo</a>
                <a href={project.githubUrl} target="_blank" rel="noreferrer" className="flex-1 text-center bg-gray-700 hover:bg-gray-600 text-white py-2 rounded transition-colors font-semibold border border-gray-600">Github</a>
              </div>
            </div>
          </motion.div>
        ))}
        {projects.length === 0 && (
          <div className="col-span-full text-center text-gray-400 py-10">No projects added yet.</div>
        )}
      </motion.div>

      {isMobile && projects.length > 2 && (
        <div className="flex justify-center mt-10">
          <button
            onClick={() => setShowAll(!showAll)}
            className="px-8 py-3 bg-transparent border-2 border-green-500 text-green-500 font-semibold rounded-full hover:bg-green-500 hover:text-gray-900 transition-all shadow-[0_0_15px_rgba(16,185,129,0.2)] hover:shadow-[0_0_20px_rgba(16,185,129,0.6)]"
          >
            {showAll ? 'Show Less' : 'View All Projects'}
          </button>
        </div>
      )}
    </motion.div>
  )
}

export default Projects