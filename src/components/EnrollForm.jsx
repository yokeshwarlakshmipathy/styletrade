// File: src/components/EnrollForm.jsx
import React, { useState } from 'react';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../firebase';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

export default function EnrollForm() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    course: '',
    experience: '',
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await addDoc(collection(db, 'enrollments'), {
        ...form,
        timestamp: new Date(),
      });

      toast.success('Enrollment submitted successfully!');
      navigate('/payment'); // ✅ Redirect to payment page
    } catch (error) {
      console.error('Error saving enrollment:', error);
      toast.error('Failed to submit. Try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-black px-4 py-10">
      <div className="bg-white/5 border border-white/10 p-8 rounded-xl max-w-md w-full text-white">
        <h2 className="text-2xl font-bold mb-6 text-center text-green-400">Enrollment Form</h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 rounded-lg bg-white/10 text-white placeholder-gray-400 border border-white/20 focus:outline-none focus:ring-2 focus:ring-green-400"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 rounded-lg bg-white/10 text-white placeholder-gray-400 border border-white/20 focus:outline-none focus:ring-2 focus:ring-green-400"
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={form.phone}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 rounded-lg bg-white/10 text-white placeholder-gray-400 border border-white/20 focus:outline-none focus:ring-2 focus:ring-green-400"
          />
          <select
            name="course"
            value={form.course}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 rounded-lg bg-white/10 text-white border border-white/20 focus:outline-none focus:ring-2 focus:ring-green-400"
          >
            <option value="">Select Course</option>
            <option value="Trading Bootcamp">Trading Bootcamp</option>
            <option value="Fashion Skills">Fashion Skills</option>
            <option value="Both">Both</option>
          </select>
          <textarea
            name="experience"
            placeholder="Brief your past experience (if any)"
            value={form.experience}
            onChange={handleChange}
            rows="3"
            className="w-full px-4 py-2 rounded-lg bg-white/10 text-white placeholder-gray-400 border border-white/20 focus:outline-none focus:ring-2 focus:ring-green-400"
          />
          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 bg-green-600 hover:bg-green-700 rounded-lg font-semibold transition"
          >
            {loading ? 'Submitting...' : 'Submit & Proceed to Payment'}
          </button>
        </form>
      </div>
    </section>
  );
}
