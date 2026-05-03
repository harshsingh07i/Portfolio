import React from 'react';
import { motion } from 'motion/react';
import { GraduationCap } from 'lucide-react';

export const liquidReveal = {
  hidden: { opacity: 0, y: 60, filter: 'blur(10px)' },
  visible: { 
    opacity: 1, 
    y: 0, 
    filter: 'blur(0px)',
    transition: { duration: 1.2, type: "spring" as const, bounce: 0.4 } 
  }
};

const About: React.FC = () => {
  return (
    <section id="about" className="w-full max-w-[1400px] mx-auto px-6 py-10 flex flex-col items-center">
      <motion.div 
        className="w-full flex flex-col md:flex-row items-center gap-12 bg-white/50 dark:bg-white/5 backdrop-blur-xl border border-white/20 dark:border-white/10 rounded-[2rem] p-8 md:p-12 shadow-sm transition-colors duration-500"
        variants={liquidReveal}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* Profile Picture */}
        <div className="relative shrink-0">
          <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-white dark:border-white/20 shadow-xl relative z-10 transition-colors duration-500">
            <img src={`${import.meta.env.BASE_URL}profile.jpg`} alt="Harsh Pratap Singh" className="w-full h-full object-cover" />
          </div>
          {/* Subtle glow behind picture */}
          <div className="absolute inset-0 bg-[#5E6470] dark:bg-white blur-3xl opacity-20 dark:opacity-10 rounded-full scale-110 z-0 transition-opacity duration-500"></div>
        </div>

        {/* Details & Education */}
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-3xl font-semibold text-[#5E6470] dark:text-white tracking-tight mb-4 transition-colors duration-500">About Me</h2>
          <p className="text-base md:text-lg text-[#5E6470] dark:text-gray-300 opacity-90 mb-8 leading-relaxed max-w-2xl transition-colors duration-500">
            I am a highly motivated Artificial Intelligence and Data Science student with strong foundations in mathematics, data analytics, and AI systems. I have experience building real-world projects, participating in national-level hackathons, and applying AI to data-driven decision making.
          </p>

          <div className="inline-flex items-start gap-4 bg-white/50 dark:bg-black/30 border border-white/40 dark:border-white/10 p-5 rounded-2xl transition-colors duration-500">
            <div className="p-3 bg-white dark:bg-white/10 rounded-xl shadow-sm border border-transparent dark:border-white/10 transition-colors duration-500">
              <GraduationCap className="text-[#5E6470] dark:text-white transition-colors duration-500" size={24} />
            </div>
            <div className="text-left">
              <h3 className="font-semibold text-[#5E6470] dark:text-white text-lg transition-colors duration-500">Indian Institute of Technology (IIT) Jodhpur</h3>
              <p className="text-[#5E6470] dark:text-gray-400 opacity-90 text-sm transition-colors duration-500">Bachelors in Artificial Intelligence & Data Science</p>
              <p className="text-[#5E6470] dark:text-gray-500 font-medium text-sm mt-1 transition-colors duration-500">2024 – 2028 (Expected)</p>
            </div>
          </div>
        </div>

      </motion.div>
    </section>
  );
};

export default About;
