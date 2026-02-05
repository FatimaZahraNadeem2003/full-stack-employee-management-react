import axios from 'axios';

export const apiService = axios.create({
  baseURL: `${import.meta.env.VITE_API_BASE_URL}`.replace('/api', ''),
  headers: {
    'Content-Type': 'application/json',
  },
});
