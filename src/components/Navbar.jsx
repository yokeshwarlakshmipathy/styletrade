import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const navLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Learn', href: '#learn' },
  { label: 'Demo', href: '#demo' },
  { label: 'Why Us', href: '#whyus' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'FAQ', href: '#faq' },
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
      className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-indigo-900 via-black to-indigo-900 backdrop-blur-md shadow-lg py-6 px-6 md:px-20 flex items-center justify-between border-b border-white/10"
    >
      <a
        href="#hero"
        className="text-2xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-300 to-pink-300"
      >
        DP <span className="text-pink-400 font-semibold">| StyleTrade</span>
      </a>

      <div className="hidden md:flex gap-6 items-center">
        {navLinks.map((link, i) => (
          <a
            key={i}
            href={link.href}
            className="text-gray-100 hover:text-pink-400 font-medium transition duration-200"
          >
            {link.label}
          </a>
        ))}

        {currentUser ? (
          <button
            onClick={handleLogout}
            className="ml-4 px-4 py-2 bg-pink-600 text-white rounded hover:bg-pink-700 transition"
          >
            Logout
          </button>
        ) : (
          <div className="flex gap-3 ml-4">
            <a
              href="/login"
              className="text-sm px-4 py-2 border border-pink-400 text-pink-400 rounded hover:bg-pink-400 hover:text-white transition"
            >
              Login
            </a>
            <a
              href="/register"
              className="text-sm px-4 py-2 bg-pink-500 text-white rounded hover:bg-pink-600 transition"
            >
              Register
            </a>
          </div>
        )}
      </div>

      <div className="md:hidden">
        <button onClick={() => setOpen(!open)}>
          {open ? <X className="w-6 h-6 text-white" /> : <Menu className="w-6 h-6 text-white" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="absolute top-20 left-0 right-0 bg-black/80 backdrop-blur-lg shadow-md px-6 py-4 flex flex-col gap-4 md:hidden">
          {navLinks.map((link, i) => (
            <a
              key={i}
              href={link.href}
              className="text-gray-100 hover:text-pink-400 font-medium"
              onClick={() => setOpen(false)}
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
              className="mt-2 px-4 py-2 bg-pink-600 text-white rounded hover:bg-pink-700 transition"
            >
              Logout
            </button>
          ) : (
            <>
              <a
                href="/login"
                className="text-sm px-4 py-2 border border-pink-400 text-pink-400 rounded hover:bg-pink-400 hover:text-white transition"
                onClick={() => setOpen(false)}
              >
                Login
              </a>
              <a
                href="/register"
                className="text-sm px-4 py-2 bg-pink-500 text-white rounded hover:bg-pink-600 transition"
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

