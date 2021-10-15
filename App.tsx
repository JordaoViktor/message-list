import React from 'react';
import { Platform, StatusBar, UIManager } from 'react-native';
import {MessageList} from './src/context/messageList'
import { ThemeProvider } from 'styled-components';
import AppLoading from "expo-app-loading";

import {
  Oswald_400Regular,
  Oswald_700Bold
} from "@expo-google-fonts/oswald";

import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold
} from "@expo-google-fonts/roboto";

import theme from '@styles/theme';

import { Routes } from './src/routes'

export default function App() {
  const [fontsLoaded, error] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
    Oswald_400Regular,
    Oswald_700Bold
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } 
  
  if (Platform.OS === 'android') {
    if (UIManager.setLayoutAnimationEnabledExperimental) {
      UIManager.setLayoutAnimationEnabledExperimental(true);
    }
  }

  return (
    <MessageList>
      <ThemeProvider theme={theme}>
        <StatusBar
          barStyle="dark-content"
          translucent
          backgroundColor="transparent"
        />
        <Routes />
      </ThemeProvider>
    </MessageList>
  );
}


