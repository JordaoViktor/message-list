import React, { useContext } from 'react';
import { useNavigation, useRoute } from '@react-navigation/core';

import {
  Container,
  HeaderMenu,
  IconButton,
  PreviousPageIcon,
  DateText,
  TrashIcon,
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
  const { setMessagesList } = useContext(MessageListContext)
  
  const navigation = useNavigation()
  
  const { params } = useRoute()  

  const { detail, subject, timestamp, id } = params as MessageDTO

  const handlePreviousPage = () => navigation.goBack()

  const handleRemoveMessage = async (id : number) => {    
    setMessagesList((prevState:MessageDTO[]) => prevState.filter((item: MessageDTO) => item.id !== id))
    handlePreviousPage()
    await api.delete(`messages/${id}`)
  }

  return (
    <Container>
      <HeaderMenu>
        <IconButton onPress={handlePreviousPage}>
          <PreviousPageIcon/>
        </IconButton>

        <DateText>{formattedDate(timestamp)}</DateText>

        <IconButton onPress={() => handleRemoveMessage(id)}>
          <TrashIcon/>
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

