import React, { useState, useEffect } from 'react';
import { fetchProjectsByCategory, fetchAllProjects } from '../api/projects';
import ProjectCard from './ProjectCard';
import './Projects.css';

const CATEGORIES = [
  { id: 'all', label: 'All Projects', icon: '🗂️' },
  { id: 'sql', label: 'SQL', icon: '🗄️' },
  { id: 'powerbi-excel', label: 'PowerBI & Excel', icon: '📊' },
  { id: 'ml', label: 'ML Models', icon: '🤖' },
  { id: 'neural-networks', label: 'Neural Networks', icon: '🧠' },
  { id: 'genai', label: 'GenAI', icon: '✨' },
  { id: 'backend', label: 'Backend', icon: '⚙️' },
];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);
    const fn = activeCategory === 'all'
      ? fetchAllProjects
      : () => fetchProjectsByCategory(activeCategory);

    fn()
      .then((data) => {
        setProjects(data);
        setLoading(false);
      })
      .catch(() => {
        setError('Could not connect to the API. Showing local fallback data.');
        setLoading(false);
      });
  }, [activeCategory]);

  return (
    <section id="projects" className="projects">
      <div className="container">
        <div className="projects__header">
          <p className="projects__eyebrow">What I've built</p>
          <h2 className="section-heading">
            My <span className="gradient-text">Projects</span>
          </h2>
          <p className="section-sub projects__sub">
            A collection of 18+ real projects across data, AI, and backend engineering —
            each tackling a distinct problem with production-grade thinking.
          </p>
        </div>

        <div className="projects__filters" role="tablist">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              role="tab"
              aria-selected={activeCategory === cat.id}
              className={`filter-btn ${activeCategory === cat.id ? 'filter-btn--active' : ''}`}
              onClick={() => setActiveCategory(cat.id)}
            >
              <span>{cat.icon}</span>
              {cat.label}
            </button>
          ))}
        </div>

        {error && (
          <div className="projects__error">
            ⚠️ {error}
          </div>
        )}

        {loading ? (
          <div className="projects__loading">
            <div className="spinner" />
            <p>Loading projects…</p>
          </div>
        ) : (
          <div className="projects__grid">
            {projects.map((project, i) => (
              <ProjectCard key={project.id} project={project} delay={i * 0.07} />
            ))}
          </div>
        )}

        {!loading && projects.length === 0 && (
          <div className="projects__empty">No projects found in this category yet.</div>
        )}
      </div>
    </section>
  );
}
