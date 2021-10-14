import styled from 'styled-components/native'
import { RectButton } from 'react-native-gesture-handler';


export const SwiperCard = styled(RectButton)`
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;

  height: 60px;
  width: 100%;

  padding: 0 10px;

  margin-bottom:5px;
  background-color: ${({ theme, bgColor })=>  bgColor ? theme.colors.active :theme.colors.mainCard};
`;

export const DateWrapper = styled.View`
  width: 100%;
  padding-bottom: 2px;
  font-weight: bold;
`;

export const DateText = styled.Text`
  font-weight: bold;
  font-family:${({ theme })=>theme.fonts.secondary_400};
`;

export const SubjectText = styled.Text`
  padding: 0 10px;
  text-align: auto;

  font-family:${({ theme })=> theme.fonts.primary_400};
`;
