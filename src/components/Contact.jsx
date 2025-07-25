// File: src/components/Contact.jsx
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Toaster, toast } from 'react-hot-toast';
import { Mail, MapPin, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    setSubmitted(true);
    toast.success("📬 Message sent successfully! We'll get back to you soon.");
  };

  return (
    <div className="max-w-4xl mx-auto py-16 px-6 text-gray-800">
      <Helmet>
        <title>Contact Us | StyleTrade</title>
        <meta
          name="description"
          content="Reach out to the StyleTrade team for trading course support, mentorship inquiries, or platform questions."
        />
      </Helmet>

      <Toaster position="top-center" reverseOrder={false} />

      <h1 className="text-4xl font-bold mb-4 text-center text-blue-600">Contact Us</h1>
      <p className="text-center text-gray-600 mb-10">
        Have a question about our trading strategies, upcoming webinars, or mentorship programs? We’re here to help!
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <form
          action="https://formspree.io/f/xwkgbzlr"
          method="POST"
          onSubmit={handleSubmit}
          className="space-y-6"
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
        </form>

        <div className="space-y-6 text-sm md:text-base text-gray-700">
          <div className="flex items-start gap-4">
            <Mail className="text-blue-500" />
            <div>
              <p className="font-semibold">Email</p>
              <p>trading@styletrade.com</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <Phone className="text-blue-500" />
            <div>
              <p className="font-semibold">Phone</p>
              <p>+91 90000 11111</p>
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
        </div>
      </div>

      {submitted && (
        <p className="text-green-600 text-center text-lg mt-6">
          🎉 Thank you for your message! We'll get back to you regarding your trading inquiry shortly.
        </p>
      )}
    </div>
  );
}
