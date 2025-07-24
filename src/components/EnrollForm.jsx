import React, { useState } from 'react';
import { db } from '../firebase';
import { collection, addDoc } from 'firebase/firestore';

export default function EnrollForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    course: '',
  });
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "enrollments"), formData);
      setSuccess(true);
      setFormData({ name: '', email: '', course: '' });
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  return (
    <section id="enroll" className="bg-gray-100 py-16 px-4">
      <div className="max-w-xl mx-auto bg-white p-8 rounded-xl shadow">
        <h2 className="text-2xl font-bold mb-6 text-center">Enroll Now</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            required
            className="w-full border border-gray-300 p-3 rounded"
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            required
            className="w-full border border-gray-300 p-3 rounded"
          />
          <select
            name="course"
            value={formData.course}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 p-3 rounded"
          >
            <option value="">Select Course</option>
            <option value="Trading">Trading Essentials</option>
            <option value="Fashion">Fashion Styling</option>
            <option value="Combo">Combo: Trading + Fashion</option>
          </select>
          <button type="submit" className="bg-blue-600 text-white px-6 py-3 rounded w-full hover:bg-blue-700 transition">
            Submit
          </button>
        </form>
        {success && <p className="text-green-600 mt-4 text-center">✅ Enrolled Successfully!</p>}
      </div>
    </section>
  );
}
