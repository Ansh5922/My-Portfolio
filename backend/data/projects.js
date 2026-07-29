const projects = [
  // ──────────── SQL Projects ────────────
  {
    id: 1,
    category: 'sql',
    title: 'Sales Analytics Database',
    description: 'Designed a normalized relational database for a retail chain tracking sales, customers, and inventory across 10+ stores. Used complex CTEs, window functions, and stored procedures to derive KPIs.',
    tags: ['PostgreSQL', 'Window Functions', 'CTEs', 'Stored Procedures'],
    github: 'https://github.com',
    featured: true,
    highlights: ['50+ advanced queries', 'Optimized indexes', 'ERD design'],
  },
  {
    id: 2,
    category: 'sql',
    title: 'Hospital Management System DB',
    description: 'Built a complete hospital management schema with patient records, appointments, billing, and staff management. Implemented triggers and views for automated reporting.',
    tags: ['MySQL', 'Triggers', 'Views', 'Normalization'],
    github: 'https://github.com',
    featured: false,
    highlights: ['3NF Normalization', 'Automated billing triggers', 'Role-based views'],
  },
  {
    id: 3,
    category: 'sql',
    title: 'E-Commerce Data Warehouse',
    description: 'Designed a star-schema data warehouse for e-commerce analytics using dimensional modeling. Implemented ETL pipelines and complex aggregation queries.',
    tags: ['SQL Server', 'Star Schema', 'ETL', 'OLAP'],
    github: 'https://github.com',
    featured: true,
    highlights: ['Dimensional modeling', 'Fact & Dimension tables', 'OLAP cubes'],
  },

  // ──────────── PowerBI & Excel ────────────
  {
    id: 4,
    category: 'powerbi-excel',
    title: 'Sales Performance Dashboard',
    description: 'Interactive Power BI dashboard visualizing monthly sales trends, regional performance, and product profitability. Includes drillthrough pages and row-level security.',
    tags: ['Power BI', 'DAX', 'Data Modeling', 'RLS'],
    github: 'https://github.com',
    featured: true,
    highlights: ['12+ interactive visuals', 'DAX measures', 'Row-Level Security'],
  },
  {
    id: 5,
    category: 'powerbi-excel',
    title: 'HR Analytics Report',
    description: 'Excel-based HR analytics solution with pivot tables, VLOOKUP/XLOOKUP macros, and dynamic charts for workforce planning and attrition analysis.',
    tags: ['Excel', 'VBA', 'Pivot Tables', 'XLOOKUP'],
    github: 'https://github.com',
    featured: false,
    highlights: ['VBA automation', 'Dynamic charts', 'Attrition analysis'],
  },
  {
    id: 6,
    category: 'powerbi-excel',
    title: 'Financial KPI Tracker',
    description: 'Power BI report connected to live SQL Server data tracking revenue, EBITDA, burn rate, and cash flow for a startup financial dashboard.',
    tags: ['Power BI', 'SQL Server', 'DAX', 'Finance'],
    github: 'https://github.com',
    featured: true,
    highlights: ['Live SQL connection', 'Custom DAX KPIs', 'Executive view'],
  },

  // ──────────── ML Models ────────────
  {
    id: 7,
    category: 'ml',
    title: 'Customer Churn Prediction',
    description: 'End-to-end ML pipeline predicting telecom customer churn using Random Forest and XGBoost. Achieved 92% accuracy with SHAP explainability for feature importance.',
    tags: ['Python', 'Scikit-learn', 'XGBoost', 'SHAP'],
    github: 'https://github.com',
    featured: true,
    highlights: ['92% accuracy', 'SHAP explanations', 'Feature engineering'],
  },
  {
    id: 8,
    category: 'ml',
    title: 'House Price Regression',
    description: 'Multi-feature regression model for predicting house prices using Ridge, Lasso, and Gradient Boosting. Includes full EDA, outlier handling, and cross-validation.',
    tags: ['Python', 'Pandas', 'Scikit-learn', 'Matplotlib'],
    github: 'https://github.com',
    featured: false,
    highlights: ['Advanced EDA', 'Cross-validation', 'Ensemble methods'],
  },
  {
    id: 9,
    category: 'ml',
    title: 'Fraud Detection System',
    description: 'Imbalanced classification problem solved using SMOTE, anomaly detection, and ensemble methods. Deployed as a REST API for real-time transaction scoring.',
    tags: ['Python', 'SMOTE', 'Isolation Forest', 'FastAPI'],
    github: 'https://github.com',
    featured: true,
    highlights: ['SMOTE oversampling', 'Real-time scoring', 'AUROC: 0.97'],
  },

  // ──────────── Neural Networks ────────────
  {
    id: 10,
    category: 'neural-networks',
    title: 'Image Classification CNN',
    description: 'Custom CNN architecture for multi-class image classification trained on CIFAR-10. Uses batch normalization, dropout, and data augmentation to achieve 91% test accuracy.',
    tags: ['TensorFlow', 'Keras', 'CNN', 'Computer Vision'],
    github: 'https://github.com',
    featured: true,
    highlights: ['91% test accuracy', 'Data augmentation', 'Custom architecture'],
  },
  {
    id: 11,
    category: 'neural-networks',
    title: 'Sentiment Analysis RNN',
    description: 'Bidirectional LSTM network for sentiment analysis on movie reviews. Fine-tuned on IMDB dataset with attention mechanisms for interpretability.',
    tags: ['PyTorch', 'BiLSTM', 'Attention', 'NLP'],
    github: 'https://github.com',
    featured: true,
    highlights: ['Attention mechanism', '89% accuracy', 'Sequence modeling'],
  },
  {
    id: 12,
    category: 'neural-networks',
    title: 'GAN for Image Synthesis',
    description: 'Generative Adversarial Network trained to synthesize realistic face images. Implements DCGAN architecture with progressive training techniques.',
    tags: ['TensorFlow', 'DCGAN', 'Generative AI', 'Deep Learning'],
    github: 'https://github.com',
    featured: false,
    highlights: ['DCGAN architecture', 'Progressive training', 'Image synthesis'],
  },

  // ──────────── GenAI Projects ────────────
  {
    id: 13,
    category: 'genai',
    title: 'RAG-based Document Q&A',
    description: 'Retrieval-Augmented Generation system allowing users to query PDF documents using natural language. Built with LangChain, FAISS vector store, and Gemini API.',
    tags: ['LangChain', 'FAISS', 'Gemini API', 'RAG'],
    github: 'https://github.com',
    featured: true,
    highlights: ['PDF ingestion', 'Semantic search', 'Gemini integration'],
  },
  {
    id: 14,
    category: 'genai',
    title: 'AI Crime News Extractor',
    description: 'Automated pipeline that ingests Bhopal crime news RSS feeds, decodes Google News URLs, and uses Gemini to extract structured crime data into PostgreSQL.',
    tags: ['Gemini API', 'FastAPI', 'PostgreSQL', 'LangChain'],
    github: 'https://github.com',
    featured: true,
    highlights: ['Automated ingestion', 'Gemini extraction', 'Structured output'],
  },
  {
    id: 15,
    category: 'genai',
    title: 'GenWin AI Chatbot',
    description: 'Full-stack AI chatbot with session management, file attachment support, and streaming responses. Built with React frontend and FastAPI backend using Gemini.',
    tags: ['Gemini API', 'FastAPI', 'React', 'Streaming'],
    github: 'https://github.com',
    featured: true,
    highlights: ['Session management', 'File upload', 'Streaming responses'],
  },

  // ──────────── Backend - FastAPI ────────────
  {
    id: 16,
    category: 'backend',
    title: 'CIAS - Crime Intelligence API',
    description: 'Production-ready FastAPI backend for a Crime Intelligence & Analysis System with layered architecture, role-based access control, OCR, and PostgreSQL integration.',
    tags: ['FastAPI', 'PostgreSQL', 'SQLAlchemy', 'JWT', 'RBAC'],
    github: 'https://github.com',
    featured: true,
    highlights: ['Layered architecture', 'RBAC auth', 'OCR integration'],
  },
  {
    id: 17,
    category: 'backend',
    title: 'Portfolio REST API',
    description: 'This very portfolio backend — a Node.js/Express REST API serving project data with category filtering, CORS, and environment-based configuration.',
    tags: ['Node.js', 'Express', 'REST API', 'CORS'],
    github: 'https://github.com',
    featured: false,
    highlights: ['RESTful design', 'Category filtering', 'Dev/Prod config'],
  },
  {
    id: 18,
    category: 'backend',
    title: 'GenWin FastAPI Backend',
    description: 'Optimized FastAPI backend deployed to Vercel with Gemini AI endpoints, FormData support, session handling, and sub-second response optimization.',
    tags: ['FastAPI', 'Vercel', 'Gemini', 'Python'],
    github: 'https://github.com',
    featured: true,
    highlights: ['Vercel deployment', 'Response optimization', 'Gemini integration'],
  },
];

const getAllProjects = () => projects;

const getProjectsByCategory = (category) =>
  projects.filter((p) => p.category === category);

const getFeaturedProjects = () =>
  projects.filter((p) => p.featured === true);

module.exports = { getAllProjects, getProjectsByCategory, getFeaturedProjects };
