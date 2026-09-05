import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

const WEB3FORMS_KEY = process.env.REACT_APP_WEB3FORMS_KEY || 'd91dd035-4d5d-489c-a2db-f72cfa08af87';

function App() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(t);
  }, []);

  // Send visit notification email once per visitor session
  useEffect(() => {
    const key = process.env.REACT_APP_WEB3FORMS_KEY || WEB3FORMS_KEY;
    if (!key || key === 'YOUR_WEB3FORMS_ACCESS_KEY') return;

    const alreadyNotified = sessionStorage.getItem('visit_notified');
    if (!alreadyNotified) {
      sessionStorage.setItem('visit_notified', 'true');
      fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: key,
          subject: '👀 Portfolio Visit Alert!',
          from_name: 'Portfolio Visitor Tracker',
          message: `Someone just opened your portfolio website at ${new Date().toLocaleString()}!\n\nUser Agent: ${navigator.userAgent}\nURL: ${window.location.href}`,
        }),
      }).catch((err) => console.error('Visit notification error:', err));
    }
  }, []);

  return (
    <Router>
      <div className={`app ${loaded ? 'app--loaded' : ''}`}>
        {/* Animated background blobs */}
        <div className="bg-blob bg-blob-1" />
        <div className="bg-blob bg-blob-2" />
        <div className="bg-blob bg-blob-3" />

        <Routes>
          <Route
            path="/"
            element={
              <>
                <Navbar />
                <main>
                  <Hero />
                  <About />
                  <Projects />
                  <Contact />
                </main>
                <Footer />
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
