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
    <motion.div
      id="contact"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="max-w-4xl mx-auto py-20 px-6 text-gray-800"
    >
      <Toaster position="top-center" reverseOrder={false} />

      <motion.h1
        className="text-4xl font-bold mb-4 text-center text-blue-600"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        Contact Us
      </motion.h1>

      <motion.p
        className="text-center text-gray-600 mb-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        Have a question about our trading strategies, upcoming webinars, or mentorship programs? We’re here to help!
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Form Section */}
        <motion.form
          action="https://formspree.io/f/xwkgbzlr"
          method="POST"
          onSubmit={handleSubmit}
          className="space-y-6 bg-white p-6 rounded-lg shadow-lg"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <label htmlFor="name" className="block mb-2 font-medium">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-400"
            />
          </div>

          <div>
            <label htmlFor="email" className="block mb-2 font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-400"
            />
          </div>

          <div>
            <label htmlFor="message" className="block mb-2 font-medium">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="5"
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-400"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </motion.form>

        {/* Info Section */}
        <motion.div
          className="space-y-6 text-sm md:text-base text-gray-700 bg-white p-6 rounded-lg shadow-lg"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-start gap-4">
            <Mail className="text-blue-500" />
            <div>
              <p className="font-semibold">Email</p>
              <p>Sparkindustry6@gmail.com</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <Phone className="text-blue-500" />
            <div>
              <p className="font-semibold">Phone</p>
              <p>+91 8148502407</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <MapPin className="text-blue-500" />
            <div>
              <p className="font-semibold">Office</p>
              <p>Chennai, Tamil Nadu, India</p>
            </div>
          </div>

          <div className="pt-6 text-sm text-gray-600">
            <p>
              📜 Please read our{' '}
              <Link to="/terms" className="text-blue-500 underline hover:text-blue-600">
                Trading Terms & Conditions
              </Link>{' '}
              before sending your message.
            </p>
          </div>
        </motion.div>
      </div>

      {submitted && (
        <motion.p
          className="text-green-600 text-center text-lg mt-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          🎉 Thank you for your message! We'll get back to you regarding your trading inquiry shortly.
        </motion.p>
      )}
    </motion.div>
  );
}
