import axios from 'axios';

export const apiClient = axios.create({
  baseURL: `${process.env.REACT_APP_API_URL}/api/v1`,
});

export const apiClientWithoutToken = axios.create({
  baseURL: `${process.env.REACT_APP_API_URL}/api/v1`,
});

apiClient.interceptors.request.use(
  async (config) => {
    const cf = config.headers;
    cf['Content-Type'] = 'application/json';
    return config;
  },
  (err) => Promise.reject(err),
);
