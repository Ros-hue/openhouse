'use client';
 
import Image from 'next/image';
import { motion } from 'framer-motion';
import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';

 
const fleaMarketImages = [
  {
    src: '/flea market/Copy of _JEE0475.webp',
    alt: 'Visitors exploring the flea market',
    height: 'h-[260px] sm:h-[340px] lg:h-[420px]',
  },
  {
    src: '/flea market/WhatsApp Image 2026-04-20 at 5.12.50 PM.jpeg',
    alt: 'Flea market collage moment one',
    height: 'h-[360px] sm:h-[420px] lg:h-[520px]',
  },
  {
    src: '/flea market/WhatsApp Image 2026-04-20 at 5.12.50 PM (1).jpeg',
    alt: 'Flea market collage moment two',
    height: 'h-[300px] sm:h-[360px] lg:h-[460px]',
  },
  {
    src: '/flea market/WhatsApp Image 2026-04-20 at 5.12.50 PM (2).jpeg',
    alt: 'Flea market collage moment three',
    height: 'h-[340px] sm:h-[400px] lg:h-[500px]',
  },
  {
    src: '/flea market/WhatsApp Image 2026-04-20 at 5.12.50 PM (3).jpeg',
    alt: 'Flea market collage moment four',
    height: 'h-[260px] sm:h-[320px] lg:h-[410px]',
  },
  {
    src: '/flea market/WhatsApp Image 2026-04-20 at 5.12.50 PM (4).jpeg',
    alt: 'Flea market collage moment five',
    height: 'h-[380px] sm:h-[440px] lg:h-[540px]',
  },
  {
    src: '/flea market/_JEE0473.webp',
    alt: 'Flea market moment',
    height: 'h-[300px] sm:h-[380px] lg:h-[480px]',
  },
  {
    src: '/flea market/Copy of _JEE0807.webp',
    alt: 'Flea market moment',
    height: 'h-[320px] sm:h-[400px] lg:h-[510px]',
  },
  {
    src: '/flea market/Copy of IMG_6618.webp',
    alt: 'Flea market moment',
    height: 'h-[280px] sm:h-[350px] lg:h-[440px]',
  },
  {
    src: '/flea market/Copy of IMG_6628.webp',
    alt: 'Flea market moment',
    height: 'h-[350px] sm:h-[410px] lg:h-[530px]',
  },
  {
    src: '/flea market/Copy of IMG_6867.webp',
    alt: 'Flea market moment',
    height: 'h-[290px] sm:h-[360px] lg:h-[450px]',
  },
  {
    src: '/flea market/Copy of IMG_9394.webp',
    alt: 'Flea market moment',
    height: 'h-[330px] sm:h-[390px] lg:h-[490px]',
  },
  {
    src: '/flea market/Copy of IMG_9489.webp',
    alt: 'Flea market moment',
    height: 'h-[310px] sm:h-[370px] lg:h-[470px]',
  },
  {
    src: '/flea market/IMG_6069.webp',
    alt: 'Flea market moment',
    height: 'h-[270px] sm:h-[340px] lg:h-[430px]',
  },
  {
    src: '/flea market/IMG_6075.webp',
    alt: 'Flea market moment',
    height: 'h-[340px] sm:h-[420px] lg:h-[520px]',
  },
  {
    src: '/flea market/IMG_6439.webp',
    alt: 'Flea market moment',
    height: 'h-[300px] sm:h-[360px] lg:h-[460px]',
  },
  {
    src: '/flea market/IMG_6444.webp',
    alt: 'Flea market moment',
    height: 'h-[360px] sm:h-[430px] lg:h-[540px]',
  },
  {
    src: '/flea market/IMG_6451.webp',
    alt: 'Flea market moment',
    height: 'h-[320px] sm:h-[380px] lg:h-[480px]',
  },
  {
    src: '/flea market/IMG_6474.webp',
    alt: 'Flea market moment',
    height: 'h-[280px] sm:h-[350px] lg:h-[440px]',
  },
  {
    src: '/flea market/IMG_6480.webp',
    alt: 'Flea market moment',
    height: 'h-[340px] sm:h-[410px] lg:h-[510px]',
  },
  {
    src: '/flea market/IMG_6485.webp',
    alt: 'Flea market moment',
    height: 'h-[290px] sm:h-[360px] lg:h-[450px]',
  },
  {
    src: '/flea market/IMG_6510.webp',
    alt: 'Flea market moment',
    height: 'h-[330px] sm:h-[390px] lg:h-[490px]',
  },
  {
    src: '/flea market/IMG_6515.webp',
    alt: 'Flea market moment',
    height: 'h-[310px] sm:h-[370px] lg:h-[470px]',
  },
  {
    src: '/flea market/IMG_6522.webp',
    alt: 'Flea market moment',
    height: 'h-[270px] sm:h-[340px] lg:h-[430px]',
  },
];
 
export default function FleaMarketGalleryPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#FAF9F6] text-black selection:bg-black selection:text-[#9EE666]">
      <Navbar />
 
      <section className="relative isolate min-h-screen overflow-hidden bg-[#FAF9F6] pt-24">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(158,230,102,0.22),transparent_24%),radial-gradient(circle_at_85%_20%,rgba(0,0,0,0.08),transparent_24%),linear-gradient(180deg,rgba(250,249,246,0.6)_0%,rgba(250,249,246,0.96)_72%,#FAF9F6_100%)]" />
          <div className="absolute left-[-8%] top-20 h-56 w-56 rounded-full bg-[#9EE666]/25 blur-3xl sm:h-72 sm:w-72" />
          <div className="absolute bottom-12 right-[-8%] h-64 w-64 rounded-full bg-black/8 blur-3xl sm:h-80 sm:w-80" />
        </div>
 
        <div className="pointer-events-none absolute top-6 left-0 w-full overflow-hidden whitespace-nowrap opacity-[0.035] select-none">
          <p className="font-['BS'] text-[22vw] uppercase leading-none text-black">
            Flea Market Flea Market Flea Market
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
                <span className="text-black">Flea</span>
                <span className="block text-[#67B044]">Market</span>
                <span className="block pt-3 text-[0.62em] text-black/70">Gallery</span>
              </h1>
            </div>
 
            <p className="max-w-md font-['OSK'] text-base uppercase leading-7 tracking-[0.18em] text-zinc-600 sm:text-lg">
              Your creativity should not be limited to those 4 walls, let it shine at cambridge open house
            </p>
          </motion.div>
 
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.15, ease: 'easeOut' }}
            className="mt-14 grid gap-8 lg:grid-cols-[minmax(0,0.7fr)_minmax(0,1fr)] lg:items-end"
          >
            <div className="rounded-[2rem] border border-black/10 bg-white/60 p-6 backdrop-blur-sm sm:p-8">
              <p className="font-mono text-[10px] uppercase tracking-[0.35em] text-black/35">
                Last year magic
              </p>
              <p className="mt-3 max-w-md text-sm text-zinc-600 sm:text-base">
                Kept simple and image-led, without framed cards or heavy gallery chrome.
              </p>
            </div>
 
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.25, ease: 'easeOut' }}
              className="relative overflow-hidden rounded-[2.5rem] bg-black p-6 text-white shadow-[0_30px_100px_rgba(0,0,0,0.18)] sm:p-8"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(158,230,102,0.24),transparent_34%)]" />
              <div className="relative flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.35em] text-white/45">
                    Archive Count
                  </p>
                  <p className="mt-3 font-['BS'] text-5xl uppercase leading-none text-[#9EE666] sm:text-6xl">
                    {String(fleaMarketImages.length).padStart(2, '0')}
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
 
      {/* Zero-gap masonry gallery — column-gap and margin both forced to 0 via inline style */}
      <section className="relative z-10 w-full pb-24 lg:pb-28">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.2 }}
          className="columns-1 sm:columns-2 lg:columns-3"
          style={{ columnGap: 0 }}
        >
          {fleaMarketImages.map((image, index) => (
            <motion.div
              key={image.src}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: index * 0.06, ease: 'easeOut' }}
              viewport={{ once: true, amount: 0.15 }}
              className="group relative break-inside-avoid"
              style={{ marginBottom: 0, padding: 0 }}
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
  <div className="grid items-center gap-10 rounded-[2rem] border border-black/10 bg-black/90 p-6 lg:grid-cols-[0.9fr_1.1fr] lg:p-10 overflow-hidden">

    {/* LEFT CONTENT */}
    <div className="order-2 flex flex-col items-start justify-center lg:order-1 animate-fadeInUp">
      
      <p className="font-['OSK'] text-[10px] uppercase tracking-[0.34em] text-white/70">
        Flea Market
      </p>

      {/* Floating Heading */}
      <h2 className="mt-4 font-['Archivo_Black'] text-[72px] uppercase text-white leading-tight animate-float">
        Setup your flea market for COH 2026
      </h2>

      <p className="mt-5 max-w-xl font-['OSK'] text-sm uppercase leading-7 tracking-[0.16em] text-white/80 sm:text-base">
        Showcase your ideas, products, and creativity at Cambridge Open House 2026.
      </p>
    </div>

    {/* RIGHT BUTTON */}
    <div className="order-1 flex justify-center lg:order-2 animate-fadeIn">

      <a
        href="https://docs.google.com/forms/d/e/1FAIpQLSccWOwN0a5mWGfQ2dNZaaeAz3a4aQ-mqSr_Su2cHuO_EXpiSQ/viewform"
        target="_blank"
        rel="noopener noreferrer"
        className="relative inline-flex min-w-[220px] items-center justify-center rounded-full border border-[#ffd2a3]/30 bg-[#FF8A00] px-8 py-4 font-['OSK'] text-sm uppercase tracking-[0.32em] text-black shadow-[0_18px_45px_rgba(255,138,0,0.25)] transition-all duration-300 hover:scale-105 hover:bg-[#FF8A00]/90 active:scale-95 animate-pulseSlow"
      >
        Register Now

        {/* Glow Effect */}
        <span className="absolute inset-0 rounded-full bg-[#FF8A00] opacity-0 blur-xl transition-opacity duration-500 hover:opacity-40"></span>
      </a>

    </div>
  </div>
</section>
      <Footer />
    </main>
  );
}
 