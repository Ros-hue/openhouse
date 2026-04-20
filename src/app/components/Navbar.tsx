'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import RegisterButton from './RegisterButton';

const Navbar: React.FC = () => {
  const pathname = usePathname();
  const isGalleryPage = pathname === '/flea-market/gallery';

  const navShellClass = isGalleryPage
    ? 'border border-white/12 bg-black/35 shadow-[0_16px_60px_rgba(0,0,0,0.3)]'
    : 'shadow-md';

  const navTextClass = isGalleryPage
    ? "font-['OSK'] tracking-wider uppercase text-white hover:text-[#FF8A00] transition-colors duration-200 whitespace-nowrap bg-transparent"
    : "font-['OSK'] tracking-wider uppercase text-black hover:text-gray-600 transition-colors duration-200 whitespace-nowrap bg-transparent";

  return (
    <div className={`w-fit max-w-[92vw] fixed top-4 left-1/2 transform -translate-x-1/2 z-50 rounded-full backdrop-blur-lg ${navShellClass}`}>
      <div className="py-2 px-4 md:px-6 flex justify-between items-center gap-6 md:gap-8">
        <div className="flex items-center">
          <a
            href="https://engg.cambridge.edu.in/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit Cambridge Institute of Technology website"
            title="Cambridge Institute of Technology"
          >
            <Image
              src="/cit_navlogo.webp"
              alt="CIT Logo"
              width={110}
              height={45}
              className="object-contain"
            />
          </a>
        </div>

        <RegisterButton className={navTextClass} />
        <Link href="/flea-market/gallery" className={navTextClass}>
          Flea Market
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
