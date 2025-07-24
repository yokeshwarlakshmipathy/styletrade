// File: src/components/Footer.jsx
import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6 text-center">
      <p className="text-sm">
        &copy; {new Date().getFullYear()} Trading + Fashion | All Rights Reserved.
      </p>
    </footer>
  );
}

export default Footer;
