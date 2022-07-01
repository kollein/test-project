/* eslint-disable no-param-reassign */
import axios from 'axios';

const api = axios.create({
  baseURL: process.env.VUE_APP_API_URL,
  timeout: 30000,
  headers: {
    Accept: '*/*',
    'Content-Type': 'application/json',
    Authorization: 'Bearer 12345',
  },
});

api.interceptors.response.use((response) => response.data);

export default api;
