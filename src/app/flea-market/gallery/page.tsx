'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';

const fleaMarketImages = [
  '/flea market/Copy of _JEE0475.webp',
  '/flea market/Copy of _JEE0741.webp',
  '/flea market/Copy of 20250420_140135.webp',
  '/flea market/Copy of Copy of IMG_6074 - Copy.webp',
  '/flea market/Copy of Copy of IMG_9404.webp',
  '/flea market/Copy of Copy of IMG_9536.webp',
  '/flea market/Copy of IMG_6089 (2).webp',
  '/flea market/Copy of IMG_7208.webp',
  '/flea market/Copy of IMG_9234 (2).webp',
  '/flea market/Copy of IMG_9508 (1).webp',
  '/flea market/Copy of IMG_9527 - Copy.webp',
 
  '/flea market/Copy of RY3A9419 - Copy.webp',
  '/flea market/Copy of RY3A9429 (1).webp',
  '/flea market/Copy of RY3A9556 (1).webp',
];

const sectionVariants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: 'easeOut' },
  },
};

const gridVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.04,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 28, scale: 0.97 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function FleaMarketGalleryPage() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  useEffect(() => {
    if (activeIndex === null) {
      document.body.style.overflow = '';
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setActiveIndex(null);
      }

      if (event.key === 'ArrowRight') {
        setActiveIndex((current) =>
          current === null ? 0 : (current + 1) % fleaMarketImages.length,
        );
      }

      if (event.key === 'ArrowLeft') {
        setActiveIndex((current) =>
          current === null
            ? fleaMarketImages.length - 1
            : (current - 1 + fleaMarketImages.length) % fleaMarketImages.length,
        );
      }
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeIndex]);

  const showPrevious = () => {
    setActiveIndex((current) =>
      current === null ? fleaMarketImages.length - 1 : (current - 1 + fleaMarketImages.length) % fleaMarketImages.length,
    );
  };

  const showNext = () => {
    setActiveIndex((current) =>
      current === null ? 0 : (current + 1) % fleaMarketImages.length,
    );
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#0a0a0a] text-white">
      <Navbar />

      <section className="relative z-10 mx-auto flex min-h-[78vh] w-full max-w-7xl flex-col justify-end px-4 pb-12 pt-32 sm:px-6 lg:px-8">
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="mb-8 h-px w-full max-w-sm origin-left bg-gradient-to-r from-[#FF8A00] via-white/30 to-transparent"
        />
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          whileHover={{ scale: 1.03 }}
          className="mb-5 inline-flex w-fit rounded-full border border-white/10 bg-white/8 px-4 py-2 font-['OSK'] text-[10px] uppercase tracking-[0.34em] text-white/70 backdrop-blur-sm"
        >
          Flea Market
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.08 }}
          className="max-w-4xl font-['BS'] text-5xl uppercase leading-[0.9] text-[#FF8A00] sm:text-6xl lg:text-8xl"
        >
          Magical Moments
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.16 }}
          className="mt-6 max-w-2xl font-['OSK'] text-sm uppercase leading-7 tracking-[0.18em] text-white/60 sm:text-base"
        >
          A simple visual collection of every flea market frame from the event.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.22 }}
          className="mt-10 flex flex-wrap gap-4"
        >
          <motion.div
            animate={{ y: [0, -3, 0] }}
            transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut' }}
            className="rounded-full border border-white/10 bg-white/6 px-4 py-2 font-['OSK'] text-[10px] uppercase tracking-[0.28em] text-white/62"
          >
            20 captured moments
          </motion.div>
          <motion.div
            animate={{ y: [0, -3, 0] }}
            transition={{ duration: 2.8, delay: 0.3, repeat: Infinity, ease: 'easeInOut' }}
            className="rounded-full border border-white/10 bg-white/6 px-4 py-2 font-['OSK'] text-[10px] uppercase tracking-[0.28em] text-white/62"
          >
            simple animated gallery
          </motion.div>
        </motion.div>
      </section>

      <motion.section
        variants={sectionVariants}
        initial="hidden"
        animate="show"
        className="relative z-10 mx-auto w-full max-w-7xl px-4 pb-24 sm:px-6 lg:px-8"
      >
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.15 }}
          className="mb-10 flex items-end justify-between gap-4 border-b border-white/10 pb-5"
        >
          <div>
            <p className="font-['OSK'] text-[10px] uppercase tracking-[0.34em] text-white/50">
              Gallery Archive
            </p>
            <h2 className="mt-3 font-['BS'] text-3xl uppercase text-white sm:text-4xl">
              All Flea Market Photos
            </h2>
          </div>
          <motion.div
            animate={{ boxShadow: ['0 0 0 rgba(255,138,0,0)', '0 0 18px rgba(255,138,0,0.12)', '0 0 0 rgba(255,138,0,0)'] }}
            transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut' }}
            className="rounded-full border border-white/10 bg-white/6 px-4 py-2 font-['OSK'] text-[10px] uppercase tracking-[0.3em] text-white/60"
          >
            {fleaMarketImages.length} Photos
          </motion.div>
        </motion.div>

        <motion.div
          variants={gridVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.12 }}
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {fleaMarketImages.map((src, index) => (
            <motion.article
              key={src}
              variants={cardVariants}
              whileHover={{ y: -4, scale: 1.008 }}
              transition={{ duration: 0.28, ease: 'easeOut' }}
              className="group cursor-pointer overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/6 shadow-[0_18px_40px_rgba(0,0,0,0.22)] transition-transform duration-300 will-change-transform"
              style={{ contentVisibility: 'auto', containIntrinsicSize: '420px 520px' }}
              onClick={() => setActiveIndex(index)}
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <motion.div
                  initial={{ scale: 1.06 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.08 + index * 0.03 }}
                  className="absolute inset-0 will-change-transform"
                >
                  <Image
                    src={src}
                    alt={`Flea market photo ${index + 1}`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    quality={60}
                    priority={index < 2}
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.025]"
                    loading={index < 2 ? 'eager' : 'lazy'}
                  />
                </motion.div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent opacity-80" />
                <div className="absolute inset-0 bg-[linear-gradient(120deg,transparent_10%,rgba(255,255,255,0.16)_45%,transparent_80%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </div>
              <div className="flex items-center justify-between gap-3 p-4">
                <p className="font-['OSK'] text-[10px] uppercase tracking-[0.24em] text-white/55">
                  Flea Market Gallery
                </p>
                <motion.div
                  animate={{ scale: [1, 1.18, 1], opacity: [0.7, 1, 0.7] }}
                  transition={{ duration: 2.2, delay: index * 0.05, repeat: Infinity, ease: 'easeInOut' }}
                  className="h-2.5 w-2.5 rounded-full bg-[#FF8A00]"
                />
              </div>
            </motion.article>
          ))}
        </motion.div>
      </motion.section>

      {activeIndex !== null ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/88 p-4 backdrop-blur-md"
          onClick={() => setActiveIndex(null)}
        >
          <button
            type="button"
            onClick={() => setActiveIndex(null)}
            aria-label="Close lightbox"
            title="Close lightbox"
            className="absolute right-4 top-4 rounded-full border border-white/15 bg-white/10 p-3 text-white transition hover:bg-white/20 sm:right-8 sm:top-8"
          >
            <X className="h-5 w-5" />
          </button>

          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              showPrevious();
            }}
            aria-label="Show previous image"
            title="Show previous image"
            className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full border border-white/15 bg-white/10 p-3 text-white transition hover:bg-white/20 sm:left-8"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              showNext();
            }}
            aria-label="Show next image"
            title="Show next image"
            className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full border border-white/15 bg-white/10 p-3 text-white transition hover:bg-white/20 sm:right-8"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          <motion.div
            key={fleaMarketImages[activeIndex]}
            initial={{ opacity: 0, scale: 0.96, y: 18 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.28, ease: 'easeOut' }}
            className="relative h-[70vh] w-full max-w-5xl overflow-hidden rounded-[2rem] border border-white/10 bg-black/40 shadow-[0_30px_120px_rgba(0,0,0,0.45)]"
            onClick={(event) => event.stopPropagation()}
          >
            <Image
              src={fleaMarketImages[activeIndex]}
              alt={`Flea market photo ${activeIndex + 1}`}
              fill
              priority
              sizes="100vw"
              className="object-contain"
            />
          </motion.div>
        </motion.div>
      ) : null}

      <Footer />
    </main>
  );
}
