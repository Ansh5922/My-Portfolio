import React, { useState, useMemo } from 'react';
import { getAllProjects, getProjectsByCategory } from '../data/projects';
import ProjectCard from './ProjectCard';
import './Projects.css';

const CATEGORIES = [
  { id: 'all',            label: 'All Projects',      icon: '🗂️' },
  { id: 'powerbi-excel',  label: 'PowerBI & Excel',   icon: '📊' },
  { id: 'ml',             label: 'ML Models',         icon: '🤖' },
  { id: 'genai',          label: 'GenAI & Digital Twin', icon: '✨' },
  { id: 'backend',        label: 'Python & Backend',  icon: '⚙️' },
];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('all');

  const projects = useMemo(
    () =>
      activeCategory === 'all'
        ? getAllProjects()
        : getProjectsByCategory(activeCategory),
    [activeCategory]
  );

  return (
    <section id="projects" className="projects">
      <div className="container">
        <div className="projects__header">
          <p className="projects__eyebrow">Featured Portfolio</p>
          <h2 className="section-heading">
            My <span className="gradient-text">Projects</span>
          </h2>
          <p className="section-sub projects__sub">
            Click any project card or the "Open Live Project" button to launch the live application directly in your browser.
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

        <div className="projects__grid">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} delay={i * 0.07} />
          ))}
        </div>

        {projects.length === 0 && (
          <div className="projects__empty">No projects found in this category.</div>
        )}
      </div>
    </section>
  );
}
