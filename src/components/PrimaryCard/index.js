import React from 'react';
import { Text, View } from 'react-native';
import { SvgUri } from 'react-native-svg';

import { Container, ImageView } from './styles';
import { POKEMON_TYPE_COLOR, type } from '../../config/constants';
import { Tag } from '../tag';

export function PrimaryCard({ pokemon }) {
  const {
    name,
    types,
    sprites: {
      other: {
        dream_world: { front_default },
      },
    },
  } = pokemon;
  const pokemonType = types.map((typeInfo) => typeInfo.type.name);
  const backgroundColor = POKEMON_TYPE_COLOR[pokemonType[0]];

  console.log(pokemonType);

  return (
    <Container bgColor={backgroundColor}>
      <ImageView>
        <SvgUri uri={front_default} width={100} height={100} />
      </ImageView>
      <Text>{name}</Text>
      <View style={{ flexDirection: 'row' }}>
        <Tag type={pokemonType} />
      </View>
    </Container>
  );
}
