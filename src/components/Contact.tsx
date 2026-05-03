import React from 'react';
import { motion } from 'motion/react';
import { Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './icons';
import { liquidReveal } from './About';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="w-full max-w-[1400px] mx-auto px-6 py-10 pb-32">
      <motion.div 
        className="flex flex-col items-center bg-white/50 dark:bg-white/5 backdrop-blur-md border border-[#e5e7eb] dark:border-white/10 p-10 md:p-16 rounded-[2rem] shadow-sm max-w-4xl mx-auto text-center transition-colors duration-500"
        variants={liquidReveal}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        <h2 className="text-3xl md:text-4xl font-semibold text-[#5E6470] dark:text-white tracking-tight mb-6 transition-colors duration-500">Get In Touch</h2>
        <p className="text-[#5E6470] dark:text-gray-300 opacity-90 mb-10 max-w-2xl leading-relaxed text-lg transition-colors duration-500">
          Currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 mb-12">
          <div className="flex items-center gap-3 bg-white dark:bg-white/5 px-6 py-4 rounded-xl border border-[#e5e7eb] dark:border-white/10 shadow-sm transition-colors duration-500 hover:shadow-md">
            <Mail className="text-[#5E6470] dark:text-white" size={20} />
            <div className="text-left">
              <p className="text-xs font-semibold text-[#5E6470] dark:text-gray-400 uppercase tracking-wider opacity-80">Personal</p>
              <a href="mailto:wharshsingh@gmail.com" className="text-[#5E6470] dark:text-white font-medium hover:text-black dark:hover:text-gray-300 transition-colors">wharshsingh@gmail.com</a>
            </div>
          </div>
          <div className="flex items-center gap-3 bg-white dark:bg-white/5 px-6 py-4 rounded-xl border border-[#e5e7eb] dark:border-white/10 shadow-sm transition-colors duration-500 hover:shadow-md">
            <Mail className="text-[#5E6470] dark:text-white" size={20} />
            <div className="text-left">
              <p className="text-xs font-semibold text-[#5E6470] dark:text-gray-400 uppercase tracking-wider opacity-80">College</p>
              <a href="mailto:b24bs1154@iitj.ac.in" className="text-[#5E6470] dark:text-white font-medium hover:text-black dark:hover:text-gray-300 transition-colors">b24bs1154@iitj.ac.in</a>
            </div>
          </div>
        </div>

        <a 
          href="mailto:wharshsingh@gmail.com?subject=Hello%20from%20your%20Portfolio!"
          className="inline-flex items-center gap-2 bg-[#5E6470] dark:bg-white text-white dark:text-black px-8 py-4 rounded-xl font-medium hover:bg-black dark:hover:bg-gray-200 transition-colors shadow-md hover:shadow-lg"
        >
          <Mail size={20} />
          <span>Say Hello</span>
        </a>

        {/* Improved Footer inside contact box for compactness */}
        <div className="mt-16 pt-8 border-t border-[#e5e7eb] dark:border-white/10 w-full flex flex-col md:flex-row items-center justify-between gap-6 transition-colors duration-500">
          <div className="flex items-center gap-3">
            <img src={`${import.meta.env.BASE_URL}h_logo.png`} alt="Logo" className="w-6 h-6 object-contain invert dark:invert-0 transition-all duration-500" />
            <p className="text-[#5E6470] dark:text-gray-400 opacity-80 text-sm font-medium transition-colors duration-500">
              © 2026 Harsh Pratap Singh. All rights reserved.
            </p>
          </div>
          
          <div className="flex items-center gap-5">
            <a href="https://github.com/harshsingh07i" target="_blank" rel="noopener noreferrer" className="text-[#5E6470] dark:text-gray-400 opacity-70 hover:opacity-100 dark:hover:text-white transition-all duration-300 transform hover:scale-110">
              <GithubIcon size={22} />
            </a>
            <a href="https://www.linkedin.com/in/harsh-singh-b89925315/" target="_blank" rel="noopener noreferrer" className="text-[#5E6470] dark:text-gray-400 opacity-70 hover:opacity-100 hover:text-[#0a66c2] dark:hover:text-[#0a66c2] transition-all duration-300 transform hover:scale-110">
              <LinkedinIcon size={22} />
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
