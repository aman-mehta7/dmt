/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";

const token = localStorage.getItem("token");
const user_id = localStorage.getItem("user_id");

export const ImageAPI: string = `https://eu2.contabostorage.com/2e1511f8f62f49e3916647606460a786:dmt`;

export const httpHeader = {
  "Content-Type": "application/json",
  authorization: `Bearer ${token}`,
};

export const multipartHeader = {
  "Content-Type": "multipart/form-data",
  authorization: `Bearer ${token}`,
};

const api = axios.create({
  // baseURL: "https://dmt.mototraccar.com/v1",
  baseURL: "http://localhost:8000/v1",
  headers: httpHeader,
});

const setUserIdHeader = (userId: string | null) => {
  api.defaults.headers.common["User_id"] = userId;
};

setUserIdHeader(user_id);
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");

    if (token && token !== "undefined" && token !== "null") {
      config.headers.Authorization = `Bearer ${token}`;
    }

    const userId = localStorage.getItem("user_id");
    if (userId) {
      config.headers.User_id = userId;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

//  Handle expired tokens gracefully
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response?.status === 401) {
      console.error("Token expired! Logging out...");
      localStorage.removeItem("token");
      localStorage.removeItem("user_id");
      window.location.href = "/auth/login"; // Redirect to login page
    }
    return Promise.reject(error);
  }
);

export default api;
