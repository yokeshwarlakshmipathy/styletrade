// File: src/pages/Demo.jsx
import React from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Demo() {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-pink-800 via-purple-800 to-blue-800 text-white p-8">
      <h1 className="text-4xl font-bold mb-6">🎥 Welcome to the Demo Page</h1>
      <p className="text-lg mb-4">
        Hello {currentUser?.email}, here you’ll experience DP Trading's real power in action.
      </p>
      <button
        onClick={handleLogout}
        className="bg-yellow-500 px-4 py-2 rounded hover:bg-yellow-600 transition text-black font-semibold"
      >
        Logout
      </button>
    </div>
  );
}
