import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import colors from '../styles/colors';
import fonts from '../styles/fonts';

export default function ForWhom() {
  return (
    <View>
      <Text style={styles.title}>se você é um lover</Text>
      <Text style={styles.text}>
        crie seu perfil e aproveite o aprendizado e as melhores
        receitas, apresentadas pelos melhores Baristas.
      </Text>
      <Text style={styles.title}>se você é barista</Text>
      <Text style={styles.text}>
        compartilhe seu conhecimento, suas melhores receitas,
        públique e divulgue seus cursos para o público certo!
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
});
