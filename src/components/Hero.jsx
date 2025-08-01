import React from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Hero() {
  const { currentUser } = useAuth();
  const navigate = useNavigate();

  const handleEnroll = () => {
    if (currentUser) {
      navigate('/payment');
    } else {
      navigate('/login');
    }
  };

  return (
    <section
      className="relative min-h-screen overflow-hidden bg-gradient-to-br from-black via-gray-900 to-black text-white flex flex-col justify-between items-center px-4 pt-24 pb-12 md:pt-32"
      id="hero"
    >
      {/* 💫 Background Glow Effects */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-blue-500 rounded-full mix-blend-screen opacity-20 blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-pink-500 rounded-full mix-blend-screen opacity-20 blur-3xl animate-ping"></div>
      <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-purple-500 rounded-full mix-blend-screen opacity-10 blur-2xl animate-spin-slow -translate-x-1/2 -translate-y-1/2"></div>

      {/* Top Welcome Text */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="z-10 text-center"
      >
        <h1 className="text-4xl md:text-6xl font-extrabold drop-shadow-xl">
          Welcome to <span className="bg-gradient-to-r from-green-400 to-blue-500 text-transparent bg-clip-text">Our Team</span>
        </h1>
        <p className="mt-4 text-lg text-gray-300 max-w-xl mx-auto">
          Master the art of trading with expert-led strategies, tools, and real-world insights.
        </p>
      </motion.div>

      {/* DP Logo */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
        className="relative z-10 mt-12 text-center"
      >
        <div className="relative inline-block">
          <div className="text-[6rem] md:text-[7rem] font-extrabold leading-none text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-400 to-white tracking-tight">
            DP
          </div>
          <div className="absolute top-0 left-1 text-[6rem] md:text-[7rem] font-extrabold leading-none text-black opacity-25 tracking-tight select-none">
            DP
          </div>
        </div>
        <p className="mt-2 text-sm font-semibold tracking-widest uppercase text-gray-100">
          Discipline & Patience in Trading
        </p>
      </motion.div>

      {/* CTA Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: true }}
        className="z-10 text-center space-y-4 mt-10"
      >
        <h2 className="text-2xl md:text-3xl font-bold leading-tight tracking-wide">
          Start Your Trading Journey
        </h2>
        <p className="text-sm md:text-lg text-gray-300 max-w-xl mx-auto">
          Learn stock market fundamentals, advanced strategies, and practical trading psychology.
        </p>
        <div className="mt-4 flex flex-col md:flex-row justify-center gap-4">
          <button
            onClick={handleEnroll}
            className="px-6 py-3 bg-green-600 text-white rounded-xl shadow-lg hover:bg-green-700 transition duration-300"
          >
            Enroll Now
          </button>
          <a
            href="#learn"
            className="px-6 py-3 border border-gray-300 rounded-xl text-white hover:bg-white hover:text-black transition duration-300"
          >
            Explore Courses
          </a>
        </div>
      </motion.div>

      {/* WHY US Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        viewport={{ once: true }}
        id="whyus"
        className="z-10 mt-24 text-center max-w-3xl mx-auto"
      >
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-green-400">Why Choose DP Trading?</h2>
        <ul className="text-gray-300 space-y-2 text-sm md:text-base">
          <li>✅ Learn from experienced traders with real portfolios.</li>
          <li>✅ Practical sessions with live charts and indicators.</li>
          <li>✅ Focus on discipline, strategy, and risk management.</li>
          <li>✅ Community-driven mentorship and discussions.</li>
        </ul>
      </motion.div>

      {/* Live Feedback Prompt Instead of Testimonials */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: true }}
        className="z-10 mt-24 max-w-3xl mx-auto text-center"
      >
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-yellow-400">📢 Share Your Thoughts</h2>
        <p className="text-gray-300 mb-4">
          We're just getting started. Be part of the journey—leave your feedback or suggestions!
        </p>
        <a
  href="#feedback"
  className="inline-block px-6 py-3 bg-yellow-500 text-black font-semibold rounded-xl hover:bg-yellow-600 transition"
>
  Give Feedback
</a>


      </motion.div>

      {/* Enrollment CTA */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: true }}
        id="enroll"
        className="z-10 mt-24 max-w-3xl mx-auto text-center"
      >
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-green-400">Ready to Begin?</h2>
        <p className="text-gray-300">Join our early access batch and transform your trading game.</p>
      </motion.div>
    </section>
  );
}
