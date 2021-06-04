import { useNavigation } from '@react-navigation/core';
import React from 'react';
import {
  View,
  StyleSheet,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import BackButtonWithTitle from '../components/BackButtonWithTitle';
import BordelessButton from '../components/BordelessButton';
import Button from '../components/Button';
import { ForgotPassword } from '../components/ForgotPassword';
import FormContainer from '../components/FormContainer';
import SocialLogin from '../components/SocialLogin';

export function Login() {
  const navigation = useNavigation();

  function handleRegisterPage() {
    navigation.navigate('Register');
  }
  function handleProfileEdit() {
    navigation.navigate('ProfileEdit');
  }

  return (
    <SafeAreaView style={styles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.wrapper}>
          <View style={styles.form}>
            <BackButtonWithTitle title='bem vindo de volta!' />
            <FormContainer />

            <Button title='login' onPress={handleProfileEdit} />
          </View>
          <View style={styles.lostPassword}>
            <ForgotPassword />
          </View>
          <View style={styles.SocialElogin}>
            <SocialLogin />
            <View style={styles.loginButton}>
              <BordelessButton
                title='preciso de uma nova conta'
                onPress={handleRegisterPage}
              />
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrapper: {
    marginTop: 40,
    paddingHorizontal: 40,
  },
  form: {
    marginBottom: 20,
  },
  lostPassword: {
    marginBottom: 60,
    alignItems: 'center',
  },
  SocialElogin: {
    alignItems: 'center',
  },
  loginButton: {
    marginTop: 80,
  },
});
