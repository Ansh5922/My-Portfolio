import axios from 'axios';

const API_BASE = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_BASE,
  timeout: 8000,
});

export const fetchAllProjects = () => api.get('/projects').then(r => r.data.data);
export const fetchProjectsByCategory = (cat) => api.get(`/projects?category=${cat}`).then(r => r.data.data);
export const fetchFeaturedProjects = () => api.get('/projects/featured').then(r => r.data.data);
export const fetchCategories = () => api.get('/projects/categories').then(r => r.data.data);
export const checkHealth = () => api.get('/health').then(r => r.data);
