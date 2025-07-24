// File: src/components/CTA.jsx
import React from "react";
import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section className="bg-blue-600 py-20 px-6 text-white" id="cta">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Start Your Journey Today
        </h2>
        <p className="text-lg mb-8">
          Learn trading and fashion from experts. Grab your seat before it fills up!
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="#pricing"
            className="bg-white text-blue-600 font-semibold py-3 px-6 rounded-xl shadow hover:bg-gray-100 transition"
          >
            View Pricing
          </a>
          <a
            href="https://wa.me/918148502407"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-white py-3 px-6 rounded-xl hover:bg-white hover:text-blue-600 transition"
          >
            Contact on WhatsApp
          </a>
        </div>
      </motion.div>
    </section>
  );
}
