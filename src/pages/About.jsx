import React from 'react'
import profileImage from '../assets/portfolioImg1.jpeg'
import { motion } from 'framer-motion'

function About() {
  return (
    <motion.div
      id="about"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8 }}
      className="flex flex-col bg-gray-900/30 backdrop-blur-xl relative m-auto min-h-screen md:p-16 p-4 border border-gray-800/50 w-full md:max-w-[1250px] mt-10 rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.4)] overflow-hidden"
    >
      <div className=" flex items-center  justify-center">
        <h1 className="text-[50px] font-bold text-white opacity-20 mb-4 text-center relative">ABOUT ME</h1>
        <h1 className="text-4xl font-bold text-green-500 mb-4 pt-8 text-center border-b-1  border-green-500 absolute">ABOUT ME</h1>
      </div>
      <div className='flex items-center flex-col md:flex-row justify-between w-full mt-10 gap-10'>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className='w-[50%]'
        >
          <img src={profileImage} alt="profile-img" className="rounded-lg shadow-[0_0_20px_rgba(16,185,129,0.4)]" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className='md:w-[50%] w-full p-4'
        >
          <div className='space-y-6'>
            <h1 className='text-white text-3xl md:text-4xl font-bold tracking-wide'>Hey there! I'm <span className="text-green-400">Anish Kumar</span> 👋</h1>
            <div className='text-gray-300 leading-relaxed space-y-4 border-l-4 border-green-500 pl-5 bg-gradient-to-r from-green-500/10 to-transparent py-4 rounded-r-xl shadow-[inset_10px_0_20px_-10px_rgba(16,185,129,0.2)]'>
              <p>
                I’m a passionate <span className="text-white font-semibold">MERN Stack Developer</span> with a strong foundation in <span className="text-green-400/90 font-medium">Data Structures and Algorithms</span> using C++. I like creating scalable, effective, and intuitive web apps that address practical issues.
              </p>
              <p>
                In addition to working with contemporary frontend tools like <span className="text-white font-semibold">Tailwind CSS</span> and <span className="text-white font-semibold">Vite</span>, I have experience with <span className="text-emerald-400 font-medium">MongoDB, Express.js, React, and Node.js</span>. Beyond development, I concentrate on creating clear, maintainable code and enhancing my problem-solving skills.
              </p>
              <p className='text-gray-400 italic pt-2 border-t border-gray-800/50'>
                "Having a solid understanding of backend logic and fundamental programming concepts, my goal is to create fluid digital experiences that blend style and performance."
              </p>
            </div>
          </div>
          <div className="mt-8">
            <h1 className="text-white font-semibold text-[30px] tracking-wide">Education</h1>

            <div className="mt-6 flex gap-6">

              {/* LEFT SIDE TIMELINE */}
              <div className="relative flex flex-col items-center">

                {/* DOT 1 */}
                <div className="relative after:block after:bg-gradient-to-b after:from-green-400 after:to-emerald-500 after:w-[2px] after:h-35 after:mx-auto">
                  <span className="relative flex h-4 w-4 items-center justify-center">
                    <span className="absolute inline-flex h-6 w-6 rounded-full bg-green-400/20 blur-sm"></span>
                    <span className="h-4 w-4 rounded-full bg-gradient-to-r from-green-400 to-emerald-500 ring-2 ring-green-500 shadow-[0_0_15px_rgba(16,185,129,0.6)]"></span>
                  </span>
                </div>

                {/* DOT 2 */}
                <div className="relative after:block after:bg-gradient-to-b after:from-green-400 after:to-emerald-500 after:w-[2px] after:h-35 after:mx-auto">
                  <span className="relative flex h-4 w-4 items-center justify-center">
                    <span className="absolute inline-flex h-6 w-6 rounded-full bg-emerald-400/20 blur-sm animate-ping"></span>
                    <span className="h-4 w-4 rounded-full bg-gradient-to-r from-green-400 to-emerald-500 ring-2 ring-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.6)]"></span>
                  </span>
                </div>

                {/* DOT 3 */}
                <div className="relative after:block after:bg-gradient-to-b after:from-green-400 after:to-emerald-500 after:w-[2px] after:h-25 after:mx-auto">
                  <span className="relative flex h-4 w-4 items-center justify-center">
                    <span className="absolute inline-flex h-6 w-6 rounded-full bg-green-400/20 blur-sm"></span>
                    <span className="h-4 w-4 rounded-full bg-gradient-to-r from-green-400 to-emerald-500 ring-2 ring-green-500 shadow-[0_0_15px_rgba(16,185,129,0.6)]"></span>
                  </span>
                </div>

              </div>

              {/* RIGHT SIDE EDUCATION DETAILS */}
              <div className="flex flex-col gap-10 text-white">

                {/* EDUCATION 1 */}
                <motion.div whileHover={{ scale: 1.02 }} className="p-6 bg-gray-900/30 backdrop-blur-md rounded-xl border border-gray-800/50 shadow-[0_8px_32px_rgba(0,0,0,0.2)] hover:border-green-500/40 transition-colors">
                  <h1 className="text-lg font-bold text-green-400">High School (10th)</h1>
                  <h3 className="text-emerald-500 font-medium mb-1">2019 - 2020</h3>
                  <p className="text-gray-400 text-sm">Shri Liladhar High School Benipati, Madhubani, Bihar, IN</p>
                </motion.div>

                {/* EDUCATION 2 */}
                <motion.div whileHover={{ scale: 1.02 }} className="p-6 bg-gray-900/30 backdrop-blur-md rounded-xl border border-gray-800/50 shadow-[0_8px_32px_rgba(0,0,0,0.2)] hover:border-green-500/40 transition-colors">
                  <h1 className="text-lg font-bold text-emerald-400">Senior Secondary (12th)</h1>
                  <h3 className="text-emerald-500 font-medium mb-1">2020 - 2022</h3>
                  <p className="text-gray-400 text-sm">Marwari College Darbhanga, Bihar, IN</p>
                </motion.div>

                {/* EDUCATION 3 */}
                <motion.div whileHover={{ scale: 1.02 }} className="p-6 bg-gray-900/30 backdrop-blur-md rounded-xl border border-gray-800/50 shadow-[0_8px_32px_rgba(0,0,0,0.2)] hover:border-green-500/40 transition-colors">
                  <h1 className="text-lg font-bold text-green-500">Bachelor of Technology: Computer Science And Engineering</h1>
                  <h3 className="text-emerald-500 font-medium mb-1">2023 - Present</h3>
                  <p className="text-gray-400 text-sm">Lovely Professional University Jalandhar, Punjab, IN</p>
                </motion.div>

              </div>

            </div>
          </div>

        </motion.div>
      </div>
    </motion.div>
  )
}

export default About