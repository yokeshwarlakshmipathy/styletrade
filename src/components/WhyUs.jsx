// File: src/components/WhyUs.jsx
import React from 'react';
import { FaChartLine, FaUserTie, FaUsers, FaBookOpen } from 'react-icons/fa';

export default function WhyUs() {
  const features = [
    {
      icon: <FaChartLine className="text-green-400 text-4xl mb-2" />,
      title: 'Market-Focused Learning',
      description:
        'Master trading skills with real chart examples, live market insights, and actionable strategies.',
    },
    {
      icon: <FaUserTie className="text-purple-400 text-4xl mb-2" />,
      title: '1-on-1 Mentorship',
      description:
        'Receive personal guidance from experienced traders to sharpen your discipline and decision-making.',
    },
    {
      icon: <FaUsers className="text-blue-400 text-4xl mb-2" />,
      title: 'Supportive Trading Community',
      description:
        'Join a powerful network of aspiring and experienced traders sharing tips, ideas, and progress.',
    },
    {
      icon: <FaBookOpen className="text-yellow-400 text-4xl mb-2" />,
      title: 'Practical Curriculum',
      description:
        'Hands-on learning modules focused on price action, psychology, and risk management.',
    },
  ];

  return (
    <section id="whyus" className="py-20 bg-black text-white px-6 md:px-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-5xl font-bold text-green-400 mb-4">
          Why Choose DP Trading?
        </h2>
        <p className="text-gray-400 text-md md:text-lg max-w-2xl mx-auto">
          Discover why aspiring traders trust DP Trading to transform their skills and mindset.
        </p>
      </div>

      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4 text-center">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white/5 border border-white/10 rounded-xl p-6 shadow-md hover:scale-105 transition-transform"
          >
            {feature.icon}
            <h3 className="mt-4 text-xl font-semibold text-white">
              {feature.title}
            </h3>
            <p className="text-gray-300 text-sm mt-2">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
