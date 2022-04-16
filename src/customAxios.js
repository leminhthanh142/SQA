import axios from 'axios';

export const customAxios = axios.create({
  baseURL: 'https://sqafood.herokuapp.com/api',
  timeout: 10000
});
