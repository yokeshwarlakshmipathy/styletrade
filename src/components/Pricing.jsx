// File: src/components/Pricing.jsx
// File: src/pages/Pricing.jsx
import React from 'react';
import { Link } from 'react-router-dom';

export default function Pricing() {
  return (
    <section id="pricing" className="bg-gray-950 text-white py-24 px-4">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4 text-indigo-400">E-LITE ACCESS PLAN</h2>
        <p className="text-gray-400 mb-10 max-w-2xl mx-auto">
          Unlock our most powerful Forex Trading program designed for serious learners. Includes LIVE sessions, funded account access, and 1-month mentorship.
        </p>

        <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-black p-10 rounded-xl border border-white/10 shadow-lg max-w-2xl mx-auto hover:scale-105 transition">
          <h3 className="text-xl font-bold text-pink-500 mb-2">Elite Forex Program</h3>
          
          <div className="flex flex-col items-center mb-6">
            <span className="text-4xl font-bold text-white">₹7,999</span>
            <span className="text-sm text-gray-400 line-through mt-1">₹15,999</span>
            <span className="text-green-400 text-sm mt-1 font-medium">Limited Offer!</span>
          </div>

          <ul className="text-sm text-gray-300 space-y-3 text-left mb-6">
            <li>✔ 1-Month Full Forex Training</li>
            <li>✔ Funded Account – For Every Student</li>
            <li>✔ Live Trading Sessions with Experts</li>
            <li>✔ Real Chart Analysis + Strategy</li>
            <li>✔ Telegram Support Group Access</li>
          </ul>

          <Link
            to="/enrollform"
            className="bg-pink-600 hover:bg-pink-700 w-full py-3 rounded-lg text-white font-semibold block transition text-center"
          >
            Enroll Now
          </Link>

          <p className="mt-4 text-sm text-gray-400">
            Have questions? <a href="https://wa.me/918148502407" target="_blank" rel="noopener noreferrer" className="text-green-400 underline">Chat on WhatsApp</a>
          </p>
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-500 text-sm">🔥 Limited Seats Available – Secure your spot now!</p>
        </div>
      </div>
    </section>
  );
}
