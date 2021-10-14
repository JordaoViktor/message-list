import React, {useState, useEffect, useCallback, useContext} from 'react';
import { Text, ListRenderItemInfo, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useFetch } from '@services/hooks/useFetch'
import faker from 'faker';

import { MessageListContext } from '@context/messageList';
import { api } from '@services/api';
import { MessageDTO } from '@services/types/dtos';

import { FontAwesome, Ionicons } from '@expo/vector-icons'
import { wait, formattedDate } from '@utils/Time'

import {
  Container,
  Title,
  SubTitle,
  SwiperList,
  SwiperCard,
  DateWrapper,
  DateText,
  SubjectText,
  SwiperBackgroundCard,
  SwiperIconButton,
  BookmarkButton,
  IconsButton,
  RefrashContainer
} from './styles';  

export const Home: React.FC = () => {
  const { data } = useFetch<MessageDTO[] | undefined>('messages')
  const { messagesList, setMessagesList} = useContext(MessageListContext)
  const [refreshing, setRefreshing] = useState(false);


  const navigation = useNavigation()
  
  const message = {
    id: Math.random() * 1000,
    timestamp: new Date().getTime(),
    subject: faker.lorem.sentence(),
    detail: faker.lorem.paragraphs(),
    read: false,
  }

  const addMoreMessages = async (item: MessageDTO) => {
    await api.post('messages/', item )
    setMessagesList((prevState) => [item,...prevState])
  }
  
  const onRefresh = useCallback(() => {
    setRefreshing(true);
    addMoreMessages(message)
    
    wait(2000).then(() => setRefreshing(false));
  }, [ data, messagesList]);

  const handleRemoveMessage = async (item : MessageDTO) => {
    await api.delete(`messages/${item.id}`)
    setMessagesList(prevState=> prevState.filter(({ id }: number)  => id !== item.id))
  }

  const handleMessageDetail = (item: MessageDTO ) => {
    navigation.navigate('MessageDetail', item )
  }

  useEffect(() => { 
    setMessagesList(data)
  },[data])

  return (
    <Container>

      <Title>Messages</Title>

      <SubTitle>Swipe down for update the messages</SubTitle>

      <SwiperList
        data={messagesList?.sort((a,b)=> a.timestamp - b.timestamp)}
        keyExtractor={(item) => String(item.id)}
        refreshControl={
          <RefrashContainer
            refreshing={refreshing}
            onRefresh={onRefresh}
          />
        }
        renderItem={({item}: ListRenderItemInfo<MessageDTO>, rowMap) => (
          <SwiperCard>
            <DateWrapper>
              <DateText>{formattedDate(item.timestamp)}</DateText>
            </DateWrapper>

            <SubjectText >{item.subject}</SubjectText>
          </SwiperCard>
        )}
        renderHiddenItem={({ item }: ListRenderItemInfo<MessageDTO>, rowMap) => (
          <SwiperBackgroundCard>
            <BookmarkButton onPress={() => {
              setMessagesList((prevState : any) => prevState.map((messageItem : any) => messageItem.id === item.id ? {...messageItem, read: !item.read} : messageItem))
            }}>
              <FontAwesome name="bookmark" size={22} color={item.read ? '#fff' : '#000000'}/>
            </BookmarkButton>

            <IconsButton>
              <SwiperIconButton
                style={{marginRight:5}}
                onPress={() => handleMessageDetail(item)}
              >
                <Ionicons name="open-outline" size={22} />
              </SwiperIconButton>

              <SwiperIconButton onPress={() => handleRemoveMessage(item)}>
                <FontAwesome name="times-circle" size={22}/>
              </SwiperIconButton>
            </IconsButton>
          </SwiperBackgroundCard>
        )}
      />
    </Container>
  )
}
