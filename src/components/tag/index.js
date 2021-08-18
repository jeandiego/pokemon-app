import React from 'react';
import {
  POKEMON_TYPE_BACKGROUND,
  POKEMON_TYPE_ICON,
  interBlack,
} from '../../config/constants';
import { Dragon } from '../../svgs';
import { capitalize } from '../../utils/capitalize';
import PokeText from '../PokeText';
import { Container, IconView } from './styles';

export const Tag = ({ type }) => {
  return (
    <>
      {type.map((item, index) => {
        const uniqueKey = index + 1;

        return (
          <Container key={uniqueKey}>
            <IconView>
              {POKEMON_TYPE_ICON[item]({ width: 24, height: 24 })}
            </IconView>
            <PokeText family="Inter-Black" color="#FFF">
              {capitalize(item)}
            </PokeText>
          </Container>
        );
      })}
    </>
  );
};
