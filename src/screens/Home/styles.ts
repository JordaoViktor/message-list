import styled from 'styled-components/native'
import { SwipeListView  } from 'react-native-swipe-list-view';
import { BorderlessButton, RectButton } from 'react-native-gesture-handler';

export const Container = styled.SafeAreaView`
  flex:1;
  align-items: center;
  justify-content: center;

  background-color:${({ theme })=> theme.colors.background};
`;

export const Title = styled.Text`
  font-family:${({ theme })=> theme.fonts.secondary_700};
  font-size: 30px;
  color:${({ theme })=> theme.colors.primary};
`;

export const SubTitle = styled.Text`
  font-family:${({ theme })=> theme.fonts.secondary_700};
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

export const SwiperCard = styled(RectButton)`
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;

  height: 60px;
  width: 100%;

  padding: 0 10px;

  margin-bottom:5px;
  background-color: ${({ theme })=> theme.colors.mainCard};
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

export const SwiperBackgroundCard = styled.View`
  align-items: center;
  flex-direction: row;
  
  height: 60px;
  width:100%;
  padding-right: 20px;

  background-color: ${({ theme })=> theme.colors.rightCard};
`;

export const BookmarkButton = styled(BorderlessButton)`
  justify-content: flex-start;
  margin-left:10px;
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


