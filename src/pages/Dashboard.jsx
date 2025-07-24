// File: src/pages/Dashboard.jsx
import React from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

export default function Dashboard() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/login');
    } catch (err) {
      console.error("Logout Error:", err);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white flex items-center justify-center px-4">
      <div className="bg-white/5 backdrop-blur-lg p-8 rounded-2xl shadow-xl max-w-xl w-full border border-white/10">
        <h1 className="text-3xl font-bold mb-4 text-center text-blue-400">🚀 Dashboard</h1>

        <div className="space-y-4 text-center">
          <p className="text-lg">
            Welcome back, <span className="text-yellow-300 font-semibold">{user?.email}</span>!
          </p>
          <p className="text-gray-400 text-sm">
            You’re successfully logged in and can now explore the full platform.
          </p>

          {/* You can add real stats from Firestore in the future */}
          <div className="mt-6">
            <p className="text-sm text-gray-300">📊 Enrolled Users (Coming Soon)</p>
            <p className="text-xl font-bold text-green-400">124+</p>
          </div>

          <button
            onClick={handleLogout}
            className="mt-6 inline-block px-6 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg font-medium transition"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}
