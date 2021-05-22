import React from 'react';

import colors from '../styles/colors';

import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/core';

export default function BackButton() {
  const navigation = useNavigation();

  function handleBackButton() {
    navigation.goBack();
  }
  return (
    <MaterialCommunityIcons
      name='arrow-left'
      size={24}
      color={colors.pure}
      onPress={handleBackButton}
    />
  );
}
