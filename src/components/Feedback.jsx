// File: src/components/Feedback.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { db } from '../firebase'; // ✅ Make sure this is configured
import { collection, addDoc, Timestamp } from 'firebase/firestore';
import toast from 'react-hot-toast';

export default function Feedback() {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleFeedback = async (e) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) {
      toast.error("Please fill out both fields");
      return;
    }

    try {
      setLoading(true);
      await addDoc(collection(db, 'feedbacks'), {
        name,
        message,
        createdAt: Timestamp.now(),
      });
      toast.success("Feedback submitted 🎉");
      setName('');
      setMessage('');
    } catch (err) {
      console.error("Error submitting feedback:", err);
      toast.error("Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="feedback" className="bg-gradient-to-br from-black via-gray-900 to-black text-white py-24 px-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-green-400 mb-6">
          💬 We’d Love Your Feedback
        </h2>
        <p className="text-gray-300 mb-10">
          Help us improve DP Trading by sharing your thoughts below.
        </p>

        <form onSubmit={handleFeedback} className="space-y-6">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/10 text-white placeholder-gray-400 focus:outline-none"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <textarea
            rows="5"
            placeholder="Your Feedback"
            className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/10 text-white placeholder-gray-400 focus:outline-none"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />

          <button
            type="submit"
            disabled={loading}
            className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-xl transition shadow-lg disabled:opacity-50"
          >
            {loading ? 'Submitting...' : 'Submit Feedback'}
          </button>
        </form>
      </motion.div>
    </section>
  );
}
