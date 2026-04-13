// 'use client';

// import React, { useState, useRef, useEffect } from 'react';
// import { motion } from 'framer-motion';
// import { FiBox, FiTarget, FiBriefcase, FiCpu, FiChevronDown } from 'react-icons/fi';
// import Image from 'next/image';
// import { useRouter } from 'next/navigation';

// export default function About() {
//   const router = useRouter();
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     age: "",
//     gender: "",
//     phoneNumber: "",
//     city: "",
//     occupation: "",
//     interest: [] as string[], // Ensure this is an empty array initially
//   });

//   const [status, setStatus] = useState('');
//   const [isOpen, setIsOpen] = useState(false);
//   const dropdownRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const handleClickOutside = (event: MouseEvent) => {
//       if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
//         setIsOpen(false);
//       }
//     };

//     document.addEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, []);

//   const interests = [
//     "AI & Machine Learning",
//     "Robotics & Automation",
//     "Web & Mobile Development",
//     "IoT & Hardware",
//     "Cybersecurity",
//   ];

//   const features = [
//     {
//       icon: FiBox,
//       title: '100+ Innovation Stalls',
//       description: 'Explore a vast array of cutting-edge projects, from AI and robotics to sustainable technology solutions.',
//     },
//     {
//       icon: FiCpu,
//       title: 'Tech Innovation Hub',
//       description: 'Witness groundbreaking innovations from our brightest minds across multiple engineering disciplines.',
//     },
//     {
//       icon: FiBriefcase,
//       title: 'Industry Connect',
//       description: 'Interact with industry leaders and explore potential collaboration opportunities.',
//     },
//     {
//       icon: FiTarget,
//       title: 'Future Tech',
//       description: "Experience tomorrow's technology today through interactive demonstrations and workshops.",
//     },
//   ];

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setStatus("Submitting...");

//     try {
//       // For development/testing purposes
//       if (process.env.NODE_ENV === 'development') {
//         // Simulate a successful response
//         await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate API delay
//         router.push('/success');
//         return;
//       }

//       const res = await fetch("/api/register", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//           ...formData,
//           interest: formData.interest.join(", "),
//         }),
//       });

//       if (res.ok) {
//         router.push('/success');
//       } else {
//         setStatus("Failed to register.");
//       }
//     } catch (error) {
//       setStatus("An error occurred.");
//       console.error(error);
//     }
//   };

//   // Updated checkbox handler only processes interests now
//   const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value, checked } = event.target;

//     if (name === "interest") {
//       setFormData((prev) => ({
//         ...prev,
//         interest: checked
//           ? [...prev.interest, value]
//           : prev.interest.filter((item) => item !== value),
//       }));
//     }
//   };

//   return (
//     <div className="relative min-h-screen p-4 sm:p-[2em] pt-10 sm:pt-16" id="about">
//       <div className="relative z-10 mx-auto">
//         {/* Header Section */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//           className="text-center mb-10 sm:mb-20 mt-10 sm:mt-16"
//         >
//           <h1 className="font-['BS'] max-sm:text-[8vw] max-sm:leading-[15vw] text-4xl sm:text-5xl md:text-6xl lg:text-5xl font-bold text-[#141414] mb-3 sm:mb-6">
//             Innovation Showcase
//           </h1>
//           <p className="font-['OSK'] text-center text-gray-700 max-w-3xl mx-auto mb-[2em] tracking-wider md:tracking-widest text-lg md:text-xl font-light leading-relaxed md:leading-loose">
//             Discover a world of innovation at CIT&apos;s largest tech exhibition featuring 100+ stalls of groundbreaking ideas and solutions
//           </p>
//         </motion.div>

//         {/* Features Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8 mb-8 sm:mb-16">
//           {features.map((feature, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: index * 0.1 }}
//               viewport={{ once: true }}
//               className="bg-white/80 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-[#9EE666]/30 hover:border-[#9EE666]/50 transition-all duration-300 shadow-sm hover:shadow-md font-light"
//             >
//               <div className="bg-[#67B044] w-10 h-10 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
//                 <feature.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
//               </div>
//               <h3 className="font-['OSK'] tracking-wide md:tracking-wider text-2xl sm:text-3xl md:text-3xl font-bold text-gray-800 mb-2 sm:mb-3">
//                 {feature.title}
//               </h3>
//               <p className="font-['OSK'] tracking-wider md:tracking-widest text-gray-600 text-lg font-semibold leading-relaxed md:leading-loose">
//                 {feature.description}
//               </p>
//             </motion.div>
//           ))}
//         </div>

//         {/* Stats Section */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//           className="bg-white/80 backdrop-blur-sm rounded-xl p-4 sm:p-8 border border-[#9EE666]/30 shadow-sm"
//         >
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 text-center">
//             <div>
//               <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#67B044] mb-2 sm:mb-3 font-['OSK'] tracking-wide md:tracking-wider">100+</div>
//               <div className="font-['OSK'] tracking-wider md:tracking-widest text-gray-700 text-xl sm:text-2xl font-semibold">Innovation Stalls</div>
//             </div>
//             <div>
//               <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#FFE600] mb-2 sm:mb-3 font-['OSK'] tracking-wide md:tracking-wider">50+</div>
//               <div className="font-['OSK'] tracking-wider md:tracking-widest text-gray-700 text-xl sm:text-2xl font-semibold">Live Demos</div>
//             </div>
//             <div>
//               <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#67B044] mb-2 sm:mb-3 font-['OSK'] tracking-wide md:tracking-wider">20+</div>
//               <div className="font-['OSK'] tracking-wider md:tracking-widest text-gray-700 text-xl sm:text-2xl font-semibold">Tech Workshops</div>
//             </div>
//             <div>
//               <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#141414] mb-2 sm:mb-3 font-['OSK'] tracking-wide md:tracking-wider">2000+</div>
//               <div className="font-['OSK'] tracking-wider md:tracking-widest text-gray-700 text-xl sm:text-2xl font-semibold">Expected Visitors</div>
//             </div>
//           </div>
//         </motion.div>

//         {/* Registration Image */}
//         <div className='mt-6 sm:mt-[2em]'>
//           <Image
//             src="/about/amain.webp"
//             alt="Innovation Stalls"
//             width={600}
//             height={400}
//             className="w-full"
//           />
//         </div>

//         {/* Registration Form */}
//         <div className='w-full flex flex-col md:flex-row px-0 sm:px-[1em] gap-4 sm:gap-[2em]'>
//           {/* Aposters Image with White Background Removed */}
//           <div className='mt-[2em] hidden md:flex justify-center md:w-1/2'>
//             <Image
//               src="/about/aposters.webp"
//               alt="Innovation Stalls"
//               width={400}
//               height={400}
//               className="w-full bg-transparent"
//               style={{ background: 'transparent' }}
//             />
//           </div>
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             viewport={{ once: true }}
//             id='registration-section'
//             className="mt-4 sm:mt-8 bg-white/80 backdrop-blur-sm rounded-xl p-4 sm:p-8 border border-[#9EE666]/30 w-full md:w-1/2 mx-auto shadow-sm"
//           >
//             <h3 className="text-2xl sm:text-3xl font-bold text-green-700 mb-6 font-['OSK'] tracking-wider md:tracking-widest text-center">
//               Register for Open House
//             </h3>
//             <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
//               <input
//                 type="text"
//                 name="name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 placeholder="Name*"
//                 required
//                 className="font-['OSK'] w-full p-2 sm:p-3 border border-[#9EE666]/40 rounded-lg bg-white/90 backdrop-blur-sm focus:ring-2 focus:ring-[#67B044] focus:border-transparent text-gray-700 placeholder-gray-400 tracking-wider"
//               />
//               <input
//                 type="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 placeholder="Email*"
//                 required
//                 className="font-['OSK'] w-full p-3 border border-[#9EE666]/40 rounded-lg bg-white/90 backdrop-blur-sm focus:ring-2 focus:ring-[#67B044] focus:border-transparent text-gray-700 placeholder-gray-400 tracking-wider"
//               />
//               <input
//                 type="number"
//                 name="age"
//                 value={formData.age}
//                 onChange={handleChange}
//                 placeholder="Age*"
//                 min="1"
//                 max="100"
//                 required
//                 className='font-["OSK"] w-full p-3 border border-[#9EE666]/40 rounded-lg bg-white/90 backdrop-blur-sm focus:ring-2 focus:ring-[#67B044] focus:border-transparent text-gray-700 appearance-none cursor-pointer tracking-wider'
//               />
//               <select
//                 name="gender"
//                 value={formData.gender}
//                 onChange={handleChange}
//                 required
//                 className="font-['OSK'] w-full p-3 border border-[#9EE666]/40 rounded-lg bg-white/90 backdrop-blur-sm focus:ring-2 focus:ring-[#67B044] focus:border-transparent text-gray-700 appearance-none cursor-pointer tracking-wider"
//               >
//                 <option value="" disabled>Select your Gender</option>
//                 <option value="Male">Male</option>
//                 <option value="Female">Female</option>
//                 <option value="Other">Other</option>
//               </select>
//               <div className="flex gap-2">
//                 <input
//                   type="tel"
//                   name="phoneNumber"
//                   value={formData.phoneNumber}
//                   onChange={handleChange}
//                   placeholder="Phone Number*"
//                   required
//                   className="font-['OSK'] w-full p-3 border border-[#9EE666]/40 rounded-lg bg-white/90 backdrop-blur-sm focus:ring-2 focus:ring-[#67B044] focus:border-transparent text-gray-700 placeholder-gray-400 tracking-wider"
//                 />
//               </div>
//               <input
//                 type="text"
//                 name="city"
//                 value={formData.city}
//                 onChange={handleChange}
//                 placeholder="City*"
//                 required
//                 className="font-['OSK'] w-full p-3 border border-[#9EE666]/40 rounded-lg bg-white/90 backdrop-blur-sm focus:ring-2 focus:ring-[#67B044] focus:border-transparent text-gray-700 placeholder-gray-400 tracking-wider"
//               />
//               <div className="relative w-full" ref={dropdownRef}>
//                 <button
//                   type="button"
//                   onClick={() => setIsOpen(!isOpen)}
//                   className="font-['OSK'] w-full p-3 border flex flex-row justify-between border-[#9EE666]/40 rounded-lg bg-white/90 backdrop-blur-sm focus:ring-2 focus:ring-[#67B044] focus:border-transparent text-gray-700 cursor-pointer tracking-wider"
//                 >
//                   <span>
//                     {formData.interest.length > 0
//                       ? formData.interest.join(", ")
//                       : "Select Your Interests"}
//                   </span>
//                   <FiChevronDown className="w-5 h-5 text-gray-500" />
//                 </button>
//                 {isOpen && (
//                   <div className="absolute w-full mt-1 bg-white border border-[#9EE666]/40 rounded-lg shadow-lg z-10">
//                     <div className="p-2 max-h-48 overflow-y-auto">
//                       {interests.map((interest) => (
//                         <label key={interest} className="flex items-center gap-2 p-2 rounded hover:bg-[#9EE666]/10 cursor-pointer">
//                           <input
//                             type="checkbox"
//                             name="interest"
//                             value={interest}
//                             checked={formData.interest.includes(interest)}
//                             onChange={handleCheckboxChange}
//                             className="w-4 h-4 text-[#67B044] focus:ring focus:ring-[#67B044]/30"
//                           />
//                           <span className="text-gray-700 font-['OSK'] tracking-wider">{interest}</span>
//                         </label>
//                       ))}
//                     </div>
//                   </div>
//                 )}
//               </div>
//               <div className="relative">
//                 <select
//                   name="occupation"
//                   value={formData.occupation}
//                   onChange={handleChange}
//                   required
//                   className='font-["OSK"] w-full p-3 border border-[#9EE666]/40 rounded-lg bg-white/90 backdrop-blur-sm focus:ring-2 focus:ring-[#67B044] focus:border-transparent text-gray-700 appearance-none cursor-pointer tracking-wider pr-10'
//                 >
//                   <option value="" disabled>Your Occupation</option>
//                   <option>Student</option>
//                   <option>Faculty/Professor</option>
//                   <option>Researcher</option>
//                   <option>Industry Professional</option>
//                   <option>Startup Founder/Entrepreneur</option>
//                   <option>Government Official</option>
//                   <option>Investor/Venture Capitalist</option>
//                   <option>Parent/Guardian</option>
//                   <option>School Representative {('Principal/Teacher')}</option>
//                   <option>Media/Journalist</option>
//                   <option>Other</option>
//                 </select>
//                 <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
//                   <FiChevronDown className="w-5 h-5 text-gray-500" />
//                 </div>
//               </div>
//               <motion.button
//                 type="submit"
//                 className="font-['OSK'] w-full py-4 rounded-lg bg-[#67B044] text-white font-bold text-xl sm:text-2xl shadow-md transition-all hover:shadow-lg hover:bg-[#67B044]/90 tracking-wider md:tracking-widest"
//                 whileHover={{ scale: 1.02 }}
//                 whileTap={{ scale: 0.98 }}
//               >
//                 REGISTER NOW
//               </motion.button>
//             </form>
//             {status && <p className="mt-4 text-center text-gray-600 font-['OSK'] tracking-wider">{status}</p>}
//           </motion.div>
//         </div>
//       </div>
//     </div>
//   );
// }












'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronDown, FiArrowRight } from 'react-icons/fi';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function About() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: "",
    gender: "",
    phoneNumber: "",
    city: "",
    occupation: "",
    interest: [] as string[],
  });

  const [status, setStatus] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const interests = [
    "AI & Machine Learning",
    "Robotics & Automation",
    "Web & Mobile Development",
    "IoT & Hardware",
    "Cybersecurity",
  ];

  const features = [
    { title: '100+ Innovation Stalls', description: 'Explore a vast array of cutting-edge projects, from AI to sustainable tech.' },
    { title: 'Tech Innovation Hub', description: 'Witness groundbreaking innovations from our brightest engineering minds.' },
    { title: 'Industry Connect', description: 'Interact with industry leaders and explore collaboration opportunities.' },
    { title: 'Future Tech', description: "Experience tomorrow's technology today through interactive demos." },
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = event.target;
    setFormData((prev) => ({
      ...prev,
      interest: checked
        ? [...prev.interest, value]
        : prev.interest.filter((item) => item !== value),
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("System Check...");
    try {
      if (process.env.NODE_ENV === 'development') {
        await new Promise(resolve => setTimeout(resolve, 1000));
        router.push('/success');
        return;
      }
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, interest: formData.interest.join(", ") }),
      });
      if (res.ok) router.push('/success');
      else setStatus("Protocol Error: Registration Failed.");
    } catch (error) {
  console.error("Registration failed:", error);
  setStatus("Network Error.");
}
  };

  return (
    <div className="relative min-h-screen bg-[#FAF9F6] overflow-hidden selection:bg-[#9EE666]" id="about">
      
      {/* BACKGROUND DECOR */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden opacity-20">
        <h1 className="absolute -left-20 top-40 text-[20vw] font-black text-zinc-200 leading-none rotate-90 origin-top-left uppercase">
          Innovation
        </h1>
      </div>

      <div className="relative z-10 max-w-screen-2xl mx-auto px-6 py-24 lg:py-40">
        
        {/* HERO SECTION - ASYMMETRIC */}
        <div className="flex flex-col lg:flex-row gap-12 mb-40">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-2/3"
          >
            <span className="text-[10px] font-black tracking-[0.4em] text-[#67B044] uppercase mb-4 block">/ The Showcase</span>
            <h2 className="text-6xl md:text-9xl font-bold tracking-tighter text-[#1A1A1A] leading-[0.85] mb-8">
              Open House <br/> <span className="italic font-light text-zinc-400">Exhibition.</span>
            </h2>
            <p className="text-xl md:text-3xl text-zinc-600 max-w-2xl leading-tight font-light tracking-tight">
              Discover a world of innovation at CIT&apos;s largest tech exhibition featuring 100+ stalls of groundbreaking ideas and solutions.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="lg:w-1/3 flex items-center justify-center lg:justify-end"
          >
            <div className="grid grid-cols-2 gap-4 w-full max-w-sm">
              {[
                { val: "100+", lab: "Stalls" },
                { val: "50+", lab: "Demos" },
                { val: "20+", lab: "Workshops" },
                { val: "2k+", lab: "Visitors" }
              ].map((s, i) => (
                <div key={i} className="aspect-square bg-white border border-zinc-100 rounded-3xl flex flex-col items-center justify-center shadow-sm">
                  <span className="text-3xl font-bold text-[#67B044]">{s.val}</span>
                  <span className="text-[10px] uppercase tracking-widest text-zinc-400">{s.lab}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* FULL SCALE MAIN IMAGE */}
        <motion.div 
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="w-full h-[50vh] md:h-[80vh] relative rounded-[3rem] overflow-hidden mb-40 "
        >
          <Image src="/about/amain.webp" alt="Innovation Stalls" fill className="object-cover scale-110" />
        </motion.div>

        {/* FEATURES - SEAMLESS BENTO */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-40">
          {features.map((f, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="p-10 bg-white rounded-[2.5rem] border border-zinc-100 hover:border-[#9EE666] transition-all group"
            >
              <div className="w-12 h-12 rounded-2xl bg-zinc-50 flex items-center justify-center mb-10 group-hover:bg-[#9EE666] transition-colors">
                <FiArrowRight className="group-hover:-rotate-45 transition-transform" />
              </div>
              <h3 className="text-2xl font-bold mb-4">{f.title}</h3>
              <p className="text-zinc-500 leading-relaxed font-light">{f.description}</p>
            </motion.div>
          ))}
        </div>

        {/* REGISTRATION BLOCK - SPLIT SCREEN CRAZY */}
        <div className="flex flex-col lg:flex-row gap-8 items-stretch" id="registration-section">
          
          {/* IMAGE BLOCK */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="lg:w-1/2 relative min-h-[500px] rounded-[3rem] overflow-hidden bg-[#9EE666]/10"
          >
            <Image src="/left.png" alt="Posters" fill className="object-contain p-8 md:p-20" />
          </motion.div>

          {/* FORM BLOCK */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="lg:w-1/2 bg-black rounded-[3rem] p-8 md:p-16 text-white"
          >
            <div className="mb-12">
              <h3 className="text-4xl md:text-5xl font-bold mb-4 tracking-tighter">Register Now.</h3>
              <p className="text-zinc-400 font-light">Secure your spot for the open house experience.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name*" required className="w-full bg-zinc-900 border-none rounded-2xl p-5 focus:ring-2 focus:ring-[#9EE666] transition-all" />
                <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email*" required className="w-full bg-zinc-900 border-none rounded-2xl p-5 focus:ring-2 focus:ring-[#9EE666] transition-all" />
              </div>

              <div className="grid grid-cols-2 gap-6">
                <input type="number" name="age" value={formData.age} onChange={handleChange} placeholder="Age*" required className="w-full bg-zinc-900 border-none rounded-2xl p-5 focus:ring-2 focus:ring-[#9EE666] transition-all" />
                <select name="gender" value={formData.gender} onChange={handleChange} required className="w-full bg-zinc-900 border-none rounded-2xl p-5 focus:ring-2 focus:ring-[#9EE666] transition-all appearance-none">
                  <option value="" disabled>Gender*</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <input type="tel" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} placeholder="Phone Number*" required className="w-full bg-zinc-900 border-none rounded-2xl p-5 focus:ring-2 focus:ring-[#9EE666] transition-all" />
              <input type="text" name="city" value={formData.city} onChange={handleChange} placeholder="City*" required className="w-full bg-zinc-900 border-none rounded-2xl p-5 focus:ring-2 focus:ring-[#9EE666] transition-all" />

              {/* CRAZY CUSTOM MULTISELECT */}
              <div className="relative" ref={dropdownRef}>
                <button type="button" onClick={() => setIsOpen(!isOpen)} className="w-full bg-zinc-900 rounded-2xl p-5 text-left flex justify-between items-center group">
                  <span className={formData.interest.length > 0 ? "text-white" : "text-zinc-500"}>
                    {formData.interest.length > 0 ? formData.interest.join(", ") : "Select Interests"}
                  </span>
                  <FiChevronDown className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }} className="absolute z-50 w-full mt-2 bg-zinc-800 rounded-2xl p-4 shadow-2xl">
                      {interests.map((int) => (
                        <label key={int} className="flex items-center gap-3 p-3 hover:bg-zinc-700 rounded-xl cursor-pointer transition-colors">
                          <input type="checkbox" value={int} checked={formData.interest.includes(int)} onChange={handleCheckboxChange} className="accent-[#9EE666] w-4 h-4" />
                          <span className="text-sm font-medium">{int}</span>
                        </label>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <select name="occupation" value={formData.occupation} onChange={handleChange} required className="w-full bg-zinc-900 border-none rounded-2xl p-5 focus:ring-2 focus:ring-[#9EE666] transition-all appearance-none">
                <option value="" disabled>Occupation*</option>
                <option>Student</option>
                <option>Industry Professional</option>
                <option>Researcher</option>
                <option>Other</option>
              </select>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-6 bg-[#9EE666] text-black font-black text-xl rounded-2xl shadow-xl shadow-[#9EE666]/10 hover:shadow-[#9EE666]/20 transition-all uppercase tracking-widest"
              >
                Enter the Network
              </motion.button>
              {status && <p className="text-center font-mono text-[10px] text-zinc-500 tracking-tighter uppercase">{status}</p>}
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}