import { API_BASE_URL } from "@/config/environment";
import { getAccessToken } from "@/service/auth";
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Add a request interceptor
axiosInstance.interceptors.request.use(
  async (config) => {
    // Get token before each request
    const token = await getAccessToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Add a response interceptor
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    return Promise.reject(error?.response?.data || error);
  }
);

export default axiosInstance;
