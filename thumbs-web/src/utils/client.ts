import axios from 'axios';

export const apiClient = axios.create({
  //baseURL: `${process.env.REACT_APP_API_URL}/api/v1/`,
  baseURL: `/api/v1`,
  //baseURL: 'http://localhost:3001/api/v1',
});

/*apiClient.interceptors.request.use(
  async (config) => {
    const cf = config.headers;
    cf['Content-Type'] = 'application/json';
    cf.Accept = '*';
    return config;
  },
  (err) => Promise.reject(err),
);*/
