// ──────────────────────────────────────────────────────────────────
// Portfolio Projects Data — Exclusively User's Real Projects
// ──────────────────────────────────────────────────────────────────

const projects = [
  {
    id: 1,
    category: 'powerbi-excel',
    title: 'AML Job Analysis Dashboard',
    tagline: 'Where dirty money meets clean data.',
    image: '/proj_aml.jpg',
    tags: ['Power BI', 'DAX', 'AML Analytics', 'Data Visualization'],
    github: 'https://github.com/Ansh5922',
    liveUrl: 'https://1drv.ms/u/c/820164746b822663/IQDxdfXeg0oiRbd_O1KoozMFAUxUArdIRrmFyoXZ-f0-1CA?e=YVQ1kK',
    featured: true,
    highlights: ['AML Market Trends', 'DAX Calculations', 'Interactive Visuals'],
    story: `💰 The Problem\nAnti-Money Laundering is one of the world's highest-paying compliance domains — yet nobody was tracking what skills actually land these roles, or how much they pay.\n\n🔍 The Build\nI designed an end-to-end Power BI dashboard pulling real job market data, slicing it by skill demand, salary tiers, geography, and experience levels — all with custom DAX measures firing behind the scenes.\n\n✨ The Result\nA living, filterable intelligence tool that answers the question: "Where is the AML job market actually going?" — not with guesswork, but with real numbers.`,
    tech: ['Power BI', 'DAX', 'Power Query', 'Data Modeling', 'ETL'],
  },
  {
    id: 2,
    category: 'powerbi-excel',
    title: 'HR Attrition Analysis',
    tagline: 'Predicting who leaves before they do.',
    image: '/proj_hr.jpg',
    tags: ['Excel', 'Pivot Tables', 'HR Analytics', 'Workforce Analytics'],
    github: 'https://github.com/Ansh5922',
    liveUrl: 'https://1drv.ms/x/c/820164746b822663/IQDfV-2uuk7BQbljTMsJQquKAXA1RPSJZ2Uw74JxZ2b8-ys?e=wNgsSd',
    featured: true,
    highlights: ['Attrition Drivers', 'Dynamic Pivot Reports', 'Workforce Insights'],
    story: `🧠 The Problem\nEvery company hemorrhages talent — but most HR teams only realize it after the exit interview.\n\n🔍 The Build\nBuilt a full Excel analytics workbook with dynamic pivot tables and slicers that surface exactly which departments, tenures, and age bands are losing people — and why. Zero guessing, all signal.\n\n✨ The Result\nAn interactive workforce intelligence tool that transforms raw HR data into a retention strategy. HR teams can now ask "who's at risk?" before it becomes a resignation letter.`,
    tech: ['Microsoft Excel', 'Pivot Tables', 'Conditional Formatting', 'VLOOKUP', 'Charts & Slicers'],
  },
  {
    id: 3,
    category: 'genai',
    title: 'Bhopal City Digital Twin',
    tagline: 'Simulating a city — one API call at a time.',
    image: '/proj_twin.jpg',
    tags: ['FastAPI', 'Gemini AI', 'React', 'Digital Twin', 'Vercel'],
    github: 'https://github.com/Ansh5922',
    liveUrl: 'https://gen-win.vercel.app/',
    featured: true,
    highlights: ['Urban Spatial Twin', 'FastAPI AI Engine', 'Vercel Deployment'],
    story: `🏙️ The Problem\nUrban planners need to simulate city scenarios — infrastructure load, population flow, energy grids — without building a physical testbed.\n\n🔍 The Build\nI engineered a full-stack digital twin platform: FastAPI powers real-time AI intelligence services, Gemini AI processes natural language city queries, and a React frontend renders live urban spatial analytics. Deployed fully serverless on Vercel.\n\n✨ The Result\nA living simulation layer over Bhopal's urban fabric — where you can ask "what happens if we add 50,000 residents to Zone 4?" and get a data-backed answer instantly.`,
    tech: ['FastAPI', 'Gemini AI', 'React', 'Python', 'Vercel', 'REST APIs'],
  },
  {
    id: 4,
    category: 'backend',
    title: 'Property Post Maker',
    tagline: 'Marketing collateral. Instant. No AI tax.',
    image: '/proj_property.jpg',
    tags: ['Python', 'FastAPI', 'Automation', 'Vercel', 'Image Gen'],
    github: 'https://github.com/Ansh5922',
    liveUrl: 'https://property-post-maker-psi-six.vercel.app',
    featured: true,
    highlights: ['No-LLM Instant Logic', 'Branded Graphic Output', 'FastAPI Serverless'],
    story: `🏠 The Problem\nReal estate agents waste hours manually designing social media posts for every new listing. LLM-based solutions are slow and expensive.\n\n🔍 The Build\nI built a pure algorithmic engine — zero LLMs, zero latency. A FastAPI backend applies custom templating logic and image composition rules to generate pixel-perfect, branded property marketing cards in milliseconds. Deployed serverless on Vercel.\n\n✨ The Result\nA drop-in marketing generator that produces professional Instagram/WhatsApp-ready property posts instantly. Agents input listing details — the engine handles the rest.`,
    tech: ['Python', 'FastAPI', 'Pillow', 'Jinja2', 'Vercel Serverless', 'REST APIs'],
  },
  {
    id: 5,
    category: 'ml',
    title: 'DeliverIQ',
    tagline: 'Your food knows when it\'s arriving. Now you do too.',
    image: '/proj_deliver.jpg',
    tags: ['Python', 'Scikit-Learn', 'Streamlit', 'ML Pipeline'],
    github: 'https://github.com/Ansh5922',
    liveUrl: 'https://deliveriq-k7yl3k9ywm4hbnebd7cn7x.streamlit.app/',
    featured: true,
    highlights: ['Real-time ML Model', 'Streamlit Web UI', 'Feature Engineering'],
    story: `🛵 The Problem\n"Your order will arrive in 30-45 minutes" — a lie. Delivery time is a function of traffic, weather, distance, and peak load. Static estimates fail.\n\n🔍 The Build\nBuilt an end-to-end ML pipeline: data cleaning, feature engineering (traffic density, weather index, distance buckets, time-of-day signals), model training with Scikit-learn, and a Streamlit web app for real-time predictions.\n\n✨ The Result\nDeliverIQ predicts food delivery ETAs with measurably higher accuracy than static estimates — live, interactive, and deployed publicly for anyone to try.`,
    tech: ['Python', 'Scikit-Learn', 'Pandas', 'NumPy', 'Streamlit', 'Feature Engineering'],
  },
  {
    id: 6,
    category: 'ml',
    title: 'Traffic Intelligence System',
    tagline: 'The city\'s nervous system, decoded.',
    image: '/proj_traffic.jpg',
    tags: ['Python', 'Machine Learning', 'Streamlit', 'Traffic Analytics'],
    github: 'https://github.com/Ansh5922',
    liveUrl: 'https://traffic-intellegence-system-yv5rdo35u3q2uajz7vpkky.streamlit.app/',
    featured: true,
    highlights: ['Congestion Analytics', 'Streamlit Interactive UI', 'Pattern Prediction'],
    story: `🚦 The Problem\nTraffic congestion isn't random — it follows hidden patterns dictated by time, density, events, and weather. Most cities respond reactively instead of predictively.\n\n🔍 The Build\nI built a machine learning traffic monitoring system that ingests transit data, detects congestion patterns, predicts flow dynamics, and surfaces insights through an interactive Streamlit dashboard — all in real-time.\n\n✨ The Result\nAn always-on traffic intelligence layer that transforms raw transit chaos into clear, actionable patterns — showing exactly when and where congestion will spike before it does.`,
    tech: ['Python', 'Machine Learning', 'Pandas', 'Streamlit', 'Data Visualization', 'Pattern Recognition'],
  },
];

export const getAllProjects = () => projects;

export const getProjectsByCategory = (category) =>
  projects.filter((p) => p.category === category);

export const getFeaturedProjects = () =>
  projects.filter((p) => p.featured === true);

export default projects;
