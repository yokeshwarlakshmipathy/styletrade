// File: src/App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Login from './pages/Login';
import Register from './pages/Register';
import Payment from './pages/Payment';

// Assuming your original landing site is in Hero.jsx, About.jsx, etc.
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Learn from './components/Learn';
import Demo from './components/Demo';
import WhyUs from './components/WhyUs';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import CTA from './components/CTA';
import Enroll from './components/Enroll';
import Footer from './components/Footer';

function LandingPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20 space-y-24">
        <Hero />
        <About />
        <Learn />
        <Demo />
        <WhyUs />
        <Testimonials />
        <Pricing />
        <FAQ />
        <CTA />
        <Enroll />
      </main>
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
     <Route path="/payment" element={<Payment />} />
    </Routes>
  );
}
