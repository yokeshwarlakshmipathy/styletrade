// File: src/components/About.jsx
import React from 'react';

export default function About() {
  return (
    <section
      id="about"
      className="relative bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white py-20 px-6 md:px-24"
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">About StyleTrade</h2>
        <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-10">
          StyleTrade blends two powerful domains: <span className="text-pink-400 font-semibold">Trading</span> and <span className="text-blue-400 font-semibold">Fashion</span>. Our goal is to help you become financially independent while carrying your unique sense of style.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left">
          <div>
            <h3 className="text-xl font-semibold mb-2 text-pink-400">🎯 Our Mission</h3>
            <p className="text-gray-400">
              To empower students, professionals, housewives, and job-seekers with practical financial education and confidence in self-expression.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2 text-blue-400">🧠 What We Offer</h3>
            <p className="text-gray-400">
              A well-structured learning journey through trading modules, fashion styling tips, real-world demos, and community support — all in one platform.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
