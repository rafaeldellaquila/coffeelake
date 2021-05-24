import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/core';
import { BorderlessButton } from 'react-native-gesture-handler';
import Dots from 'react-native-dots-pagination';
import BordelessButton from '../components/BordelessButton';
import colors from '../styles/colors';

import { AboutUs } from '../components/AboutUs';
import { ForWhom } from '../components/ForWhom';
import { StartNow } from '../components/StartNow';
import Button from '../components/Button';

export function HowItWorks() {
  const [internalPage, setInternalPage] = useState(0);
  const navigation = useNavigation();

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
        <AboutUs />
        <View style={styles.contentButton}>
          <BordelessButton
            title='próximo'
            onPress={handleNextButton}
          />
        </View>
        <Dots
          length={3}
          active={internalPage}
          passiveColor={colors.mocha}
          activeColor={colors.pure}
          marginHorizontal={10}
        />
      </SafeAreaView>
    );
  } else if (internalPage === 1) {
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
        <ForWhom />
        <View style={styles.contentButton}>
          <BordelessButton
            title='próximo'
            onPress={handleNextButton}
          />
        </View>
        <Dots
          length={3}
          active={internalPage}
          passiveColor={colors.mocha}
          activeColor={colors.pure}
          marginHorizontal={10}
        />
      </SafeAreaView>
    );
  } else if (internalPage === 2) {
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
        <StartNow />
        <View style={styles.contentButton}>
          <Button title='cadastrar' />
          <Button title='já tenho login' bordered={true} />
        </View>
        <Dots
          length={3}
          active={internalPage}
          passiveColor={colors.mocha}
          activeColor={colors.pure}
          marginHorizontal={10}
        />
      </SafeAreaView>
    );
  }
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
