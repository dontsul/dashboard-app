import axios from "axios";

export const instanceAxios = axios.create({
  baseURL: "http://vindev.cx.ua/",
  headers: { "Content-Type": "application/json" },
});
instanceAxios.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${window.localStorage.getItem(
    "token"
  )}`;

  return config;
});
