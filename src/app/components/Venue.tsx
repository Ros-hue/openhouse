// 'use client';

// import React from 'react';
// import { motion } from 'framer-motion';
// import Image from 'next/image';

// export default function Venue() {
//   const venueDetails = {
//     name: 'CAMBRIDGE INSTITUTE OF TECHNOLOGY',
//     address: 'K.R. Puram, Bengaluru-560036',
//     features: [
//       {
//         title: 'SIR MV AUDITORIUM',
//         description: 'State-of-the-art auditorium with modern facilities',
//         icon: (
//           <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
//           </svg>
//         )
//       },
//       {
//         title: 'COLLEGE LAWN',
//         description: 'Spacious outdoor area for exhibitions',
//         icon: (
//           <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
//           </svg>
//         )
//       },
//       {
//         title: 'PARKING',
//         description: 'Ample parking space available for visitors',
//         icon: (
//           <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
//           </svg>
//         )
//       }
//     ]
//   };

//   return (
//     <div className=" max-sm:pb-[0] max-sm:pt-[5vw] relative  py-20">
//       {/* Main Content */}
//       <div className="relative z-10 container mx-auto px-6">
//         {/* Title */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//           className="text-center mb-12"
//         >
//           <h1 className=" font-['BS'] max-sm:text-[8vw] text-5xl md:text-6xl lg:text-5xl font-bold text-[#141414] mb-4">
//             Venue
//           </h1>
//           <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto">
//             Experience innovation at our state-of-the-art campus
//           </p>
//         </motion.div>

//         {/* Integrated Venue Card with Image and Info */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//           className="max-w-6xl mx-auto mb-16"
//         >
//           <div className="bg-white/80 backdrop-blur-sm rounded-xl border border-[#9EE666]/30 hover:border-[#9EE666]/50 transition-all duration-300 shadow-sm hover:shadow-lg overflow-hidden">
//             <div className="md:flex">
//               {/* Left side - Image */}
//               <div className="md:w-1/2 relative h-64 md:h-auto">
//                 <Image
//                   src="/campus.webp"
//                   alt="CIT Campus"
//                   fill
//                   className="object-cover transition-transform duration-300 hover:scale-105"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent md:bg-gradient-to-r md:from-black/60 md:to-transparent" />
//                 <div className="absolute bottom-0 left-0 p-6 text-white md:hidden">
//                   <h3 className="text-2xl font-bold mb-1">{venueDetails.name}</h3>
//                   <p className="text-sm font-medium opacity-90">{venueDetails.address}</p>
//                 </div>
//               </div>

//               {/* Right side - Info */}
//               <div className="md:w-1/2 p-8">
//                 {/* Venue Name and Address - Only shown on desktop */}
//                 <div className="hidden md:block mb-6">
//                   <h3 className="text-3xl font-bold text-[#67B044] mb-2">{venueDetails.name}</h3>
//                   <p className="text-lg text-gray-700 font-medium">{venueDetails.address}</p>
//                 </div>

//                 {/* Amenities */}
//                 <div className="space-y-6">
//                   <h4 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
//                     <span className="bg-[#9EE666]/20 p-2 rounded-full mr-3">
//                       <svg className="w-5 h-5 text-[#67B044]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
//                       </svg>
//                     </span>
//                     Key Amenities
//                   </h4>

//                   <div className="grid grid-cols-1 gap-4">
//                     {venueDetails.features.map((feature, index) => (
//                       <div key={index} className="flex items-center">
//                         <div className="bg-[#9EE666]/20 p-2 rounded-full mr-3">
//                           <div className="text-[#67B044]">
//                             {feature.icon}
//                           </div>
//                         </div>
//                         <div>
//                           <p className="font-semibold text-gray-800">{feature.title}</p>
//                           <p className="text-sm text-gray-600">{feature.description}</p>
//                         </div>
//                       </div>
//                     ))}
//                   </div>

//                   {/* Get Directions Button */}
//                   <a
//                     href="https://maps.app.goo.gl/Ep2AMo7mKyKR2Mp29"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="mt-6 inline-flex items-center px-5 py-3 rounded-lg bg-[#67B044] hover:bg-[#67B044]/90 text-white font-bold text-base hover:shadow-lg transition-all duration-300"
//                   >
//                     <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
//                     </svg>
//                     GET DIRECTIONS
//                   </a>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </motion.div>

//         {/* Map Section */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//           className="max-w-6xl mx-auto"
//         >
//           <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl border border-[#9EE666]/30 hover:border-[#9EE666]/50 transition-all duration-300 shadow-sm hover:shadow-md">
//             <div className="flex items-center mb-4">
//               <div className="bg-[#9EE666]/20 p-2 rounded-full mr-3">
//                 <svg className="w-5 h-5 text-[#67B044]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
//                 </svg>
//               </div>
//               <h4 className="text-xl font-bold text-gray-800">Find Us</h4>
//             </div>

//             <div className="relative h-[350px] rounded-lg overflow-hidden">
//               <iframe
//                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d497.01997700143855!2d77.67411661722831!3d12.995715299472149!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f20.1!3m3!1m2!1s0x3bae15986765d7d9%3A0x357ff1cbac4a09bb!2s2P73%2B2P%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1710835058584!5m2!1sen!2sin"
//                 width="100%"
//                 height="100%"
//                 style={{ border: 0 }}
//                 allowFullScreen
//                 loading="lazy"
//                 referrerPolicy="no-referrer-when-downgrade"
//                 className="rounded-lg"
//               />
//             </div>
//           </div>
//         </motion.div>
//       </div>
//     </div>
//   );
// }



















'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Venue() {
  const venueDetails = {
    name: 'CAMBRIDGE INSTITUTE OF TECHNOLOGY',
    address: 'K.R. Puram, Bengaluru-560036',
    features: [
      {
        title: 'SIR MV AUDITORIUM',
        description: 'State-of-the-art auditorium with modern facilities',
      },
      {
        title: 'COLLEGE LAWN',
        description: 'Spacious outdoor area for exhibitions',
      },
      {
        title: 'PARKING',
        description: 'Ample parking space available for visitors',
      }
    ]
  };

  return (
    <section className="relative py-32 sm:py-48 px-6 lg:px-12 bg-[#FAF9F6] overflow-hidden font-sans">
      
      {/* SEAMLESS BLEED: Ambient background depth */}
      <div className="absolute top-0 right-0 w-[60vw] h-[60vw] bg-[#9EE666]/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[40vw] h-[40vw] bg-blue-100/30 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* HEADER: Soft Typographic Sculpture */}
        <div className="mb-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center text-center"
          >
            <span className="text-[10px] font-black uppercase tracking-[0.5em] text-zinc-400 mb-6">/ System.Core.Location</span>
            <h2 className="text-6xl md:text-9xl font-bold tracking-tight text-[#1A1A1A] leading-[0.85]">
              The <br /> 
              <span className="italic font-serif font-light text-zinc-400">Venue.</span>
            </h2>
          </motion.div>
        </div>

        {/* MAIN VENUE CONTENT */}
        <div className="space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-[2.5rem] bg-white/50 hover:bg-white transition-all duration-700 hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.05)] border border-transparent hover:border-zinc-100"
          >
            <div className="p-8 md:p-12 lg:p-16">
              <div className="flex flex-col lg:flex-row gap-12 lg:items-center">
                
                {/* Image Section - Minimalist Framed */}
                <div className="lg:w-1/2 group">
                  <div className="relative h-[300px] md:h-[400px] rounded-[2rem] overflow-hidden shadow-2xl">
                    <Image
                      src="/campus.webp"
                      alt="CIT Campus"
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-700" />
                  </div>
                </div>

                {/* Details Section */}
                <div className="lg:w-1/2">
                  <div className="flex items-center gap-4 mb-6">
                    <span className="text-xs font-mono text-[#9EE666]">01</span>
                    <div className="h-[1px] w-12 bg-zinc-200" />
                  </div>
                  
                  <h3 className="text-3xl md:text-5xl font-medium tracking-tight text-black mb-4">
                    {venueDetails.name}
                  </h3>
                  <p className="text-xl text-zinc-500 mb-10 leading-relaxed font-light">
                    {venueDetails.address}
                  </p>

                  {/* Amenities Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
                    {venueDetails.features.map((feature, index) => (
                      <div key={index} className="relative">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#9EE666] mb-3" />
                        <h4 className="font-bold text-black text-sm uppercase tracking-widest mb-1">{feature.title}</h4>
                        <p className="text-zinc-500 text-sm leading-relaxed">{feature.description}</p>
                      </div>
                    ))}
                  </div>

                  <a
                    href="https://maps.app.goo.gl/Ep2AMo7mKyKR2Mp29"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-4 px-8 py-4 bg-black text-white rounded-full font-bold tracking-tight hover:bg-[#9EE666] hover:text-black transition-all duration-500 group shadow-xl"
                  >
                    <span>GET DIRECTIONS</span>
                    <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Map Section - Integrated Bloom */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="rounded-[2.5rem] bg-white/30 p-4 border border-zinc-100 overflow-hidden"
          >
            <div className="h-[400px] w-full rounded-[2rem] overflow-hidden grayscale hover:grayscale-0 transition-all duration-1000">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d497.01997700143855!2d77.67411661722831!3d12.995715299472149!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f20.1!3m3!1m2!1s0x3bae15986765d7d9%3A0x357ff1cbac4a09bb!2s2P73%2B2P%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1710835058584!5m2!1sen!2sin"
                width="100%"
                height="100%"
                className="border-0"
                title="CITech location map"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>
        </div>

        {/* FOOTER: Integrated Signal */}
        <motion.div 
          className="mt-32 pt-12 border-t border-zinc-100 flex flex-col md:flex-row justify-between items-center gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <p className="text-zinc-400 font-medium italic">K.R. Puram Sector Core / Bengaluru HQ</p>
          <div className="flex items-center gap-2">
            <div className="h-1 w-12 bg-[#9EE666] rounded-full" />
            <div className="h-1 w-1 bg-zinc-200 rounded-full" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}