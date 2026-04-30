'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';
import { scrollToRegistrationSection, getRegistrationHash } from '@/lib/scrollToRegistration';

// Ripple effect component
const RippleButton: React.FC<{
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  asLink?: boolean;
  href?: string;
}> = ({ children, onClick, className = '', asLink = false, href }) => {
  const [ripples, setRipples] = useState<{ x: number; y: number; id: number }[]>([]);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
    const button = e.currentTarget;
    const rect = button.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const newRipple = { x, y, id: Date.now() };
    setRipples((prev) => [...prev, newRipple]);

    setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r.id !== newRipple.id));
    }, 600);

    if (onClick) onClick();
  };

  const buttonContent = (
    <button
      onClick={handleClick}
      className={`relative overflow-hidden ${className}`}
    >
      {/* Ripple effects */}
      {ripples.map((ripple) => (
        <span
          key={ripple.id}
          className="absolute bg-white/40 rounded-full animate-ripple pointer-events-none"
          style={{
            left: ripple.x,
            top: ripple.y,
            width: '20px',
            height: '20px',
            transform: 'translate(-50%, -50%)',
          }}
        />
      ))}
      {children}
    </button>
  );

  if (asLink && href) {
    return (
      <Link href={href} onClick={onClick} className={`relative overflow-hidden ${className}`}>
        {children}
      </Link>
    );
  }

  return buttonContent;
};

const Navbar: React.FC = () => {
  const navRef = useRef<HTMLDivElement>(null);
  const logoWrapper = useRef<HTMLDivElement>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

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
    return () => ctx.revert()
  }, []);

  // Check for mobile viewport
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (mobileMenuOpen && navRef.current && !navRef.current.contains(e.target as Node)) {
        setMobileMenuOpen(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [mobileMenuOpen]);

  const pathname = usePathname();
  const router = useRouter();

  const scrollToRegistration = () => {
    setMobileMenuOpen(false);
    if (pathname !== '/') {
      router.push(`/${getRegistrationHash()}`);
      return;
    }
    scrollToRegistrationSection();
  };

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  const NavLinkButton: React.FC<{ href: string; children: React.ReactNode; onClick?: () => void }> = ({
    href,
    children,
    onClick,
  }) => (
    <RippleButton
      asLink
      href={href}
      onClick={onClick}
      className="flex items-center justify-center gap-3 h-12 md:h-11 px-6 rounded-xl bg-zinc-950 dark:bg-white text-white dark:text-black hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-zinc-950/20 dark:hover:shadow-white/20"
    >
      <span className="font-mono text-[10px] font-bold uppercase tracking-[0.25em]">
        {children}
      </span>
    </RippleButton>
  );

  // Mobile menu items
  const mobileNavItems = [
    { label: 'Register', action: scrollToRegistration },
    { label: 'Food Stall', href: '/food-stall' },
    { label: 'Flea Market', href: '/flea-market/gallery' },
  ];

return (
    <nav className="fixed top-4 md:top-6 left-0 w-full flex justify-center z-50 px-2 md:px-4 pointer-events-none">
      <div 
        ref={navRef}
        className="pointer-events-auto flex items-center p-1.5 gap-2 bg-white/10 dark:bg-zinc-900/10 backdrop-blur-3xl border border-white/20 rounded-2xl shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)]"
      >
        {/* Logo - Always visible */}
        <div 
          ref={logoWrapper}
          className="flex items-center justify-center bg-white px-2 md:px-3 py-1.5 md:py-2 rounded-xl shadow-sm shrink-0"
        >
          <a href="https://engg.cambridge.edu.in/" target="_blank" rel="noopener noreferrer" className="block leading-none" title="Cambridge Institute of Technology">
            <Image
              src="/cit_navlogo.webp"
              alt="CIT Logo"
              width={70}
              height={28}
              priority
              className="object-contain"
            />
          </a>
        </div>

        {/* Desktop Navigation - Hidden on mobile */}
        <div className="hidden md:flex items-center gap-2">
          <RippleButton
            onClick={scrollToRegistration}
            className="flex items-center gap-3 h-11 px-6 rounded-xl bg-zinc-950 dark:bg-white text-white dark:text-black hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-zinc-950/20 dark:hover:shadow-white/20"
          >
            <span className="font-mono text-[10px] font-bold uppercase tracking-[0.25em]">
              Register
            </span>
          </RippleButton>
          
          <NavLinkButton href="/food-stall">
            Food Stall
          </NavLinkButton>
          
          <NavLinkButton href="/flea-market/gallery">
            Flea Market
          </NavLinkButton>
        </div>

        {/* Mobile Hamburger Menu - Visible only on mobile */}
        {isMobile && (
          <div className="flex items-center">
            {/* Hamburger Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setMobileMenuOpen(!mobileMenuOpen);
              }}
              className="relative flex items-center justify-center w-12 h-11 rounded-xl bg-zinc-950 dark:bg-white text-white dark:text-black hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 shadow-xl"
              aria-label="Toggle menu"
            >
              {/* Hamburger Icon / X Animation */}
              <div className="relative w-5 h-4">
                <span 
                  className={`absolute left-0 w-5 h-0.5 bg-current transition-all duration-300 ${mobileMenuOpen ? 'top-1.5 rotate-45' : 'top-0'}`}
                />
                <span 
                  className={`absolute left-0 top-1/2 -translate-y-1/2 w-5 h-0.5 bg-current transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}
                />
                <span 
                  className={`absolute left-0 w-5 h-0.5 bg-current transition-all duration-300 ${mobileMenuOpen ? 'top-1.5 -rotate-45' : 'bottom-0'}`}
                />
              </div>
            </button>

{/* Mobile Dropdown Menu */}
            <div 
              className={`absolute top-full right-0 mt-2 mr-2 w-56 overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                mobileMenuOpen 
                  ? 'opacity-100 translate-y-0 scale-100' 
                  : 'opacity-0 -translate-y-2.5 scale-95 pointer-events-none'
              }`}
            >
              <div className="bg-zinc-950 dark:bg-white rounded-2xl shadow-2xl overflow-hidden border border-white/10">
                {mobileNavItems.map((item) => (
                  <div key={item.label}>
                    {item.action ? (
                      <RippleButton
                        onClick={item.action}
                        className="w-full flex items-center justify-start gap-3 h-14 px-6 text-white dark:text-black hover:bg-white/10 dark:hover:bg-black/10 transition-all duration-300 border-b border-white/5 last:border-b-0"
                      >
                        <span className="font-mono text-xs font-bold uppercase tracking-[0.2em]">
                          {item.label}
                        </span>
                      </RippleButton>
                    ) : (
                      <Link
                        href={item.href!}
                        onClick={handleLinkClick}
                        className="w-full flex items-center justify-start gap-3 h-14 px-6 text-white dark:text-black hover:bg-white/10 dark:hover:bg-black/10 transition-all duration-300 border-b border-white/5 last:border-b-0"
                      >
                        <span className="font-mono text-xs font-bold uppercase tracking-[0.2em]">
                          {item.label}
                        </span>
                      </Link>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
