import React, { useState } from 'react';
import ProjectModal from './ProjectModal';
import './ProjectCard.css';

const CATEGORY_META = {
  'powerbi-excel': { label: 'PowerBI & Excel', color: '#b45309', bg: '#fef3c7', border: '#fcd34d' },
  ml:              { label: 'ML Model',        color: '#065f46', bg: '#d1fae5', border: '#6ee7b7' },
  genai:           { label: 'GenAI & AI',      color: '#2563eb', bg: '#dbeafe', border: '#93c5fd' },
  backend:         { label: 'Python & Backend',color: '#9f1239', bg: '#ffe4e6', border: '#fda4af' },
};

export default function ProjectCard({ project, delay = 0 }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const meta = CATEGORY_META[project.category] || {
    label: project.category,
    color: '#6c63ff',
    bg: 'rgba(108,99,255,0.1)',
    border: '#c4b5fd',
  };

  return (
    <>
      <article
        className="project-card project-card--clickable"
        style={{ animationDelay: `${delay}s` }}
        onClick={() => setIsModalOpen(true)}
        title="Click to explore project"
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === 'Enter' && setIsModalOpen(true)}
      >
        {/* Project image */}
        <div className="project-card__img-wrap">
          <img
            src={project.image}
            alt={project.title}
            className="project-card__img"
            loading="lazy"
          />
          <div className="project-card__img-overlay" />
          {/* Category badge on image */}
          <span
            className="project-card__cat-badge"
            style={{ color: meta.color, background: meta.bg, borderColor: meta.border }}
          >
            {meta.label}
          </span>
          {/* Hover explore label */}
          <div className="project-card__hover-hint">
            <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
              <circle cx="11" cy="11" r="8" /><path strokeLinecap="round" strokeLinejoin="round" d="m21 21-4.35-4.35" />
            </svg>
            Explore
          </div>
        </div>

        {/* Card body */}
        <div className="project-card__body">
          <h3 className="project-card__title">{project.title}</h3>
          <p className="project-card__tagline">{project.tagline}</p>

          {/* Tags */}
          <div className="project-card__tags">
            {project.tags.slice(0, 3).map((t) => (
              <span key={t} className="tag">{t}</span>
            ))}
            {project.tags.length > 3 && (
              <span className="tag tag--more">+{project.tags.length - 3}</span>
            )}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="project-card__footer">
          <span className="project-card__cta">
            Read the story
            <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </span>
          <div className="project-card__accent-bar" style={{ background: meta.color }} />
        </div>
      </article>

      {/* Modal */}
      {isModalOpen && (
        <ProjectModal project={project} onClose={() => setIsModalOpen(false)} />
      )}
    </>
  );
}
