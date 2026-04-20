'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';
import RegisterButton from '@/app/components/RegisterButton';

const fleaMarketImages = [
  '/flea market/collage.jpeg',
 
 
];

const sectionVariants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: 'easeOut' },
  },
};

export default function FleaMarketGalleryPage() {
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
        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.08 }}
          className="max-w-4xl font-['BS'] text-5xl uppercase leading-[0.9] text-[#FF8A00] sm:text-6xl lg:text-8xl"
        >
          THE FLEA MARKET 
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.16 }}
          className="mt-6 max-w-2xl font-['OSK'] text-sm uppercase leading-7 tracking-[0.18em] text-white/60 sm:text-base"
        >
          Your Creativity should not be limited to those 4 walls, Lets it shine at Cambridge open House 
        </motion.p>
        
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
              Last Year Flea Market
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
      </motion.section>
        <section className="relative z-10 mx-auto w-full max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
         <div className="order-1 lg:order-2">
            <div className="relative mx-auto overflow-hidden rounded-[1.75rem] border border-white/10 bg-black/20">
              <div className="relative aspect-[16/11] w-full">
              <Image
    src={fleaMarketImages[0]}
    alt="Flea market collage"
    fill
    priority
    sizes="(max-width: 1024px) 100vw, 60vw"
    className="object-contain object-center"
  />
              </div>
            </div>
          </div>
      </section>

      <section className="relative z-10 mx-auto w-full max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 lg:grid-cols-[0.9fr_1.1fr] lg:p-10">
          <div className="order-2 flex flex-col items-start justify-center lg:order-1">
            <p className="font-['OSK'] text-[10px] uppercase tracking-[0.34em] text-white/50">
              Flea Market
            </p>
            <h2 className="mt-4 font-['BS'] text-3xl uppercase text-white sm:text-4xl lg:text-5xl">
              Setup your flea market for COH 2026
            </h2>
            <p className="mt-5 max-w-xl font-['OSK'] text-sm uppercase leading-7 tracking-[0.16em] text-white/65 sm:text-base">
              Showcase your ideas, products, and creativity at Cambridge Open House 2026.
            </p>
          </div>

         <section className="relative z-10 mx-auto w-full max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="flex justify-center">
          <RegisterButton
            disableAnimation
            className="inline-flex min-w-[220px] items-center justify-center rounded-full border border-[#ffd2a3]/30 bg-[#FF8A00] px-8 py-4 font-['OSK'] text-sm uppercase tracking-[0.32em] text-black shadow-[0_18px_45px_rgba(255,138,0,0.25)]"
          >
            Register Now
          </RegisterButton>
        </div>
      </section>
        </div>
      </section>

      <Footer />
    </main>
  );
}
