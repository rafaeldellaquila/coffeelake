import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Dots from 'react-native-dots-pagination';
import colors from '../styles/colors';
import BordelessButton from '../components/BordelessButton';
import fonts from '../styles/fonts';
import { BorderlessButton } from 'react-native-gesture-handler';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/core';

export function Apresentation() {
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
      <View style={styles.apresentation}>
        <Text style={styles.title}>
          aprenda sobre{'\n'}café de forma descomplicada{' '}
        </Text>
        <Text style={styles.text}>
          aqui você pode aprender muuuito sobre como fazer um bom
          café, grãos e receitas para melhorar sua experiência no
          dia a dia e de quebra, economizar uma grana!
        </Text>
        <Text style={styles.smallText}>
          e faça os melhores cursos dos melhores Baristas!
        </Text>
      </View>
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
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 60,
    marginHorizontal: 40,
  },
  button: {
    width: 24,
    height: 24,
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

  contentButton: {
    alignItems: 'center',
    marginTop: 120,
    marginBottom: 40,
  },
});
