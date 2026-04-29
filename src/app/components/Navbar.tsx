// 'use client';

// import React from 'react';
// import Image from 'next/image';

// const Navbar: React.FC = () => {
//   const scrollToRegistration = () => {
//     const element = document.getElementById('registration-section');
//     if (element) {
//       const navbarHeight = 80;
//       const elementPosition = element.getBoundingClientRect().top;
//       const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

//       window.scrollTo({
//         top: offsetPosition,
//         behavior: 'smooth'
//       });
//     }
//   };

//   return (
//     <div className="w-fit max-w-[92vw] fixed top-4 left-1/2 transform -translate-x-1/2 z-50 backdrop-blur-lg rounded-full shadow-md">
//       <div className="py-2 px-4 md:px-6 flex justify-between items-center gap-6 md:gap-8">
//         <div className="flex items-center">
//           <a href="https://engg.cambridge.edu.in/" target="_blank" rel="noopener noreferrer">
//             <Image
//               src="/cit_navlogo.webp"
//               alt="CIT Logo"
//               width={110}
//               height={45}
//               className="object-contain"
//             />
//           </a>
//         </div>

//         <button
//           onClick={scrollToRegistration}
//           className="font-['OSK'] tracking-wider uppercase text-black hover:text-gray-600 transition-colors duration-200 whitespace-nowrap bg-transparent"
//         >
//           Register
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Navbar;





'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
// import Link from 'next/link';
import gsap from 'gsap';
import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';
import { scrollToRegistrationSection, getRegistrationHash } from '@/lib/scrollToRegistration';

const Navbar: React.FC = () => {
  const navRef = useRef<HTMLDivElement>(null);
  const logoWrapper = useRef<HTMLDivElement>(null);

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

  const pathname = usePathname();
  const router = useRouter();

  const scrollToRegistration = () => {
    if (pathname !== '/') {
      router.push(`/${getRegistrationHash()}`);
      return;
    }
    scrollToRegistrationSection();
  };

  return (
    <nav className="fixed top-6 left-0 w-full flex justify-center z-[100] px-4 pointer-events-none">
      <div 
        ref={navRef}
        className="pointer-events-auto flex items-center p-1.5 gap-2 bg-white/10 dark:bg-zinc-900/10 backdrop-blur-3xl border border-white/20 rounded-2xl shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)]"
      >
        {/* Module 1: Logo (High Contrast) */}
        <div 
          ref={logoWrapper}
          className="flex items-center justify-center bg-white px-3 py-2 rounded-xl shadow-sm shrink-0"
        >
          <a href="https://engg.cambridge.edu.in/" target="_blank" rel="noopener noreferrer" className="block leading-[0]">
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
        <Link
          href="/flea-market/gallery"
          className="flex items-center gap-3 h-11 px-6 rounded-xl bg-zinc-950 dark:bg-white text-white dark:text-black hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 shadow-xl"
        >
          <span className="font-mono text-[10px] font-bold uppercase tracking-[0.25em]">
            Flea Market
          </span>
        </Link>

        {/* Module 3: Secondary Action (Sponsors - Now High Visibility) */}
        {/* <Link 
          href="/sponsors" 
          className="flex items-center px-5 h-11 rounded-xl bg-white/20 dark:bg-white/10 border border-white/10 backdrop-blur-md transition-all duration-300 group hover:bg-white/30 dark:hover:bg-white/20"
        >
          <span className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-900 dark:text-white">
            Sponsors
          </span>
        </Link> */}
      </div>
    </nav>
  );
};

export default Navbar;
