import styled from 'styled-components/native';
import messageAnimimation from '@assets/animations/messageAnimimation.json'
import LottieView from 'lottie-react-native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;

  background-color: ${({ theme })=> theme.colors.background};
`;

export const MessageAnimation = styled(LottieView).attrs({
  loop: true,
  autoPlay: true,
  resizeMode: 'contain',
  source: messageAnimimation,
})`
  justify-content: center;
  align-items: center;
  height: 400px;
`;
