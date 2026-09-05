// ──────────────────────────────────────────────────────────────────
// Portfolio Projects Data — Exclusively User's Real Projects
// ──────────────────────────────────────────────────────────────────

const projects = [
  {
    id: 1,
    category: 'powerbi-excel',
    title: 'AML Job Analysis Dashboard',
    description:
      'Interactive Power BI dashboard analyzing Anti-Money Laundering (AML) job market trends, skills demand, compensation benchmarks, and hiring insights.',
    tags: ['Power BI', 'DAX', 'AML Analytics', 'Data Visualization'],
    github: 'https://github.com/Ansh5922',
    liveUrl: 'https://1drv.ms/u/c/820164746b822663/IQDxdfXeg0oiRbd_O1KoozMFAUxUArdIRrmFyoXZ-f0-1CA?e=YVQ1kK',
    featured: true,
    highlights: ['AML Market Trends', 'DAX Calculations', 'Interactive Visuals'],
  },
  {
    id: 2,
    category: 'powerbi-excel',
    title: 'HR Attrition Analysis',
    description:
      'Dynamic Excel analytical solution evaluating employee turnover factors, department attrition rates, and retention drivers with dynamic charts and pivot reports.',
    tags: ['Excel', 'Pivot Tables', 'HR Analytics', 'Workforce Analytics'],
    github: 'https://github.com/Ansh5922',
    liveUrl: 'https://1drv.ms/x/c/820164746b822663/IQDfV-2uuk7BQbljTMsJQquKAXA1RPSJZ2Uw74JxZ2b8-ys?e=wNgsSd',
    featured: true,
    highlights: ['Attrition Drivers', 'Dynamic Pivot Reports', 'Workforce Insights'],
  },
  {
    id: 3,
    category: 'genai',
    title: 'Bhopal City Digital Twin',
    description:
      'Smart urban digital twin platform integrating backend AI intelligence services and real-time spatial analytics to simulate urban infrastructure and city insights.',
    tags: ['FastAPI', 'Gemini AI', 'React', 'Digital Twin', 'Vercel'],
    github: 'https://github.com/Ansh5922',
    liveUrl: 'https://gen-win.vercel.app/',
    featured: true,
    highlights: ['Urban Spatial Twin', 'FastAPI AI Engine', 'Vercel Deployment'],
  },
  {
    id: 4,
    category: 'backend',
    title: 'Property Post Maker',
    description:
      'Algorithmic social media generator for real estate properties. Generates high-converting, branded property marketing posts instantly without relying on heavy LLMs.',
    tags: ['Python', 'FastAPI', 'Automation', 'Vercel', 'Image Gen'],
    github: 'https://github.com/Ansh5922',
    liveUrl: 'https://property-post-maker-psi-six.vercel.app',
    featured: true,
    highlights: ['No-LLM Instant Logic', 'Branded Graphic Output', 'FastAPI Serverless'],
  },
  {
    id: 5,
    category: 'ml',
    title: 'DeliverIQ - Food Delivery Time Prediction',
    description:
      'End-to-end Machine Learning web application deployed on Streamlit predicting food delivery arrival times based on traffic, weather, distance, and order metrics.',
    tags: ['Python', 'Scikit-Learn', 'Streamlit', 'ML Pipeline'],
    github: 'https://github.com/Ansh5922',
    liveUrl: 'https://deliveriq-k7yl3k9ywm4hbnebd7cn7x.streamlit.app/',
    featured: true,
    highlights: ['Real-time ML Model', 'Streamlit Web UI', 'Feature Engineering'],
  },
  {
    id: 6,
    category: 'ml',
    title: 'Traffic Intelligence System',
    description:
      'Machine learning traffic monitoring and intelligence app analyzing congestion levels, transit patterns, and optimizing traffic flow dynamics.',
    tags: ['Python', 'Machine Learning', 'Streamlit', 'Traffic Analytics'],
    github: 'https://github.com/Ansh5922',
    liveUrl: 'https://traffic-intellegence-system-yv5rdo35u3q2uajz7vpkky.streamlit.app/',
    featured: true,
    highlights: ['Congestion Analytics', 'Streamlit Interactive UI', 'Pattern Prediction'],
  },
];

export const getAllProjects = () => projects;

export const getProjectsByCategory = (category) =>
  projects.filter((p) => p.category === category);

export const getFeaturedProjects = () =>
  projects.filter((p) => p.featured === true);

export default projects;
