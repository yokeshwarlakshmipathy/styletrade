// File: src/components/Pricing.jsx
import React from 'react';

const plans = [
  {
    title: 'Starter',
    price: '₹999',
    features: [
      'Trading Basics',
      'Fashion Fundamentals',
      'Limited Community Access',
    ],
    highlight: false,
  },
  {
    title: 'Pro Combo',
    price: '₹2499',
    features: [
      'Trading + Fashion Mastery',
      '1-on-1 Mentorship',
      'Exclusive Content & Tools',
      'Private Community Access',
    ],
    highlight: true,
  },
  {
    title: 'Elite Pack',
    price: '₹4999',
    features: [
      'Everything in Pro',
      'Live Portfolio Review',
      'Job Assistance & Resume Building',
      'Personal Branding Guidance',
    ],
    highlight: false,
  },
];

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="bg-gradient-to-b from-black via-gray-900 to-black text-white py-20 px-4"
    >
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Flexible Pricing</h2>
        <p className="text-gray-300 text-lg max-w-2xl mx-auto">
          Choose a plan that fits your learning and career goals.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`p-8 rounded-3xl shadow-xl border border-white/10 backdrop-blur-xl bg-white/5 flex flex-col justify-between transition transform hover:scale-105 ${
              plan.highlight ? 'border-pink-400 shadow-pink-500/20' : ''
            }`}
          >
            <h3 className="text-xl font-bold text-pink-400 mb-2">{plan.title}</h3>
            <p className="text-3xl font-extrabold text-white mb-4">{plan.price}</p>
            <ul className="space-y-2 text-sm text-gray-300 mb-6">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-green-400">✔</span>
                  {feature}
                </li>
              ))}
            </ul>
            <button className="mt-auto px-6 py-3 bg-pink-500 hover:bg-pink-600 rounded-xl text-white font-semibold transition">
              Choose Plan
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
