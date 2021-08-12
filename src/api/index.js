import axios from 'axios';

const api = axios.create({
  baseURL: 'https://pokeapi.co/api/v2',
  timeout: 1000,
  headers: {
    method: 'GET',
    'Content-type': 'application/json',
  },
});

export default api;
