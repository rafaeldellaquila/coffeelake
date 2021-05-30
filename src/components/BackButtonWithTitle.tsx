import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import colors from '../styles/colors';
import fonts from '../styles/fonts';
import { useNavigation } from '@react-navigation/core';

interface BackButtonWithTitleProps {
  title: string;
}

export default function BackButtonWithTitle({
  title,
}: BackButtonWithTitleProps) {
  const navigation = useNavigation();
  function handleBackButton() {
    return navigation.goBack();
  }

  return (
    <View>
      <BorderlessButton
        style={styles.button}
        onPress={handleBackButton}
      >
        <MaterialCommunityIcons
          name='arrow-left'
          size={24}
          color={colors.pure}
        />
      </BorderlessButton>
      <Text style={styles.title}> {title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    width: 24,
    height: 24,
    marginBottom: 20,
  },
  title: {
    color: colors.pure,
    fontFamily: fonts.bold,
    fontSize: 16,
    marginBottom: 20,
  },
});
