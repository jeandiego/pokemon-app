import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled(TouchableOpacity).attrs({
  activeOpacity: 0.6,
})`
  height: 100px;
  background: ${(p) => (p.bgColor ? p.bgColor : '#EEEEEE')};
  border-radius: 12px;
  margin-bottom: 24px;
  position: relative;
`;

export const ImageView = styled.View`
  position: absolute;
  top: -16px;
  right: 16px;
`;
