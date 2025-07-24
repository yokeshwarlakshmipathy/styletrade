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
      <h1 className="text-4xl font-bold mb-6">📚 Welcome to the Learn Page</h1>
      <p className="text-lg mb-4">
        Hey {currentUser?.email}, dive into powerful trading + fashion knowledge here.
      </p>
      <button
        onClick={handleLogout}
        className="bg-red-600 px-4 py-2 rounded hover:bg-red-700 transition"
      >
        Logout
      </button>
    </div>
  );
}
