import React from 'react';
import { motion } from 'motion/react';
import { Code2, Brain, Calculator, ShieldCheck } from 'lucide-react';
import { liquidReveal } from './About';

const skillCategories = [
  {
    title: "Programming & Data",
    icon: <Code2 size={24} />,
    skills: ["Python", "SQL", "EDA", "Data Cleaning", "Predictive Modeling"]
  },
  {
    title: "AI & Analytics",
    icon: <Brain size={24} />,
    skills: ["Generative AI Tools", "Machine Learning", "Business Intelligence"]
  },
  {
    title: "Mathematics",
    icon: <Calculator size={24} />,
    skills: ["Linear Algebra", "Probability & Statistics", "Numerical Optimization"]
  },
  {
    title: "Tools & Security",
    icon: <ShieldCheck size={24} />,
    skills: ["Power BI", "Jupyter", "Cybersecurity", "IAM"]
  }
];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="w-full max-w-[1400px] mx-auto px-6 py-10">
      <motion.div 
        className="flex flex-col items-center mb-12"
        variants={liquidReveal}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        <h2 className="text-3xl font-semibold text-[#5E6470] dark:text-white tracking-tight transition-colors duration-500">Technical Skills</h2>
        <div className="h-1 w-12 bg-[#5E6470] dark:bg-white rounded-full mt-4 opacity-50 dark:opacity-30 transition-colors duration-500"></div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {skillCategories.map((category, index) => (
          <motion.div 
            key={index}
            className="flex flex-col bg-white/50 dark:bg-white/5 backdrop-blur-md border border-[#e5e7eb] dark:border-white/10 p-6 rounded-[1.5rem] shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-500"
            variants={{
              hidden: { opacity: 0, y: 50, filter: 'blur(10px)' },
              visible: { 
                opacity: 1, 
                y: 0, 
                filter: 'blur(0px)',
                transition: { duration: 1, type: "spring" as const, bounce: 0.3, delay: index * 0.1 } 
              }
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-white dark:bg-white/10 rounded-xl shadow-sm flex items-center justify-center border border-[#e5e7eb] dark:border-white/10 text-[#5E6470] dark:text-white transition-colors duration-500">
                {category.icon}
              </div>
              <h3 className="font-semibold text-[#5E6470] dark:text-white text-lg transition-colors duration-500">{category.title}</h3>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, i) => (
                <span key={i} className="text-sm font-medium bg-white dark:bg-black/30 text-[#5E6470] dark:text-gray-300 border border-[#e5e7eb] dark:border-white/10 px-3 py-1 rounded-lg shadow-sm transition-colors duration-500">
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
