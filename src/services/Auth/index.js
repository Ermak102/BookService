import axios from "axios";

export const API_URL = "http://localhost:8080/auth";

const authApi = axios.create({
  withCredentials: true,
  baseURL: API_URL,
});

authApi.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${localStorage.getItem("userToken")}`;
  return config;
});

export default authApi;
