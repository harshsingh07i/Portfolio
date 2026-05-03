import React, { useEffect, useState } from 'react';
import { Download, Moon, Sun, Menu, X } from 'lucide-react';
import { motion } from 'motion/react';

const Navbar: React.FC = () => {
  const [isDark, setIsDark] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    // Check initial preference
    if (document.documentElement.classList.contains('dark')) {
      setIsDark(true);
    }
  }, []);

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove('dark');
      setIsDark(false);
    } else {
      document.documentElement.classList.add('dark');
      setIsDark(true);
    }
  };

  return (
    <motion.nav 
      className="fixed top-0 left-0 w-full z-50 px-6 md:px-12 pt-6"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.1 }}
    >
      <div className="max-w-[1400px] mx-auto bg-white/10 dark:bg-black/10 backdrop-blur-xl border border-white/20 dark:border-white/10 rounded-2xl px-6 py-3 flex items-center justify-between shadow-sm">
        
        {/* Left: Logo */}
        <a href="#" className="flex items-center hover:opacity-80 transition-opacity">
          <img src={`${import.meta.env.BASE_URL}h_logo.png`} alt="Logo" className="w-8 h-8 object-contain invert dark:invert-0" />
        </a>

        {/* Center: Links (Hidden on mobile) */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          {['About', 'Experience', 'Projects', 'Skills', 'Contact'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`}
              className="text-[#5E6470] dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors"
            >
              {item}
            </a>
          ))}
        </div>

        {/* Right: Actions */}
        <div className="flex items-center gap-3 md:gap-4">
          <button 
            onClick={toggleTheme}
            className="p-2 rounded-xl bg-white/50 dark:bg-black/50 text-[#5E6470] dark:text-gray-300 hover:bg-white dark:hover:bg-gray-800 transition-colors shadow-sm"
            aria-label="Toggle theme"
          >
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          
          <a 
            href={`${import.meta.env.BASE_URL}resume.pdf`} 
            download="HARSH_PRATAP_SINGH_Resume.pdf"
            className="hidden sm:flex items-center gap-2 bg-white dark:bg-white/10 text-[#5E6470] dark:text-white px-5 py-2 rounded-xl text-sm font-medium hover:bg-gray-100 dark:hover:bg-white/20 transition-colors shadow-sm"
          >
            <Download size={16} />
            <span>Resume</span>
          </a>

          {/* Mobile Menu Toggle */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-xl bg-white/50 dark:bg-black/50 text-[#5E6470] dark:text-gray-300 hover:bg-white dark:hover:bg-gray-800 transition-colors shadow-sm"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>

      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden mt-4 mx-auto max-w-[1400px] bg-white/95 dark:bg-black/95 backdrop-blur-xl border border-[#e5e7eb] dark:border-white/10 rounded-2xl p-4 shadow-lg flex flex-col gap-4"
        >
          {['About', 'Experience', 'Projects', 'Skills', 'Contact'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`}
              onClick={() => setIsMenuOpen(false)}
              className="text-[#5E6470] dark:text-gray-300 hover:text-black dark:hover:text-white font-medium px-4 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-white/10 transition-colors"
            >
              {item}
            </a>
          ))}
          <a 
            href={`${import.meta.env.BASE_URL}resume.pdf`} 
            download="HARSH_PRATAP_SINGH_Resume.pdf"
            onClick={() => setIsMenuOpen(false)}
            className="sm:hidden flex items-center justify-center gap-2 bg-black dark:bg-white text-white dark:text-black px-5 py-3 rounded-xl text-sm font-medium mt-2"
          >
            <Download size={16} />
            <span>Download Resume</span>
          </a>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
