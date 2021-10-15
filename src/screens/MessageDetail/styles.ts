import styled  from 'styled-components/native';
import { Platform } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import { FontAwesome } from '@expo/vector-icons';

export const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;

  background-color: ${({ theme })=> theme.colors.background};
`;

export const HeaderMenu = styled.View`
  height: 50px;
  width: 100%;
  
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  
  background-color: ${({ theme })=> theme.colors.backgroundPrimary};

  padding: 0px 20px;
  margin-top: ${Platform.OS === 'android'  ? '40px' : '0px'};
`;

export const IconButton = styled(BorderlessButton)`
`;

export const PreviousPageIcon = styled(FontAwesome).attrs({
  name: "arrow-left",
  size: 22
})`
  color: ${({ theme })=> theme.colors.tertiary};
`;

export const DateText = styled.Text`
  font-family: ${({ theme })=> theme.fonts.secondary_700};
  color: ${({ theme })=> theme.colors.tertiary};
  font-size: 20px;
`;

export const TrashIcon = styled(FontAwesome).attrs({
  name: "trash",
  size: 22
})`
  color: ${({ theme })=> theme.colors.tertiary};
`;

export const Header = styled.View`
  height: auto;
  width: 100%;
  
  align-items: center;
  justify-content: center;

  background-color: ${({ theme }) => theme.colors.background};
`;

export const SubjectText = styled.Text`
  padding: 20px 20px;
  align-items: center;

  color: ${({ theme }) => theme.colors.backgroundCard};

  font-family: ${({ theme }) => theme.fonts.secondary_400};
  font-size: 24px;
`;

export const DetailWrapper = styled.ScrollView.attrs({
  contentContainerStyle: {
    paddingTop: 20,
    paddingBottom: 50
  },
})`
  width: 100%;
  height: auto;

  padding: 0px 20px;

  background-color: ${({ theme })=> theme.colors.backgroundPrimary};
`;

export const DetailText = styled.Text`
  text-align: justify;
  color: ${({ theme })=> theme.colors.tertiary};
`;
