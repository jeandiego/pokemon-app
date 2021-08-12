import React, { useEffect, useState } from 'react';
import HomeView from './view';
import { getPokemon } from '../../controller/pokemons';

export function Home() {
  const [pokemons, setPokemons] = useState([]);
  // const [loading, setLoading] = useState(false);

  async function listPokemon() {
    const allPokemons = await getPokemon();

    setPokemons(allPokemons);
  }

  useEffect(() => {
    listPokemon();
  }, []);

  return <HomeView pokemons={pokemons} />;
}
