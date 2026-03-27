'use client';

import { motion } from 'framer-motion';
import Link from "next/link";
import { FaLinkedin, FaXTwitter, FaInstagram, FaFacebook, FaPhone, FaEnvelope, FaLocationDot } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="relative bg-white text-black overflow-hidden flex flex-col">
      {/* Content-Footer Divider Line - Mobbin Style */}
      <div className="absolute top-0 left-0 right-0 w-full flex justify-center items-center" style={{ height: '1px' }}>
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
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
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
              <h3 className="text-2xl font-['BS'] mb-6 relative inline-block">
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
              <h3 className="text-2xl font-['BS'] mb-6 relative inline-block">
                Contact Us
                <span className="absolute -bottom-2 left-0 w-12 h-1 bg-black rounded-full"></span>
              </h3>
              <ul className="space-y-4">
                <motion.li
                  className="flex items-start space-x-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  <FaLocationDot className="text-xl mt-1" />
                  <span className="font-['OSK'] tracking-wide text-gray-800">CITech, Krishnarajapuram, Bengaluru - 560036</span>
                </motion.li>
                <motion.li
                  className="flex items-start space-x-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <FaPhone className="text-xl mt-1" />
                  <span className="font-['OSK'] tracking-wide text-gray-800">+91 7676270355, +91 6360146030 </span>
                </motion.li>
                <motion.li
                  className="flex items-start space-x-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <FaEnvelope className="text-xl mt-1" />
                  <span className="font-['OSK'] tracking-wide text-gray-800">openhouse@cambridge.edu.in</span>
                </motion.li>
              </ul>
            </motion.div>

            {/* Social Media */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-['BS'] mb-6 relative inline-block">
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
