// File: src/pages/Learn.jsx
import React from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Learn() {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white p-8">
      <h1 className="text-4xl font-bold mb-4 text-green-400">
        🎓 E-LITE TRADING ACCESS
      </h1>
      <p className="text-lg mb-2 text-gray-200">
        Welcome <span className="text-yellow-300 font-semibold">{currentUser?.email}</span>,
        you're officially in the zone of transformation!
      </p>

      <div className="bg-white/5 p-6 rounded-xl border border-white/10 shadow-xl max-w-3xl mt-6">
        <p className="text-xl text-pink-400 font-bold mb-2">
          🎁 Funded Account for Every Student
        </p>
        <p className="text-gray-100">
          Gain access to LIVE trading sessions, elite strategies, and hands-on mentorship from real experts.
        </p>
        <p className="mt-3 text-yellow-400 font-medium">
          💥 Duration: 1 Month of Full Access
        </p>
        <p className="mt-1 text-blue-300 text-sm">
          Start now — don’t just learn trading, master it!
        </p>
      </div>

      <div className="mt-8">
        <button
          onClick={handleLogout}
          className="bg-red-600 px-6 py-2 rounded-lg hover:bg-red-700 transition font-semibold"
        >
          Logout
        </button>
      </div>
    </div>
  );
}
