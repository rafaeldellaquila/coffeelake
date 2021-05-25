import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import colors from '../styles/colors';
import Button from './Button';

export default function FormContainer() {
  return (
    <View>
      <TextInput style={styles.input} placeholder='seu e-mail' />
      <TextInput
        style={styles.input}
        placeholder='sua senha'
        secureTextEntry={true}
      />
      <Button title='cadastrar' />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: colors.latte,
    width: '100%',
    color: colors.latte,
    marginBottom: 20,
  },
});
