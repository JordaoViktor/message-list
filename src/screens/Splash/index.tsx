import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useFetch } from '@services/hooks/useFetch';
import { MessageDTO } from '@services/types/dtos';
import { wait } from '@utils/Time'
import { Container,MessageAnimation } from './styles';

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
