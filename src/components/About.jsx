import React from 'react';
import './About.css';

const skills = [
  { name: 'Python Development & Core CS', level: 94, color: '#d97706' },
  { name: 'Software Engineering & Architecture', level: 90, color: '#f59e0b' },
  { name: 'AI-Enabled Systems & GenAI', level: 88, color: '#facc15' },
  { name: 'Machine Learning', level: 86, color: '#eab308' },
  { name: 'Data Science & Analytics', level: 88, color: '#b45309' },
  { name: 'FastAPI Backend & REST APIs', level: 85, color: '#f59e0b' },
];

const techStack = [
  'Python', 'Software Engineering', 'AI-Enabled Systems', 'Machine Learning',
  'Data Science', 'FastAPI', 'Generative AI', 'AI Agents', 'SQL',
  'PostgreSQL', 'Scikit-learn', 'TensorFlow', 'Pandas', 'LangChain',
  'Git & GitHub', 'REST APIs',
];

const pillars = [
  {
    icon: '💻',
    title: 'Software Development',
    desc: 'Designing clean, maintainable software architectures, writing modular code, and building scalable backend systems.',
  },
  {
    icon: '🤖',
    title: 'AI-Enabled Systems',
    desc: 'Integrating LLMs, autonomous agents, and intelligent workflows into production applications for next-gen automation.',
  },
  {
    icon: '🐍',
    title: 'Python Engineering',
    desc: 'Deep proficiency in Python for data structures, algorithms, asynchronous services, and full-stack AI development.',
  },
  {
    icon: '🧠',
    title: 'Machine Learning',
    desc: 'End-to-end ML lifecycle: data preparation, feature engineering, predictive modeling, evaluation, and deployment.',
  },
  {
    icon: '📊',
    title: 'Data Science & Analytics',
    desc: 'Extracting actionable intelligence through exploratory data analysis, statistical modeling, and visual storytelling.',
  },
  {
    icon: '⚡',
    title: 'FastAPI & Backend APIs',
    desc: 'Building high-throughput asynchronous REST APIs with Pydantic schemas, secure authentication, and database integration.',
  },
];

export default function About() {
  return (
    <section id="about" className="about">
      <span id="skills" style={{ display: 'block', position: 'relative', top: '-80px', visibility: 'hidden' }} />
      <div className="container">

        {/* Header */}
        <div className="about__header">
          <p className="about__eyebrow">About Me</p>
          <h2 className="section-heading">
            Engineering Scalable Software &amp; <span className="gradient-text">AI-Enabled Systems</span>
          </h2>
          <div className="section-divider" />
          <p className="section-sub">
            I am an <strong>Aspiring Software Developer</strong> passionate about building intelligent, production-ready 
            software at the convergence of software engineering, <strong>Python</strong>, <strong>Machine Learning</strong>, 
            and <strong>Data Science</strong>.
          </p>
        </div>

        {/* Bio + Skills Grid */}
        <div className="about__grid">
          
          {/* Bio Card */}
          <div className="about__bio glass-card">
            <div className="about__bio-top">
              <div className="about__avatar">A</div>
              <div className="about__status-pill">
                <span className="status-dot" />
                Aspiring Software Developer
              </div>
            </div>

            <h3 className="about__bio-heading">Hi, I'm Ansh Kumar</h3>
            
            <p>
              I am an <strong>Aspiring Software Developer</strong> with a passionate drive to build 
              <strong> AI-enabled systems</strong> that turn cutting-edge intelligence into practical, 
              scalable, and intuitive software applications.
            </p>
            
            <p>
              My core technical foundation is deeply rooted in <strong>Python</strong>, reinforced with robust 
              skills across <strong>Machine Learning</strong>, <strong>Data Science</strong>, 
              <strong> Generative AI</strong>, and high-performance backend frameworks like <strong>FastAPI</strong>. 
              I believe great AI solutions require equally strong software engineering fundamentals — from clean, 
              modular code to reliable database schemas and high-throughput APIs.
            </p>

            <p>
              Whether it involves architecting automated data pipelines, developing autonomous AI agents, 
              or shipping end-to-end full stack software, I am dedicated to continuous learning and crafting 
              systems that create tangible real-world value.
            </p>

            <div className="about__tags-header">Core Competencies &amp; Toolkit:</div>
            <div className="about__tags">
              {techStack.map((t) => (
                <span key={t} className="tag">{t}</span>
              ))}
            </div>
          </div>

          {/* Technical Proficiency Panel */}
          <div className="about__skills-panel glass-card">
            <div className="about__panel-header">
              <h3>Technical Strengths</h3>
              <span className="about__panel-sub">Continuous growth &amp; hands-on building</span>
            </div>

            <div className="skill-bars">
              {skills.map((skill, i) => (
                <div key={skill.name} className="skill-bar" style={{ animationDelay: `${i * 0.08}s` }}>
                  <div className="skill-bar__header">
                    <span className="skill-bar__name">{skill.name}</span>
                    <span className="skill-bar__pct" style={{ color: skill.color }}>{skill.level}%</span>
                  </div>
                  <div className="skill-bar__track">
                    <div
                      className="skill-bar__fill"
                      style={{ width: `${skill.level}%`, background: skill.color }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="about__panel-quote">
              <span className="quote-icon">💡</span>
              <p>
                "Committed to writing clean code, architecting maintainable software systems, and leveraging data &amp; AI to solve high-impact problems."
              </p>
            </div>
          </div>

        </div>

        {/* Pillars / Services Grid */}
        <div className="about__services-header">
          <p className="about__eyebrow">What I Bring To The Table</p>
          <h3 className="about__services-title">Core Disciplines &amp; Specializations</h3>
        </div>

        <div className="about__services">
          {pillars.map((p) => (
            <div key={p.title} className="service-card glass-card">
              <span className="service-card__icon">{p.icon}</span>
              <h4 className="service-card__title">{p.title}</h4>
              <p className="service-card__desc">{p.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
