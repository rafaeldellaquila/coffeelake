import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import colors from '../styles/colors';
import fonts from '../styles/fonts';

export default function FormContainer() {
  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder='seu e-mail'
        placeholderTextColor={colors.mocha}
      />
      <TextInput
        style={styles.input}
        placeholder='sua senha'
        secureTextEntry={true}
        placeholderTextColor={colors.mocha}
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
  },
});
