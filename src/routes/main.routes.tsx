import React from 'react';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';
import {MessageDTO} from '@services/types/dtos'
import { Home, MessageDetail, Splash } from '@screens/index';

const { Navigator, Screen } = createNativeStackNavigator();

export type RootStackParamList = {
  Home: string | MessageDTO ;
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
