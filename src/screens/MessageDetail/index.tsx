import React, { useContext } from 'react';
import { useNavigation,  useRoute } from '@react-navigation/core';
import { FontAwesome } from '@expo/vector-icons'
import { useTheme } from 'styled-components';

import {
  Container,
  HeaderMenu,
  IconButton,
  DateText,
  Header,
  SubjectText,
  DetailWrapper,
  DetailText,
} from './styles';

import { MessageDTO } from '@services/types/dtos';
import { api } from '@services/api';
import { formattedDate } from '@utils/Time';
import { MessageListContext } from '@context/messageList';

export const MessageDetail: React.FC = () => {
  const { messagesList, setMessagesList} = useContext(MessageListContext)
  
  const navigation = useNavigation()
  const theme = useTheme()
  const { params } = useRoute()  
  

  const { detail, subject, timestamp, id} = params as MessageDTO

  const handlePreviousPage = () => navigation.goBack()

  const handleRemoveMessage = async (id : number) => {    
    setMessagesList(prevState => prevState.filter((item: number)  => item.id !== id))
    handlePreviousPage()
    await api.delete(`messages/${id}`)
  }

  return (
    <Container>
      <HeaderMenu>
        <IconButton onPress={handlePreviousPage}>
          <FontAwesome name="arrow-left" size={22} color={theme.colors.leftCard}/>
        </IconButton>

        <DateText>{formattedDate(timestamp)}</DateText>

        <IconButton onPress={() => handleRemoveMessage(id)}>
          <FontAwesome name="trash" size={22} color={theme.colors.leftCard}/>
        </IconButton>
      </HeaderMenu>

      <Header>
        <SubjectText>{subject}</SubjectText>
      </Header>

      <DetailWrapper>
        <DetailText>
          {detail} 
        </DetailText>
      </DetailWrapper>
    </Container>
  );
}

