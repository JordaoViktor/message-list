import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { wait } from '@utils/Time'
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamListType } from '@routes/main.routes'
import { Container, MessageAnimation } from './styles';

type SplashScreenProps = StackNavigationProp<RootStackParamListType, 'Home'>

export const Splash: React.FC = () => {

  const navigation = useNavigation<SplashScreenProps>()

  const handleNavigateHome = () => navigation.navigate('Home')

  useEffect(() => {
    wait(2000).then(() => handleNavigateHome())
  },[]);

  return (
    <Container>
      <MessageAnimation/>
    </Container>  
  );
}
