import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { MainRoutes } from './main.routes'; 

export const Routes: React.FC = () => {
  return (
    <NavigationContainer>
      <MainRoutes />
    </NavigationContainer>
  )
}

