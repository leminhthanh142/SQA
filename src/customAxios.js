import axios from 'axios';

export const customAxios = axios.create({
  baseURL: 'https://6232042f59070d92734183e5.mockapi.io/sqa-dummy-data',
  timeout: 10000
});
