// ✅ File: src/App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

// Pages
import Login from './pages/Login';
import Register from './pages/Register';
import Terms from './pages/Terms';
import Payment from './pages/Payment';
import Dashboard from './pages/Dashboard';
import EnrollSuccess from './pages/EnrollSuccess';

// Components
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Learn from './components/Learn';
import Demo from './components/Demo';
import WhyUs from './components/WhyUs';
import Feedback from './components/Feedback';

import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import CTA from './components/CTA';
import Enroll from './components/Enroll';
import Footer from './components/Footer';
import EnrollForm from './components/EnrollForm';
import Contact from './components/Contact';
import WhatsAppCTA from './components/WhatsAppCTA';
import PrivateRoute from './components/PrivateRoute';

function LandingPage() {
  return (
    <>
      <Navbar />
      <main className="pt-2 space-y-1 bg-gray-900 text-white">
        <div id="hero"><Hero /></div>
        <div id="about"><About /></div>
        <div id="learn"><Learn /></div>
        <div id="demo"><Demo /></div>
        <div id="whyus"><WhyUs /></div>
        
        <div id="pricing"><Pricing /></div>
        <div id="faq"><FAQ /></div>
        <div id="cta"><CTA /></div>
        <div id="enroll"><Enroll /></div>
        <div id="contact"><Contact /></div> {/* ✅ Anchor target */}
        <div id="feedback"><Feedback /></div>

        <Footer />
        <WhatsAppCTA />
      </main>
      
    </>
  );
}

export default function App() {
  return (
    <>
      <Toaster position="top-center" />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        {/* ✅ Removed "/contact" route to enable scroll behavior */}
        <Route path="/terms" element={<Terms />} />
        <Route path="/enroll" element={<Enroll />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/enrollform" element={<EnrollForm />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/enroll-success" element={<EnrollSuccess />} />

        {/* ✅ Protected Routes */}
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
        <Route
          path="/learn"
          element={
            <PrivateRoute>
              <Learn />
            </PrivateRoute>
          }
        />
        <Route
          path="/demo"
          element={
            <PrivateRoute>
              <Demo />
            </PrivateRoute>
          }
        />
          <Route
          path="/pricing"
          element={
            <PrivateRoute>
              <Pricing />
            </PrivateRoute>
          }
        />
       
      </Routes>
      
    </>
  );
}
