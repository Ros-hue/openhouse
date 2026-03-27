'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <div id="home" className="min-h-screen w-full overflow-hidden flex flex-col relative">
      <div className="absolute inset-0 w-full h-full z-0">
        <div className="relative w-full h-full">
          <div className="md:hidden absolute inset-0 flex items-start justify-center pt-10">
            <Image
              src="/mobile_robot.webp?v=20260327"
              alt="Robot Image"
              width={440}
              height={600}
              className="transform-gpu object-top"
              priority
            />
          </div>
          <div className="hidden md:block w-full h-full">
            <Image
              src="/robotnew.webp?v=20260327"
              alt="Robot Image"
              fill
              className="object-contain"
              priority
              sizes="100vw"
            />
          </div>
        </div>
      </div>

      <div className="flex-grow"></div>

      <div className="w-full pb-12 pt-4 z-10">
        <div className="container mx-auto px-4">
          <div className="md:hidden flex flex-col items-center space-y-2 mt-[60vh]">
            <div className="flex flex-col items-center space-y-6 ">
              <h1 className="text-[#FF8A00] text-4xl font-['BS'] tracking-wide max-sm:top-[60vw] max-sm:text-[10vw] max-sm:leading-[6vw]">CAMBRIAN</h1>
              <h1 className="text-[#FF8A00] text-4xl font-['BS'] tracking-wide max-sm:text-[8.2vw]">OPEN HOUSE</h1>
            </div>
            <div className="bg-white/70 backdrop-blur-sm py-2 px-4 rounded-lg mt-2 overflow-hidden">
              <motion.p
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="text-black text-base font-['OSK'] font-bold tracking-wider text-center"
              >
                2nd MAY 2026 • 9:30 AM TO 5:00 PM
              </motion.p>
              <motion.p
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                className="text-black text-base font-['OSK'] font-bold tracking-wider text-center mt-0.5"
              >
                Cambridge Instiute of Technology<br></br>KR Puram, Bengaluru-560036
              </motion.p>
            </div>

            {/* Enhanced "JOIN US FOR FREE" Button for mobile */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex justify-center w-full mt-4"
              whileHover={{ scale: 1.03 }}
            >
              {/* Pulsing background for emphasis */}
              <motion.div
                className="absolute w-full max-w-xs rounded-full bg-[#FF8A00]/20 h-12"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.3, 0.6, 0.3]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />

              <motion.button
                onClick={() => document.getElementById("registration-section")?.scrollIntoView({ behavior: "smooth" })}
                className="relative bg-gradient-to-r from-[#99E265] to-[#67B044] text-black font-['OSK'] text-lg tracking-wider py-2.5 px-6 w-full max-w-xs rounded-full shadow-lg shadow-[#99E265]/20 overflow-hidden"
                whileTap={{ scale: 0.97 }}
              >
                <div className="relative flex items-center justify-center z-10">
                  <motion.span
                    className="inline-block mr-2 text-xl"
                    animate={{ x: [0, 5, 0] }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      repeatType: "reverse"
                    }}
                  >
                    →
                  </motion.span>
                  JOIN US FOR FREE!
                </div>

                {/* Sheen effect */}
                <motion.div
                  className="absolute inset-0 w-full h-full overflow-hidden"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  <motion.div
                    className="w-40 h-full bg-gradient-to-r from-transparent via-white/30 to-transparent absolute top-0 -left-40"
                    animate={{ left: ["0%", "100%"] }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      repeatDelay: 3
                    }}
                  />
                </motion.div>
              </motion.button>
            </motion.div>
          </div>

          <div className="hidden md:block text-center px-4">
            <div className="hidden md:block lg:hidden">
              <h1 className="text-[#FF8A00] text-[5vw] font-['BS'] tracking-wide whitespace-nowrap leading-normal">
                CAMBRIAN OPEN HOUSE
              </h1>
            </div>
            <div className="hidden lg:block xl:hidden">
              <h1 className="text-[#FF8A00] text-5xl font-['BS'] tracking-wide whitespace-nowrap leading-normal mx-auto max-w-[90vw] overflow-hidden">
                CAMBRIAN OPEN HOUSE
              </h1>
            </div>
            <div className="hidden xl:block">
              <h1 className="text-[#FF8A00] text-6xl font-['BS'] tracking-wide whitespace-nowrap leading-normal">
                CAMBRIAN OPEN HOUSE
              </h1>
            </div>

            {/* Enhanced "JOIN US FOR FREE" Button - Desktop */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex justify-center mt-8 relative"
            >
              {/* Floating decorative elements */}
              <motion.div
                className="absolute -right-4 -top-4 w-6 h-6 rounded-full bg-[#FF8A00]"
                animate={{
                  y: [0, -8, 0],
                  opacity: [0.7, 1, 0.7],
                  scale: [1, 1.1, 1]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />

              <motion.div
                className="absolute -left-20 top-12 w-4 h-4 rounded-full bg-cyan-400"
                animate={{
                  y: [0, -5, 0],
                  opacity: [0.5, 0.8, 0.5],
                  scale: [1, 1.2, 1]
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5
                }}
              />

              {/* Pulsing ring */}
              <motion.div
                className="absolute -inset-2 rounded-full bg-[#99E265]/30"
                animate={{
                  scale: [0.95, 1.05, 0.95],
                  opacity: [0.2, 0.5, 0.2]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />

              <motion.button
                onClick={() => document.getElementById("registration-section")?.scrollIntoView({ behavior: "smooth" })}
                className="relative bg-gradient-to-r from-[#99E265] to-[#67B044] text-black font-['OSK'] text-2xl tracking-wider py-3 px-10 rounded-full shadow-lg shadow-[#99E265]/30 overflow-hidden"
                whileHover={{
                  scale: 1.05,
                  boxShadow: '0 0 25px 5px rgba(153,226,101,0.5)',
                  textShadow: '0 0 5px rgba(255,255,255,0.5)'
                }}
                whileTap={{ scale: 0.97 }}
              >
                <div className="relative flex items-center justify-center z-10">
                  <motion.span
                    className="inline-block mr-3 text-2xl"
                    animate={{
                      x: [0, 7, 0],
                      rotate: [0, 10, 0]
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      repeatType: "reverse"
                    }}
                  >
                    →
                  </motion.span>
                  JOIN US FOR FREE!
                </div>

                {/* Sheen effect */}
                <motion.div
                  className="absolute inset-0 w-full h-full overflow-hidden"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  <motion.div
                    className="w-60 h-full bg-gradient-to-r from-transparent via-white/40 to-transparent absolute top-0 -left-60"
                    animate={{ left: ["0%", "100%"] }}
                    transition={{
                      duration: 1.8,
                      repeat: Infinity,
                      repeatDelay: 2
                    }}
                  />
                </motion.div>
              </motion.button>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
