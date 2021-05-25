import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import colors from '../styles/colors';
import fonts from '../styles/fonts';

export default function AboutUs() {
  return (
    <View>
      <Text style={styles.title}>
        aprenda sobre{'\n'}café de forma descomplicada
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
  );
}

const styles = StyleSheet.create({
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
