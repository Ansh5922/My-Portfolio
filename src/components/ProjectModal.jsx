import React, { useEffect } from 'react';
import './ProjectModal.css';

const CATEGORY_META = {
  'powerbi-excel': { label: 'PowerBI & Excel', color: '#b45309', bg: '#fef3c7', border: '#fcd34d' },
  ml:              { label: 'ML Model',         color: '#065f46', bg: '#d1fae5', border: '#6ee7b7' },
  genai:           { label: 'GenAI & AI',       color: '#2563eb', bg: '#dbeafe', border: '#93c5fd' },
  backend:         { label: 'Python & Backend', color: '#9f1239', bg: '#ffe4e6', border: '#fda4af' },
};

export default function ProjectModal({ project, onClose }) {
  const meta = CATEGORY_META[project.category] || { label: project.category, color: '#6c63ff', bg: '#ede9fe', border: '#c4b5fd' };

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [onClose]);

  // Parse story into sections by newlines
  const storyParts = project.story ? project.story.split('\n\n') : [];

  return (
    <div className="pm__overlay" onClick={onClose} role="dialog" aria-modal="true" aria-label={project.title}>
      <div className="pm__panel" onClick={(e) => e.stopPropagation()}>
        {/* Close */}
        <button className="pm__close" onClick={onClose} aria-label="Close">✕</button>

        {/* Hero image */}
        <div className="pm__img-wrap">
          <img src={project.image} alt={project.title} className="pm__img" />
          <div className="pm__img-overlay" />
          <div className="pm__img-meta">
            <span className="pm__cat-pill" style={{ color: meta.color, background: meta.bg, border: `1px solid ${meta.border}` }}>
              {meta.label}
            </span>
            <h2 className="pm__title">{project.title}</h2>
            <p className="pm__tagline">{project.tagline}</p>
          </div>
        </div>

        {/* Content */}
        <div className="pm__body">
          {/* Story */}
          <div className="pm__story">
            {storyParts.map((part, i) => {
              const lines = part.split('\n');
              const heading = lines[0];
              const body = lines.slice(1).join('\n');
              return (
                <div key={i} className="pm__story-block">
                  <p className="pm__story-heading">{heading}</p>
                  {body && <p className="pm__story-text">{body}</p>}
                </div>
              );
            })}
          </div>

          {/* Tech Stack */}
          {project.tech && (
            <div className="pm__tech">
              <p className="pm__section-label">⚙️ Built With</p>
              <div className="pm__tech-list">
                {project.tech.map((t) => (
                  <span key={t} className="pm__tech-pill">{t}</span>
                ))}
              </div>
            </div>
          )}

          {/* Key Highlights */}
          {project.highlights && (
            <div className="pm__highlights">
              <p className="pm__section-label">✨ Highlights</p>
              <div className="pm__hl-list">
                {project.highlights.map((h) => (
                  <div key={h} className="pm__hl-item">
                    <span className="pm__hl-dot" style={{ background: meta.color }} />
                    {h}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Actions */}
          <div className="pm__actions">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="pm__btn pm__btn--primary"
              >
                <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                Open Live Project
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="pm__btn pm__btn--outline"
              >
                <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
                GitHub
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
