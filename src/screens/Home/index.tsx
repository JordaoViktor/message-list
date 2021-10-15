import React, {useState, useEffect, useCallback, useContext, Dispatch, SetStateAction} from 'react';
import { ListRenderItemInfo, LayoutAnimation } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useFetch } from '@services/hooks/useFetch'
import { useTheme } from 'styled-components';
import faker from 'faker';

import { MessageListContext } from '@context/messageList';
import { api } from '@services/api';
import { MessageDTO } from '@services/types/dtos';

import { FontAwesome, Ionicons } from '@expo/vector-icons'
import { wait } from '@utils/Time'

import { Card } from '@components/Card';

import {
  Container,
  Title,
  SubTitle,
  SwiperList,
  SwiperBackgroundCard,
  SwiperIconButton,
  BookmarkButton,
  IconsButton,
  RefrashContainer
} from './styles';  

const message = {
  id: Math.random() * 1000,
  timestamp: new Date().getTime(),
  subject: faker.lorem.sentence(),
  detail: faker.lorem.paragraphs(),
  read: false,
}

export const Home: React.FC = () => {
  const [refreshing, setRefreshing] = useState(false);
  const { messagesList, setMessagesList} = useContext(MessageListContext)

  const { data } = useFetch<MessageDTO[] | undefined>('messages')

  const navigation = useNavigation()
  const theme = useTheme()
  
  const messageListOrdened = messagesList?.sort((a: MessageDTO, b: MessageDTO)=> a.timestamp + b.timestamp)
  
  const addMoreMessages = async (item: MessageDTO) => {
    await api.post('messages/', item )
    setMessagesList((prevState :any) => [item, ...prevState])
  }
  
  const onRefresh = useCallback(() => {
    setRefreshing(true);
    addMoreMessages(message)
    LayoutAnimation.easeInEaseOut()
    wait(2000).then(() => setRefreshing(false));
  }, [ data, messagesList]);

  const handleRemoveMessage = async (item : MessageDTO) => {
    LayoutAnimation.easeInEaseOut()

    setMessagesList((prevState : MessageDTO[]) => prevState
      .filter((event: MessageDTO) => event.id !== item.id))

    await api.delete(`messages/${item.id}`)
  } 

  const handleMessageDetail = (item: MessageDTO ) => {
    navigation.navigate('MessageDetail', item )
  }

  const handleReadMessage = useCallback((item) => {
    setMessagesList((prevState: MessageDTO[]) => prevState
      .map((messageItem: MessageDTO) => messageItem.id === item.id 
        ? {...messageItem, read: !item.read} 
        : messageItem))
  },[])

  useEffect(() => { 
    setMessagesList(data)
  },[data])

  return (
    <Container>

      <Title>Messages</Title>

      <SubTitle>Swipe down for update the messages</SubTitle>

      <SwiperList
        data={messageListOrdened}
        keyExtractor={(item : any) => String(item.id)}
        refreshControl={
          <RefrashContainer
            refreshing={refreshing}
            onRefresh={onRefresh}
          />
        }
        renderItem={({item}: ListRenderItemInfo<MessageDTO>, rowMap) => (<Card item={item}/>)}
        renderHiddenItem={({ item }: ListRenderItemInfo<MessageDTO>, rowMap) => (
          <SwiperBackgroundCard>
            <BookmarkButton onPress={() => handleReadMessage(item)}>
              <FontAwesome name="bookmark" size={22} color={item.read ? theme.colors.active : theme.colors.unActive}/>
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
