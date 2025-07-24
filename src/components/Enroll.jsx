import React, { useState } from 'react';
import { db } from '../firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

export default function Enroll() {
  const [formData, setFormData] = useState({ name: '', email: '', plan: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.plan) {
      setStatus('Please fill out all fields.');
      return;
    }

    try {
      await addDoc(collection(db, 'enrollments'), {
        ...formData,
        createdAt: serverTimestamp(),
      });
      setStatus('✅ Enrollment submitted! We’ll contact you soon.');
      setFormData({ name: '', email: '', plan: '' });
    } catch (error) {
      setStatus('❌ Something went wrong. Please try again.');
    }
  };

  return (
    <section id="enroll" className="bg-white py-20 px-4">
      <div className="max-w-xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">Start Your Journey Today</h2>
        <p className="text-gray-600 mb-8">Fill the form to enroll. We’ll reach out to guide you next!</p>

        <form onSubmit={handleSubmit} className="space-y-5">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Full Name"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email Address"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <select
            name="plan"
            value={formData.plan}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select a Plan</option>
            <option value="Trading Essentials">Trading Essentials</option>
            <option value="Fashion Styling">Fashion Styling</option>
            <option value="Combo">Combo: Trading + Fashion</option>
          </select>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Enroll Now
          </button>
        </form>

        {status && <p className="mt-4 text-sm text-gray-700">{status}</p>}
      </div>
    </section>
  );
}
