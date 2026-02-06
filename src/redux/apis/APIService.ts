import axios from 'axios'

export const apiService = axios.create({
    baseURL: process.env.VITE_REACT_APP_API_BASE_URL || 'http://localhost:5000',
    withCredentials: true
})

export default apiService