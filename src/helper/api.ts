import axios from "axios";
import { config } from "@infrastructure";

const API = axios.create({
  baseURL: config.monday.apiEndPoint,
  headers: {
    "Content-Type": "application/json",
    "API-version": "2023-10", // version can be configure in env and use here
    Authorization: config.monday.token,
  },
  responseType: "json",
});

API.interceptors.request.use(
  async (axiosConfig) => {
    //   use custome interceptor before calling api
    return axiosConfig;
  },
  (error) => Promise.reject(error)
);

API.interceptors.response.use(
  (response) => {
    return response.data;
  },
  async (err) => {
    //   use custom interceptor after calling api
    return Promise.reject(err);
  }
);

export { API };
