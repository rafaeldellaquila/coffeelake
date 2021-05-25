import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import colors from '../styles/colors';
import fonts from '../styles/fonts';
import imgVerticalLogo from '../assets/coffeelake_vertical.png';
import Button from './Button';
import { useNavigation } from '@react-navigation/core';

export default function StartNow() {
  const navigation = useNavigation();

  function handleRegister() {
    navigation.navigate('Register');
  }
  return (
    <View>
      <Image source={imgVerticalLogo} style={styles.image} />

      <Text style={styles.title}>
        aproveite o melhor do café com a gente!
      </Text>
      <View>
        <View style={styles.contentButton}>
          <Button title='cadastrar' onPress={handleRegister} />
          <Button title='já tenho login' bordered={true} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 186,
    height: 111,
    marginBottom: 40,
    marginTop: 40,
  },
  title: {
    fontFamily: fonts.bold,
    fontSize: 41.09,
    lineHeight: 43,
    paddingVertical: 5,
    color: colors.pure,
  },
  contentButton: {
    alignItems: 'center',
    marginTop: 40,
  },
});
