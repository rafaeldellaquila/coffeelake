import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import colors from '../constants/colors';
import fonts from '../constants/fonts';
import facebook_logo from '../assets/facebook_logo.png';
import gmail_logo from '../assets/gmail_logo.png';
import instagram_logo from '../assets/instagram_logo.png';
import twitter_logo from '../assets/twitter_logo.png';

export default function SocialLogin() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>use sua rede social:</Text>
      <View style={styles.logos}>
        <Image style={styles.logo} source={facebook_logo} />
        <Image style={styles.logo} source={twitter_logo} />
        <Image style={styles.logo} source={instagram_logo} />
        <Image style={styles.logo} source={gmail_logo} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: colors.pure,
    fontFamily: fonts.medium,
    fontSize: 16,
    marginBottom: 20,
  },
  logos: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    marginHorizontal: 15,
  },
});
