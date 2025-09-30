import axios from 'axios';

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// You can add interceptors here for handling tokens, errors, etc. globally
api.interceptors.response.use(
  (response) => {
    // The backend wraps successful responses in a `data` object.
    // We extract it here to simplify data access in services.
    return response.data.data;
  },
  (error) => {
    // Do something with response error
    return Promise.reject(error);
  }
);

export default api;
