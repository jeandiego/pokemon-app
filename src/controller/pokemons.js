import api from '../api';

export const getPokemon = async () => {
  try {
    const response = await api.get(`/pokemon?offset=0&limit=150`);
    return response.data.results;
  } catch (error) {
    console.log('Fail');
    return [];
  }
};
