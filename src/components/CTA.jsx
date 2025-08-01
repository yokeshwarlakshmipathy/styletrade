// File: src/components/CTA.jsx
import React from "react";
import { motion } from "framer-motion";
import { MessageCircle, Tag } from "lucide-react";

export default function CTA() {
  return (
    <section
      id="cta"
      className="relative bg-gradient-to-r from-blue-950 via-black to-blue-950 text-white py-20 px-6 overflow-hidden"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto text-center"
      >
        <h2 className="text-3xl md:text-5xl font-extrabold mb-5 leading-tight">
          Start Your Journey Today
        </h2>

        <p className="text-lg md:text-xl text-gray-300 mb-10 leading-relaxed">
          Learn trading and fashion from industry experts. Seats are limited—don’t miss your chance!
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-5">
          <a
            href="#pricing"
            className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-xl shadow-lg transition-all duration-300"
          >
            <Tag className="w-5 h-5" /> View Pricing
          </a>
          <a
            href="https://wa.me/918148502407"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-white text-blue-700 hover:bg-blue-100 font-semibold py-3 px-8 rounded-xl shadow-lg transition-all duration-300"
          >
            <MessageCircle className="w-5 h-5" /> Contact on WhatsApp
          </a>
        </div>
      </motion.div>

      {/* Animated background accents */}
      <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-700 rounded-full opacity-20 animate-ping"></div>
      <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-purple-700 rounded-full opacity-20 animate-pulse"></div>
    </section>
  );
}
