'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import RegisterButton from './RegisterButton';

import gsap from 'gsap';

const Navbar: React.FC = () => {
  const navRef = useRef<HTMLDivElement>(null);
  const logoWrapper = useRef<HTMLDivElement>(null);

  const pathname = usePathname();
  const isGalleryPage = pathname === '/flea-market/gallery';

  const navShellClass = isGalleryPage
    ? 'border border-white/12 bg-black/35 shadow-[0_16px_60px_rgba(0,0,0,0.3)]'
    : 'shadow-md';

  const navTextClass = isGalleryPage
    ? "font-['OSK'] tracking-wider uppercase text-white hover:text-[#FF8A00] transition-colors duration-200 whitespace-nowrap bg-transparent"
    : "font-['OSK'] tracking-wider uppercase text-black hover:text-gray-600 transition-colors duration-200 whitespace-nowrap bg-transparent";

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'expo.out' } });
      
      tl.fromTo(navRef.current, 
        { y: -40, opacity: 0 }, 
        { y: 0, opacity: 1, duration: 1.5, delay: 0.3 }
      );
      
      tl.from(logoWrapper.current, {
        scale: 0.8,
        opacity: 0,
        duration: 1,
      }, "-=1");
    });
    return () => ctx.revert();
  }, []);

  const scrollToRegistration = () => {
    const element = document.getElementById('registration-section');
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top: elementPosition, behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-6 left-0 w-full flex justify-center z-[100] px-4 pointer-events-none">
      <div 
        ref={navRef}
        className={`pointer-events-auto flex items-center p-1.5 gap-2 backdrop-blur-3xl rounded-2xl ${navShellClass}`}
      >
        {/* Module 1: Logo (High Contrast) */}
        <div 
          ref={logoWrapper}
          className="flex items-center justify-center bg-white px-3 py-2 rounded-xl shadow-sm shrink-0"
        >
          <a 
            href="https://engg.cambridge.edu.in/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="block leading-[0]"
            aria-label="Visit Cambridge Institute of Technology website"
            title="Cambridge Institute of Technology"
          >
            <Image
              src="/cit_navlogo.webp"
              alt="CIT Logo"
              width={85}
              height={34}
              priority
              className="object-contain"
            />
          </a>
        </div>

        {/* Module 2: Primary Action (Register) */}
        <button
          onClick={scrollToRegistration}
          className="flex items-center gap-3 h-11 px-6 rounded-xl bg-zinc-950 dark:bg-white text-white dark:text-black hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 shadow-xl"
        >
          <span className="font-mono text-[10px] font-bold uppercase tracking-[0.25em]">
            Register
          </span>
        </button>

        </div>
    </nav>
  );
};

export default Navbar;

