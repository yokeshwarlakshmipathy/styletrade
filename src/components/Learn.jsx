// File: src/components/Learn.jsx
import React from 'react';
import { motion } from 'framer-motion';

const tradingTopics = [
  "Stock Market Basics",
  "Technical & Fundamental Analysis",
  "How to Choose Stocks",
  "Intraday, Swing, and Long-term Strategies",
];

export default function Learn() {
  return (
    <section id="learn" className="bg-white pt-20 px-4 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          What You’ll Learn
        </h2>
        <p className="text-lg text-gray-600 mb-10">
          A solid foundation for beginners and advanced strategies for experienced learners.
        </p>

        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto text-left text-gray-700">
          {tradingTopics.map((topic, index) => (
            <li key={index} className="flex items-start gap-3">
              <span className="text-blue-600 font-bold text-xl">✓</span>
              <span>{topic}</span>
            </li>
          ))}
        </ul>
      </motion.div>
    </section>
  );
}
