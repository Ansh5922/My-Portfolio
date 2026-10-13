import React from 'react';
import './Hero.css';

export default function Hero() {

  return (
    <section id="home" className="hero">
      {/* Nature-inspired floating particles */}
      <div className="hero__particles">
        {[...Array(12)].map((_, i) => (
          <span key={i} className={`particle particle--${i + 1}`} />
        ))}
      </div>

      <div className="container hero__inner">

        {/* ── LEFT CONTENT ── */}
        <div className="hero__content">

          {/* Availability badge */}
          <div className="hero__badge animate-fade-up">
            <span className="hero__badge-dot" />
            Open to collaborations &amp; opportunities
          </div>

          {/* Greeting */}
          <p className="hero__greeting animate-fade-up" style={{ animationDelay: '0.08s' }}>
            Hello, I am
          </p>

          {/* Name */}
          <h1 className="hero__title animate-fade-up" style={{ animationDelay: '0.14s' }}>
            <span className="hero__name-ansh">Ansh</span>{' '}
            <span className="hero__name-kumar">Kumar</span>
          </h1>

          {/* Role */}
          <div className="hero__role animate-fade-up" style={{ animationDelay: '0.2s' }}>
            <span className="hero__role-text">Aspiring Software Engineer</span>
          </div>

          {/* Description */}
          <p className="hero__desc animate-fade-up" style={{ animationDelay: '0.28s' }}>
            Passionate about building intelligent, AI-enabled software systems and high-performance applications.
            Skilled in Python, Machine Learning, Data Science, and modern backend architectures.
          </p>

          {/* Service chips */}
          <div className="hero__services animate-fade-up" style={{ animationDelay: '0.34s' }}>
            {['Software Development', 'Python', 'AI-Enabled Systems', 'Machine Learning', 'Data Science', 'FastAPI'].map((s) => (
              <span key={s} className="service-chip">{s}</span>
            ))}
          </div>

          {/* CTAs */}
          <div className="hero__cta animate-fade-up" style={{ animationDelay: '0.42s' }}>
            <a href="#projects" className="btn btn-primary hero__btn-hire">
              View My Projects
              <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
            <a href="#contact" className="btn btn-outline hero__btn-outline">Hire Me</a>
          </div>

          {/* Stats */}
          <div className="hero__stats animate-fade-up" style={{ animationDelay: '0.5s' }}>
            {[
              { value: '6+', label: 'Projects' },
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

        {/* ── RIGHT: PHOTO BLOB ── */}
        <div className="hero__photo-wrap animate-fade-right">
          {/* Large decorative blob behind photo */}
          <div className="hero__blob" />
          {/* Secondary decorative ring */}
          <div className="hero__ring" />
          {/* Photo */}
          <div className="hero__photo-frame">
            <img
              src="/ansh.jpg"
              alt="Ansh Kumar — Aspiring Software Engineer"
              className="hero__photo"
            />
          </div>
          {/* Floating skill badge */}
          <div className="hero__float-badge hero__float-badge--tl">
            <span className="hero__float-icon">💻</span>
            <span>Software Engineer</span>
          </div>
          <div className="hero__float-badge hero__float-badge--br">
            <span className="hero__float-icon">🤖</span>
            <span>AI-Enabled Systems</span>
          </div>
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
