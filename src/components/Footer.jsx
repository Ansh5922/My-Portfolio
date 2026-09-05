import React from 'react';
import './Footer.css';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <a href="#home" className="footer__logo">
          <span style={{ color: 'var(--accent-blue)' }}>&lt;</span>
          Portfolio
          <span style={{ color: 'var(--accent-blue)' }}>/&gt;</span>
        </a>
        <p className="footer__copy">
          © {year} Ansh · Built with React & Node.js · Made with ❤️
        </p>
        <p className="footer__stack">
          <span className="tag">React</span>
          <span className="tag">Node.js</span>
          <span className="tag">Express</span>
        </p>
      </div>
    </footer>
  );
}
