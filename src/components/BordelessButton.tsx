import React from 'react';
import { StyleSheet, Text } from 'react-native';
import {
  BorderlessButton,
  BorderlessButtonProps,
} from 'react-native-gesture-handler';
import colors from '../constants/colors';
import fonts from '../constants/fonts';
import { Octicons } from '@expo/vector-icons';

interface ButtonProps extends BorderlessButtonProps {
  title: string;
}

export default function BordelessButton({
  title,
  ...rest
}: ButtonProps) {
  return (
    <BorderlessButton {...rest} style={styles.container}>
      <Text style={styles.BordelessText}>{title}</Text>
      <Octicons
        name='chevron-right'
        size={20}
        color={colors.pure}
      />
    </BorderlessButton>
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
    color: colors.pure,
  },
});
