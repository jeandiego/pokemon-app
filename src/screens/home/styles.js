import { TextInput } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background: #ffffff;
  padding: 0px 24px;
  padding-top: ${(p) => p.safeArea.top + 26}px;
`;

export const InputView = styled.View`
  width: 100%;
  height: 52px;
  background-color: #eeeeee;
  border-radius: 6px;
  justify-content: center;
  margin-bottom: 24px;
`;

export const SearchInput = styled(TextInput)`
  width: 80%;
  padding: 0px 16px;
`;
