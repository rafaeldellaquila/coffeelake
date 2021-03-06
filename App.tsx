import React from 'react';
import {
  useFonts,
  Poppins_500Medium,
  Poppins_700Bold,
} from '@expo-google-fonts/poppins';
import AppLoading from 'expo-app-loading';
import Routes from './src/routes';
import firebase from 'firebase';
import { firebaseConfig } from './src/constants/firebase';

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_500Medium,
    Poppins_700Bold,
  });

  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }

  if (!fontsLoaded) {
    return <AppLoading />;
  } //aguardar fontes carregarem

  return <Routes />;
}
