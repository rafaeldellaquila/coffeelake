import React from 'react';
import { StyleSheet, Text } from 'react-native';

import {
  BorderlessButton,
  BorderlessButtonProps,
  RectButton,
  RectButtonProps,
} from 'react-native-gesture-handler';
import colors from '../styles/colors';
import fonts from '../styles/fonts';
import { Octicons } from '@expo/vector-icons';

interface ButtonProps extends RectButtonProps {
  title: string;
}

export default function BordelessButton({
  title,
  ...rest
}: ButtonProps) {
  return (
    <RectButton {...rest} style={styles.container}>
      <Text style={styles.BordelessText}>{title}</Text>
      <Octicons name='chevron-right' size={20} color='black' />
    </RectButton>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  BordelessText: {
    fontSize: 16,
    fontFamily: fonts.bold,
    marginRight: 10,
  },
});
