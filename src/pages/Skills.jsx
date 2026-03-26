import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

function Skills() {
  const [skills, setSkills] = useState([
    { _id: '1', name: 'C', level: 85, iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg' },
    { _id: '2', name: 'C++', level: 85, iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg' },
    { _id: '3', name: 'JavaScript', level: 90, iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    { _id: '4', name: 'Express JS ', level: 80, iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
    { _id: '5', name: 'React JS', level: 85, iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { _id: '6', name: 'Node.js', level: 80, iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
    { _id: '7', name: 'Tailwind CSS', level: 90, iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
    { _id: '8', name: 'MongoDB', level: 75, iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
    { _id: '9', name: 'MySQL', level: 80, iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
    { _id: '10', name: 'TypeScript', level: 80, iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
    { _id: '11', name: 'Git', level: 80, iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
    { _id: '12', name: 'GitHub', level: 80, iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
    { _id: '13', name: 'Postman', level: 80, iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg' }
  ]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.div
      id="skills"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className='flex flex-col relative m-auto min-h-screen md:p-16 p-4 w-full md:max-w-[1250px] mt-10 rounded text-white'
    >
      <div className="flex flex-col items-center justify-center mb-8 relative">
        <div className="flex items-center justify-center w-full">
          <h1 className="text-[50px] md:text-[70px] font-bold text-white opacity-10 text-center relative tracking-widest uppercase">SKILLS</h1>
          <h1 className="text-3xl md:text-4xl font-bold text-green-500 text-center absolute uppercase tracking-widest">SKILLS</h1>
        </div>
        <div className="w-20 h-1 bg-green-500 mt-2 mb-4 rounded-full"></div>
        <p className="text-gray-400 text-center max-w-2xl px-4">Technologies and tools I use to build robust and scalable applications.</p>
      </div>

      <motion.div variants={containerVariants} className="grid grid-cols-4 md:grid-cols-4 lg:grid-cols-5 gap-y-6 gap-x-2 md:gap-8 mt-4">
        {skills.map((skill) => (
          <motion.div
            key={skill._id}
            variants={itemVariants}
            whileHover={{ scale: 1.2, filter: "drop-shadow(0px 0px 10px rgba(16, 185, 129, 0.8))" }}
            className="flex flex-col items-center justify-center gap-2 md:gap-4 transition-all duration-300 cursor-pointer"
          >
            {skill.iconUrl && (
              <img src={skill.iconUrl} alt={skill.name} className="w-10 h-10 md:w-20 md:h-20 object-contain" onError={(e) => e.target.style.display = 'none'} />
            )}
            <h3 className="text-[10px] md:text-lg font-medium text-gray-300 transform transition-colors hover:text-green-400 text-center leading-tight">{skill.name}</h3>
          </motion.div>
        ))}
        {skills.length === 0 && (
          <div className="col-span-full text-center text-gray-400 py-10">No skills added yet.</div>
        )}
      </motion.div>
    </motion.div>
  )
}

export default Skills