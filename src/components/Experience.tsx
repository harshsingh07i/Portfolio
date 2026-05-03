import React from 'react';
import { motion } from 'motion/react';
import { Briefcase } from 'lucide-react';
import { liquidReveal } from './About';

const experiences = [
  {
    role: "Data Analyst Intern",
    company: "Tata Group (Tata iQ)",
    date: "July 2025",
    duties: [
      "Conducted AI-powered exploratory data analysis on financial services datasets.",
      "Used GenAI tools to assess data quality and identify delinquency risk indicators.",
      "Proposed a no-code predictive modeling framework for high-risk customer detection.",
      "Designed an ethical and scalable AI-driven collections strategy aligned with regulations."
    ]
  },
  {
    role: "Data Science Intern",
    company: "British Airways",
    date: "July 2025",
    duties: [
      "Analyzed customer review data to extract insights into purchasing behavior.",
      "Built predictive models to identify factors influencing customer decisions.",
      "Aligned analytical insights with business goals and customer satisfaction."
    ]
  },
  {
    role: "Cybersecurity Analyst Intern",
    company: "TCS",
    date: "July 2025",
    duties: [
      "Implemented identity and access management strategies for secure user lifecycle control.",
      "Applied enterprise cybersecurity best practices aligned with business needs.",
      "Prepared clear documentation and presentations for non-technical stakeholders."
    ]
  }
];

const Experience: React.FC = () => {
  return (
    <section id="experience" className="w-full max-w-[1400px] mx-auto px-6 py-10">
      <motion.div 
        className="flex flex-col items-center mb-12"
        variants={liquidReveal}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        <h2 className="text-3xl font-semibold text-[#5E6470] dark:text-white tracking-tight transition-colors duration-500">Experience</h2>
        <div className="h-1 w-12 bg-[#5E6470] dark:bg-white rounded-full mt-4 opacity-50 dark:opacity-30 transition-colors duration-500"></div>
      </motion.div>

      <div className="max-w-4xl mx-auto space-y-8">
        {experiences.map((exp, index) => (
          <motion.div 
            key={index}
            className="relative flex items-start gap-6 bg-white/50 dark:bg-white/5 backdrop-blur-md border border-[#e5e7eb] dark:border-white/10 p-6 md:p-8 rounded-[1.5rem] shadow-sm hover:shadow-md transition-all duration-500"
            variants={{
              hidden: { opacity: 0, y: 50, filter: 'blur(10px)' },
              visible: { 
                opacity: 1, 
                y: 0, 
                filter: 'blur(0px)',
                transition: { duration: 1, type: "spring" as const, bounce: 0.3, delay: index * 0.15 } 
              }
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            <div className="hidden sm:flex shrink-0 w-12 h-12 bg-white dark:bg-white/10 rounded-full shadow-sm items-center justify-center border border-[#e5e7eb] dark:border-white/10 transition-colors duration-500">
              <Briefcase size={20} className="text-[#5E6470] dark:text-white transition-colors duration-500" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-[#5E6470] dark:text-white transition-colors duration-500">{exp.role}</h3>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-1 mb-4">
                <span className="text-[#5E6470] dark:text-gray-300 font-medium opacity-90 transition-colors duration-500">@ {exp.company}</span>
                <span className="text-sm text-[#5E6470] dark:text-gray-300 opacity-80 bg-white dark:bg-black/30 px-3 py-1 rounded-full border border-[#e5e7eb] dark:border-white/10 mt-2 sm:mt-0 inline-block w-fit transition-colors duration-500">
                  {exp.date}
                </span>
              </div>
              <ul className="list-disc list-inside space-y-2 text-[#5E6470] dark:text-gray-400 opacity-90 transition-colors duration-500">
                {exp.duties.map((duty, i) => (
                  <li key={i} className="leading-relaxed">{duty}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
