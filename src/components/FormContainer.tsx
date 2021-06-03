import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';
import colors from '../styles/colors';
import fonts from '../styles/fonts';

export default function FormContainer() {
  const [showPassword, setShowPassword] = useState(true);
  const [passwordIcon, setPasswordIcon] =
    useState('eye-outline');

  function handleSecurity() {
    setShowPassword(!showPassword);
    if (passwordIcon === 'eye-off-outline') {
      setPasswordIcon('eye-outline');
    } else {
      setPasswordIcon('eye-off-outline');
    }
  }

  const InputTheme = {
    colors: {
      text: colors.pure,
      placeholder: colors.cappuccino,
      primary: colors.pure,
      secondary: colors.cappuccino,
    },
  };
  return (
    <View>
      <TextInput
        style={styles.input}
        label='e-mail'
        selectionColor={colors.pure}
        underlineColor={colors.pure}
        underlineColorAndroid={colors.pure}
        theme={InputTheme}
      />
      <TextInput
        style={styles.input}
        theme={InputTheme}
        secureTextEntry={showPassword}
        right={
          <TextInput.Icon
            name={passwordIcon}
            color={colors.pure}
            onPress={handleSecurity}
          />
        }
        label='senha'
        underlineColor={colors.pure}
        underlineColorAndroid={colors.pure}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: colors.latte,
    width: '100%',
    color: colors.mocha,
    marginBottom: 20,
    height: 60,
    paddingLeft: 20,
    fontSize: 16,
    fontFamily: fonts.medium,
    borderColor: colors.pure,
  },
});
