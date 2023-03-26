import axios from "axios";

export const API_URL = "http://localhost:8080/";

const userApi = axios.create({
  withCredentials: false,
  baseURL: API_URL,
});

userApi.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${localStorage.getItem("userToken")}`;
  return config;
});

export default userApi;
