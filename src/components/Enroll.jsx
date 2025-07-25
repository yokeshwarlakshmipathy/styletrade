import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

export default function Enroll() {
  const navigate = useNavigate();

  const handleEnroll = () => {
    navigate('/register');
  };

  return (
    <section id="enroll" className="bg-gradient-to-br from-black via-gray-900 to-black text-white py-24 px-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-green-400">
          Ready to Start Trading?
        </h2>
        <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
          Whether you're new or stuck in the learning loop, our hands-on training and expert-backed system will help you trade confidently and consistently.
        </p>

        <div className="bg-white/5 border border-white/10 p-6 rounded-xl max-w-xl mx-auto space-y-4">
          <p className="text-gray-100">🔥 4-Week Beginner-to-Confident Trader Bootcamp</p>
          <p className="text-yellow-400 font-semibold">📈 Includes strategy videos, trading checklist & live mentorship</p>
          <p className="text-pink-400 font-medium">⏳ Limited slots for early access bonus (Telegram support + Free templates)</p>
        </div>

        <button
          onClick={handleEnroll}
          className="mt-10 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow-lg font-semibold transition"
        >
          Enroll Now — Start Learning
        </button>

        <p className="text-sm text-gray-400 mt-4">
          No prior experience needed. Just your time and commitment. Let’s go!
        </p>
      </motion.div>
    </section>
  );
}
