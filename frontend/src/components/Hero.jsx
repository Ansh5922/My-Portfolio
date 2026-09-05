import React, { useEffect, useRef } from 'react';
import './Hero.css';

const roles = [
  'Data Scientist',
  'Machine Learning Engineer',
  'GenAI Developer',
  'AI Agent Builder',
  'FastAPI Backend Developer',
];

export default function Hero() {
  const roleRef = useRef(null);
  const indexRef = useRef(0);

  useEffect(() => {
    let charIndex = 0;
    let isDeleting = false;
    let timeout;

    const type = () => {
      const current = roles[indexRef.current];
      const el = roleRef.current;
      if (!el) return;

      if (!isDeleting) {
        el.textContent = current.substring(0, charIndex + 1);
        charIndex++;
        if (charIndex === current.length) {
          isDeleting = true;
          timeout = setTimeout(type, 2000);
          return;
        }
      } else {
        el.textContent = current.substring(0, charIndex - 1);
        charIndex--;
        if (charIndex === 0) {
          isDeleting = false;
          indexRef.current = (indexRef.current + 1) % roles.length;
        }
      }
      timeout = setTimeout(type, isDeleting ? 55 : 95);
    };

    timeout = setTimeout(type, 700);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <section id="home" className="hero">
      <div className="container hero__inner">

        {/* Availability badge */}
        <div className="hero__badge animate-fade-up">
          <span className="hero__badge-dot" />
          Open to collaborations & opportunities
        </div>

        {/* Name */}
        <h1 className="hero__title animate-fade-up" style={{ animationDelay: '0.1s' }}>
          Hi, I'm <span className="gradient-text">Ansh</span> 👋
        </h1>

        {/* Typewriter */}
        <div className="hero__role animate-fade-up" style={{ animationDelay: '0.18s' }}>
          <span ref={roleRef} className="hero__role-text" />
          <span className="hero__cursor">|</span>
        </div>

        {/* Description */}
        <p className="hero__desc animate-fade-up" style={{ animationDelay: '0.28s' }}>
          Passionate about building intelligent, data-driven solutions — from ML models and
          neural networks to GenAI applications, AI agents, and high-performance FastAPI backends.
          I turn complex data into actionable intelligence.
        </p>

        {/* Services chips */}
        <div className="hero__services animate-fade-up" style={{ animationDelay: '0.36s' }}>
          {['Data Science', 'Machine Learning', 'GenAI', 'AI Agents', 'FastAPI', 'SQL & BI'].map((s) => (
            <span key={s} className="service-chip">{s}</span>
          ))}
        </div>

        {/* CTAs */}
        <div className="hero__cta animate-fade-up" style={{ animationDelay: '0.44s' }}>
          <a href="#projects" className="btn btn-primary">
            View My Projects
            <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
          <a href="#contact" className="btn btn-outline">Hire Me</a>
        </div>

        {/* Stats */}
        <div className="hero__stats animate-fade-up" style={{ animationDelay: '0.52s' }}>
          {[
            { value: '6', label: 'Featured Projects' },
            { value: '4', label: 'Tech Domains' },
            { value: '100%', label: 'Live Demos' },
          ].map((s) => (
            <div key={s.label} className="hero__stat">
              <span className="hero__stat-value">{s.value}</span>
              <span className="hero__stat-label">{s.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll hint */}
      <div className="hero__scroll-hint">
        <span>Scroll to explore</span>
        <div className="hero__scroll-line" />
      </div>
    </section>
  );
}
