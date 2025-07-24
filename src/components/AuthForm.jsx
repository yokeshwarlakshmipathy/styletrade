// File: src/components/AuthForm.jsx
import React, { useState } from 'react';
import { auth } from '../firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

export default function AuthForm() {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    try {
      if (isLogin) {
        await signInWithEmailAndPassword(auth, email, password);
        setSuccess('✅ Logged in successfully!');
      } else {
        await createUserWithEmailAndPassword(auth, email, password);
        setSuccess('✅ Registered successfully!');
      }
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white p-8 rounded-xl shadow-md mt-10">
      <h2 className="text-2xl font-bold mb-6 text-center">
        {isLogin ? 'Login to StyleTrade' : 'Register to StyleTrade'}
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring focus:border-blue-300"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring focus:border-blue-300"
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-xl hover:bg-blue-700 transition"
        >
          {isLogin ? 'Login' : 'Register'}
        </button>

        <p
          className="text-sm text-center text-blue-600 hover:underline cursor-pointer mt-4"
          onClick={() => setIsLogin(!isLogin)}
        >
          {isLogin ? "Don't have an account? Register" : 'Already have an account? Login'}
        </p>

        {error && <p className="text-red-500 text-sm mt-2">⚠ {error}</p>}
        {success && <p className="text-green-500 text-sm mt-2">🎉 {success}</p>}
      </form>
    </div>
  );
}
