import React,{
  useState,
  useEffect,
  useCallback,
  useContext,
} from 'react';
import { ListRenderItemInfo, LayoutAnimation } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useFetch } from '@services/hooks/useFetch'

import { MessageListContext } from '@context/messageList';
import { api } from '@services/api';
import { MessageDTO } from '@services/types/dtos';


import faker from 'faker';
import { wait } from '@utils/Time'

import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamListType } from '@routes/main.routes';

import { Card } from '@components/Card';

import {
  Container,
  Title,
  SubTitle,
  SwiperList,
  SwiperBackgroundCard,
  SwiperIconButton,
  BookmarkButton,
  BookmarkIcon,
  IconsButton,
  RefrashContainer,
  EnterIcon,
  RemoveIcon,
} from './styles';  

type HomeScreenProps = StackNavigationProp<RootStackParamListType, 'MessageDetail'>

export const Home: React.FC = () => {
  const [refreshing, setRefreshing] = useState(false);
  const { messagesList, setMessagesList} = useContext(MessageListContext)

  const { data } = useFetch<MessageDTO[] | undefined>('messages')

  const message = {
    id: Math.random() * 1000,
    timestamp: new Date().getTime(),
    subject: faker.lorem.sentence(),
    detail: faker.lorem.paragraphs(),
    read: false,
  }

  const navigation = useNavigation<HomeScreenProps>()
  
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
  }, [ data, messagesList ]);

  const handleRemoveMessage = async (item : MessageDTO) => {
    LayoutAnimation.easeInEaseOut()

    setMessagesList((prevState : MessageDTO[]) => prevState
      .filter((event: MessageDTO) => event.id !== item.id))

    await api.delete(`messages/${item.id}`)
  } 

  const handleMessageDetail = (item: MessageDTO) => {
    return navigation.navigate('MessageDetail', item )
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
        renderItem={({ item }: ListRenderItemInfo<MessageDTO>) => <Card item={item}/>}
        renderHiddenItem={({ item }: ListRenderItemInfo<MessageDTO>) => (
          <SwiperBackgroundCard>
            <BookmarkButton onPress={() => handleReadMessage(item)}>
              <BookmarkIcon color={item.read}/>
            </BookmarkButton>

            <IconsButton>
              <SwiperIconButton
                style={{marginRight:5}}
                onPress={() => handleMessageDetail(item)}
              >
                <EnterIcon />
              </SwiperIconButton>

              <SwiperIconButton onPress={() => handleRemoveMessage(item)}>
                <RemoveIcon/>
              </SwiperIconButton>
            </IconsButton>
          </SwiperBackgroundCard>
        )}
      />
    </Container>
  )
}
