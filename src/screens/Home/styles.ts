import styled from 'styled-components/native'
import { Platform } from 'react-native';
import { FontAwesome, Ionicons } from '@expo/vector-icons'
import { SwipeListView  } from 'react-native-swipe-list-view';
import { BorderlessButton, RectButton } from 'react-native-gesture-handler';

export const Container = styled.SafeAreaView`
  flex:1;
  align-items: center;
  justify-content: center;

  background-color:${({ theme })=> theme.colors.background};
`;

export const Title = styled.Text`
  font-family:${({ theme }) => theme.fonts.secondary_700};
  font-size: 30px;
  color:${({ theme }) => theme.colors.primary};
  margin-top: ${Platform.OS === 'android'  ? '40px' : '0px'};
`;

export const SubTitle = styled.Text`
  font-family:${({ theme }) => theme.fonts.secondary_700};
  font-size: 24px;
  color: ${({ theme })=> theme.colors.primary};
  padding-bottom:20px;
`;

export const RefrashContainer = styled.RefreshControl`
  width:100%;
`

export const SwiperList = styled(SwipeListView).attrs({
  rightOpenValue:-75,
  leftOpenValue:40,
})`
  flex:1;
  width: 100%;
  background-color: ${({ theme })=> theme.colors.background};
`;

export const SwiperBackgroundCard = styled.View`
  align-items: center;
  flex-direction: row;
  
  height: 60px;
  width:100%;
  padding-right: 20px;

  background-color: ${({ theme })=> theme.colors.backgroundCard};
`;

export const BookmarkButton = styled(BorderlessButton)`
  justify-content: flex-start;
  margin-left:10px;
`;

export const BookmarkIcon = styled(FontAwesome).attrs({
  name: "bookmark",
  size: 22,
})`
  color: ${({ theme, color})=> color ? theme.colors.active : theme.colors.unActive};
`;


export const IconsButton = styled(BorderlessButton)`
  flex-direction:row;
  justify-content: flex-end;
  align-items: center;

  width: 100%;
  height: 100%;
  padding-right:20px;
`;

export const SwiperIconButton = styled(RectButton)`
  
`;

export const EnterIcon = styled(Ionicons).attrs({
  name: "open-outline",
  size: 22,
})``;

export const RemoveIcon = styled(FontAwesome).attrs({
  name:"times-circle",
  size: 22,
})``;

