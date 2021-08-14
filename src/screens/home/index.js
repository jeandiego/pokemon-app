import React, { useEffect, useState } from 'react';
import reactotron from 'reactotron-react-native';
import HomeView from './view';
import { getAllPokemons } from '../../services/pokemons';

export function Home() {
  const [pokemons, setPokemons] = useState([]);
  // const [loading, setLoading] = useState(false);

  const fetchPokemons = async () => {
    const pokemonsData = await getAllPokemons();

    setPokemons(pokemonsData);
  };

  reactotron.log(pokemons);
  useEffect(() => {
    fetchPokemons();
  }, []);

  return <HomeView pokemons={pokemons} />;
}
