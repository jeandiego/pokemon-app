import React from 'react';
import styled from 'styled-components/native';
import interBlack from '../../config/constants';

export const Text = styled.Text`
  ${(p) => (p.flex ? 'flex:1' : null)}
  ${(p) => (p.height ? `height:${p.height}px` : null)}
  ${(p) => (p.height ? `maxHeight:${p.height}px` : null)}
  font-weight: ${(p) => p.weight || 400};
  font-family: ${(p) => p.fontFamily || 'Inter-Regular'};
  font-size: ${(p) => p.size || 14}px;
  color: ${(p) => p.color || '#000'};
  padding-left: ${(p) => p.pHorizontal || 0}px;
  padding-right: ${(p) => p.pHorizontal || 0}px;
  text-align: ${(p) => p.align || 'left'};
  text-decoration-line: ${(p) =>
    p.textDecorationLine || (p.lineThrough ? 'line-through' : false) || 'none'};
`;

const PokeText = ({ ...props }) => {
  return <Text {...props} />;
};

export default PokeText;
