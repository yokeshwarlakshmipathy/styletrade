// File: src/components/About.jsx
import React from 'react';

export default function About() {
  return (
    <section id="about" className="bg-black text-white pt-24 px-4 pb-16">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-green-400">About DP Trading</h2>
        <p className="text-gray-400 text-base md:text-lg mb-4">
          Learn to trade the smart way — from price action to psychology — all in one practical ecosystem.
        </p>
        <p className="text-gray-300 text-base md:text-lg leading-relaxed">
          DP Trading is your gateway to mastering the financial markets. We offer structured and easy-to-digest education
          tailored for <span className="text-yellow-400 font-semibold">trading beginners</span> and <span className="text-pink-400 font-semibold">market explorers</span>.
          Our mission is to remove fear, build strategy, and sharpen discipline.
        </p>

        <div className="mt-10 grid md:grid-cols-3 gap-6 text-left">
          {/* Vision */}
          <div className="bg-white/5 p-6 rounded-xl border border-white/10">
            <h3 className="text-lg font-semibold text-green-400 mb-2">Our Vision</h3>
            <p className="text-gray-400">
              To empower the next generation of traders by simplifying education and unlocking true financial independence.
            </p>
          </div>

          {/* Audience */}
          <div className="bg-white/5 p-6 rounded-xl border border-white/10">
            <h3 className="text-lg font-semibold text-pink-400 mb-2">Who We Help</h3>
            <p className="text-gray-400">
              Students, working professionals, job seekers, and anyone curious to grow wealth through consistent trading.
            </p>
          </div>

          {/* Approach */}
          <div className="bg-white/5 p-6 rounded-xl border border-white/10">
            <h3 className="text-lg font-semibold text-blue-400 mb-2">Our Approach</h3>
            <p className="text-gray-400">
              Practical sessions. Trade journaling. Mindset mastery. DP Trading is not a shortcut — it’s a system that works.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
