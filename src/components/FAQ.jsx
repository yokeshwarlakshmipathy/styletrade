// File: src/sections/FAQ.jsx
import React from 'react';
import { Accordion, AccordionItem } from '@szhsin/react-accordion';
import '@szhsin/react-accordion/dist/index.css';

const faqs = [
  {
    question: 'What is StyleTrade?',
    answer: 'StyleTrade is a unique platform that combines trading education with fashion insights to help students, professionals, and job seekers grow in both domains.'
  },
  {
    question: 'Do I need any prior experience in trading or fashion?',
    answer: 'No, our curriculum is beginner-friendly and designed for learners with zero experience.'
  },
  {
    question: 'What is included in the Pro Combo plan?',
    answer: 'The Pro Combo includes full access to our trading and fashion courses, 1-on-1 mentorship, and lifetime access to community resources.'
  },
  {
    question: 'How can I enroll in the course?',
    answer: 'You can enroll by clicking the "Enroll Now" button on the homepage or the pricing section after registering or logging in.'
  },
  {
    question: 'Can I access the content on mobile?',
    answer: 'Yes, our platform is fully responsive and accessible across all devices.'
  }
];

export default function FAQ() {
  return (
    <section id="faq" className="bg-gradient-to-b from-black via-gray-900 to-black text-white py-20 px-6 md:px-20">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">❓ Frequently Asked Questions</h2>

      <Accordion transition transitionTimeout={250} className="space-y-4 max-w-3xl mx-auto">
        {faqs.map((faq, index) => (
          <AccordionItem
            key={index}
            header={<div className="font-medium text-lg text-white">{faq.question}</div>}
            className="bg-white/5 backdrop-blur-sm rounded-lg px-4 py-3 border border-white/10"
            buttonProps={{ className: 'focus:outline-none w-full text-left' }}
            contentProps={{ className: 'text-sm text-gray-300 mt-2' }}
          >
            {faq.answer}
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
