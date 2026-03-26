import React from 'react'
import { IoMdDownload } from "react-icons/io";
import { Link } from 'react-router-dom';
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import ToggleAnimationButton from './ToggleAnimationBtn';
import { motion } from 'framer-motion';
import resume from '../assets/Anishcv.pdf'

function Hero() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    };

    const childVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
    };

    return (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className='space-y-4 text-start items-start p-8 rounded-lg w-full md:w-2/3 lg:w-1/2'
        >
            <motion.div variants={childVariants}>
                <p className='text-xl text-muted-foreground'>Hello, I'm</p>
                <h1 className='text-4xl lg:text-5xl font-bold text-balance dark:text-white tracking-wide mt-2 mb-2'>
                    Anish Kumar Sah
                </h1>
                <p className='text-lg text-green-400 mt-2 tracking-wide font-medium'>A Passionate Full-Stack Developer</p>
            </motion.div>
            <motion.div variants={childVariants}>
                <ul className='flex flex-wrap gap-4 md:gap-6 md:w-fit text-base md:text-lg mt-4 rounded-lg'>
                    <li className=' border-b-2 border-green-400 rounded'><a href="#home">Home</a></li>
                    <li className='hover:border-b-2 hover:text-green-400 transition-colors rounded'><a href="#about">About</a></li>
                    <li className='hover:border-b-2 hover:text-green-400 transition-colors rounded'><a href="#skills">Skills</a></li>
                    <li className='hover:border-b-2 hover:text-green-400 transition-colors rounded'><a href="#projects">Projects</a></li>
                    <li className='hover:border-b-2 hover:text-green-400 transition-colors rounded'><a href="#contact">Contact</a></li>
                </ul>
            </motion.div>
            <motion.div variants={childVariants} className='flex flex-wrap gap-4 mt-8'>
                <motion.a whileHover={{ y: -5, color: '#3b82f6' }} href="https://www.linkedin.com/in/anish-kumar91/" target='_blank' rel="noopener noreferrer" className='bg-gray-600/20 rounded-2xl p-4 transition-colors'><FaLinkedinIn size={20} /></motion.a>
                <motion.a whileHover={{ y: -5, color: '#fff' }} href="https://github.com/anisharora1" target='_blank' rel="noopener noreferrer" className='bg-gray-600/20 rounded-2xl p-4 transition-colors'><FaGithub size={20} /></motion.a>
                <motion.a whileHover={{ y: -5, color: '#1da1f2' }} href="https://x.com/AnishArora45951" target='_blank' rel="noopener noreferrer" className='bg-gray-600/20 rounded-2xl p-4 transition-colors'><FaXTwitter size={20} /></motion.a>
                <motion.a whileHover={{ y: -5, color: '#e1306c' }} href="https://www.instagram.com/anish_arora91/" target='_blank' rel="noopener noreferrer" className='bg-gray-600/20 rounded-2xl p-4 transition-colors'><FaInstagram size={20} /></motion.a>
            </motion.div>
            <motion.div variants={childVariants} className='flex flex-col sm:flex-row gap-4 mt-6'>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full sm:w-auto">
                    <a href={resume} download className='flex items-center text-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 transition-colors text-white px-6 py-3 rounded-lg font-semibold shadow-[0_0_15px_rgba(37,99,235,0.4)] w-full'>
                        <span><IoMdDownload size={20} /></span>Download Resume
                    </a>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full sm:w-auto">
                    <button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} className='flex items-center text-center justify-center gap-2 bg-green-600 hover:bg-green-500 transition-colors text-white px-6 py-3 rounded-lg font-semibold shadow-[0_0_15px_rgba(22,163,74,0.4)] w-full cursor-pointer'>
                        Hire Me
                    </button>
                </motion.div>
            </motion.div>
            <motion.div variants={childVariants} className="mt-8">
                <ToggleAnimationButton />
            </motion.div>
        </motion.div>
    )
}

export default Hero