import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  Text,
  View,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
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
  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.wrapper}
      >
        <BackButtonWithTitle title='editar perfil' />

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
          <View style={styles.basicInfo}>
            <Avatar.Image
              source={AvatarImage}
              style={styles.avatarImage}
              size={80}
            />
            <View style={styles.inputFullName}>
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
            </View>
          </View>
          <TextInput
            style={styles.input}
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
            numberOfLines={6}
          />
          <Text style={styles.disclaimer}>
            * como barista seu perfil passará por uma validação
            da moderação
          </Text>
          <Button title='aplicar' />
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    paddingHorizontal: 40,
    flex: 1,
  },
  wrapper: {
    justifyContent: 'flex-end',
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
    marginRight: 20,
  },
  basicInfo: {
    flexDirection: 'row',
    flexWrap: 'nowrap',
    alignItems: 'center',
  },
  inputFullName: {
    width: '68%',
  },
  input: {
    backgroundColor: colors.background,
  },

  inputBio: {
    backgroundColor: colors.latte,
    marginTop: 20,
  },
  disclaimer: {
    fontFamily: fonts.medium,
    fontSize: 9.9,
    color: colors.cappuccino,
    marginTop: 10,
  },
});
