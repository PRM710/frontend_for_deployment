import axios from 'axios';

axios.defaults.baseURL =
  process.env.NODE_ENV !== 'production'
    ? 'http://localhost:5000' // Local development URL
    : 'https://backend-for-deployment.onrender.com'; // Your Render backend URL for production
