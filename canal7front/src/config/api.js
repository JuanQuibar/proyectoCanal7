import axios from 'axios';

// axios instance for making requests 
const api = axios.create({
  baseURL: process.env.REACT_APP_URL_BACKEND,
  headers: {
    "Content-Type": "application/json",
  },
});

// request interceptor for adding token
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if(token){
      // add token to request headers
      config.headers['Authorization'] = token;
    }
  
  return config;
});

export default api;