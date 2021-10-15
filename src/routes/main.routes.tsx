import React from 'react';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';
import {MessageDTO} from '@services/types/dtos'
import { Home, MessageDetail, Splash } from '@screens/index';

const { Navigator, Screen } = createNativeStackNavigator<RootStackParamListType>();

export type RootStackParamListType = {
  Home: undefined ;
  MessageDetail: MessageDTO;
  Splash: undefined;
};

export const MainRoutes: React.FC = () => (
  <Navigator 
    screenOptions={{headerShown: false}}
    initialRouteName="Splash"
  >
    <Screen name="Home" component={Home} />
    <Screen name="MessageDetail" component={MessageDetail} />
    <Screen name="Splash" component={Splash} />
  </Navigator>
);
