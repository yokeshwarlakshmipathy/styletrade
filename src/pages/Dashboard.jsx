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
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white flex items-center justify-center px-4">
      <div className="bg-white/5 backdrop-blur-lg p-8 rounded-2xl shadow-xl max-w-xl w-full border border-white/10">
        <h1 className="text-3xl font-bold mb-4 text-center text-green-400">📈 Trader Dashboard</h1>

        <div className="space-y-4 text-center">
          <p className="text-lg">
            Welcome back, <span className="text-yellow-300 font-semibold">{user?.email}</span>!
          </p>
          <p className="text-gray-400 text-sm">
            You've unlocked access to premium trading modules, charting tips, and market psychology breakdowns.
          </p>

          <div className="mt-6 space-y-2">
            <p className="text-sm text-gray-300">🔥 Modules Completed: <span className="text-green-400">4/10</span></p>
            <p className="text-sm text-gray-300">📅 Next Live Session: <span className="text-blue-400">Saturday, 7 PM IST</span></p>
          </div>

          <button
            onClick={() => navigate('/')}
            className="mt-4 text-white bg-indigo-600 px-4 py-2 rounded hover:bg-indigo-700"
          >
            Go to StyleTrade Home
          </button>

          <button
            onClick={handleLogout}
            className="mt-4 inline-block px-6 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg font-medium transition"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}

