// File: src/components/EnrollForm.jsx
import React, { useState } from 'react';
import { collection, addDoc, Timestamp } from 'firebase/firestore';
import { db } from '../firebase';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

export default function EnrollForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [course, setCourse] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !email || !course) {
      toast.error("Please fill in all fields.");
      return;
    }

    try {
      await addDoc(collection(db, "enrollments"), {
        name,
        email,
        course,
        createdAt: Timestamp.now()
      });

      toast.success("Enrollment submitted! 🎉");
      navigate("/enroll-success");
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong. Please try again.");
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black text-white px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white/10 backdrop-blur-lg p-8 rounded-xl shadow-lg w-full max-w-md space-y-6 border border-white/10"
      >
        <h2 className="text-3xl font-bold text-center text-green-400">Enroll Now</h2>

        <input
          type="text"
          placeholder="Your Name"
          className="w-full p-3 rounded-lg bg-white/20 placeholder-white/70"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <input
          type="email"
          placeholder="Your Email"
          className="w-full p-3 rounded-lg bg-white/20 placeholder-white/70"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <select
          className="w-full p-3 rounded-lg bg-white/20 text-white"
          value={course}
          onChange={(e) => setCourse(e.target.value)}
          required
        >
          <option value="">Select Course</option>
          <option value="Forex Trading">Forex Trading</option>
          <option value="Stock Market">Stock Market</option>
          <option value="Combo">Combo</option>
        </select>

        <button
          type="submit"
          className="w-full bg-green-600 hover:bg-green-700 transition text-white p-3 rounded-lg font-semibold"
        >
          Submit Enrollment
        </button>
      </form>
    </section>
  );
}
