// File: src/pages/Payment.jsx
import React from 'react';
import { Helmet } from 'react-helmet';

export default function Payment() {
  return (
    <div className="min-h-screen bg-black text-white py-20 px-4">
      <Helmet>
        <title>Enroll & Pay | StyleTrade</title>
      </Helmet>

      <div className="max-w-3xl mx-auto bg-white/5 p-8 rounded-xl border border-white/10">
        <h1 className="text-3xl font-bold text-green-400 mb-6 text-center">
          🧾 Choose Your Trading Course
        </h1>

        <div className="space-y-6">
          {/* Example Course Card */}
          <div className="bg-white/10 p-6 rounded-lg">
            <h2 className="text-xl font-semibold text-yellow-300">📈 Beginner Trading Bootcamp</h2>
            <p className="text-gray-300">4 Weeks | Live + Recorded | ₹499</p>
            <button
              className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
              onClick={() => window.open("https://rzp.io/l/styletrade-bootcamp", "_blank")}
            >
              Pay & Enroll
            </button>
          </div>

          <div className="bg-white/10 p-6 rounded-lg">
            <h2 className="text-xl font-semibold text-pink-400">💹 Advanced Price Action Program</h2>
            <p className="text-gray-300">6 Weeks | Market Strategy Deep Dive | ₹999</p>
            <button
              className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
              onClick={() => window.open("https://rzp.io/l/styletrade-advanced", "_blank")}
            >
              Pay & Enroll
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
