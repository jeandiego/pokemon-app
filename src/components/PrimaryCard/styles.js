import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled(TouchableOpacity).attrs({
  activeOpacity: 0.6,
})`
  width: 100%;
  height: 100px;
  background: #eeeeee;
  border-radius: 12px;
  margin-bottom: 24px;
  position: relative;
`;

export const ImageView = styled.View`
  position: absolute;
  top: -16px;
  right: 16px;
`;
