// File: src/components/Demo.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { FaYoutube, FaWhatsapp } from 'react-icons/fa';

export default function Demo() {
  return (
    <section className="bg-black py-24 px-6 md:px-20 text-white" id="demo">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto text-center"
      >
        {/* 🎯 Section Title */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-green-400 mb-4">
          🎥 Live Course Preview
        </h2>

        {/* 🧠 Subtext */}
        <p className="text-lg md:text-xl text-gray-300 mb-10">
          Get a real taste of how we teach Trading with clarity, confidence, and practical guidance.
        </p>

        {/* 📺 YouTube Embed */}
        <div className="relative w-full pb-[56.25%] h-0 mb-12 overflow-hidden rounded-2xl border border-white/10 shadow-2xl">
          <iframe
            className="absolute top-0 left-0 w-full h-full rounded-2xl"
            src="https://www.youtube.com/embed/6UlEMryrA1U"
            title="Course Demo"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        {/* 🚀 Call-to-Actions */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="#pricing"
            className="flex items-center justify-center gap-2 px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-xl transition-all duration-300 shadow-md"
          >
            <FaYoutube />
            Join the Course
          </a>
          <a
            href="https://wa.me/918148502407"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-6 py-3 border border-white/20 text-white hover:bg-white hover:text-black rounded-xl font-medium transition-all duration-300 shadow-md"
          >
            <FaWhatsapp />
            WhatsApp for Help
          </a>
        </div>  
      </motion.div>
    </section>
  );
}
