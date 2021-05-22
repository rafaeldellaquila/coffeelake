import React, { useState } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Dots from 'react-native-dots-pagination';
import colors from '../styles/colors';
import BackButton from '../components/BackButton';
import BordelessButton from '../components/BordelessButton';
import { Apresentation } from '../components/Apresentation';
import imgVerticalLogo from '../assets/coffeelake_vertical.png';
import fonts from '../styles/fonts';
import Button from '../components/Button';

export function HowItWorks() {
  const [internalPage, setInternalPage] = useState(0);

  if (internalPage === 0) {
    return (
      <SafeAreaView style={styles.container}>
        <BackButton />
        <Apresentation
          title={`aprenda sobre ${'\n'}café  de forma descomplicada `}
          text='aqui você pode aprender muuuito sobre como fazer um bom
        café, grãos e receitas para melhorar sua experiência no
        dia a dia e de quebra, economizar uma grana! '
          smallText='e faça os melhores cursos dos melhores Baristas!'
        />
        <View style={styles.contentButton}>
          <BordelessButton
            title='próximo'
            onPress={() => {
              setInternalPage(internalPage + 1);
            }}
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
        <BackButton />
        <Apresentation
          title='se você é um lover'
          text='crie seu perfil e aproveite
          o aprendizado e as melhores receitas, apresentadas pelos melhores Baristas.'
        />
        <Apresentation
          title='se você é Barista'
          text='compartilhe seu conhecimento, suas melhores receitas, públique
          e divulgue seus cursos para
          o público certo!'
        />
        <View style={styles.contentButtonInternal}>
          <BordelessButton
            title='próximo'
            onPress={() => {
              setInternalPage(internalPage + 1);
            }}
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
        <BackButton />
        <Image source={imgVerticalLogo} style={styles.image} />
        <Text style={styles.title}>
          aproveite{'\n'}o melhor do café com a gente!
        </Text>

        <View style={styles.contentButtonLogin}>
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
    marginTop: 60,
    marginHorizontal: 40,
  },

  contentButton: {
    alignItems: 'center',
    marginTop: 120,
    marginBottom: 40,
  },
  contentButtonInternal: {
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 40,
  },
  image: {
    width: 217,
    height: 129,
    marginTop: 40,
    marginBottom: 40,
  },
  title: {
    color: colors.pure,
    fontSize: 41,
    lineHeight: 43,
    fontFamily: fonts.bold,
  },
  contentButtonLogin: {
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 20,
  },
});
