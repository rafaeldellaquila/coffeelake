import { Story } from '@storybook/react-native';
import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';

import colors from '../styles/colors';
import fonts from '../styles/fonts';

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  bordered?: boolean;
}

export default function Button({
  title,
  bordered,
  ...rest
}: ButtonProps) {
  return (
    <TouchableOpacity
      {...rest}
      activeOpacity={0.9}
      style={[
        styles.buttonContainer,
        bordered && styles.borderedButton,
      ]}
    >
      <Text
        style={[
          styles.buttonText,
          bordered && styles.borderedButtonText,
        ]}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: colors.pure,
    width: '100%',
    padding: 20,
    alignItems: 'center',
    borderRadius: 100,
    marginVertical: 10,
  },
  borderedButton: {
    backgroundColor: colors.background,
    borderColor: colors.pure,
    borderWidth: 3,
    padding: 17,
  },
  buttonText: {
    color: colors.background,
    fontFamily: fonts.bold,
    fontSize: 16,
  },
  borderedButtonText: {
    color: colors.pure,
  },
});
