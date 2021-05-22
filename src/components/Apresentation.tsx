import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import colors from '../styles/colors';
import fonts from '../styles/fonts';

interface ApresentationProps {
  title: string;
  text: string;
  smallText?: string;
}

export function Apresentation({
  title,
  text,
  smallText,
}: ApresentationProps) {
  return (
    <View style={styles.apresentation}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.text}>{text}</Text>
      <Text style={styles.smallText}>{smallText}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 60,
    marginHorizontal: 40,
  },
  apresentation: {
    marginTop: 40,
  },
  title: {
    fontFamily: fonts.bold,
    fontSize: 25.89,
    lineHeight: 29,
    color: colors.pure,
    marginBottom: 20,
  },
  text: {
    fontFamily: fonts.medium,
    fontSize: 16,
    lineHeight: 28,
    color: colors.pure,
    marginBottom: 20,
  },
  smallText: {
    fontFamily: fonts.bold,
    fontSize: 12,
    color: colors.pure,
  },
});
