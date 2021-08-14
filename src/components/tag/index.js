import React from 'react';
import PokeText from '../PokeText';
import { Container } from './styles';

export const Tag = ({ type }) => {
  return (
    <>
      {type.map((item) => {
        return (
          <Container>
            <PokeText>{item}</PokeText>
          </Container>
        );
      })}
    </>
  );
};
