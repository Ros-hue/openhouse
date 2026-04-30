'use client';
 
import Image from 'next/image';
import { motion } from 'framer-motion';
import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';

 
const foodStallImages = [
  {
src: '/food stall/food stall (1).webp',
    alt: 'Food stall moment one',
    height: 'h-[260px] sm:h-[340px] lg:h-[420px]',
  },
  {
src: '/food stall/food stall (2).webp',
    alt: 'Food stall moment two',
    height: 'h-[360px] sm:h-[420px] lg:h-[520px]',
  },
  {
src: '/food stall/food stall (3).webp',
    alt: 'Food stall moment three',
    height: 'h-[300px] sm:h-[360px] lg:h-[460px]',
  },
  {
src: '/food stall/food stall (4).webp',
    alt: 'Food stall moment four',
    height: 'h-[340px] sm:h-[400px] lg:h-[500px]',
  },
  {
src: '/food stall/food stall (5).webp',
    alt: 'Food stall moment five',
    height: 'h-[260px] sm:h-[320px] lg:h-[410px]',
  },
  {
src: '/food stall/food stall (6).webp',
    alt: 'Food stall moment six',
    height: 'h-[380px] sm:h-[440px] lg:h-[540px]',
  },
  {
src: '/food stall/food stall (7).webp',
    alt: 'Food stall moment seven',
    height: 'h-[300px] sm:h-[380px] lg:h-[480px]',
  },
  {
src: '/food stall/food stall (8).webp',
    alt: 'Food stall moment eight',
    height: 'h-[320px] sm:h-[400px] lg:h-[510px]',
  },
  {
src: '/food stall/food stall (9).webp',
    alt: 'Food stall moment nine',
    height: 'h-[280px] sm:h-[350px] lg:h-[440px]',
  },
  {
src: '/food stall/food stall (10).webp',
    alt: 'Food stall moment ten',
    height: 'h-[350px] sm:h-[410px] lg:h-[530px]',
  },
  {
src: '/food stall/food stall (11).webp',
    alt: 'Food stall moment eleven',
    height: 'h-[290px] sm:h-[360px] lg:h-[450px]',
  },
  {
src: '/food stall/food stall (12).webp',
    alt: 'Food stall moment twelve',
    height: 'h-[330px] sm:h-[390px] lg:h-[490px]',
  },
];
 
export default function FoodStallGalleryPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#FAF9F6] text-black selection:bg-black selection:text-[#FF8A00]">
      <Navbar />
 
      <section className="relative isolate min-h-screen overflow-hidden bg-[#FAF9F6] pt-24">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,138,0,0.22),transparent_24%),radial-gradient(circle_at_85%_20%,rgba(0,0,0,0.08),transparent_24%),linear-gradient(180deg,rgba(250,249,246,0.6)_0%,rgba(250,249,246,0.96)_72%,#FAF9F6_100%)]" />
          <div className="absolute left-[-8%] top-20 h-56 w-56 rounded-full bg-[#FF8A00]/25 blur-3xl sm:h-72 sm:w-72" />
          <div className="absolute bottom-12 right-[-8%] h-64 w-64 rounded-full bg-black/8 blur-3xl sm:h-80 sm:w-80" />
        </div>
 
        <div className="pointer-events-none absolute top-6 left-0 w-full overflow-hidden whitespace-nowrap opacity-[0.035] select-none">
          <p className="font-['BS'] text-[22vw] uppercase leading-none text-black">
            Food Stall Food Stall Food Stall
          </p>
        </div>
 
        <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-7xl flex-col justify-center px-4 pb-16 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="grid items-end gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(280px,0.6fr)]"
          >
            <div className="max-w-4xl">
              <div className="mb-6 flex items-center gap-4">
                <div className="h-px w-14 bg-black/20" />
                <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-black/45">
                  <br />
                  <br />
                </span>
              </div>
 
              <h1 className="font-['Archivo_Black'] text-[72px] font-bold uppercase leading-[0.82] tracking-tight sm:text-[72px] md:text-[72px] lg:text-[72px]">
                <span className="text-black">Food</span>
                <span className="block text-[#FF8A00]">Stall</span>
                <span className="block pt-3 text-[0.62em] text-black/70">Gallery</span>
              </h1>
            </div>
 
            <p className="max-w-md font-['OSK'] text-base uppercase leading-7 tracking-[0.18em] text-zinc-600 sm:text-lg">
              Taste the flavors of creativity at Cambridge Open House 2026
            </p>
          </motion.div>
 
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.15, ease: 'easeOut' }}
            className="mt-14 grid gap-8 lg:grid-cols-[minmax(0,0.7fr)_minmax(0,1fr)] lg:items-end"
          >
            <div className="rounded-4xl border border-black/10 bg-white/60 p-6 backdrop-blur-sm sm:p-8">
              <p className="font-mono text-[10px] uppercase tracking-[0.35em] text-black/35">
                Delicious offerings
              </p>
              <p className="mt-3 max-w-md text-sm text-zinc-600 sm:text-base">
                Experience a variety of cuisines from our food stalls.
              </p>
            </div>
 
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.25, ease: 'easeOut' }}
              className="relative overflow-hidden rounded-[2.5rem] bg-[#f4b31b] p-6 text-white shadow-[0_30px_100px_rgba(255,138,0,0.18)] sm:p-8"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.24),transparent_34%)]" />
              <div className="relative flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.35em] text-white/75">
                    Stall Count
                  </p>
                  <p className="mt-3 font-['BS'] text-5xl uppercase leading-none text-white sm:text-6xl">
                    {String(foodStallImages.length).padStart(2, '0')}
                  </p>
                </div>
                <div className="font-['OSK'] text-[11px] uppercase tracking-[0.28em] text-white/62">
                  Selected Frames
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
 
      {/* Zero-gap masonry gallery */}
      <section className="relative z-10 w-full pb-24 lg:pb-28">
<motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.2 }}
          className="columns-1 sm:columns-2 lg:columns-3"
          style={{ columnGap: 0 }}
        >
{foodStallImages.map((image, index) => (
            <motion.div
              key={image.src}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: index * 0.06, ease: 'easeOut' }}
              viewport={{ once: true, amount: 0.15 }}
              className="group relative break-inside-avoid"
              style={{ marginBottom: 0 }}
            >
<div
                className={`relative overflow-hidden ${image.height}`}
                style={{ display: 'block', lineHeight: 0 }}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.025]"
                />
<div className="absolute inset-0 bg-gradient-to-t from-black/28 via-transparent to-transparent opacity-80" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>
 
      <section className="relative z-10 mx-auto w-full max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 rounded-4xl border border-black/10 bg-black/90 p-6 lg:grid-cols-[0.9fr_1.1fr] lg:p-10 overflow-hidden">
          {/* LEFT CONTENT */}
          <div className="order-2 flex flex-col items-start justify-center lg:order-1">
            <p className="font-['OSK'] text-[10px] uppercase tracking-[0.34em] text-white/70">
              Food Stall
            </p>
            <h2 className="mt-4 font-['Archivo_Black'] text-[72px] uppercase text-white leading-tight animate-float">
              Setup your food stall for COH 2026
            </h2>
            <p className="mt-5 max-w-xl font-['OSK'] text-sm uppercase leading-7 tracking-[0.16em] text-white/80 sm:text-base">
              Serve your delicious creations to thousands of visitors at Cambridge Open House 2026.
            </p>
          </div>
          {/* RIGHT BUTTON */}
          <div className="order-1 flex justify-center lg:order-2">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSccWOwN0a5mWGfQ2dNZaaeAz3a4aQ-mqSr_Su2cHuO_EXpiSQ/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-flex min-w-55 items-center justify-center rounded-full border border-[#ffd2a3]/30 bg-[#FF8A00] px-8 py-4 font-['OSK'] text-sm uppercase tracking-[0.32em] text-black shadow-[0_18px_45px_rgba(255,138,0,0.25)] transition-all duration-300 hover:scale-105 hover:bg-[#FF8A00]/90 active:scale-95"
            >
              Register Now
              <span className="absolute inset-0 rounded-full bg-[#FF8A00] opacity-0 blur-xl transition-opacity duration-500 hover:opacity-40"></span>
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
