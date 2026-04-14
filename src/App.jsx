import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate, Navigate } from 'react-router-dom';
import PrivacyPolicy from '../Privacy.jsx';
import TermsAndConditions from '../TermsAndConditions.jsx';

// --- PREMIUM SPLASH / LANDING PAGE ---
const SplashPage = () => {
  const navigate = useNavigate();

  return (
    <div style={{
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(135deg, #1a4c8a 0%, #001a33 100%)',
      color: 'white',
      textAlign: 'center',
      fontFamily: "'Outfit', sans-serif"
    }}>
      <div className="glass-card" style={{ 
        padding: '60px', 
        background: 'rgba(255, 255, 255, 0.05)',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        animation: 'scaleUp 0.8s ease-out'
      }}>
        <h1 style={{ fontSize: '4rem', margin: '0', letterSpacing: '2px', fontWeight: '800' }}>
          CARE<span style={{ color: '#4ade80' }}>2</span>CONNECT
        </h1>
        <p style={{ fontSize: '1.2rem', color: '#cbd5e1', marginTop: '10px', fontWeight: '400' }}>
          Your Trusted Healthcare Partner
        </p>
        
        <div style={{ marginTop: '40px' }}>
          <button 
            onClick={() => navigate('/legal')}
            className="enter-btn"
          >
            ENTER PORTAL
          </button>
        </div>
      </div>

      <style>
        {`
          @keyframes scaleUp {
            from { opacity: 0; transform: scale(0.9); }
            to { opacity: 1; transform: scale(1); }
          }
          .enter-btn {
            background: #4ade80;
            color: #001a33;
            border: none;
            padding: 16px 40px;
            font-size: 1.1rem;
            font-weight: 700;
            border-radius: 50px;
            cursor: pointer;
            transition: all 0.3s ease;
            box-shadow: 0 10px 20px rgba(74, 222, 128, 0.2);
          }
          .enter-btn:hover {
            transform: translateY(-3px);
            box-shadow: 0 15px 30px rgba(74, 222, 128, 0.4);
            background: #22c55e;
          }
        `}
      </style>
    </div>
  );
};

// --- LEGAL CONTENT PAGE (Privacy + Terms) ---
const LegalCenter = () => {
  return (
    <div style={{ padding: '60px 20px', background: '#f8fafc', minHeight: '100vh' }}>
      <div className="glass-card" style={{ 
        maxWidth: '950px', 
        margin: '0 auto', 
        padding: '60px',
        animation: 'fadeInUp 0.6s ease-out'
      }}>
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h2 style={{ color: '#1a4c8a', fontSize: '2.5rem', fontWeight: '800' }}>Legal Documentation</h2>
          <div style={{ width: '60px', height: '4px', background: '#4ade80', margin: '20px auto' }}></div>
        </div>

        {/* Both documents shown in one clean flow */}
        <section id="privacy">
          <PrivacyPolicy />
        </section>
        
        <div style={{ margin: '80px 0', borderTop: '2px dashed #e2e8f0' }}></div>
        
        <section id="terms">
          <TermsAndConditions />
        </section>
      </div>

      <style>
        {`
          @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(30px); }
            to { opacity: 1; transform: translateY(0); }
          }
        `}
      </style>
    </div>
  );
}

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SplashPage />} />
        <Route path="/legal" element={<LegalCenter />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
