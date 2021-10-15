import { Platform } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import styled  from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex:1;
  align-items: center;

  background-color:${({ theme })=> theme.colors.background};
`;

export const HeaderMenu = styled.View`
  margin-top: ${Platform.OS === 'android'  ? '20px' : '0px'};
  height:50px;
  width:100%;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  
  background-color: ${({ theme })=> theme.colors.backgroundPrimary};
  padding: 0px 20px;
`;

export const IconButton = styled(BorderlessButton)`
`;

export const DateText = styled.Text`
  font-family:${({theme })=> theme.fonts.secondary_700};
  color: ${({ theme })=> theme.colors.tertiary};
  font-size:20px;
`;

export const Header = styled.View`
  height:auto;
  width:100%;
  
  align-items: center;
  justify-content: center;

  background-color: ${({ theme }) => theme.colors.background};
`;

export const SubjectText = styled.Text`
  padding:20px 20px;
  align-items: center;
  font-family: ${({ theme }) => theme.fonts.secondary_400};
  color: ${({ theme }) => theme.colors.backgroundCard};
  font-size:24px;
`;

export const DetailWrapper = styled.ScrollView.attrs({
  contentContainerStyle: {
    paddingTop: 20,
    paddingBottom: 50
  },
})`
  width:100%;
  height:auto;
  background-color: ${({ theme })=> theme.colors.backgroundPrimary};
  
  padding: 0px 20px;
`;

export const DetailText = styled.Text`
  text-align: justify;
  color: ${({ theme })=> theme.colors.tertiary};
`;
