import React from 'react';
import { Text } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { SvgUri } from 'react-native-svg';

import { Container, ImageView } from './styles';

export function PrimaryCard({ pokemon, image }) {
  const { name } = pokemon;
  const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${
    image + 1
  }.svg`;

  return (
    <Container>
      <ImageView>
        <SvgUri uri={imageUrl} width={100} height={100} />
      </ImageView>
      <Text>{name}</Text>
    </Container>
  );
}
