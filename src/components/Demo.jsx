// File: src/components/Demo.jsx
import React from 'react';
import { motion } from 'framer-motion';

export default function Demo() {
  return (
    <section className="bg-gray-50 py-20 px-4 md:px-20" id="demo">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Watch the Course in Action
        </h2>
        <p className="text-lg text-gray-600 mb-10">
          Here's a preview of the way we teach — clear, practical, and to the point.
        </p>

        {/* Responsive YouTube Embed */}
        <div className="relative w-full pb-[56.25%] h-0 mb-10 overflow-hidden rounded-xl shadow-xl">
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src="https://www.youtube.com/embed/6UlEMryrA1U"
            title="Course Demo"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="#pricing"
            className="px-6 py-3 bg-blue-600 text-white rounded-xl shadow hover:bg-blue-700 transition"
          >
            Join the Course
          </a>
          <a
            href="https://wa.me/918148502407"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 border border-gray-400 rounded-xl text-gray-800 hover:bg-gray-100"
          >
            WhatsApp for Help
          </a>
        </div>
      </motion.div>
    </section>
  );
}
