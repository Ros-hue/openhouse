// import React from 'react';
// import Image from 'next/image';

// const Reason = () => {
//   return (
//     <div className=" max-sm:pt-[5vw] mt-[0rem] pt-16 relative overflow-hidden">
//       {/* WHY INTUIT Section */}
//       <div className="max-w-4xl mx-auto">
//         <h2 className="max-sm:text-[7vw] tracking-tight text-4xl md:text-5xl font-bold text-center mb-4">
//           <span className="font-['BS'] text-black">WHY </span>
//           <span className="font-['BS'] text-green-500 ">ATTEND</span>
//           <span className="font-['BS'] text-green-500">?</span>
//         </h2>
//         <p className="font-['OSK'] text-center text-gray-700 max-w-3xl mx-auto mb-[2em] tracking-wider md:tracking-widest text-lg md:text-xl font-light leading-snug md:leading-normal">
//           Dive into an immersive experience at our exclusive technical exhibition, where innovation meets creativity. Explore visionary ideas, cutting-edge technology, and limitless possibilities!
//         </p>
//       </div>

//       {/* First Discover Section */}
//       <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 px-4">
//         <div className="max-sm:mb-0 relative w-full md:w-1/2">
//           <div className="relative z-10">
//             <Image
//               src="/r1.webp"
//               alt="Innovation Stalls"
//               width={400}
//               height={300}
//               className="mx-auto"
//             />
//           </div>
//         </div>

//         <div className="relative w-full md:w-1/2 md:pl-8">
//           <div className="relative flex items-start">
//             <div className="absolute left-0 bg-green-500 text-white rounded-full w-16 h-16 flex items-center justify-center text-3xl font-bold mr-4 max-sm:w-12 max-sm:h-12 max-sm:text-2xl font-['OSK']">
//               1
//             </div>
//             <div className="ml-20 max-sm:ml-16">
//               <h3 className="text-3xl font-bold text-green-700 mb-2 font-['OSK'] tracking-wide md:tracking-wider">Cambrian Open House 2026: Where Ideas Converge</h3>
//               <p className="text-gray-700 font-['OSK'] tracking-wider md:tracking-widest text-lg md:text-xl font-light leading-snug md:leading-normal">
//                 With over 120+ stalls, Cambrian Open House 2026 brings together a vibrant mix of technology, creativity, and culture. From food and flea markets to interactive panel discussions with industry experts, experience a dynamic environment where ideas and insights come together.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Second Discover Section */}
//       <div className="max-w-6xl mx-auto flex flex-col md:flex-row-reverse items-center justify-between gap-8 px-4 mt-12">
//         <div className="max-sm:mb-0 relative w-full md:w-1/2">
//           <div className="relative z-10">
//             <Image
//               src="/reasons_page/r2.webp"
//               alt="Innovation Stalls"
//               width={400}
//               height={300}
//               className="mx-auto"
//             />
//           </div>
//           <div className="absolute top-8 right-8 -z-10">
//             <div className="w-4 h-4 bg-green-200 rounded"></div>
//           </div>
//           <div className="absolute top-24 right-24 -z-10">
//             <div className="w-2 h-2 bg-green-200 rounded-full"></div>
//           </div>
//           <div className="absolute bottom-16 right-16 -z-10">
//             <div className="w-6 h-6 bg-green-200 rounded-full"></div>
//           </div>
//         </div>

//         <div className="relative w-full md:w-1/2 md:pr-12">
//           <div className="flex items-start mb-4">
//             <div className="absolute left-0 lg:hidden bg-green-500 text-white rounded-full w-16 h-16 flex items-center justify-center text-3xl font-bold mr-4 max-sm:w-12 max-sm:h-12 max-sm:text-2xl font-['OSK']">
//               2
//             </div>
//             <div className='max-sm:ml-16'>
//               <h3 className="text-3xl font-bold text-green-700 mb-2 font-['OSK'] tracking-wide md:tracking-wider">Fueling Future Minds</h3>
//               <p className="text-gray-700 font-['OSK'] tracking-wider md:tracking-widest text-lg md:text-xl font-light leading-snug md:leading-normal">
//                 Discover exclusive startups and research from Cambridge Institute of Technology, along with innovative student projects and club showcases. Witness the power of creativity and collaboration as future leaders present solutions that shape tomorrow.
//               </p>
//             </div>
//             <div className="max-sm:hidden right-0 absolute bg-green-500 text-white rounded-[100%] w-[3rem] h-[3rem] flex items-center justify-center text-3xl font-bold font-['Audiowide']">
//               2
//             </div>
//           </div>
//         </div>
//       </div>


// {/* Inauguration Highlight Section */}
// <div className="max-w-4xl mx-auto flex flex-col items-center gap-6 px-6 py-20">

// <div className="relative inline-flex justify-center items-center px-3 sm:px-5 md:px-8 py-2 rounded-full bg-white/20 backdrop-blur-md border-2 border-green-500 text-green-700 font-['BS'] text-[10px] xs:text-xs sm:text-sm md:text-base lg:text-lg font-bold uppercase tracking-wide shadow-lg animate-pulse-glow hover:scale-105 transition-all duration-300 mx-auto w-auto max-w-[95%]">
//   <span className="text-center truncate sm:whitespace-normal">
//     Cambrian Open House 2025{" "}
//     <br className="sm:hidden" />
//     Inauguration by AICTE Chairman
//   </span>
// </div>


//   {/* Photo */}
//   <div className="w-full">
//     <Image
//       src="/reasons_page/chairman.webp"
//       alt="Prof. TG Sitharam"
//       width={1000}
//       height={700}
//       className="w-full h-auto object-cover rounded-2xl shadow-lg"
//     />
//   </div>

//   {/* Name */}

//   <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-green-700 font-['BS'] text-center leading-normal whitespace-nowrap overflow-hidden">
//   TG Sitharam
// </h3>

//   {/* Designation */}
//   <p className="text-2xl md:text-3xl text-green-600 font-['BS'] font-bold text-center tracking-wide uppercase">
//     Chairman, AICTE — Govt. of India
//   </p>

//   {/* Description */}
//   <p className="text-gray-600 font-['OSK'] text-base md:text-lg leading-relaxed tracking-wide text-center max-w-3xl">
//     At last year&apos;s Cambrian Open House 2025, the event was inaugurated by
//     <span className="font-semibold text-green-600"> Prof. (Dr.) T G Sitharam</span>,
//     Chairman of the All India Council for Technical Education (AICTE), Government of India.
//     His presence marked a memorable milestone for the 2025 edition and highlighted the event&apos;s national significance in celebrating creativity, leadership, and the boundless potential of India&apos;s next generation of innovators.
//   </p>

//   {/* Callout */}
//   <p className="text-green-600 font-semibold text-lg md:text-xl font-['BS'] text-center">
//     A memorable highlight from last year&apos;s edition.
//   </p>

// </div>


//       {/* WHO CAN JOIN Section */}
//       <div className="w-full relative mt-16">
//         <h2 className="max-sm:text-[5vw] text-4xl md:text-5xl font-bold text-center mb-6">
//           <span className="font-['BS'] text-black">WHO CAN </span>
//           <span className="font-['BS'] text-green-500">JOIN!</span>
//         </h2>
//         <p className="font-['OSK'] max-sm:mt-[1vw] text-center text-gray-700 tracking-wider md:tracking-widest text-lg md:text-xl font-light leading-snug md:leading-normal max-w-4xl mx-auto px-4">
//           Cambrian Open House 2026 welcomes everyone! Whether you are a tech enthusiast, student, entrepreneur, or a curious mind eager to explore new ideas and experience innovative demonstrations, this event is for you. Entry is absolutely free!!!<br></br>
//           Register now and join us for an immersive experience!
//         </p>

//         <div className="relative">
//           <div className="flex justify-center">
//             <div className="relative w-full">
//               <Image
//                 src="/reasons_page/r3.webp"
//                 alt="Innovation Stalls"
//                 width={600}
//                 height={400}
//                 className="w-full"
//               />
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Bottom blur effect */}
//       <div className="absolute bottom-0 left-0 right-0 h-[1vw] backdrop-blur-md pointer-events-none"></div>
//     </div>
//   );
// };

// export default Reason;



















'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Reason = () => {
  return (
    <div className="relative bg-[#FAF9F6] py-20 overflow-hidden" id="reasons">
      
      {/* KINETIC BACKGROUND TEXT */}
      <div className="absolute top-0 left-0 w-full overflow-hidden whitespace-nowrap pointer-events-none opacity-[0.03] select-none">
        <h1 className="text-[25vw] font-black uppercase leading-none">
          Curiosity Exploration Innovation Discovery
        </h1>
      </div>

      {/* HEADER SECTION */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 mb-32">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-end gap-8"
        >
          <h2 className="text-7xl md:text-[10rem] font-bold leading-[0.8] tracking-tighter">
            WHY <br /> 
            <span className="text-[#67B044] italic font-light">ATTEND?</span>
          </h2>
          <p className="font-['OSK'] text-zinc-600 max-w-md text-lg md:text-xl leading-tight pb-4">
            Dive into an immersive experience at our exclusive technical exhibition, where innovation meets creativity. Explore visionary ideas, cutting-edge technology, and limitless possibilities!
          </p>
        </motion.div>
      </div>

      {/* REASON 01 - FLOATING CARD STYLE */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 mb-40">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, x: -50 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            className="w-full lg:w-1/2 relative group"
          >
            <div className="absolute -inset-4 bg-[#9EE666]/20 rounded-[3rem] blur-2xl group-hover:bg-[#9EE666]/30 transition-all" />
            <Image
              src="/r1.webp"
              alt="Innovation Stalls"
              width={800}
              height={600}
              className="relative z-10 w-full h-auto rounded-[2rem] shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
            />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="w-full lg:w-1/2 lg:pl-12"
          >
            <span className="inline-block px-6 py-2 bg-black text-[#9EE666] rounded-full font-mono text-sm mb-8 uppercase tracking-widest">
              Protocol 01
            </span>
            <h3 className="text-4xl md:text-6xl font-bold mb-6 tracking-tighter leading-none">
              Cambrian Open House 2026: <span className="text-zinc-400">Where Ideas Converge</span>
            </h3>
            <p className="text-xl text-zinc-600 font-light leading-relaxed">
              With over 120+ stalls, Cambrian Open House 2026 brings together a vibrant mix of technology, creativity, and culture. From food and flea markets to interactive panel discussions with industry experts, experience a dynamic environment where ideas and insights come together.
            </p>
          </motion.div>
        </div>
      </section>

      {/* REASON 02 - OVERLAP LAYOUT */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 mb-40">
        <div className="flex flex-col lg:flex-row-reverse gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="w-full lg:w-1/2"
          >
            <div className="relative">
              <Image
                src="/reasons_page/r2.webp"
                alt="Innovation Stalls"
                width={800}
                height={600}
                className="w-full h-auto rounded-[2rem] z-20 relative"
              />
              {/* DECORATIVE DOTS */}
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="w-full lg:w-1/2 lg:pr-12"
          >
            <span className="inline-block px-6 py-2 bg-[#9EE666] text-black rounded-full font-mono text-sm mb-8 uppercase tracking-widest">
              Protocol 02
            </span>
            <h3 className="text-4xl md:text-6xl font-bold mb-6 tracking-tighter leading-none">
              Fueling Future <span className="italic font-light text-[#67B044]">Minds</span>
            </h3>
            <p className="text-xl text-zinc-600 font-light leading-relaxed">
              Discover exclusive startups and research from Cambridge Institute of Technology, along with innovative student projects and club showcases. Witness the power of creativity and collaboration as future leaders present solutions that shape tomorrow.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CHIEF GUEST */}

      <section className="relative z-10 bg-black text-white py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="lg:col-span-5"
            >
              <div className="border-l-4 border-[#9EE666] pl-8">
                <h4 className="text-[#9EE666] font-mono text-sm mb-4 tracking-[0.3em] uppercase">Chief Guest</h4>
                <h3 className="text-5xl md:text-7xl font-bold tracking-tighter leading-none mb-8">
                  Prof. <br /> Anil Sahasrabudhe
                </h3>
                <p className="text-zinc-400 text-lg uppercase tracking-widest mb-10">
                  Chairman, National Educational Technology Forum, and former Chairman, AICTE
                </p>
                <p className="text-zinc-300 font-light leading-relaxed text-lg mb-8">
                  The event will be graced by Prof. Anil Sahasrabudhe, Chairman of the National Educational Technology Forum and former Chairman of AICTE, whose distinguished contributions to technical education and innovation continue to inspire and shape the future of India&apos;s academic and technological landscape.
                </p>
                <div className="inline-block px-4 py-2 border border-zinc-700 rounded-full text-zinc-500 text-xs uppercase tracking-tighter">
                  A memorable milestone for the 2025 edition
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 1.1 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="lg:col-span-7 relative"
            >
              <div className="absolute -top-10 -left-10 z-20 bg-[#9EE666] text-black p-6 rounded-full font-bold text-center leading-tight rotate-12 hidden md:block">
                CHIEF <br /> GUEST
              </div>
              <Image
                src="/reasons_page/anil.webp"
                alt="Prof. Anil Sahasrabudhe"
                width={1000}
                height={700}
                className="w-full h-auto object-cover rounded-[3rem] grayscale hover:grayscale-0 transition-all duration-1000"
              />
            </motion.div>
          </div>
        </div>
      </section>


      {/* Guest of Honor */}

      <section className="relative z-10 bg-black text-white py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="lg:col-span-5"
            >
              <div className="border-l-4 border-[#9EE666] pl-8">
                <h4 className="text-[#9EE666] font-mono text-sm mb-4 tracking-[0.3em] uppercase">Guest of Honor</h4>
                <h3 className="text-5xl md:text-7xl font-bold tracking-tighter leading-none mb-8">
                  Sri. <br /> N G Subramaniam
                </h3>
                <p className="text-zinc-400 text-lg uppercase tracking-widest mb-10">
                  Board Member, Tata Elxsi limited and former COO, TCS
                </p>
                <p className="text-zinc-300 font-light leading-relaxed text-lg mb-8">
                  The event will be graced by Sri. N G Subramaniam, Board Member of Tata Elxsi Limited and former COO of TCS, whose distinguished contributions to the technology and innovation landscape continue to inspire and shape the future of India&apos;s academic and technological landscape.
                </p>
                <div className="inline-block px-4 py-2 border border-zinc-700 rounded-full text-zinc-500 text-xs uppercase tracking-tighter">
                  A memorable milestone for the 2025 edition
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 1.1 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="lg:col-span-7 relative"
            >
              <div className="absolute -top-10 -left-10 z-20 bg-[#9EE666] text-black p-6 rounded-full font-bold text-center leading-tight rotate-12 hidden md:block">
                GUEST <br /> OF <br /> HONOR
              </div>
              <Image
                src="/reasons_page/subramaniam.webp"
                alt="Sri. N G Subramaniam"
                width={1000}
                height={700}
                className="w-full h-auto object-cover rounded-[3rem] grayscale hover:grayscale-0 transition-all duration-1000"
              />
            </motion.div>
          </div>
        </div>
      </section>


      {/* INAUGURATION SECTION - EDITORIAL SPREAD */}
      <section className="relative z-10 bg-black text-white py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="lg:col-span-5"
            >
              <div className="border-l-4 border-[#9EE666] pl-8">
                <h4 className="text-[#9EE666] font-mono text-sm mb-4 tracking-[0.3em] uppercase">Flashback 2025</h4>
                <h3 className="text-5xl md:text-7xl font-bold tracking-tighter leading-none mb-8">
                  TG <br /> SITHARAM
                </h3>
                <p className="text-zinc-400 text-lg uppercase tracking-widest mb-10">
                  Chairman, AICTE — Govt. of India
                </p>
                <p className="text-zinc-300 font-light leading-relaxed text-lg mb-8">
                  The event was inaugurated by Prof. (Dr.) T G Sitharam, highlighting the event&apos;s national significance in celebrating India&apos;s next generation of innovators.
                </p>
                <div className="inline-block px-4 py-2 border border-zinc-700 rounded-full text-zinc-500 text-xs uppercase tracking-tighter">
                  A memorable milestone for the 2025 edition
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 1.1 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="lg:col-span-7 relative"
            >
              <div className="absolute -top-10 -left-10 z-20 bg-[#9EE666] text-black p-6 rounded-full font-bold text-center leading-tight rotate-12 hidden md:block">
                INAUGURATED <br /> BY AICTE
              </div>
              <Image
                src="/reasons_page/chairman.webp"
                alt="Prof. TG Sitharam"
                width={1000}
                height={700}
                className="w-full h-auto object-cover rounded-[3rem] grayscale hover:grayscale-0 transition-all duration-1000"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* WHO CAN JOIN SECTION - STICKER BOARD LAYOUT */}
      <section className="relative z-10 py-32 bg-[#FAF9F6]">
        <div className="max-w-7xl mx-auto px-6 text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-9xl font-bold tracking-tighter mb-8"
          >
            WHO CAN <span className="text-[#67B044]">JOIN!</span>
          </motion.h2>
          <p className="text-xl md:text-2xl text-zinc-600 max-w-3xl mx-auto font-light leading-tight">
            Cambrian Open House 2026 welcomes everyone! Tech enthusiasts, students, entrepreneurs, or curious minds. Entry is <span className="font-bold text-black italic">absolutely free.</span>
          </p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="w-full max-w-screen-2xl mx-auto px-4"
        >
          <div className="relative rounded-[4rem] overflow-hidden shadow-2xl border-[12px] border-white">
            <Image
              src="/reasons_page/r3.webp"
              alt="Innovation Stalls"
              width={1600}
              height={900}
              className="w-full h-auto object-cover"
            />
            {/* OVERLAY CTA */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end justify-center p-12">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-12 py-6 bg-[#9EE666] text-black font-black text-2xl rounded-full shadow-xl uppercase tracking-widest"
              >
                Register Now
              </motion.button>
            </div>
          </div>
        </motion.div>
      </section>

      {/* FINAL DECOR */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
    </div>
  );
};

export default Reason;



