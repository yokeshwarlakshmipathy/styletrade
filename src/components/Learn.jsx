import React from 'react';
import { motion } from 'framer-motion';

const modules = [
  {
    title: 'Module 1: Trading Foundations',
    topics: [
      'What is Stock Market & Why Trade?',
      'Understanding NSE, BSE, SEBI & Brokers',
      'Types of Trading: Intraday vs Swing vs Positional',
      'Important Market Participants & Tools',
    ],
  },
  {
    title: 'Module 2: Technical Analysis',
    topics: [
      'Chart Types: Candlestick, Line, Bar',
      'Support & Resistance Levels',
      'Trendlines, Channels & Breakouts',
      'Volume Analysis & Price Action Basics',
    ],
  },
  {
    title: 'Module 3: Indicators & Strategies',
    topics: [
      'Moving Averages (SMA, EMA)',
      'MACD, RSI, Bollinger Bands',
      'Entry/Exit Rules with Live Chart Examples',
      'Risk Management & Position Sizing',
    ],
  },
  {
    title: 'Module 4: Trading Psychology & Tools',
    topics: [
      'Controlling Emotions & FOMO',
      'Building Discipline & a Trading Journal',
      'Broker Platforms & Real-World Charting Tools',
      'Creating a Personalized Trading Plan',
    ],
  },
];

export default function Learn() {
  return (
    <section id="learn" className="bg-black text-white pt-24 pb-20 px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-400 mb-6">
          What You’ll Learn
        </h2>
        <p className="text-center text-gray-400 max-w-3xl mx-auto mb-10 text-lg">
          A beginner-friendly trading curriculum taught with real charts, simple explanations, and discipline-driven mindset.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {modules.map((mod, idx) => (
            <div key={idx} className="bg-white/5 border border-white/10 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-green-400 mb-4">{mod.title}</h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                {mod.topics.map((topic, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="text-blue-500 font-bold">✓</span>
                    <span>{topic}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-400 mb-2">📌 Access to 1-on-1 mentorship, live strategy sessions, and exclusive resources upon enrollment.</p>
          <p className="text-green-500 font-medium">Lifetime access. Zero fluff. Just real trading results.</p>
        </div>
      </motion.div>
    </section>
  );
}
