import React, { useEffect } from 'react';
import { wait } from '@utils/Time'
import { useNavigation } from '@react-navigation/native';
import { Container,MessageAnimation } from './styles';
import { MessageDTO } from '@services/types/dtos';
import { useFetch } from '@services/hooks/useFetch';

export const Splash: React.FC = () => {
  const navigation = useNavigation()

  const {data} = useFetch<MessageDTO[] | undefined>('messages')

  const handleNavigateHome = () => (
    navigation.navigate('Home', data)
  )

  useEffect(() => {
    wait(2000).then(() => handleNavigateHome())
  },[]);

  return (
    <Container>
      <MessageAnimation/>
    </Container>  
  );
}
