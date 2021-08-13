import React from 'react';
import { Text, FlatList, TextInput } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import PokeText from '../../components/PokeText';
import interBlack from '../../config/constants';
import { PrimaryCard } from '../../components/PrimaryCard';

import { Container, InputView, SearchInput } from './styles';

const HomerView = ({ pokemons }) => {
  // const navigation = useNavigation();
  const insets = useSafeAreaInsets();

  return (
    <Container safeArea={insets}>
      <PokeText size={24} weight={700} height={32}>
        Pokédex
      </PokeText>
      <PokeText color="#999999">
        Search for Pokémon by name or using the National Pokédex number
      </PokeText>
      <InputView>
        <SearchInput placeholder="What Pókemon are you looking for?" />
      </InputView>
      <FlatList
        data={pokemons}
        keyExtractor={(item) => item.name}
        renderItem={({ item, index }) => {
          return <PrimaryCard pokemon={item} image={index} />;
        }}
        style={{ paddingTop: 20 }}
      />
    </Container>
  );
};

export default HomerView;
