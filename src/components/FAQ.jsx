// File: src/components/FAQ.jsx
import React, { useState } from 'react';

const faqs = [
  {
    question: 'Do I need any prior experience to join?',
    answer: 'No prior experience is needed. Our course starts with absolute basics and gradually moves to advanced strategies.',
  },
  {
    question: 'What type of trading do you teach?',
    answer: 'We cover intraday trading, swing trading, and positional trading using technical and fundamental analysis.',
  },
  {
    question: 'Is this a recorded or live program?',
    answer: 'Currently, we provide structured recorded modules with planned live Q&A sessions and doubt clearing in future batches.',
  },
  {
    question: 'Will I get personal mentorship?',
    answer: 'Yes. Our mentorship plans include one-on-one sessions for advanced learners and serious traders.',
  },
  {
    question: 'What’s the duration of the course?',
    answer: 'The course is self-paced, but ideally takes 4–6 weeks to complete with practice.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="bg-gray-900 text-white py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center text-yellow-400">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white/5 border border-white/10 rounded-lg overflow-hidden">
              <button
                onClick={() => toggle(index)}
                className="w-full text-left px-6 py-4 focus:outline-none flex justify-between items-center"
              >
                <span className="font-medium text-lg">{faq.question}</span>
                <span className="text-gray-400">{openIndex === index ? '-' : '+'}</span>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4 text-gray-300">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
