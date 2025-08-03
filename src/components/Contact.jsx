// File: src/components/Contact.jsx
import React, { useEffect, useState } from 'react';
import { Toaster, toast } from 'react-hot-toast';
import { Mail, MapPin, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    document.title = 'Contact Us | DP Trading';

    const metaDesc = document.querySelector("meta[name='description']");
    if (metaDesc) {
      metaDesc.setAttribute(
        'content',
        "Reach out to the DP Trading team for trading course support, mentorship inquiries, or platform questions."
      );
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content =
        "Reach out to the DP Trading team for trading course support, mentorship inquiries, or platform questions.";
      document.head.appendChild(meta);
    }
  }, []);

  const handleSubmit = (e) => {
    setSubmitted(true);
    toast.success("📬 Message sent successfully! We'll get back to you soon.");
  };

  return (
    <section className="min-h-screen bg-black text-white py-20 px-6" id="contact">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto"
      >
        <Toaster position="top-center" />
        <h1 className="text-4xl md:text-5xl font-extrabold text-center text-green-400 mb-4">
          📩 Contact Us
        </h1>
        <p className="text-center text-gray-400 mb-12">
          Got questions about our courses, trading strategies, or mentorship? Reach out and we'll respond within 24 hours.
        </p>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Contact Form */}
          <form
            action="https://formspree.io/f/xwkgbzlr"
            method="POST"
            onSubmit={handleSubmit}
            className="bg-white/5 p-6 rounded-2xl border border-white/10 shadow-lg space-y-6"
          >
            <div>
              <label className="block mb-2 font-medium text-gray-300">Name</label>
              <input
                type="text"
                name="name"
                required
                className="w-full px-4 py-2 rounded-xl bg-white/10 border border-white/10 text-white placeholder-gray-400 focus:outline-none"
              />
            </div>
            <div>
              <label className="block mb-2 font-medium text-gray-300">Email</label>
              <input
                type="email"
                name="email"
                required
                className="w-full px-4 py-2 rounded-xl bg-white/10 border border-white/10 text-white placeholder-gray-400 focus:outline-none"
              />
            </div>
            <div>
              <label className="block mb-2 font-medium text-gray-300">Message</label>
              <textarea
                name="message"
                rows="5"
                required
                className="w-full px-4 py-2 rounded-xl bg-white/10 border border-white/10 text-white placeholder-gray-400 focus:outline-none"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-xl transition"
            >
              Send Message
            </button>
          </form>

          {/* Contact Info */}
          <div className="bg-white/5 p-6 rounded-2xl border border-white/10 text-gray-300 space-y-6">
            <div className="flex items-start gap-4">
              <Mail className="text-green-400 mt-1" />
              <div>
                <p className="font-semibold text-white">Email</p>
                <p>sparkindustry6@gmail.com</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Phone className="text-green-400 mt-1" />
              <div>
                <p className="font-semibold text-white">Phone</p>
                <p>+91 8148502407</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <MapPin className="text-green-400 mt-1" />
              <div>
                <p className="font-semibold text-white">Office</p>
                <p>Chennai, Tamil Nadu, India</p>
              </div>
            </div>
            <p className="pt-4 text-sm">
              📃 By contacting us, you agree to our{' '}
              <Link to="/terms" className="text-green-400 underline hover:text-green-300">
                Terms & Conditions
              </Link>.
            </p>
          </div>
        </div>

        {submitted && (
          <p className="text-green-500 text-center text-lg mt-8 animate-pulse">
            ✅ Your message has been sent! We'll respond shortly.
          </p>
        )}
      </motion.div>
    </section>
  );
}
