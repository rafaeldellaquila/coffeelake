import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  Text,
  View,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Dimensions,
} from 'react-native';
import BackButtonWithTitle from '../components/BackButtonWithTitle';
import colors from '../styles/colors';
import fonts from '../styles/fonts';
import {
  Avatar,
  TextInput,
  RadioButton,
} from 'react-native-paper';
import AvatarImage from '../assets/avatar.png';
import Button from '../components/Button';

export function ProfileEdit() {
  const [checked, setChecked] = useState('barista');
  const InputTheme = {
    colors: {
      text: colors.pure,
      placeholder: colors.cappuccino,
      primary: colors.pure,
      secondary: colors.cappuccino,
    },
  };
  const screenHeight = Dimensions.get('window').height;
  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <BackButtonWithTitle title='editar perfil' />
        <ScrollView
          keyboardDismissMode={'on-drag'}
          style={{ height: screenHeight }}
          scrollEnabled
          showsVerticalScrollIndicator={false}
        >
          <View>
            <Text style={styles.title}>qual o seu perfil?</Text>
            <RadioButton.Group
              onValueChange={(newValue) => setChecked(newValue)}
              value={checked}
            >
              <View style={styles.radio}>
                <RadioButton
                  value='barista'
                  color={colors.mocha}
                  uncheckedColor={colors.mocha}
                />
                <Text style={styles.text}>barista</Text>
              </View>
              <View style={styles.radio}>
                <RadioButton
                  value='lover'
                  color={colors.mocha}
                  uncheckedColor={colors.mocha}
                />
                <Text style={styles.text}>lover</Text>
              </View>
            </RadioButton.Group>
          </View>

          <View>
            <Avatar.Image
              source={AvatarImage}
              style={styles.avatarImage}
            />
            <TextInput
              selectionColor={colors.pure}
              underlineColor={colors.pure}
              underlineColorAndroid={colors.pure}
              theme={InputTheme}
              style={styles.input}
              label='nome'
            />
            <TextInput
              selectionColor={colors.pure}
              underlineColor={colors.pure}
              underlineColorAndroid={colors.pure}
              theme={InputTheme}
              style={styles.input}
              label='sobrenome'
            />
            <TextInput
              style={styles.emailInput}
              selectionColor={colors.pure}
              underlineColor={colors.pure}
              underlineColorAndroid={colors.pure}
              theme={InputTheme}
              label='e-mail'
            />
            <TextInput
              style={styles.inputBio}
              selectionColor={colors.pure}
              underlineColor={colors.pure}
              underlineColorAndroid={colors.pure}
              theme={InputTheme}
              label='escreva sua bio'
              multiline
              numberOfLines={10}
            />
            <View style={styles.buttonContainer}>
              <Text style={styles.disclaimer}>
                como barista seu perfil passará por uma validação
                da moderação
              </Text>

              <Button title='aplicar' style={styles.button} />
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    paddingHorizontal: 40,
  },
  title: {
    color: colors.pure,
    fontSize: 16,
    fontFamily: fonts.bold,
    marginBottom: 10,
  },
  radio: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    fontSize: 14,
    color: colors.mocha,
    fontFamily: fonts.medium,
  },
  avatarImage: {
    top: 20,
    marginTop: 20,
    marginRight: 10,
    marginBottom: 10,
  },
  input: {
    backgroundColor: colors.background,
    color: colors.mocha,
    marginBottom: 5,
    height: 60,
    maxWidth: 210,
    fontSize: 16,
    fontFamily: fonts.medium,
    borderColor: colors.pure,
    left: 100,
    bottom: 90,
  },
  emailInput: {
    backgroundColor: colors.background,
    color: colors.mocha,
    marginBottom: 5,
    height: 60,
    width: '100%',
    fontSize: 16,
    fontFamily: fonts.medium,
    borderColor: colors.pure,
    bottom: 94,
  },
  inputBio: {
    backgroundColor: colors.latte,
    width: '100%',
    color: colors.mocha,
    marginBottom: 20,
    paddingLeft: 20,
    fontSize: 16,
    fontFamily: fonts.medium,
    borderColor: colors.pure,
    bottom: 80,
  },
  buttonContainer: {
    bottom: 90,
    flexDirection: 'row',
    width: 170,
    alignItems: 'center',
  },
  disclaimer: {
    fontSize: 9.9,
    color: colors.cappuccino,
    width: 130,
    marginRight: 10,
  },
  button: {
    width: 125,
  },
});
