import { useNavigation } from '@react-navigation/core';
import React from 'react';
import {
  View,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  TouchableWithoutFeedback,
  Dimensions,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import BackButtonWithTitle from '../components/BackButtonWithTitle';
import BordelessButton from '../components/BordelessButton';
import Button from '../components/Button';
import FormContainer from '../components/FormContainer';
import SocialLogin from '../components/SocialLogin';

export function Register() {
  const navigation = useNavigation();

  function handleLoginPage() {
    navigation.navigate('Login');
  }

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.wrapper}>
            <View style={styles.form}>
              <BackButtonWithTitle title='cadastro' />
              <FormContainer />

              <Button title='cadastrar' />
            </View>
            <View style={styles.SocialElogin}>
              <SocialLogin />
            </View>
            <View style={styles.loginButton}>
              <BordelessButton
                title='já tenho um login'
                onPress={handleLoginPage}
              />
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
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
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  form: {
    flex: 5,
  },
  SocialElogin: {
    flex: 2,
  },
  loginButton: {
    flex: 2,
    alignItems: 'center',
  },
});
