// File: src/components/Navbar.jsx
import React, { useState, useEffect } from 'react';
import { Menu, X, UserCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { useAuth } from '../context/AuthContext';
import { useNavigate, Link, useLocation } from 'react-router-dom';

const navLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Learn', href: '#learn' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' }
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('');
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const isHome = location.pathname === '/';

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/');
    } catch (error) {
      console.error('Logout Error:', error);
    }
  };

  // Scroll Spy
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const sections = ['hero', 'about', 'learn', 'faq', 'contact'];

      for (let section of sections) {
        const el = document.getElementById(section);
        if (el && el.offsetTop - 100 <= scrollPosition) {
          setActive(section);
        }
      }
    };

    if (isHome) {
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, [isHome]);

  // Smooth Scroll
  const scrollToSection = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setOpen(false);
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
        DP Trading
      </a>

      {/* Desktop Nav */}
      <div className="hidden md:flex gap-6 items-center">
        {navLinks.map((link, i) =>
          isHome ? (
            <a
              key={i}
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href.substring(1))}
              className={`font-medium transition ${
                active === link.href.substring(1)
                  ? 'text-blue-400'
                  : 'text-gray-100 hover:text-blue-400'
              }`}
            >
              {link.label}
            </a>
          ) : (
            <Link
              key={i}
              to="/"
              className="text-gray-100 hover:text-blue-400 font-medium transition"
            >
              {link.label}
            </Link>
          )
        )}

        {/* Auth */}
        {currentUser ? (
          <div className="flex items-center gap-3 ml-4">
            <UserCircle className="text-blue-400 w-6 h-6" />
            <button
              onClick={handleLogout}
              className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
            >
              Logout
            </button>
          </div>
        ) : (
          <div className="flex gap-3 ml-4">
            <Link
              to="/login"
              className="text-sm px-4 py-2 border border-blue-400 text-blue-400 rounded hover:bg-blue-500 hover:text-white transition"
            >
              Login
            </Link>
            <Link
              to="/register"
              className="text-sm px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
            >
              Register
            </Link>
          </div>
        )}
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button onClick={() => setOpen(!open)}>
          {open ? <X className="text-white" /> : <Menu className="text-white" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="absolute top-20 left-0 right-0 bg-black/90 px-6 py-4 flex flex-col gap-4 md:hidden">
          {navLinks.map((link, i) =>
            isHome ? (
              <a
                key={i}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href.substring(1))}
                className={`${
                  active === link.href.substring(1)
                    ? 'text-blue-400'
                    : 'text-gray-100 hover:text-blue-400'
                }`}
              >
                {link.label}
              </a>
            ) : (
              <Link
                key={i}
                to="/"
                onClick={() => setOpen(false)}
                className="text-gray-100 hover:text-blue-400"
              >
                {link.label}
              </Link>
            )
          )}

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
              <Link
                to="/login"
                className="px-4 py-2 border border-blue-400 text-blue-400 rounded hover:bg-blue-400 hover:text-white"
                onClick={() => setOpen(false)}
              >
                Login
              </Link>
              <Link
                to="/register"
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                onClick={() => setOpen(false)}
              >
                Register
              </Link>
            </>
          )}
        </div>
      )}
    </motion.nav>
  );
}
