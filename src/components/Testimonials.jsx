// File: src/components/Testimonials.jsx
import React from 'react';

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-black text-white py-24 px-4">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-yellow-400">What Our Learners Say</h2>
        <p className="text-gray-400 mb-12 max-w-2xl mx-auto">
          Hear from some of our early students who’ve transformed their mindset and market skills with StyleTrade.
        </p>

        <div className="grid md:grid-cols-2 gap-8 text-left">
          <div className="bg-white/5 p-6 rounded-xl border border-white/10 shadow">
            <p className="text-gray-100 mb-4 italic">
              “I joined as a complete beginner. StyleTrade’s hands-on approach made charts and candlesticks click for me. I now do intraday confidently.”
            </p>
            <span className="text-green-400 font-semibold">— Karthik R, B.Com Graduate</span>
          </div>

          <div className="bg-white/5 p-6 rounded-xl border border-white/10 shadow">
            <p className="text-gray-100 mb-4 italic">
              “From zero to real profits. The modules on psychology and risk management saved me from overtrading. Highly recommend to all fresh traders.”
            </p>
            <span className="text-pink-400 font-semibold">— Priya M, Aspiring Trader</span>
          </div>

          <div className="bg-white/5 p-6 rounded-xl border border-white/10 shadow">
            <p className="text-gray-100 mb-4 italic">
              “The way they explained price action and live setups helped me shift from theory to practice. Love the community too.”
            </p>
            <span className="text-blue-400 font-semibold">— Arun V, Software Engineer</span>
          </div>

          <div className="bg-white/5 p-6 rounded-xl border border-white/10 shadow">
            <p className="text-gray-100 mb-4 italic">
              “Before this I only lost money. Now I follow strategy, have proper stop loss, and plan entries. Game-changer!”
            </p>
            <span className="text-yellow-300 font-semibold">— Meena S, Homemaker turned Trader</span>
          </div>
        </div>
      </div>
    </section>
  );
}
