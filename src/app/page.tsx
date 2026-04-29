// src/app/page.tsx
'use client';
import React from 'react';
import { useEffect } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import { motion } from 'framer-motion';
//import Events from './components/Events';
import Schedule from './components/Schedule';
import Navbar from './components/Navbar';
import Venue from './components/Venue';
import Footer from './components/Footer';
import FAQ from './components/FAQ';
import RegisterButton from './components/RegisterButton';
//import MetaTagRotator from './components/MetaTagRotator';
// import { motion } from 'framer-motion';
//import PartnersMarquee from './components/PartnersMarquee';
import Reason from './components/reason';
import { getRegistrationHash, scrollToRegistrationSection } from '@/lib/scrollToRegistration';

export default function MainPage() {
  useEffect(() => {
    if (window.location.hash !== getRegistrationHash()) {
      return;
    }

    const timer = window.setTimeout(() => {
      scrollToRegistrationSection();
    }, 150);

    return () => window.clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen">
      <Navbar />

      <div className="bottom-4 sm:bottom-6 z-50 fixed right-4 sm:right-6">
        <RegisterButton
          className="bg-[#FF8A00] text-white font-['OSK'] tracking-wider uppercase py-3 px-5 sm:px-6 rounded-full text-sm sm:text-base shadow-lg transition-all hover:bg-[#FFB700]"
        >
          <motion.span
            initial={{ scale: 1 }}
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 1, repeat: Infinity, repeatType: 'reverse' }}
            className="block"
          >
            Register Now
          </motion.span>
        </RegisterButton>
      </div>


      <section id="home" className="min-h-screen">
        <Hero />
      </section>
      {/* <section id="partners" className="min-h-screen">
        <PartnersMarquee />
      </section> */}
      <section id="reason" className="min-h-screen">
        <Reason />
      </section>
      <section id="about" className="min-h-screen">
        <About />
      </section>
      {/* <section id="events" className="min-h-screen">
        <Events />
      </section> */}
      <section id="schedule" className="min-h-screen">
        <Schedule />
      </section>
      {/* <section id="meta" className="min-h-auto">
        <MetaTagRotator />
      </section> */}
      <section id="venue" className="min-h-screen">
        <Venue />
      </section>
      <section id="faq" className="min-h-screen">
        <FAQ />
      </section>
      {/* <section id="partners" className="min-h-screen">
        <PartnersMarquee />
      </section> */}
      <section id="" className="min-h-fit">
        <Footer />
      </section>
    </div>
  );
}
