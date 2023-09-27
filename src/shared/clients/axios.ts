export const BASE_URL = "https://job.minhafazenda.ag/";
import axios, { AxiosError } from "axios";

export const client = axios.create({
  baseURL: BASE_URL,
  timeout: 30000,
});

client.interceptors.request.use(async (config) => {
  return config;
});

client.interceptors.response.use(
  async (response) => {
    return response;
  },
  async (error: AxiosError) => {
    return Promise.reject(error);
  }
);

// export function setDefaultToken(token: string) {
//   console.log("TOKEN JWT", token)
//   client.defaults.headers.common["Authorization"] = `Bearer ${token}`;
// }