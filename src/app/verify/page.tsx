'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Verify() {
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Early exit if neither email nor phone number is provided
    if (!email && !phoneNumber) {
      setError('Please enter either a valid email address or a phone number.');
      return;
    }

    // Validate the provided input
    if (email && !validateEmail(email)) {
      setError('Please enter a valid email address');
      return;
    }
    if (phoneNumber && !validatePhone(phoneNumber)) {
      setError('Please enter a valid phone number');
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const res = await fetch('/api/verify', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          phoneNumber,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Failed to verify');
      }

      setSubmitted(true); // Set submitted state to true once verification is successful
    } catch (err: unknown) {
      if (err instanceof Error) {
        console.error('Verification error:', err);
        setError(err.message || 'An unexpected error occurred. Please try again later.');
      } else {
        console.error('Unknown error:', err);
        setError('An unexpected error occurred. Please try again later.');
      }
    }
    finally {
      setLoading(false); // Reset loading state after completion
    }
  };

  // Simple email validation regex
  const validateEmail = (email: string) => {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
  };

  // Simple phone number validation (for demo purposes, 10 digits)
  const validatePhone = (phone: string) => {
    const regex = /^[0-9]{10}$/;
    return regex.test(phone);
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center px-4 text-center bg-gradient-to-br from-[#f0fff4] to-[#dfffdc]">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white/80 backdrop-blur-md rounded-xl p-8 sm:p-10 shadow-lg border border-[#9EE666]/30 max-w-md w-full"
      >
        <h1 className="text-3xl sm:text-4xl font-bold text-green-700 font-['OSK'] tracking-wider mb-6">
          Verify Your Registration
        </h1>
        {!submitted ? (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email "
                className="w-full p-3 border border-[#9EE666]/40 rounded-lg bg-white/90 backdrop-blur-sm focus:ring-2 focus:ring-[#67B044] focus:border-transparent text-gray-700 placeholder-gray-400 font-['OSK'] tracking-wider"
              />

              <div className="text-gray-600 font-semibold my-2">OR</div>

              <input
                type="text"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                placeholder="Enter your phone number "
                className="w-full p-3 border border-[#9EE666]/40 rounded-lg bg-white/90 backdrop-blur-sm focus:ring-2 focus:ring-[#67B044] focus:border-transparent text-gray-700 placeholder-gray-400 font-['OSK'] tracking-wider"
              />
            </div>

            {error && <div className="text-red-600 font-semibold">{error}</div>}

            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-3 rounded-lg bg-[#67B044] text-white font-bold text-lg shadow-md transition-all hover:shadow-lg hover:bg-[#5faa3e] font-['OSK'] tracking-wider"
            >
              {loading ? <span className="loader">Loading...</span> : 'Submit'}
            </motion.button>
          </form>
        ) : (
          <div className="text-green-700 font-semibold font-['OSK'] tracking-wider text-lg">
            Thank You for Verifying Your Information. Please present this screen at the registration desk to collect your wristbands and badges. We look forward to having you at the Open House. Enjoy the event!
          </div>
        )}
      </motion.div>
    </div>
  );
}
