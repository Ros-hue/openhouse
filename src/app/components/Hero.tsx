'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import RegisterButton from './RegisterButton';

const Hero = () => {
  const [isFinished, setIsFinished] = useState(false);

  return (
    <div id="home" className="relative min-h-screen w-full bg-[#0a0a0a] overflow-hidden selection:bg-white selection:text-black">
      
      {/* 01. CINEMATIC VIDEO LAYER */}
      <motion.div 
        initial={{ scale: 1 }}
        animate={{ 
          scale: isFinished ? 0.98 : 1,
          borderRadius: isFinished ? "10px" : "0px",
        }}
        transition={{ duration: 1.4, ease: [0.65, 0, 0.35, 1] }}
        className="absolute inset-0 z-0 overflow-hidden bg-black shadow-2xl"
      >
        <video
          autoPlay
          muted
          playsInline
          onEnded={() => setIsFinished(true)}
          className="w-full h-full object-cover "
        >
          <source src="/vid1.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/60" />
      </motion.div>

      {/* 02. MINIMAL REVEAL UI (Bottom Anchored) */}
      <AnimatePresence>
        {isFinished && (
          <div className="absolute inset-0 z-10 p-10 lg:p-20 flex flex-col justify-end">
            <div className="w-full flex flex-col lg:flex-row justify-between items-end gap-12">
              
              {/* BOTTOM LEFT: PRIMARY INTEL */}
              <motion.div 
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                className="max-w-xl"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-px bg-white/30" />
                  <span className="font-mono text-[10px] tracking-[0.4em] uppercase text-white/40">Open_House_v2.6</span>
                </div>
                <h1 className="text-white font-[BS] text-7xl lg:text-[4vw] font-bold tracking-tighter leading-[1.5] uppercase">
                  2ND MAY <br />
                  <span className="text text-[#FF8A00]">10:00AM TO 5:00PM</span>
                </h1>
                <p className="mt-8 text-white/50 text-sm font-medium tracking-tight max-w-xs leading-relaxed">
                  Join us at the Cambridge Institute of Technology for a sovereign showcase of neural architecture and robotics.
                </p>
              </motion.div>

              {/* BOTTOM RIGHT: ACTION & META */}
              <motion.div 
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
                className="flex flex-col items-end gap-8"
              >
                <div className="text-right">
                  <span className="block font-mono text-[9px] text-white/30 uppercase tracking-[0.3em] mb-2">Ground_Coordinates</span>
                  <p className="text-white text-xs font-bold uppercase tracking-widest leading-loose">
                    12.9716° N, 77.5946° E <br />
                    Bengaluru, KA // CIT
                  </p>
                </div>

                {/* <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => document.getElementById("registration-section")?.scrollIntoView({ behavior: "smooth" })}
                  className="group relative px-12 py-5 bg-white text-black font-bold text-xs uppercase tracking-[0.2em] rounded-full overflow-hidden transition-all"
                  label="Initialize Registration"
                >
                  <span className="relative z-10 flex items-center gap-3">
                    Initialize Registration
                    <div className="w-1.5 h-1.5 rounded-full bg-black group-hover:bg-[#FF8A00] transition-colors" />
                  </span>
                </motion.button> */}
              </motion.div>

            </div>
          </div>
        )}
      </AnimatePresence>

      {/* 03. TOP NAV REVEAL (Subtle) */}
      <AnimatePresence>
        {isFinished && (
          <motion.nav 
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="absolute top-0 left-0 w-full p-10 flex justify-between items-center z-20 pointer-events-none"
          >
            {/* <span className="text-white font-bold tracking-tighter text-xl pointer-events-auto cursor-pointer">CAMBRIAN</span> */}
            {/* <div className="flex gap-10">
              {['Timeline', 'Modules', 'Nodes'].map((item) => (
                <span key={item} className="text-white/30 font-mono text-[9px] uppercase tracking-widest hover:text-white transition-colors cursor-pointer pointer-events-auto">
                  {item}
                </span>
              ))}
            </div> */}
          </motion.nav>
        )}
      </AnimatePresence>

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Instrument+Sans:wght@700&family=Geist+Mono:wght@400;700&display=swap');
        
        :root {
          --font-sans: 'Instrument Sans', sans-serif;
          --font-mono: 'Geist Mono', monospace;
        }

        .font-sans { font-family: var(--font-sans); }
        .font-mono { font-family: var(--font-mono); }
        
        body { background: #0a0a0a; -webkit-font-smoothing: antialiased; }
      `}</style>
    </div>
  );
};

export default Hero;
