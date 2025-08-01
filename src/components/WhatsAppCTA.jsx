import React from 'react';

export default function WhatsAppCTA() {
  return (
    <a
      href="https://wa.me/+918148502407?text=Hi%20I%20want%20to%20enroll%20in%20StyleTrade"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50"
    >
      <img
        src="https://img.icons8.com/color/48/000000/whatsapp--v1.png"
        alt="WhatsApp"
        className="w-12 h-12 hover:scale-110 transition-transform"
      />
    </a>
  );
}
