// File: src/pages/Login.jsx
import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate, Link, useLocation } from 'react-router-dom';
import toast from 'react-hot-toast';


export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const location = useLocation(); // 👈 Access navigation state


  // const handleLogin = async (e) => {
  //   e.preventDefault();
  //   setError('');

  //   try {
  //     await login(email, password);
  //     const redirectPath = location.state?.from || '/'; // 👈 Default to home if no previous path
  //     navigate(redirectPath);
  //     // console.log('Login success')
  //     // navigate('/');
  //     // toast.success("Login successful!");
      

  //   } catch (err) {
  //     console.error("Login Error:", err);
  //     toast.error('Invalid email or password. Please try again.');

  //   }
  // };  

  const handleLogin = async (e) => {
  e.preventDefault();
  setError('');

  try {
    await login(email, password);

    const redirectPath = location.state?.from || '/'; // 👈 redirect to home if not specified
    const scrollTo = location.state?.scrollTo;         // 👈 check if there's a scrollTo instruction

    // Pass scroll target state during navigation
    navigate(redirectPath, {
      replace: true,
      state: scrollTo ? { scrollTo } : null,
    });
    

  } catch (err) {
    console.error("Login Error:", err);
    toast.error('Invalid email or password. Please try again.');
  }
};


  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white px-4">
      <div className="bg-white/5 backdrop-blur-xl p-8 rounded-2xl shadow-lg w-full max-w-md border border-white/10">
        <h2 className="text-3xl font-bold mb-6 text-center text-blue-400">🔐 Login</h2>

        {error && <p className="text-red-500 text-sm mb-4 text-center">{error}</p>}

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm text-gray-300">Email</label>
            <input
              type="email"
              id="email"
              className="mt-1 w-full p-2 rounded-lg bg-white/10 text-white placeholder-gray-400 border border-white/20"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              required
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm text-gray-300">Password</label>
            <input
              type="password"
              id="password"
              className="mt-1 w-full p-2 rounded-lg bg-white/10 text-white placeholder-gray-400 border border-white/20"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="********"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition"
          >
            Log In
          </button>
        </form>

        <p className="mt-4 text-sm text-center text-gray-400">
          Don't have an account?{" "}
          <Link to="/register" className="text-blue-400 hover:underline">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}
