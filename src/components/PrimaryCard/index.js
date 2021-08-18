import React from 'react';
import { View } from 'react-native';
import { SvgUri } from 'react-native-svg';

import { Container, ImageView } from './styles';
import { POKEMON_TYPE_COLOR } from '../../config/constants';
import { Tag } from '../Tag';
import PokeText from '../PokeText';
import { capitalize } from '../../utils/capitalize';

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

  return (
    <Container bgColor={backgroundColor}>
      <ImageView>
        <SvgUri uri={front_default} width={100} height={100} />
      </ImageView>
      <PokeText weight={700} size={22} color="#FFF">
        {capitalize(name)}
      </PokeText>
      <View style={{ flexDirection: 'row' }}>
        <Tag type={pokemonType} />
      </View>
    </Container>
  );
}
