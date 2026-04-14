import React from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate, Navigate } from 'react-router-dom';
import PrivacyPolicy from '../Privacy.jsx';
import TermsAndConditions from '../TermsAndConditions.jsx';

// --- PREMIUM SPLASH PAGE WITH TWO ACCESS BUTTONS ---
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
      fontFamily: "'Outfit', sans-serif",
      padding: '20px'
    }}>
      <div className="glass-card" style={{ 
        padding: '60px 40px', 
        background: 'rgba(255, 255, 255, 0.05)',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        maxWidth: '600px',
        width: '100%',
        animation: 'scaleUp 0.8s ease-out'
      }}>
        <h1 style={{ fontSize: '3.5rem', margin: '0', letterSpacing: '2px', fontWeight: '800' }}>
          CARE<span style={{ color: '#4ade80' }}>2</span>CONNECT
        </h1>
        <p style={{ fontSize: '1.2rem', color: '#cbd5e1', marginTop: '10px', fontWeight: '400', marginBottom: '50px' }}>
          Official Legal Documentation Portal
        </p>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <button onClick={() => navigate('/privacy')} className="portal-btn privacy">
            VIEW PRIVACY POLICY
          </button>
          <button onClick={() => navigate('/terms')} className="portal-btn terms">
            VIEW TERMS & CONDITIONS
          </button>
        </div>
      </div>

      <style>
        {`
          @keyframes scaleUp {
            from { opacity: 0; transform: scale(0.95); }
            to { opacity: 1; transform: scale(1); }
          }
          .portal-btn {
            padding: 20px;
            font-size: 1.1rem;
            font-weight: 700;
            border-radius: 12px;
            cursor: pointer;
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            border: none;
            text-transform: uppercase;
            letter-spacing: 1px;
            width: 100%;
          }
          .privacy {
            background: #4ade80;
            color: #001a33;
            box-shadow: 0 10px 20px rgba(74, 222, 128, 0.2);
          }
          .privacy:hover {
            background: #22c55e;
            transform: translateY(-3px);
            box-shadow: 0 15px 30px rgba(74, 222, 128, 0.4);
          }
          .terms {
            background: rgba(255, 255, 255, 0.1);
            color: white;
            border: 2px solid rgba(255, 255, 255, 0.2);
          }
          .terms:hover {
            background: rgba(255, 255, 255, 0.2);
            transform: translateY(-3px);
            border-color: #4ade80;
          }
        `}
      </style>
    </div>
  );
};

// --- COMPONENT FOR INDIVIDUAL LEGAL PAGES ---
const LegalPageWrapper = ({ children, title }) => {
  return (
    <div style={{ padding: '60px 20px', background: '#f8fafc', minHeight: '100vh' }}>
      <div className="glass-card" style={{ 
        maxWidth: '950px', 
        margin: '0 auto', 
        padding: '60px',
        animation: 'fadeInUp 0.6s ease-out',
        background: 'white',
        boxShadow: '0 20px 50px rgba(0,0,0,0.05)',
        borderRadius: '24px'
      }}>
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h2 style={{ color: '#1a4c8a', fontSize: '2.5rem', fontWeight: '800', margin: 0 }}>{title}</h2>
          <div style={{ width: '60px', height: '4px', background: '#4ade80', margin: '20px auto' }}></div>
        </div>

        {children}
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
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SplashPage />} />
        <Route 
          path="/privacy" 
          element={<LegalPageWrapper title="Privacy Policy"><PrivacyPolicy /></LegalPageWrapper>} 
        />
        <Route 
          path="/terms" 
          element={<LegalPageWrapper title="Terms & Conditions"><TermsAndConditions /></LegalPageWrapper>} 
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
