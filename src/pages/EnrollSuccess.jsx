import React from 'react';
import { Link } from 'react-router-dom';

export default function EnrollSuccess() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white px-4">
      <div className="text-center space-y-6">
        <h1 className="text-4xl font-bold text-green-400">🎉 Enrollment Successful!</h1>
        <p className="text-lg text-gray-300">
          You've successfully enrolled in the course. We'll send you updates via email.
        </p>

        <div className="space-x-4">
          <Link
            to="/dashboard"
            className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded text-white font-semibold"
          >
            Go to Dashboard
          </Link>
          <Link
            to="/"
            className="bg-gray-600 hover:bg-gray-700 px-6 py-2 rounded text-white font-semibold"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
