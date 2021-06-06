import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { Overlay } from 'react-native-elements/dist/overlay/Overlay';
import BordelessButton from './BordelessButton';
import Button from './Button';
import colors from '../constants/colors';
import fonts from '../constants/fonts';

export function ForgotPassword() {
  const [visible, setVisible] = useState(false);

  function toggleOverlay() {
    setVisible(!visible);
  }

  return (
    <View>
      <BordelessButton
        title='esqueci minha senha'
        onPress={toggleOverlay}
      />
      <Overlay
        isVisible={visible}
        backdropStyle={{
          backgroundColor: colors.backdrop,
        }}
        overlayStyle={styles.overlay}
        onBackdropPress={toggleOverlay}
      >
        <View>
          <Text style={styles.title}>
            fica tranquilo, isso não é um problema!
          </Text>
          <Text style={styles.text}>
            fala pra gente seu e-mail que enviaremos uma nova
            senha para você.
          </Text>
          <TextInput
            placeholder='e-mail'
            style={styles.input}
            placeholderTextColor={colors.cappuccino}
          />
          <Button title='receber nova senha' />
        </View>
      </Overlay>
    </View>
  );
}

const styles = StyleSheet.create({
  overlay: {
    backgroundColor: colors.background,
    borderRadius: 20,
    margin: 20,
    padding: 40,
    paddingBottom: 30,
  },
  title: {
    fontFamily: fonts.bold,
    fontSize: 16,
    color: colors.pure,
    marginBottom: 20,
  },
  text: {
    fontFamily: fonts.medium,
    fontSize: 16,
    color: colors.pure,
    marginBottom: 20,
  },
  input: {
    backgroundColor: colors.latte,
    height: 50,
    borderRadius: 5,
    paddingLeft: 20,
    fontSize: 16,
    marginBottom: 20,
    color: colors.pure,
  },
});
