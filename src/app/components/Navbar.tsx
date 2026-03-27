'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
//import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about'];  // Only track home and about since blog and sitemap are external
      let currentSection = 'home';

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            currentSection = section;
          }
        }
      });
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigation = (sectionId: string) => {
    setMobileMenuOpen(false);

    if (sectionId === 'blog') {
      window.open('https://medium.com/@openhouse_38059', '_blank');
      return;
    }

    if (sectionId === 'sitemap') {
      window.open('https://drive.google.com/file/d/1F0qPDpReKYygFrM9F_2YRNQcjYfl1CA6/view?usp=sharing');
      return;
    }

    if (sectionId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const element = document.getElementById(sectionId === 'register' ? 'registration-section' : sectionId);
    if (element) {
      const navbarHeight = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const navigationItems = ['home', 'blog', 'sitemap', 'register'];

  return (
    <>
      <div className="w-[80vw] md:w-[45vw] fixed top-4 left-1/2 transform -translate-x-1/2 z-50 backdrop-blur-lg rounded-full shadow-md">
        {/* Main Navbar Container */}
        <div className="py-2 px-4 md:px-8 flex justify-between items-center">
          {/* Logo Section */}
          <div className="flex items-center">
            <a href="https://engg.cambridge.edu.in/" target="_blank" rel="noopener noreferrer">
              <Image
                src="/cit_navlogo.webp"
                alt="CIT Logo"
                width={110}
                height={45}
                className="object-contain"
              />
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 lg:space-x-12 text-base lg:text-lg font-['OSK'] tracking-wider text-black">
            {navigationItems.map((section) => (
              <button
                key={section}
                onClick={() => handleNavigation(section)}
                className={`uppercase ${activeSection === (section === 'register' ? 'about' : section)
                  ? 'text-black'
                  : 'hover:text-gray-600'
                  } transition-colors duration-200`}
              >
                {section}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden flex flex-col justify-center items-center space-y-1.5"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Menu"
          >
            <div
              className={`w-6 h-0.5 bg-black transition-all ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''
                }`}
            ></div>
            <div
              className={`w-6 h-0.5 bg-black transition-all ${mobileMenuOpen ? 'opacity-0' : 'opacity-100'
                }`}
            ></div>
            <div
              className={`w-6 h-0.5 bg-black transition-all ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
                }`}
            ></div>
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              className="absolute left-0 right-0 mx-auto mt-2 px-4"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
            >
              <div className="backdrop-blur-xl rounded-2xl shadow-lg py-6 max-w-xs mx-auto border border-gray-200/30"
                style={{
                  backgroundImage: 'linear-gradient(145deg, rgba(240,240,240,0.85) 0%, rgba(200,200,200,0.75) 100%)',
                  boxShadow: '0 10px 25px -5px rgba(0,0,0,0.1), 0 8px 10px -6px rgba(0,0,0,0.05), 0 0 0 1px rgba(255,255,255,0.3) inset'
                }}>
                <div className="flex flex-col items-start px-8 space-y-6">
                  {navigationItems.map((section) => (
                    section === 'register' ? (
                      <motion.button
                        key={section}
                        onClick={() => handleNavigation(section)}
                        className="bg-[#FF8A00] text-white font-['OSK'] tracking-wider uppercase py-2.5 px-8 rounded-full w-full text-center transition-all hover:bg-[#FFB700]"
                        whileHover={{ scale: 1.03, boxShadow: '0 0 15px 2px rgba(255,138,0,0.3)' }}
                        whileTap={{ scale: 0.98 }}
                      >
                        Join Us for free
                      </motion.button>
                    ) : (
                      <button
                        key={section}
                        onClick={() => handleNavigation(section)}
                        className="text-gray-800 text-lg font-['OSK'] tracking-wider uppercase py-1 text-left transition-all hover:text-[#FF8A00]"
                      >
                        {section}
                      </button>
                    )
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default Navbar;
