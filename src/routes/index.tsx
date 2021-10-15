import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { enableScreens } from 'react-native-screens';
import { MainRoutes } from './main.routes'; 

enableScreens()

export const Routes: React.FC = () => {
  return (
    <NavigationContainer>
      <MainRoutes />
    </NavigationContainer>
  )
}

