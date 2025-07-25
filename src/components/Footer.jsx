// File: src/components/Footer.jsx
import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-black text-center text-sm text-gray-400 py-6 border-t border-white/10 mt-16">
      <p>© {new Date().getFullYear()} StyleTrade. All rights reserved.</p>
      <p className="mt-1">Designed & developed by <span className="text-white font-medium">Yokeshwar L</span></p>
    </footer>
  );
}

