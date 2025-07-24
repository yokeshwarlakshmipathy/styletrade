// File: src/components/Hero.jsx
import React from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

export default function Hero() {
  const { currentUser } = useAuth();
  const navigate = useNavigate();

  const handleEnroll = () => {
    if (currentUser) {
      navigate('/dashboard');
    } else {
      navigate('/login');
    }
  };

  const handleExplore = () => {
    if (currentUser) {
      navigate('/learn');
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
      <div className="z-10 text-center">
        <h1 className="text-2xl md:text-4xl font-bold drop-shadow-xl">Welcome to Trading + Fashion 🚀</h1>
        <p className="mt-2 md:mt-4 text-base md:text-lg text-gray-300">Your 2-in-1 career kickstart platform</p>
      </div>

      {/* Custom DP Logo Design */}
      <div className="relative z-10 mt-10 text-center">
        <div className="relative inline-block">
          <div className="text-[6rem] md:text-[7rem] font-extrabold leading-none text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-400 to-white tracking-tight">
            DP
          </div>
          <div className="absolute top-0 left-1 text-[6rem] md:text-[7rem] font-extrabold leading-none text-black opacity-25 tracking-tight select-none">
            DP
          </div>
        </div>
        <p className="mt-2 text-sm md:text-base font-semibold tracking-widest uppercase text-gray-100">Discipline & Patience</p>
      </div>

      {/* Bottom CTA Content */}
      <div className="z-10 text-center space-y-4">
        <h2 className="text-xl md:text-3xl font-extrabold leading-tight tracking-wide">
          Trade Smart. Dress Smart.
        </h2>
        <p className="text-sm md:text-lg text-gray-300 max-w-xl mx-auto">
          Empowering Students, Professionals & Job Seekers with Finance + Fashion.
        </p>
        <div className="mt-4 flex flex-col md:flex-row justify-center gap-4">
          <button
            onClick={handleEnroll}
            className="px-6 py-3 bg-blue-600 text-white rounded-xl shadow-lg hover:bg-blue-700 transition duration-300"
          >
            Enroll Now
          </button>
          <button
            onClick={handleExplore}
            className="px-6 py-3 border border-gray-300 rounded-xl text-white hover:bg-white hover:text-black transition duration-300"
          >
            Explore Curriculum
          </button>
        </div>
      </div>

      {/* 🔥 WHY US Section */}
      <div id="whyus" className="z-10 mt-24 text-center max-w-3xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-pink-400">Why Choose StyleTrade?</h2>
        <ul className="text-gray-300 space-y-2 text-sm md:text-base">
          <li>✅ Industry Experts from Trading & Fashion mentoring you.</li>
          <li>✅ Real-world skillsets — technical analysis meets professional styling.</li>
          <li>✅ Job-oriented & personality-boosting curriculum.</li>
          <li>✅ Built for students, professionals & job seekers.</li>
        </ul>
      </div>

      {/* 💡 ABOUT Section */}
      <div id="about" className="z-10 mt-24 max-w-5xl mx-auto text-center px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-blue-400">About StyleTrade</h2>
        <p className="text-gray-300 text-base md:text-lg leading-relaxed">
          StyleTrade is India’s first dual-niche platform designed to empower learners with real-world
          <span className="text-pink-400 font-semibold"> Trading strategies</span> and
          <span className="text-yellow-400 font-semibold"> Fashion confidence</span>.
          Whether you're a student, a working professional, or preparing for your dream job,
          StyleTrade gives you the tools to succeed—inside and out.
        </p>
        <div className="mt-10 grid md:grid-cols-2 gap-6 text-left">
          <div className="bg-white/5 p-6 rounded-xl border border-white/10">
            <h3 className="text-lg font-semibold text-green-400 mb-2">Our Vision</h3>
            <p className="text-gray-400">To redefine career preparation by merging financial intelligence with self-confidence through grooming.</p>
          </div>
          <div className="bg-white/5 p-6 rounded-xl border border-white/10">
            <h3 className="text-lg font-semibold text-pink-400 mb-2">Who We Help</h3>
            <p className="text-gray-400">Students, job seekers, professionals, and anyone who wants to elevate their lifestyle and future.</p>
          </div>
        </div>
      </div>

      {/* 💬 TESTIMONIALS Section */}
      <div id="testimonials" className="z-10 mt-24 max-w-4xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-yellow-400">Testimonials</h2>
        <div className="grid md:grid-cols-2 gap-6 text-left">
          <div className="bg-white/5 p-4 rounded-xl border border-white/10">
            <p className="text-gray-100 mb-2">"StyleTrade gave me the confidence to trade like a pro and dress like a leader. Totally unique!"</p>
            <span className="text-pink-400 font-semibold">— Divya S, B.Com Student</span>
          </div>
          <div className="bg-white/5 p-4 rounded-xl border border-white/10">
            <p className="text-gray-100 mb-2">"The dual learning concept helped me ace interviews and market analysis."</p>
            <span className="text-blue-400 font-semibold">— Rahul K, IT Professional</span>
          </div>
        </div>
      </div>

      {/* 📥 Enroll Section Placeholder */}
      <div id="enroll" className="z-10 mt-24 max-w-3xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-green-400">Enrollment Coming Soon</h2>
        <p className="text-gray-300">We're currently onboarding early users. Stay tuned or join our waitlist!</p>
      </div>

      {/* Footer */}
      <footer className="w-full text-center mt-24 text-sm text-gray-500 border-t border-white/10 pt-4">
        © 2025 StyleTrade. Crafted with ❤️ by Yokeshwar L
      </footer>
    </section>
  );
}
