import React from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink, Navigate } from 'react-router-dom';
import PrivacyPolicy from '../Privacy.jsx';
import TermsAndConditions from '../TermsAndConditions.jsx';

const App = () => {
  return (
    <Router>
      <div style={{ padding: '40px 20px', minHeight: '100vh' }}>
        <nav style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          gap: '20px', 
          marginBottom: '40px',
          position: 'sticky',
          top: '20px',
          zIndex: 100,
        }}>
          <div className="glass-card" style={{ padding: '8px', display: 'flex', gap: '8px' }}>
            <NavLink 
              to="/privacy" 
              className={({ isActive }) => `nav-btn ${isActive ? 'active' : ''}`}
              style={{ textDecoration: 'none', display: 'inline-block' }}
            >
              Privacy Policy
            </NavLink>
            <NavLink 
              to="/terms" 
              className={({ isActive }) => `nav-btn ${isActive ? 'active' : ''}`}
              style={{ textDecoration: 'none', display: 'inline-block' }}
            >
              Terms & Conditions
            </NavLink>
          </div>
        </nav>

        <main style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <div className="glass-card" style={{ padding: '40px', animation: 'fadeIn 0.5s ease-out' }}>
            <Routes>
              <Route path="/privacy" element={<PrivacyPolicy />} />
              <Route path="/terms" element={<TermsAndConditions />} />
              {/* Default to Privacy Policy if no route matches */}
              <Route path="*" element={<Navigate to="/privacy" replace />} />
            </Routes>
          </div>
        </main>

        <style>
          {`
            @keyframes fadeIn {
              from { opacity: 0; transform: translateY(10px); }
              to { opacity: 1; transform: translateY(0); }
            }
          `}
        </style>
      </div>
    </Router>
  );
}

export default App;
