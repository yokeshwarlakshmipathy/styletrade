// ✅ Final App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Login from './pages/Login';
import Register from './pages/Register';
import Contact from './pages/Contact';
import Terms from './pages/Terms';
import Payment from './pages/Payment';

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
import Enroll from './components/Enroll';  // ✅ Match file name
import Footer from './components/Footer';
import EnrollForm from './components/EnrollForm';

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
        <Enroll /> {/* ✅ For home page preview section */}
      </main>
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage/> } />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/enroll" element={<Enroll />} /> 
        <Route path="/enrollform" element={<EnrollForm />} /> 
        <Route path="/payment" element={<Payment />} />
      
      </Routes>
    </>
  );
}
