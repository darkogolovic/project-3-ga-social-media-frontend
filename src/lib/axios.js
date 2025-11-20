import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_BACK_END_SERVER_URL, 
  withCredentials: false,
});

api.interceptors.request.use((config) => {
  
  if (!["/register", "/login","/verify"].includes(config.url)) {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
  }
  return config;
});

export default api;
