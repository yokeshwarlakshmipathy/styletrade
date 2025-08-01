import React from 'react';
import { motion } from 'framer-motion';

const modules = [
  {
    title: '🧠 Module 0: Core Awakening – "Decode the Markets"',
    topics: [
      '📊 Price delivery algorithm + Smart Money Concepts (SMC)',
      '🏦 Institutional vs Retail flow — Market structure decoded',
    ],
  },
  {
    title: '🏗️ Module 1: Foundations of Flow – "Structure IKing"',
    topics: [
      '🧱 Break of Structure (BOS) vs CHoCH',
      '🔍 Internal vs External Structure',
      '📍 How to Identify POIs (Points of Interest)',
    ],
  },
  {
    title: '🕵️‍♂️ Module 2: The Manipulation Game – "Hunt the Traps"',
    topics: [
      '🌊 Liquidity Sweeps (Equal Highs/Lows), Mitigation Blocks',
      '💰 Fair Value Gaps (FVG), SMC Entry Models, Sniper Precision',
    ],
  },
  {
    title: '🎯 Module 3: Entry Engineering – "The Kill-Zone Blueprints"',
    topics: [
      '📌 HTF Bias + LT Confirmation | POI Stacking with Time & Price',
      '📈 Live Chart Walkthroughs | Sniper Entries: OB + FVG + Liquidity Combo',
      '✅ Trade Execution Checklist',
    ],
  },
];

const bonusModule = {
  title: '🔥 Bonus Module: Mind Game Mastery – "Trader\'s Inner War"',
  topics: [
    '⚠️ Fear, Greed & Overtrading Traps | Journaling Templates',
    '🎯 Prop Firm Challenge Mindset | Weekly Discipline Planner',
    '🧑‍💼 Build Your Identity as a Pro Trader',
  ],
};

export default function Learn() {
  return (
    <section id="learn" className="bg-gradient-to-br from-black via-gray-900 to-black text-white pt-24 pb-20 px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-center text-green-400 mb-6">
          📚 Complete Trading Curriculum
        </h2>
        <p className="text-center text-gray-300 max-w-3xl mx-auto mb-10 text-lg">
          Decode the markets with advanced institutional-level concepts taught in the most beginner-friendly way.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {modules.map((mod, idx) => (
            <div
              key={idx}
              className="bg-white/5 border border-white/10 rounded-xl p-6 shadow-xl hover:scale-[1.01] transition duration-300"
            >
              <h3 className="text-xl font-semibold text-blue-400 mb-4">{mod.title}</h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                {mod.topics.map((topic, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="text-green-400 font-bold">✔</span>
                    <span>{topic}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center max-w-2xl mx-auto mt-16 bg-white/5 border border-white/10 rounded-xl p-6 shadow-xl">
          <h3 className="text-xl font-semibold text-blue-400 mb-4">{bonusModule.title}</h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            {bonusModule.topics.map((topic, i) => (
              <li key={i} className="flex gap-2">
                <span className="text-green-400 font-bold">✔</span>
                <span>{topic}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="text-center mt-12 space-y-2">
          <p className="text-yellow-400 font-medium">
            🎯 Live sessions + Journaling systems + Sniper strategy breakdowns.
          </p>
          <p className="text-green-500 font-semibold">
            💸 Every student gets access to a funded account + Live Trading sessions.
          </p>
        </div>

        <div className="text-center mt-10">
          <a
            href="/payment"
            className="inline-block bg-gradient-to-r from-green-500 to-blue-500 text-white px-6 py-3 rounded-xl text-lg font-bold shadow-md hover:scale-105 transition"
          >
            🚀 Join Now
          </a>
        </div>
      </motion.div>
    </section>
  );
}
