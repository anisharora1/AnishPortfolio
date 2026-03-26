import React, { useState } from 'react'
import { GoPerson } from "react-icons/go";
import { MdOutlineEmail } from "react-icons/md";
import { FiMessageSquare } from "react-icons/fi";
import { LuSend } from "react-icons/lu";
import { motion } from 'framer-motion';

function Contact() {
  const [result, setResult] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setResult("Sending...");

    const formData = new FormData(event.target);

    // Get this key from https://web3forms.com/
    formData.append("access_key", "7323d120-cab2-4964-bb75-9c2e38c70b90");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setResult("Message Sent Successfully!");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult("Failed to send message: " + data.message);
      }
    } catch (error) {
      console.error(error);
      setResult("Something went wrong. Please try again later.");
    }

    setIsSubmitting(false);

    // Clear message after 5 seconds
    setTimeout(() => {
      setResult("");
    }, 5000);
  };

  return (
    <motion.div
      id="contact"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8 }}
      className='md:mx-auto my-12 max-w-xl border-2 border-green-500 rounded-xl shadow-lg relative overflow-hidden backdrop-blur-sm'
    >
      <div className='flex items-center justify-center relative mt-8'>
        <h2 className='text-[50px] relative font-bold text-center my-6 text-white opacity-20'>Get in Touch</h2>
        <h2 className='text-4xl absolute font-bold text-center my-6 pt-6 text-green-400 border-b-2'>Get in Touch</h2>
      </div>
      <h4 className='text-center text-xl text-white tracking-wider opacity-15 mb-4'>We would love to hear from you!</h4>
      <form onSubmit={onSubmit} className='space-y-4 px-10 pb-14'>
        <label htmlFor="name" className='text-[18px] font-semibold text-green-500 tracking-wide'> <GoPerson className="inline mb-1 mr-1" />Your Name</label><br />
        <input placeholder='Your full name' type="text" id="name" name="name" required className='p-2 text-white border-2 border-[#04162f] bg-gray-900/50 rounded-2xl w-full tracking-wide focus:outline-none focus:border-green-500 transition-colors' /><br />
        <label htmlFor="email" className='text-[18px] font-semibold text-green-500 tracking-wide'><MdOutlineEmail className="inline mb-1 mr-1" />Your Email</label><br />
        <input placeholder='Your email address' type="email" id="email" name="email" required className='p-2 text-white border-2 border-[#04162f] bg-gray-900/50 rounded-2xl w-full tracking-wide focus:outline-none focus:border-green-500 transition-colors' /><br />
        <label htmlFor="message" className='text-[18px] font-semibold text-green-500 tracking-wide'> <FiMessageSquare className="inline mb-1 mr-1" />Your Message</label><br />
        <textarea placeholder='Type your message here.' id="message" name="message" rows="4" required className='p-2 text-white border-2 border-[#04162f] bg-gray-900/50 rounded-2xl w-full tracking-wide focus:outline-none focus:border-green-500 transition-colors'></textarea><br />
        <motion.button
          whileHover={!isSubmitting ? { scale: 1.05 } : {}}
          whileTap={!isSubmitting ? { scale: 0.95 } : {}}
          disabled={isSubmitting}
          className={`w-full text-[#ffff] leading-0.5 text-[22px] p-4 rounded-2xl font-bold tracking-widest transition-colors mt-6 shadow-[0_0_15px_rgba(34,197,94,0.4)] ${isSubmitting ? 'bg-gray-600 cursor-not-allowed border-none' : 'bg-green-500 cursor-pointer hover:bg-green-600'}`} type="submit"
        >
          <LuSend className="inline mb-1 mr-2" />{isSubmitting ? 'Sending...' : 'Send message'}
        </motion.button>
        {result && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`mt-4 text-center p-3 rounded-xl border font-semibold tracking-wide ${result.includes('Successfully') ? 'bg-green-500/20 border-green-500 text-green-400' : 'bg-red-500/20 border-red-500 text-red-400'}`}
          >
            {result}
          </motion.div>
        )}
      </form>
    </motion.div>
  )
}

export default Contact