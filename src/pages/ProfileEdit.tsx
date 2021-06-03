import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Text, View, StyleSheet, TextInput } from 'react-native';
import { RadioButton } from 'react-native-paper';
import BackButtonWithTitle from '../components/BackButtonWithTitle';
import colors from '../styles/colors';
import fonts from '../styles/fonts';
import { Avatar } from 'react-native-elements';
import { Input } from 'react-native-elements/dist/input/Input';

export function ProfileEdit() {
  const [checked, setChecked] = useState('barista');
  return (
    <SafeAreaView style={styles.container}>
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
        <Avatar
          rounded
          source={require('../assets/avatar.png')}
          size='large'
        />
        <Input placeholder='nome' />
        <Input placeholder='sobrenome' />
        <Input placeholder='e-mail' />
      </View>
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
});
