'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const SuccessPage = () => {
    return (
        <div className="relative min-h-screen">
            <div className="min-h-screen pt-16 sm:pt-24">
                <div className="max-w-4xl mx-auto px-4 py-16 sm:py-24">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-12"
                    >
                        <h1 className="text-4xl sm:text-3xl font-bold text-[#67B044] mb-4 font-['BS']">
                            Registration <br className="md:hidden" /> <span className="inline-block mt-2 md:mt-4 md:ml-3">Successful!</span>
                        </h1>
                        <p className="text-xl text-gray-600 font-['OSK'] tracking-wider mb-2">
                            We are all ready to see you at the Open Day!
                        </p>
                        <p className="text-lg text-[#67B044] font-semibold font-['OSK'] tracking-wider">
                            2nd MAY 2026 from 9:30 AM - 5:00 PM
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="bg-white/80 backdrop-blur-sm rounded-xl p-8 sm:p-12 mb-12 border border-[#9EE666]/30 shadow-sm"
                    >
                        <div className="space-y-6">
                            <div className="flex items-start space-x-4">
                                <div className="flex-shrink-0">
                                    <div className="w-12 h-12 rounded-full bg-[#67B044]/10 flex items-center justify-center">
                                        <svg className="w-6 h-6 text-[#67B044]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-gray-800 mb-2 font-['OSK'] tracking-wider">
                                        Confirmation Details
                                    </h3>
                                    <p className="text-gray-600 font-['OSK'] tracking-wider leading-relaxed">
                                        Your registration for Cambridge Institute of Technology Open House 2026 has been successfully processed. We&apos;re excited to welcome you to our campus for an extraordinary showcase of innovation and technology.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="flex-shrink-0">
                                    <div className="w-12 h-12 rounded-full bg-[#67B044]/10 flex items-center justify-center">
                                        <svg className="w-6 h-6 text-[#67B044]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-gray-800 mb-2 font-['OSK'] tracking-wider">
                                        What&apos;s Next?
                                    </h3>
                                    <p className="text-gray-600 font-['OSK'] tracking-wider leading-relaxed">
                                        You will receive a confirmation email shortly with all the event details, including the schedule, venue information, and parking details. Please check your inbox and spam folder.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="flex-shrink-0">
                                    <div className="w-12 h-12 rounded-full bg-[#67B044]/10 flex items-center justify-center">
                                        <svg className="w-6 h-6 text-[#67B044]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-gray-800 mb-2 font-['OSK'] tracking-wider">
                                        Get Ready for the Experience
                                    </h3>
                                    <p className="text-gray-600 font-['OSK'] tracking-wider leading-relaxed">
                                        Prepare to explore 100+ innovation stalls, witness live demonstrations, and participate in interactive workshops. Our team is working hard to make this an unforgettable experience for you!
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="text-center"
                    >
                        <Link href="/">
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="bg-[#67B044] text-white font-['OSK'] tracking-wider px-8 py-3 rounded-full text-lg shadow-lg hover:bg-[#67B044]/90 transition-colors"
                            >
                                Return to Home
                            </motion.button>
                        </Link>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default SuccessPage;
