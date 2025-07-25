// File: src/components/Pricing.jsx
import React from 'react';

export default function Pricing() {
  return (
    <section id="pricing" className="bg-gray-950 text-white py-24 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-indigo-400">Choose Your Plan</h2>
        <p className="text-gray-400 mb-12 max-w-2xl mx-auto">
          Whether you're just starting or ready to level up your trading game — we’ve got a plan for you.
        </p>

        <div className="grid gap-8 md:grid-cols-3">
          {/* Starter Plan */}
          <div className="bg-white/5 p-8 rounded-xl border border-white/10 hover:scale-105 transition">
            <h3 className="text-xl font-bold text-green-400 mb-2">Beginner Trader</h3>
            <p className="text-3xl font-bold mb-4">₹799</p>
            <ul className="text-sm text-gray-300 space-y-2 mb-6 text-left">
              <li>✔ Stock Market Basics</li>
              <li>✔ Introduction to Chart Reading</li>
              <li>✔ 5+ Video Lessons</li>
              <li>✔ Community Access</li>
            </ul>
            <button className="bg-green-600 hover:bg-green-700 w-full py-2 rounded text-white font-semibold transition">
              Enroll Now
            </button>
          </div>

          {/* Pro Plan */}
          <div className="bg-white/10 p-8 rounded-xl border-2 border-yellow-400 shadow-lg scale-105">
            <h3 className="text-xl font-bold text-yellow-400 mb-2">Pro Trader</h3>
            <p className="text-3xl font-bold mb-4">₹1,999</p>
            <ul className="text-sm text-gray-300 space-y-2 mb-6 text-left">
              <li>✔ Everything in Beginner</li>
              <li>✔ Technical + Fundamental Analysis</li>
              <li>✔ Live Trade Reviews</li>
              <li>✔ Entry-Exit-Stop Strategy</li>
              <li>✔ Dedicated Telegram Support</li>
            </ul>
            <button className="bg-yellow-500 hover:bg-yellow-600 w-full py-2 rounded text-black font-semibold transition">
              Enroll Now
            </button>
          </div>

          {/* Elite Plan */}
          <div className="bg-white/5 p-8 rounded-xl border border-white/10 hover:scale-105 transition">
            <h3 className="text-xl font-bold text-pink-400 mb-2">Elite Mentorship</h3>
            <p className="text-3xl font-bold mb-4">₹4,999</p>
            <ul className="text-sm text-gray-300 space-y-2 mb-6 text-left">
              <li>✔ Everything in Pro</li>
              <li>✔ 1:1 Mentorship Sessions</li>
              <li>✔ Advanced Strategies & Risk Control</li>
              <li>✔ Weekly Market Outlook</li>
              <li>✔ Lifetime Access + Updates</li>
            </ul>
            <button className="bg-pink-600 hover:bg-pink-700 w-full py-2 rounded text-white font-semibold transition">
              Enroll Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

