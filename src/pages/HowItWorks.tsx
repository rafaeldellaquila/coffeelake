import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/core';
import { BorderlessButton } from 'react-native-gesture-handler';

import BordelessButton from '../components/BordelessButton';
import colors from '../constants/colors';
import AboutUs from '../components/AboutUs';
import ForWhom from '../components/ForWhom';
import StartNow from '../components/StartNow';

export function HowItWorks() {
  const [internalPage, setInternalPage] = useState(0);
  const navigation = useNavigation();
  let content;
  let nextButton;

  function handleBackButton() {
    if (internalPage === 0) {
      return navigation.goBack();
    } else {
      return setInternalPage(internalPage - 1);
    }
  }

  function handleNextButton() {
    setInternalPage(internalPage + 1);
  }

  if (internalPage === 0) {
    content = <AboutUs />;
    nextButton = (
      <BordelessButton
        title='próximo'
        onPress={handleNextButton}
      />
    );
  } else if (internalPage === 1) {
    content = <ForWhom />;
    nextButton = (
      <BordelessButton
        title='próximo'
        onPress={handleNextButton}
      />
    );
  } else if (internalPage === 2) {
    content = <StartNow />;
    nextButton;
  } else {
    navigation.navigate('Register');
  }

  return (
    <SafeAreaView style={styles.container}>
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
      {content}
      <View style={styles.contentButton}>{nextButton}</View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 40,
    marginTop: 40,
    justifyContent: 'space-evenly',
  },
  button: {
    width: 24,
    height: 24,
  },
  contentButton: {
    alignItems: 'center',
    marginTop: 40,
    marginBottom: 20,
  },
});
