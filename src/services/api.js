/* eslint-disable no-param-reassign */
import axios from 'axios';
import { getToken } from './auth';
import 'babel-polyfill';

const api = axios.create({
  baseURL: 'https://api.spotify.com/v1/',
});

api.interceptors.request.use(async config => {
  const token = getToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
