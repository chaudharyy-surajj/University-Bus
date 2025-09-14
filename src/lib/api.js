// src/lib/api.js
import axios from 'axios';
import { auth } from './firebase';
import { getIdToken } from 'firebase/auth';

export const api = axios.create({ baseURL: '/api' });

api.interceptors.request.use(async (config) => {
  if (auth.currentUser) {
    const t = await getIdToken(auth.currentUser, false);
    config.headers.Authorization = `Bearer ${t}`;
  }
  return config;
});
