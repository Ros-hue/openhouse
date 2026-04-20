'use client';

import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useMemo, useState } from 'react';
import type { GalleryItem } from '@/lib/fleaMarketGallery';

type GalleryHeroProps = {
  items: GalleryItem[];
};

export default function GalleryHero({ items }: GalleryHeroProps) {
  const heroSlides = useMemo(() => items.slice(0, 5), [items]);
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % heroSlides.length);
    }, 4200);

    return () => window.clearInterval(interval);
  }, [heroSlides.length]);

  return (
    <section className="relative min-h-screen overflow-hidden border-b border-white/10">
      <div className="absolute inset-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={heroSlides[activeSlide].id}
            className="absolute inset-0"
            initial={{ opacity: 0, scale: 1.08 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.04 }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
          >
            <Image
              src={heroSlides[activeSlide].src}
              alt={heroSlides[activeSlide].title}
              fill
              priority
              className="object-cover"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,8,8,0.2),rgba(8,8,8,0.72)_55%,rgba(8,8,8,0.95))]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,138,0,0.35),transparent_28%),radial-gradient(circle_at_80%_25%,rgba(34,211,238,0.26),transparent_24%),radial-gradient(circle_at_55%_80%,rgba(255,77,109,0.24),transparent_20%)]" />
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-7xl flex-col justify-end px-4 pb-12 pt-32 sm:px-6 lg:px-8 lg:pb-16">
        <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
          <div className="max-w-3xl">
            <motion.span
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="mb-5 inline-flex rounded-full border border-white/12 bg-white/8 px-4 py-2 font-['OSK'] text-[10px] uppercase tracking-[0.34em] text-white/75 backdrop-blur-md"
            >
              Flea Market Gallery
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 0.08 }}
              className="font-['BS'] text-5xl uppercase leading-[0.9] text-[#FF8A00] sm:text-6xl lg:text-8xl"
            >
              Magical Moments
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 0.16 }}
              className="mt-6 max-w-2xl font-['OSK'] text-sm uppercase leading-7 tracking-[0.22em] text-white/72 sm:text-base"
            >
              A cinematic walk through the flea market experience: color, craft, music,
              food, and the people who gave it pulse.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.85, delay: 0.24 }}
            className="justify-self-end rounded-[2rem] border border-white/12 bg-white/8 p-5 backdrop-blur-xl"
          >
            <div className="mb-4 flex gap-2">
              {heroSlides.map((item, index) => (
                <button
                  key={item.id}
                  type="button"
                  aria-label={`Show slide ${index + 1}`}
                  onClick={() => setActiveSlide(index)}
                  className={`h-2 rounded-full transition-all ${
                    activeSlide === index ? 'w-10 bg-[#FF8A00]' : 'w-2 bg-white/35'
                  }`}
                />
              ))}
            </div>
            <p className="font-['OSK'] text-[11px] uppercase tracking-[0.24em] text-white/68">
              Scroll to explore curated moments from the market floor.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: [0, 8, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, repeatType: 'loop', delay: 0.5 }}
          className="mt-12 flex items-center gap-3 text-white/56"
        >
          <span className="font-['OSK'] text-[10px] uppercase tracking-[0.34em]">Scroll</span>
          <div className="relative h-10 w-6 rounded-full border border-white/20">
            <div className="absolute left-1/2 top-2 h-2 w-2 -translate-x-1/2 rounded-full bg-[#FF8A00]" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
