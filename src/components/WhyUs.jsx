// File: src/components/WhyUs.jsx
import React from 'react';
import { FaGraduationCap, FaUsers, FaGlobe, FaRocket } from 'react-icons/fa';

export default function WhyUs() {
  const features = [
    {
      icon: <FaGraduationCap className="text-pink-400 text-4xl mb-2" />,
      title: 'Dual Career Focus',
      description:
        'Our unique blend of Trading + Fashion prepares you for success in both career paths.',
    },
    {
      icon: <FaUsers className="text-purple-400 text-4xl mb-2" />,
      title: 'Mentor Support',
      description:
        'Get guidance from industry professionals and personalized mentorship.',
    },
    {
      icon: <FaGlobe className="text-blue-400 text-4xl mb-2" />,
      title: 'Strong Community',
      description:
        'Join a growing network of learners, creators, and professionals.',
    },
    {
      icon: <FaRocket className="text-yellow-400 text-4xl mb-2" />,
      title: 'Real-World Learning',
      description:
        'Hands-on curriculum with practical projects that reflect real market demands.',
    },
  ];

  return (
    <section id="whyus" className="py-20 bg-black text-white px-6 md:px-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-5xl font-bold text-pink-400 mb-4">
          Why Choose DP Trading?
        </h2>
        <p className="text-gray-400 text-md md:text-lg max-w-2xl mx-auto">
          Discover what makes us different and why learners trust our platform to launch dual careers.
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
