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

      toast.success('✅ Enrollment submitted successfully!');
      navigate('/payment');
    } catch (error) {
      console.error('Error saving enrollment:', error);
      toast.error('❌ Submission failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="min-h-screen bg-black flex items-center justify-center px-4 py-20">
      <div className="bg-white/5 border border-white/10 p-8 rounded-2xl max-w-xl w-full text-white shadow-xl">
        <h2 className="text-3xl font-bold text-green-400 text-center mb-2">
          📝 Enrollment Form
        </h2>
        <p className="text-sm text-gray-400 text-center mb-8">
          Fill in the details to join our trading bootcamp and unlock the next level in your trading journey.
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm mb-1 text-gray-300">Full Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              placeholder="John Doe"
              className="w-full px-4 py-2 bg-white/10 rounded-lg border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>

          <div>
            <label className="block text-sm mb-1 text-gray-300">Email Address</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              placeholder="you@example.com"
              className="w-full px-4 py-2 bg-white/10 rounded-lg border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>

          <div>
            <label className="block text-sm mb-1 text-gray-300">Phone Number</label>
            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              required
              placeholder="+91 9876543210"
              className="w-full px-4 py-2 bg-white/10 rounded-lg border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>

          <div>
            <label className="block text-sm mb-1 text-gray-300">Choose Course</label>
            <select
  name="course"
  value={form.course}
  onChange={handleChange}
  required
  className="w-full px-4 py-2 rounded-lg bg-white/10 text-white border border-white/20 focus:outline-none focus:ring-2 focus:ring-green-400"
>
  <option value="" disabled hidden className="text-gray-400">-- Select Your Course --</option>
  <option value="Beginner Trading" className="text-black">Beginner Trading</option>
  <option value="Advanced Trading" className="text-black">Advanced Trading</option>
  <option value="DP Trading Bootcamp" className="text-black">DP Trading Bootcamp (Full Program)</option>
</select>




          </div>

          <div>
            <label className="block text-sm mb-1 text-gray-300">Your Experience</label>
            <textarea
              name="experience"
              value={form.experience}
              onChange={handleChange}
              rows="3"
              placeholder="Share any past trading experience (optional)..."
              className="w-full px-4 py-2 bg-white/10 rounded-lg border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400"
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-lg transition duration-300"
          >
            {loading ? 'Submitting...' : 'Submit & Proceed to Payment'}
          </button>
        </form>
      </div>
    </section>
  );
}
