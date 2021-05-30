import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import imgVerticalLogo from '../assets/coffeelake_vertical.png';
import BordelessButton from '../components/BordelessButton';
import Button from '../components/Button';
export function Welcome() {
  const navigation = useNavigation();

  function handleFunctionsApp() {
    navigation.navigate('HowItWorks');
  }

  function handleRegisterPage() {
    navigation.navigate('Register');
  }

  function handleLoginPage() {
    navigation.navigate('Login');
  }
  return (
    <SafeAreaView style={styles.container}>
      <Image source={imgVerticalLogo} style={styles.image} />
      <View style={styles.buttonContainer}>
        <Button
          bordered={true}
          title='como funciona?'
          onPress={handleFunctionsApp}
        />
        <Button title='cadastrar' onPress={handleRegisterPage} />
        <View style={styles.bordelessButton}>
          <BordelessButton
            title='login'
            onPress={handleLoginPage}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 40,
    paddingTop: 220,
    paddingBottom: 60,
  },
  image: {
    width: 297,
    height: 177,
  },
  buttonContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  bordelessButton: {
    marginTop: 40,
  },
});
