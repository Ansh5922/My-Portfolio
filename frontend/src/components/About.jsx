import React from 'react';
import './About.css';

const skills = [
  { name: 'Data Science & Analytics', level: 90, color: '#2563eb' },
  { name: 'Machine Learning', level: 88, color: '#0ea5e9' },
  { name: 'Deep Learning / Neural Networks', level: 82, color: '#4f46e5' },
  { name: 'Generative AI & LLMs', level: 86, color: '#0d9488' },
  { name: 'AI Agents & Pipelines', level: 84, color: '#059669' },
  { name: 'FastAPI Backend', level: 80, color: '#2563eb' },
];

const techStack = [
  'Python', 'SQL', 'FastAPI', 'LangChain', 'TensorFlow',
  'PyTorch', 'Scikit-learn', 'Pandas', 'Power BI', 'PostgreSQL',
  'Gemini API', 'OpenAI', 'FAISS', 'Pydantic',
];

const services = [
  {
    icon: '📊',
    title: 'Data Science',
    desc: 'End-to-end data pipelines, EDA, statistical analysis, and storytelling with data.',
  },
  {
    icon: '🤖',
    title: 'Machine Learning',
    desc: 'Predictive models, classification, regression, clustering — trained and deployed.',
  },
  {
    icon: '✨',
    title: 'Generative AI',
    desc: 'RAG pipelines, document Q&A, LLM fine-tuning and integration using Gemini / OpenAI.',
  },
  {
    icon: '🧩',
    title: 'AI Agents',
    desc: 'Autonomous agents with tool use, memory, and multi-step reasoning capabilities.',
  },
  {
    icon: '⚡',
    title: 'FastAPI Backend',
    desc: 'Production-grade REST APIs with auth, RBAC, async support, and DB integration.',
  },
  {
    icon: '🗄️',
    title: 'SQL & BI',
    desc: 'Complex SQL queries, data warehousing, Power BI dashboards, and Excel automation.',
  },
];

export default function About() {
  return (
    <section id="about" className="about">
      <div className="container">

        {/* Header */}
        <div className="about__header">
          <p className="about__eyebrow">About Me</p>
          <h2 className="section-heading">
            Who I Am &amp; <span className="gradient-text">What I Do</span>
          </h2>
          <div className="section-divider" />
          <p className="section-sub">
            I'm <strong>Ansh</strong> — a data &amp; AI enthusiast who builds intelligent, 
            production-ready systems at the intersection of machine learning, generative AI, and backend engineering.
          </p>
        </div>

        {/* Bio + skills */}
        <div className="about__grid">
          <div className="about__bio glass-card">
            <div className="about__avatar">A</div>
            <h3>Hi, I'm Ansh</h3>
            <p>
              I'm passionate about everything at the intersection of <strong>data</strong> and <strong>intelligence</strong>.
              Whether it's building ML models from scratch, creating GenAI pipelines, training neural networks,
              or shipping scalable FastAPI backends — I love working across the full AI stack.
            </p>
            <p>
              My work spans <strong>Data Science</strong>, <strong>ML Engineering</strong>,
              <strong> Generative AI</strong>, <strong>AI Agents</strong>, <strong>FastAPI</strong>,
              and <strong>SQL/BI</strong>. I believe in learning by building and shipping real projects
              that solve real problems.
            </p>
            <div className="about__tags">
              {techStack.map((t) => <span key={t} className="tag">{t}</span>)}
            </div>
          </div>

          <div className="about__skills-panel glass-card">
            <h3>Technical Proficiency</h3>
            <div className="skill-bars">
              {skills.map((skill, i) => (
                <div key={skill.name} className="skill-bar" style={{ animationDelay: `${i * 0.08}s` }}>
                  <div className="skill-bar__header">
                    <span>{skill.name}</span>
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
          </div>
        </div>

        {/* Services grid */}
        <div className="about__services-header">
          <p className="about__eyebrow">What I Offer</p>
          <h3 className="about__services-title">Services</h3>
        </div>

        <div className="about__services">
          {services.map((s) => (
            <div key={s.title} className="service-card glass-card">
              <span className="service-card__icon">{s.icon}</span>
              <h4 className="service-card__title">{s.title}</h4>
              <p className="service-card__desc">{s.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
