import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

function Blogs() {
  const [blogs, setBlogs] = useState([
    {
      _id: '1',
      title: 'Git for Beginners: Basics and Essential Commands',
      content: 'Simply put, Git is a time machine. It’s a distributed version control system. This means that Git keeps track of every line of your code, every change. If your code breaks tomorrow, you can revert to yesterday’s code with a single command.',
      imageUrl: 'https://miro.medium.com/v2/resize:fit:1100/format:webp/1*sH0hDyhmCtRmpuO_yD4tQA.jpeg',
      createdAt: new Date('2023-11-15T10:00:00Z').toISOString(),
      tags: ['Git', 'Version Control', 'Beginner'],
      link: 'https://medium.com/p/445c4407427c'
    },
    {
      _id: '2',
      title: 'DNS Record Types: Address Book’s Internet',
      content: 'DNS records are the unsung heroes of the internet. They act as the address book for the web, telling your browser where to find the server hosting a website. Without them, the internet as we know it wouldn’t exist.',
      imageUrl: 'https://miro.medium.com/v2/resize:fit:1100/format:webp/1*C7BiAfdnneD9-MsbacOWtw.png',
      createdAt: new Date('2023-10-22T14:30:00Z').toISOString(),
      tags: ['DNS', 'Networking', 'Beginner'],
      link: 'https://medium.com/p/7b81d44a0207'
    },
    {
      _id: '3',
      title: 'TCP Working: 3-Way Handshake & Reliable Communication—The “Hidden” Logic 🤝',
      content: 'As AI continues to evolve, developers are finding new ways to integrate it into their daily workflows. We will take a deep dive into how modern AI agents can accelerate coding, and what it means for the future of software engineering.',
      imageUrl: 'https://miro.medium.com/v2/resize:fit:4800/format:webp/1*wBNpRhZiMWGfERL6aoYB2w.png',
      createdAt: new Date('2023-09-05T09:15:00Z').toISOString(),
      tags: ['TCP', 'Networking', 'Beginner'],
      link: 'https://medium.com/p/b1bb1db01ac4'
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

  const displayedBlogs = isMobile && !showAll ? blogs.slice(0, 2) : blogs;

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
      id="blogs"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      className='flex flex-col relative m-auto min-h-screen md:p-16 p-4 w-full md:max-w-[1250px] mt-10 rounded text-white'
    >
      <div className="flex flex-col items-center justify-center mb-16 relative">
        <div className="flex items-center justify-center w-full">
          <h1 className="text-[50px] md:text-[70px] font-bold text-white opacity-10 text-center relative tracking-widest uppercase">LATEST BLOGS</h1>
          <h1 className="text-3xl md:text-4xl font-bold text-green-500 text-center absolute uppercase tracking-widest">LATEST BLOGS</h1>
        </div>
        <div className="w-20 h-1 bg-green-500 mt-2 mb-4 rounded-full"></div>
        <p className="text-gray-400 text-center max-w-2xl px-4">Insights, tutorials, and my journey through software development.</p>
      </div>

      <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {displayedBlogs.map((blog, index) => (
          <motion.div
            key={blog._id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: (index % 3) * 0.15 + 0.1 }}
            whileHover={{ y: -10 }}
            className="bg-gray-900/30 backdrop-blur-md border border-gray-800/50 rounded-xl overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.3)] transition-all hover:border-green-500/80 hover:shadow-[0_0_20px_rgba(16,185,129,0.3)] flex flex-col"
          >
            {blog.imageUrl && (
              <div className="h-48 overflow-hidden shrink-0">
                <motion.img
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                  src={blog.imageUrl}
                  alt={blog.title}
                  className="w-full h-full object-cover"
                  onError={(e) => e.target.style.display = 'none'}
                />
              </div>
            )}
            <div className="p-6 flex-1 flex flex-col">
              <h3 className="text-2xl font-bold text-green-400 mb-2">{blog.title}</h3>
              <div className="text-sm text-gray-500 mb-4">{new Date(blog.createdAt).toLocaleDateString()}</div>

              <div className="flex flex-wrap gap-2 mb-4">
                {blog.tags.slice(0, 3).map((tag, i) => (
                  <span key={i} className="text-xs px-2 py-1 bg-gray-800 text-green-300 rounded border border-gray-700">#{tag}</span>
                ))}
                {blog.tags.length > 3 && <span className="text-xs px-2 py-1 bg-gray-800 text-gray-400 rounded">+{blog.tags.length - 3}</span>}
              </div>

              <p className="text-gray-400 line-clamp-4 flex-1 mb-4">{blog.content}</p>

              <a href={blog.link} target="_blank" rel="noopener noreferrer" className="text-green-500 font-semibold hover:text-green-400 self-start transition-colors mt-auto inline-block">Read More &rarr;</a>
            </div>
          </motion.div>
        ))}
        {blogs.length === 0 && (
          <div className="col-span-full text-center text-gray-400 py-10">No blogs published yet.</div>
        )}
      </motion.div>

      {isMobile && blogs.length > 2 && (
        <div className="flex justify-center mt-10">
          <button
            onClick={() => setShowAll(!showAll)}
            className="px-8 py-3 bg-transparent border-2 border-green-500 text-green-500 font-semibold rounded-full hover:bg-green-500 hover:text-gray-900 transition-all shadow-[0_0_15px_rgba(16,185,129,0.2)] hover:shadow-[0_0_20px_rgba(16,185,129,0.6)]"
          >
            {showAll ? 'Show Less' : 'View All Blogs'}
          </button>
        </div>
      )}
    </motion.div>
  )
}

export default Blogs
