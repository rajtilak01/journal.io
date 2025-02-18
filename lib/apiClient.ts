import axios from 'axios';

const apiClient = axios.create({
  baseURL: '/api', // Set base API URL
});

// Automatically attach the token to every request
apiClient.interceptors.request.use(async (config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});

export default apiClient;
