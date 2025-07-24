// File: src/components/Testimonials.jsx
import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Aarav M.',
    role: 'Engineering Student',
    feedback:
      'This platform gave me the confidence to learn trading while also helping me improve my fashion sense for interviews!',
  },
  {
    name: 'Divya S.',
    role: 'Working Professional',
    feedback:
      'Balancing my job and learning was tough until I joined StyleTrade. The fashion tips are an awesome bonus!'
  },
  {
    name: 'Rahul K.',
    role: 'Job Seeker',
    feedback:
      'Combining finance with styling is genius! I cracked my dream job looking confident and smart. Thanks DP!',
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="bg-black text-white py-20 px-4 md:px-10 lg:px-20 relative"
    >
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-pink-400 mb-2">
          What Our Users Say 💬
        </h2>
        <p className="text-gray-300 max-w-xl mx-auto">
          Real feedback from our passionate learners who leveled up in both finance & fashion.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-2xl shadow-xl text-center"
          >
            <div className="flex justify-center mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" />
              ))}
            </div>
            <p className="text-sm text-gray-200 italic mb-4">"{testimonial.feedback}"</p>
            <h3 className="text-lg font-semibold text-white">{testimonial.name}</h3>
            <p className="text-sm text-pink-400">{testimonial.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

