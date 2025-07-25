// File: src/pages/Contact.jsx
import React from 'react';

export default function Contact() {
  return (
    <div className="max-w-3xl mx-auto py-16 px-6 text-gray-800">
      <h1 className="text-3xl font-bold mb-6 text-center text-pink-600">Contact Us</h1>

      <p className="mb-6 text-center text-gray-600">
        Have questions or feedback? We’d love to hear from you.
      </p>

      <form
        action="https://formspree.io/f/your-form-id" // 🔁 Replace with your Formspree ID or backend
        method="POST"
        className="space-y-4"
      >
        <div>
          <label className="block text-sm font-medium">Name</label>
          <input
            type="text"
            name="name"
            required
            className="w-full mt-1 px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-pink-400"
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Email</label>
          <input
            type="email"
            name="email"
            required
            className="w-full mt-1 px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-pink-400"
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Message</label>
          <textarea
            name="message"
            rows="5"
            required
            className="w-full mt-1 px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-pink-400"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-pink-500 text-white py-2 rounded-md hover:bg-pink-600 transition"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}
