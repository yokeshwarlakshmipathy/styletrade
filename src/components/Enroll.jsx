// File: src/components/Enroll.jsx
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLocation, useNavigate } from 'react-router-dom';
import { GraduationCap, LineChart, Clock } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export default function Enroll() {
  const { currentUser } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();


  // const navigate = useNavigate();
  // const handleEnroll = () => {
  //   navigate('/enrollform');
  // };

  const handleEnroll = () => {
    if (currentUser) {
      const pricingSection = document.getElementById('pricing');
      if (pricingSection) {
        pricingSection.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate('/login', { state: { from: '/', scrollTo: 'pricing' } });
    }
  };
  
  // 👇 Scroll to pricing if returned from login
  useEffect(() => {
    if (location.state?.scrollTo === 'pricing') {
      const pricingSection = document.getElementById('pricing');
      if (pricingSection) {
        setTimeout(() => {
          pricingSection.scrollIntoView({ behavior: 'smooth' });
        }, 300); // Small delay to ensure DOM is ready
      }
    }
  }, [location]);

  return (
    <section
      id="enroll"
      className="relative bg-gradient-to-br from-black via-gray-900 to-black text-white py-28 px-6 overflow-hidden"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto text-center"
      >
        <h2 className="text-3xl md:text-5xl font-extrabold mb-6 text-green-400">
          Ready to Start Trading?
        </h2>

        <p className="text-gray-300 text-lg md:text-xl mb-10 max-w-3xl mx-auto leading-relaxed">
          Whether you're new or stuck in the learning loop, our hands-on training and expert-backed system will help you trade confidently and consistently.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
          <div className="bg-white/5 p-5 rounded-xl border border-white/10 backdrop-blur-md">
            <GraduationCap className="text-green-400 w-8 h-8 mx-auto mb-3" />
            <p className="text-gray-100 font-semibold">
              🔥 4-Week Beginner-to-Confident Trader Bootcamp
            </p>
          </div>

          <div className="bg-white/5 p-5 rounded-xl border border-white/10 backdrop-blur-md">
            <LineChart className="text-yellow-400 w-8 h-8 mx-auto mb-3" />
            <p className="text-yellow-400 font-semibold">
              📈 Strategy Videos, Checklist & Live Mentorship
            </p>
          </div>

          <div className="bg-white/5 p-5 rounded-xl border border-white/10 backdrop-blur-md">
            <Clock className="text-pink-400 w-8 h-8 mx-auto mb-3" />
            <p className="text-pink-400 font-medium">
              ⏳ Early Access Bonus: Telegram + Free Templates
            </p>
          </div>
        </div>

        <button
          onClick={handleEnroll}
          className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg shadow-xl transition-all duration-300"
        >
          Enroll Now — Start Learning
        </button>

        <p className="text-sm text-gray-400 mt-4">
          No prior experience needed. Just your time and commitment. Let’s go!
        </p>
      </motion.div>

      {/* Animated background accents */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-green-600 rounded-full opacity-20 animate-ping"></div>
      <div className="absolute bottom-10 right-10 w-24 h-24 bg-pink-600 rounded-full opacity-20 animate-pulse"></div>
    </section>
  );
}
