import React, { useEffect } from 'react';
import './SkillsModal.css';

const skillCategories = [
  {
    category: 'Programming Languages',
    icon: '🐍',
    color: '#16a34a',
    skills: [
      { name: 'Python', level: 'Advanced / Core' },
      { name: 'SQL', level: 'Intermediate / Queries' },
      { name: 'C++', level: 'Core & Algorithms' },
      { name: 'JavaScript', level: 'Web Basics' },
    ],
  },
  {
    category: 'AI-Enabled Systems & GenAI',
    icon: '🤖',
    color: '#0d9488',
    skills: [
      { name: 'Generative AI & LLMs', level: 'Prompt & Integration' },
      { name: 'AI Agents & Workflows', level: 'Autonomous Pipelines' },
      { name: 'RAG Architecture', level: 'Retrieval Augmented' },
      { name: 'LangChain', level: 'Agent Chains' },
      { name: 'Gemini & OpenAI APIs', level: 'API Integration' },
      { name: 'Vector Databases (FAISS)', level: 'Semantic Search' },
    ],
  },
  {
    category: 'Machine Learning & Data Science',
    icon: '🧠',
    color: '#0ea5e9',
    skills: [
      { name: 'Machine Learning', level: 'Supervised & Unsupervised' },
      { name: 'Scikit-learn', level: 'Model Building' },
      { name: 'Data Science & EDA', level: 'Exploratory Analysis' },
      { name: 'Pandas & NumPy', level: 'Data Wrangling' },
      { name: 'Deep Learning', level: 'TensorFlow / PyTorch' },
      { name: 'Data Visualization', level: 'Matplotlib & Seaborn' },
    ],
  },
  {
    category: 'Software & Backend Engineering',
    icon: '💻',
    color: '#2563eb',
    skills: [
      { name: 'FastAPI', level: 'High-Performance APIs' },
      { name: 'RESTful API Design', level: 'Endpoints & Auth' },
      { name: 'Object-Oriented Design', level: 'Clean Architecture' },
      { name: 'Data Structures & Algorithms', level: 'Problem Solving' },
      { name: 'Pydantic', level: 'Data Validation' },
      { name: 'Git & GitHub', level: 'Version Control' },
    ],
  },
  {
    category: 'Databases & Tools',
    icon: '🗄️',
    color: '#6366f1',
    skills: [
      { name: 'PostgreSQL & MySQL', level: 'Relational DBs' },
      { name: 'Power BI', level: 'Interactive Dashboards' },
      { name: 'Postman', level: 'API Testing' },
      { name: 'VS Code & Jupyter', level: 'Dev Environments' },
    ],
  },
];

export default function SkillsModal({ isOpen, onClose }) {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="skills-modal__overlay" onClick={onClose} role="dialog" aria-modal="true">
      <div className="skills-modal__card" onClick={(e) => e.stopPropagation()}>
        
        {/* Header */}
        <div className="skills-modal__header">
          <div className="skills-modal__title-wrap">
            <span className="skills-modal__badge-icon">⚡</span>
            <div>
              <h2 className="skills-modal__title">Technical Skills &amp; Stack</h2>
              <p className="skills-modal__subtitle">
                Comprehensive overview of my core skills in Software Engineering, AI Systems, Python &amp; Data Science
              </p>
            </div>
          </div>
          <button className="skills-modal__close-btn" onClick={onClose} aria-label="Close modal">
            &times;
          </button>
        </div>

        {/* Content categories */}
        <div className="skills-modal__content">
          <div className="skills-modal__grid">
            {skillCategories.map((group) => (
              <div key={group.category} className="skills-modal__category-card">
                <div className="skills-modal__category-header">
                  <span className="skills-modal__cat-icon">{group.icon}</span>
                  <h3 className="skills-modal__cat-title" style={{ color: group.color }}>
                    {group.category}
                  </h3>
                </div>

                <div className="skills-modal__tags-wrap">
                  {group.skills.map((s) => (
                    <div key={s.name} className="skills-modal__pill">
                      <span className="skills-modal__pill-name">{s.name}</span>
                      <span className="skills-modal__pill-level">{s.level}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="skills-modal__footer">
          <a
            href="https://drive.google.com/drive/folders/1igJFkBF-xaI-RFzuF4PPHgaL-RcG-BmT?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="skills-modal__resume-link"
          >
            <span>📄</span> View Full Resume
          </a>
          <button className="skills-modal__done-btn" onClick={onClose}>
            Done
          </button>
        </div>

      </div>
    </div>
  );
}
