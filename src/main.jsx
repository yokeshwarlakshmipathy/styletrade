import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './pages/Register.jsx';
import Login from './pages/Login.jsx';
import Learn from './pages/Learn.jsx';  // ✅ optional
import Demo from './pages/Demo.jsx';    // ✅ optional
import Dashboard from './pages/Dashboard.jsx';

import { AuthProvider } from './context/AuthContext';
import PrivateRoute from './components/PrivateRoute.jsx';
import Contact from './pages/Contact.jsx';
import Terms from './pages/Terms.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/terms" element={<Terms />} />

          {/* 🔐 Protected Routes */}
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
        </Routes>
      </AuthProvider>
    </Router>
  </React.StrictMode>
);
