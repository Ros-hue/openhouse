'use client';

import { motion } from 'framer-motion';
import Link from "next/link";
import { FaLinkedin, FaXTwitter, FaInstagram, FaFacebook, FaPhone, FaEnvelope, FaLocationDot } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="relative bg-white text-black overflow-hidden flex flex-col">
      {/* Content-Footer Divider Line - Mobbin Style */}
      <div className="absolute top-0 left-0 right-0 w-full flex justify-center items-center h-px">
        <motion.div
          className="w-full max-w-[90%] h-[1px] bg-gray-300 mx-auto"
          initial={{ width: "0%" }}
          whileInView={{ width: "90%" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        />
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 footer-bg-pattern" />
      </div>

      {/* Main Content */}
      <div className="relative flex-1 flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">

            {/* Newsletter Subscription */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-4xl font-['Mont] mb-6 relative inline-block">
                About CIT
                <span className="absolute -bottom-2 left-0 w-12 h-1 bg-black rounded-full"></span>
              </h3>
              <p className="font-['OSK'] tracking-wide text-gray-800 mb-4">
                Cambridge Institute of Technology (CITech), Bengaluru, is a dynamic and innovative hub of education, fostering excellence in engineering and technology.
              </p>
              <Link href="http://15.207.194.161/" passHref>
                <button
                  type="button"
                  className="px-6 py-2 hover:cursor-pointer bg-black text-white font-['OSK'] tracking-wide rounded-lg shadow-md hover:bg-gray-900 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
                >
                  Admissions Open
                </button>
              </Link>
              {/* <form className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full p-3 border border-gray-300 rounded-l-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-gray-700"
                />
                <button
                  type="submit"
                  className="px-6 bg-black text-white font-semibold rounded-r-lg hover:bg-gray-900 transition-all"
                >
                  Subscribe
                </button>
              </form> */}
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-4xl font-['Mont] mb-6 relative inline-block">
                Contact Us
                <span className="absolute -bottom-2 left-0 w-12 h-1 bg-black rounded-full"></span>
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <motion.div
                    className="flex items-start space-x-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                    viewport={{ once: true }}
                  >
                    <FaLocationDot className="text-xl mt-1" />
                    <span className="font-['OSK'] tracking-wide text-gray-800">CITech, Krishnarajapuram, Bengaluru - 560036</span>
                  </motion.div>
                </li>
                <li className="flex items-start space-x-3">
                  <motion.div
                    className="flex items-start space-x-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                    viewport={{ once: true }}
                  >
                    <FaPhone className="text-xl mt-1" />
                    <span className="font-['OSK'] tracking-wide text-gray-800">+91 7676270355, +91 6360146030 </span>
                  </motion.div>
                </li>
                <li className="flex items-start space-x-3">
                  <motion.div
                    className="flex items-start space-x-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.3 }}
                    viewport={{ once: true }}
                  >
                    <FaEnvelope className="text-xl mt-1" />
                    <span className="font-['OSK'] tracking-wide text-gray-800">openhouse@cambridge.edu.in</span>
                  </motion.div>
                </li>
              </ul>
            </motion.div>

            {/* Social Media */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h3 className="text-4xl font-['Mont] mb-6 relative inline-block">
                Follow Us
                <span className="absolute -bottom-2 left-0 w-12 h-1 bg-black rounded-full"></span>
              </h3>
              <div className="flex space-x-6">
                {/* LinkedIn */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  <Link href="https://www.linkedin.com/company/cambrian-open-house" target="_blank" rel="noopener noreferrer">
                    <div className="w-12 h-12 rounded-full bg-black/10 flex items-center justify-center transition-all hover:bg-gradient-to-r from-[#0a77e4] to-[#9bc2e9] hover:text-white">
                      <FaLinkedin className="text-2xl text-black " />
                    </div>
                  </Link>
                </motion.div>

                {/* Twitter (X) */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <Link href="https://x.com/citopenhouse" target="_blank" rel="noopener noreferrer">
                    <div className="w-12 h-12 rounded-full bg-black/10 flex items-center justify-center transition-all hover:bg-gradient-to-r from-[#16181b] to-[#ccd7e3] hover:text-white">
                      <FaXTwitter className="text-2xl text-black group-hover:text-white" />
                    </div>
                  </Link>
                </motion.div>

                {/* Instagram */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <Link href="https://www.instagram.com/cambrianopenhouse" target="_blank" rel="noopener noreferrer">
                    <div className="w-12 h-12 rounded-full bg-black/10 flex items-center justify-center transition-all hover:bg-gradient-to-r from-[#F58529] via-[#DD2A7B] to-[#833AB4]">
                      <FaInstagram className="text-2xl text-black group-hover:text-white" />
                    </div>
                  </Link>
                </motion.div>

                {/* Facebook */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <Link href="https://www.facebook.com/cambrianopenhouse/" target="_blank" rel="noopener noreferrer">
                    <div className="w-12 h-12 rounded-full bg-black/10 flex items-center justify-center transition-all hover:bg-gradient-to-r from-[#0a77e4] to-[#9bc2e9] hover:text-white">
                      <FaFacebook className="text-2xl text-black group-hover:text-white" />
                    </div>
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <motion.div
        className="relative py-6 border-t border-black/10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center items-center">
          <p className="font-['OSK'] tracking-wide text-gray-800 text-center text-sm">
            © 2026 Cambridge Institute of Technology. All rights reserved.
          </p>
        </div>
      </motion.div>
    </footer>
  );
}











// 'use client';

// import { motion } from 'framer-motion';
// import Link from "next/link";
// import { FaLinkedinIn, FaInstagram, FaXTwitter, FaFacebookF, FaPhone, FaEnvelope, FaLocationDot, FaArrowRightLong } from "react-icons/fa6";

// export default function Footer() {
//   const currentYear = new Date().getFullYear();

//   return (
//     <footer className="relative bg-[#ffffff] text-black pt-32 pb-10 overflow-hidden selection:bg-orange-600 selection:text-white border-t border-zinc-200 font-sans">
      
//       {/* Massive Background Ghost Type - Architectural Blueprint Layer */}
//       <div className="absolute inset-0 select-none pointer-events-none opacity-[0.03] z-0 flex items-end justify-start">
//         <h1 className="text-[35vw] font-black leading-none uppercase tracking-tighter -ml-20">
//           CITECH
//         </h1>
//       </div>

//       <div className="max-w-[1800px] mx-auto px-6 lg:px-12 relative z-10">
        
//         {/* Top Header Section - Asymmetric Brutalist Grid */}
//         <div className="flex flex-col lg:flex-row justify-between items-start gap-12 mb-24 pb-16 border-b border-zinc-100">
//           <motion.div
//             initial={{ opacity: 0, x: -30 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: true }}
//             className="max-w-2xl"
//           >
//             <span className="text-orange-600 font-bold uppercase text-[10px] tracking-[0.4em] mb-4 block">
//               // Neural Showcase Organizer
//             </span>
//             <h2 className="text-6xl md:text-8xl font-black leading-[0.85] tracking-tighter uppercase mb-10">
//               Cambrian <br /> 
//               <span className="text-zinc-300 italic">Open House.</span>
//             </h2>
//             <p className="text-xl text-zinc-600 leading-relaxed font-medium">
//               Cambridge Institute of Technology (CITech), Bengaluru, is a dynamic and innovative hub of education.
//             </p>
//           </motion.div>

//           {/* Magnetic CTA with dynamic fill animation */}
//           <Link href="http://15.207.194.161/" className="group relative w-fit overflow-hidden bg-black text-white px-10 py-5 rounded-full shadow-2xl transition-all active:scale-95">
//             <div className="absolute inset-0 bg-orange-600 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
//             <span className="relative z-10 font-bold uppercase text-sm tracking-widest flex items-center gap-4">
//               Initialize Admissions
//               <FaArrowRightLong className="group-hover:translate-x-2 transition-transform" />
//             </span >
//           </Link>
//         </div>

//         {/* Floating Data Grid (Modern Fashion Catalog Style) */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-16 border-b border-zinc-100 mb-16">
          
//           {[
//             { icon: FaLocationDot, title: "Coordinate // Nodes", details: ["CITech, Krishnarajapuram,", "Bengaluru, KA - 560036"], link: "#" },
//             { icon: FaEnvelope, title: "Comm // Channel", details: ["openhouse@cambridge.edu.in"], link: "mailto:openhouse@cambridge.edu.in" },
//             { icon: FaPhone, title: "talk_line", details: ["+91 76762 70355, +91 63601 46030"], link: "tel:+917676270355" }
//           ].map((item, i) => (
//             <motion.div 
//               key={i}
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ delay: i * 0.15, duration: 0.6 }}
//               viewport={{ once: true }}
//               className="bg-white p-8 border border-zinc-100 rounded-2xl group hover:border-black transition-colors"
//             >
//               <item.icon className="text-zinc-200 text-3xl mb-8 group-hover:text-orange-600 transition-colors" />
//               <h4 className="text-zinc-500 font-bold uppercase text-[10px] tracking-[0.3em] mb-4">
//                 {item.title}
//               </h4>
//               <div className="space-y-1">
//                 {item.details.map((detail, index) => (
//                   <Link href={item.link} key={index} className="text-xl md:text-2xl font-bold leading-tight uppercase group-hover:text-black hover:italic decoration-orange-600 underline-offset-4">
//                     {detail}
//                   </Link>
//                 ))}
//               </div>
//             </motion.div>
//           ))}
//         </div>

//         {/* Bottom Metadata & Social Matrix */}
//         <div className="flex flex-col md:flex-row justify-between items-center gap-8">
//           <div className="flex items-center gap-4">
//             <h4 className="text-3xl font-black uppercase tracking-tighter text-zinc-300 pointer-events-none select-none">
//               CIT 2026
//             </h4>
//             <p className="text-[10px] uppercase font-bold tracking-widest text-zinc-500">
//               © {currentYear} Cambridge Institute of Technology. <br /> Crafted for Neural Innovation.
//             </p>
//           </div>

//           <div className="flex items-center gap-4 lg:justify-end">
//             <span className="text-[10px] uppercase tracking-[0.3em] text-zinc-400 font-bold">Signal</span>
//             <div className="flex gap-4">
//               {[FaLinkedinIn, FaInstagram, FaXTwitter, FaFacebookF].map((Icon, i) => (
//                 <Link 
//                   key={i} 
//                   href="#" 
//                   className="w-12 h-12 rounded-full border border-zinc-200 text-zinc-400 flex items-center justify-center text-xl hover:bg-black hover:text-white hover:border-black transition-all"
//                 >
//                   <Icon />
//                 </Link>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }















// 'use client';

// import { motion } from 'framer-motion';
// import Link from "next/link";
// import { FaLinkedin, FaXTwitter, FaInstagram, FaFacebook, FaPhone, FaEnvelope, FaLocationDot } from "react-icons/fa6";

// export default function Footer() {
//   return (
//     <footer className="relative bg-black text-white overflow-hidden py-32">
//       {/* Background subtle grid + noise */}
//       <div className="absolute inset-0 opacity-10 pointer-events-none"
//         style={{
//           backgroundImage: `
//             linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
//             linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)
//           `,
//           backgroundSize: '60px 60px',
//         }}
//       />

//       <div className="max-w-screen-2xl mx-auto px-8 md:px-16 relative">
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-16 gap-y-24 items-start">
          
//           {/* Massive Brand Statement */}
//           <motion.div 
//             className="lg:col-span-7"
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             transition={{ duration: 1.2 }}
//             viewport={{ once: true }}
//           >
//             <div className="relative">
//               <h2 className="font-['BS'] text-[14vw] md:text-[180px] leading-[0.82] tracking-[-8px] font-black text-white/90">
//                 CAMBRIDGE
//               </h2>
//               <h2 className="font-['BS'] text-[14vw] md:text-[180px] leading-[0.82] tracking-[-8px] -mt-8 md:-mt-12 text-transparent bg-clip-text bg-gradient-to-r from-white via-amber-300 to-white">
//                 INSTITUTE
//               </h2>
//               <div className="absolute -bottom-6 right-4 text-amber-400 font-['OSK'] text-xl tracking-[4px]">
//                 OF TECHNOLOGY
//               </div>
//             </div>
//           </motion.div>

//           {/* Contact Block - Vertical & Clean */}
//           <motion.div 
//             className="lg:col-span-5 lg:pt-12"
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.9, delay: 0.2 }}
//             viewport={{ once: true }}
//           >
//             <div className="space-y-10">
//               <div>
//                 <div className="text-amber-400 text-xs tracking-[3px] font-['OSK'] mb-3">BENGALURU CAMPUS</div>
//                 <div className="flex items-start gap-6">
//                   <FaLocationDot className="text-4xl flex-shrink-0 mt-1 text-amber-400" />
//                   <div className="font-['OSK'] text-2xl leading-tight">
//                     Krishnarajapuram<br />
//                     Bengaluru, Karnataka 560036
//                   </div>
//                 </div>
//               </div>

//               <div className="flex flex-col sm:flex-row gap-10">
//                 <div>
//                   <div className="text-amber-400 text-xs tracking-[3px] font-['OSK'] mb-3">CALL US</div>
//                   <a href="tel:+917676270355" className="block font-['OSK'] text-2xl hover:text-amber-400 transition-colors">
//                     +91 7676270355
//                   </a>
//                   <a href="tel:+916360146030" className="block font-['OSK'] text-2xl hover:text-amber-400 transition-colors">
//                     +91 6360146030
//                   </a>
//                 </div>

//                 <div>
//                   <div className="text-amber-400 text-xs tracking-[3px] font-['OSK'] mb-3">WRITE TO US</div>
//                   <a href="mailto:openhouse@cambridge.edu.in" className="font-['OSK'] text-2xl hover:text-amber-400 transition-colors">
//                     openhouse@cambridge.edu.in
//                   </a>
//                 </div>
//               </div>
//             </div>
//           </motion.div>
//         </div>

//         {/* Admissions CTA + Social Cluster */}
//         <div className="mt-32 flex flex-col lg:flex-row justify-between items-end gap-20 border-t border-white/10 pt-20">
          
//           {/* Big CTA */}
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.3 }}
//             viewport={{ once: true }}
//           >
//             <Link href="http://15.207.194.161/" passHref>
//               <motion.button
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.96 }}
//                 className="group relative px-16 py-8 text-3xl font-['OSK'] tracking-widest border border-white/30 hover:border-amber-400 transition-all rounded-2xl overflow-hidden"
//               >
//                 <span className="relative z-10 group-hover:text-black">ADMISSIONS OPEN 2026</span>
//                 <div className="absolute inset-0 bg-amber-400 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
//               </motion.button>
//             </Link>
//           </motion.div>

//           {/* Social Icons - Experimental Cluster */}
//           <motion.div 
//             className="flex flex-wrap gap-6 justify-center lg:justify-end"
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             transition={{ duration: 1, delay: 0.4 }}
//             viewport={{ once: true }}
//           >
//             {[
//               { Icon: FaLinkedin, href: "https://www.linkedin.com/company/cambrian-open-house", label: "LinkedIn" },
//               { Icon: FaXTwitter, href: "https://x.com/citopenhouse", label: "X" },
//               { Icon: FaInstagram, href: "https://www.instagram.com/cambrianopenhouse", label: "Instagram" },
//               { Icon: FaFacebook, href: "https://www.facebook.com/cambrianopenhouse/", label: "Facebook" },
//             ].map(({ Icon, href, label }, index) => (
//               <motion.div
//                 key={index}
//                 whileHover={{ y: -12, rotate: index % 2 === 0 ? -8 : 8 }}
//                 transition={{ type: "spring", stiffness: 300 }}
//                 className="group"
//               >
//                 <Link href={href} target="_blank" rel="noopener noreferrer">
//                   <div className="w-20 h-20 rounded-2xl border border-white/20 flex items-center justify-center hover:border-amber-400 hover:bg-white/5 transition-all duration-300">
//                     <Icon className="text-4xl group-hover:text-amber-400 transition-colors" />
//                   </div>
//                 </Link>
//                 <div className="text-center text-[10px] tracking-widest mt-2 text-white/40 font-['OSK']">{label}</div>
//               </motion.div>
//             ))}
//           </motion.div>
//         </div>

//         {/* Bottom Signature Line */}
//         <motion.div 
//           className="mt-28 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-xs font-['OSK'] tracking-[2px] text-white/50"
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           transition={{ delay: 0.6 }}
//           viewport={{ once: true }}
//         >
//           <div>© 2026 Cambridge Institute of Technology • Bengaluru, India</div>
//           <div className="mt-4 md:mt-0 flex gap-8">
//             <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
//             <Link href="#" className="hover:text-white transition-colors">Legal</Link>
//             <Link href="#" className="hover:text-white transition-colors">Sitemap</Link>
//           </div>
//           <div className="mt-4 md:mt-0">Crafted with vision</div>
//         </motion.div>
//       </div>
//     </footer>
//   );
// }