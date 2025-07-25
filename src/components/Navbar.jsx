// File: src/components/Navbar.jsx
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const navLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Learn', href: '#learn' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' }
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/login');
    } catch (error) {
      console.error('Logout Error:', error);
    }
  };

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 bg-black backdrop-blur-md shadow-lg py-5 px-6 md:px-20 flex items-center justify-between border-b border-white/10"
    >
      <a href="#hero" className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-white to-blue-500">
        StyleTrade
      </a>

      <div className="hidden md:flex gap-6 items-center">
        {navLinks.map((link, i) => (
          <a
            key={i}
            href={link.href}
            className="text-gray-100 hover:text-blue-400 font-medium transition"
          >
            {link.label}
          </a>
        ))}
        {currentUser ? (
          <button
            onClick={handleLogout}
            className="ml-4 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
          >
            Logout
          </button>
        ) : (
          <div className="flex gap-3 ml-4">
            <a
              href="/login"
              className="text-sm px-4 py-2 border border-blue-400 text-blue-400 rounded hover:bg-blue-500 hover:text-white transition"
            >
              Login
            </a>
            <a
              href="/register"
              className="text-sm px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
            >
              Register
            </a>
          </div>
        )}
      </div>

      {/* Mobile Menu */}
      <div className="md:hidden">
        <button onClick={() => setOpen(!open)}>
          {open ? <X className="text-white" /> : <Menu className="text-white" />}
        </button>
      </div>

      {open && (
        <div className="absolute top-20 left-0 right-0 bg-black/90 px-6 py-4 flex flex-col gap-4 md:hidden">
          {navLinks.map((link, i) => (
            <a
              key={i}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-gray-100 hover:text-blue-400"
            >
              {link.label}
            </a>
          ))}
          {currentUser ? (
            <button
              onClick={() => {
                handleLogout();
                setOpen(false);
              }}
              className="mt-2 px-4 py-2 bg-red-600 text-white rounded"
            >
              Logout
            </button>
          ) : (
            <>
              <a
                href="/login"
                className="px-4 py-2 border border-blue-400 text-blue-400 rounded hover:bg-blue-400 hover:text-white"
                onClick={() => setOpen(false)}
              >
                Login
              </a>
              <a
                href="/register"
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                onClick={() => setOpen(false)}
              >
                Register
              </a>
            </>
          )}
        </div>
      )}
    </motion.nav>
  );
}
