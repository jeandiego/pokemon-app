import api from '../api';

export const getPokemons = async (limit = 150, offset = 0) => {
  try {
    const response = await api.get(`/pokemon?offset=${offset}&limit=${limit}`);
    return response.data.results;
  } catch (error) {
    console.log('Fail');
    return [];
  }
};

export const getPokemonData = async (url) => {
  try {
    const response = await api.get(url);
    return response.data;
  } catch (err) {
    console.log('Fail');
    return [];
  }
};

export const getAllPokemons = async () => {
  try {
    const data = await getPokemons();
    const promises = data.map(async (pokemon) => {
      return getPokemonData(pokemon.url);
    });
    const results = await Promise.all(promises);
    return results;
  } catch (err) {
    console.log(err);
    return [];
  }
};
