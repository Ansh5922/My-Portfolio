import React from 'react';
import './ProjectCard.css';

const CATEGORY_META = {
  sql:              { label: 'SQL',             color: '#0369a1', bg: '#e0f2fe', border: '#bae6fd' },
  'powerbi-excel':  { label: 'PowerBI & Excel', color: '#b45309', bg: '#fef3c7', border: '#fcd34d' },
  ml:               { label: 'ML Model',        color: '#065f46', bg: '#d1fae5', border: '#6ee7b7' },
  'neural-networks':{ label: 'Neural Network',  color: '#4338ca', bg: '#ede9fe', border: '#c4b5fd' },
  genai:            { label: 'GenAI',            color: '#2563eb', bg: '#dbeafe', border: '#93c5fd' },
  backend:          { label: 'Backend',          color: '#9f1239', bg: '#ffe4e6', border: '#fda4af' },
};

export default function ProjectCard({ project, delay = 0 }) {
  const meta = CATEGORY_META[project.category] || { label: project.category, color: '#6c63ff', bg: 'rgba(108,99,255,0.1)' };

  return (
    <article
      className="project-card glass-card"
      style={{ animationDelay: `${delay}s` }}
    >
      {/* Top bar accent */}
      <div className="project-card__bar" style={{ background: meta.color }} />

      <div className="project-card__body">
        {/* Category badge */}
        <span
          className="project-card__category"
          style={{ color: meta.color, background: meta.bg, borderColor: meta.border || `${meta.color}44` }}
        >
          {meta.label}
        </span>

        {project.featured && (
          <span className="project-card__featured">⭐ Featured</span>
        )}

        <h3 className="project-card__title">{project.title}</h3>
        <p className="project-card__desc">{project.description}</p>

        {/* Highlights */}
        {project.highlights && (
          <ul className="project-card__highlights">
            {project.highlights.map((h) => (
              <li key={h}>
                <span className="highlight-dot" style={{ background: meta.color }} />
                {h}
              </li>
            ))}
          </ul>
        )}

        {/* Tags */}
        <div className="project-card__tags">
          {project.tags.map((t) => (
            <span key={t} className="tag">{t}</span>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="project-card__footer">
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-outline project-card__btn"
          id={`project-github-${project.id}`}
        >
          <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
          </svg>
          View on GitHub
        </a>
      </div>
    </article>
  );
}
