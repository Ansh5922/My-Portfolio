const express = require('express');
const router = express.Router();
const { getAllProjects, getProjectsByCategory, getFeaturedProjects } = require('../data/projects');

// GET /api/projects — all projects
router.get('/', (req, res) => {
  const { category } = req.query;
  if (category) {
    const filtered = getProjectsByCategory(category);
    return res.json({ success: true, data: filtered });
  }
  res.json({ success: true, data: getAllProjects() });
});

// GET /api/projects/featured
router.get('/featured', (req, res) => {
  res.json({ success: true, data: getFeaturedProjects() });
});

// GET /api/projects/categories
router.get('/categories', (req, res) => {
  const cats = [
    { id: 'sql', label: 'SQL Projects', icon: 'database' },
    { id: 'powerbi-excel', label: 'PowerBI & Excel', icon: 'bar-chart' },
    { id: 'ml', label: 'ML Models', icon: 'cpu' },
    { id: 'neural-networks', label: 'Neural Networks', icon: 'network' },
    { id: 'genai', label: 'GenAI Projects', icon: 'sparkles' },
    { id: 'backend', label: 'Backend - FastAPI', icon: 'server' },
  ];
  res.json({ success: true, data: cats });
});

module.exports = router;
