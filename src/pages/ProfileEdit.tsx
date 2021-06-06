import React, { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  Text,
  View,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  Image,
} from 'react-native';
import { TextInput, RadioButton } from 'react-native-paper';
import { TouchableOpacity } from 'react-native-gesture-handler';
import * as ImagePicker from 'expo-image-picker';
import firebase from 'firebase';
import 'firebase/storage';
import { firebaseConfig } from '../constants/firebase';

import BackButtonWithTitle from '../components/BackButtonWithTitle';
import cloudUpload from '../assets/cloudUpload.png';
import colors from '../constants/colors';
import fonts from '../constants/fonts';
import Button from '../components/Button';

export function ProfileEdit() {
  const [checked, setChecked] = useState('barista');
  const [avatar, setAvatar] = useState('');
  const [uploading, setUploading] = useState(false);

  const InputTheme = {
    colors: {
      text: colors.pure,
      placeholder: colors.cappuccino,
      primary: colors.pure,
      secondary: colors.cappuccino,
    },
  };
  // pedindo permissão da camera
  useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const { status } =
          await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
          alert('Nós precisamos da permissão da sua câmera!');
        }
      }
    })();
  }, []);

  async function pickImage() {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 4],
      quality: 1,
    });
    console.log(result);

    if (!result.cancelled) {
      setAvatar(result.uri);
    }
  }

  async function uploadImage() {
    const response = await fetch(avatar);
    const blob = await response.blob();

    const refLocation = firebase
      .storage()
      .ref()
      .child(new Date().toISOString());
    const snapshot = refLocation.put(blob as Blob);

    snapshot.on(
      firebase.storage.TaskEvent.STATE_CHANGED,
      () => {
        setUploading(true);
        console.log('foi');
      },
      (error: any) => {
        setUploading(false);
        console.log(error);
      },
      () => {
        setUploading(false);
        snapshot.snapshot.ref.getDownloadURL().then((url) => {
          console.log('download,', url);
          return url;
        });
      }
    );
  }
  // Issue SetTimeLocation https://github.com/facebook/react-native/issues/12981
  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.wrapper}
      >
        <BackButtonWithTitle title='editar perfil' />

        <View>
          <Text style={styles.title}>qual o seu perfil?</Text>
          <RadioButton.Group
            onValueChange={(newValue) => setChecked(newValue)}
            value={checked}
          >
            <View style={styles.radio}>
              <RadioButton
                value='barista'
                color={colors.mocha}
                uncheckedColor={colors.mocha}
              />
              <Text style={styles.text}>barista</Text>
            </View>
            <View style={styles.radio}>
              <RadioButton
                value='lover'
                color={colors.mocha}
                uncheckedColor={colors.mocha}
              />
              <Text style={styles.text}>lover</Text>
            </View>
          </RadioButton.Group>
        </View>

        <View>
          <View style={styles.basicInfo}>
            <TouchableOpacity
              style={styles.avatarPlaceholder}
              onPress={pickImage}
            >
              <Image
                source={
                  avatar.length > 4
                    ? { uri: avatar }
                    : cloudUpload
                }
                style={
                  avatar.length > 4
                    ? styles.avatarImage
                    : styles.avatarIcon
                }
              />
            </TouchableOpacity>
            <View style={styles.inputFullName}>
              <TextInput
                underlineColor={colors.cappuccino}
                theme={InputTheme}
                style={styles.input}
                label='nome'
              />
              <TextInput
                underlineColor={colors.cappuccino}
                theme={InputTheme}
                style={styles.input}
                label='sobrenome'
              />
            </View>
          </View>
          <TextInput
            style={styles.input}
            underlineColor={colors.cappuccino}
            theme={InputTheme}
            label='e-mail'
          />
          <TextInput
            style={styles.inputBio}
            underlineColor={colors.cappuccino}
            theme={InputTheme}
            label='escreva sua bio'
            multiline
            numberOfLines={6}
          />
          <Text
            style={[
              styles.disclaimer,
              checked === 'lover' && styles.disclaimerDisplay,
            ]}
          >
            * como barista seu perfil passará por uma validação
            da moderação
          </Text>
          <Button title='aplicar' onPress={uploadImage} />
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    paddingHorizontal: 40,
    flex: 1,
  },
  wrapper: {
    justifyContent: 'flex-end',
  },
  title: {
    color: colors.pure,
    fontSize: 16,
    fontFamily: fonts.bold,
    marginBottom: 10,
  },
  radio: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    fontSize: 14,
    color: colors.mocha,
    fontFamily: fonts.medium,
  },
  avatarPlaceholder: {
    backgroundColor: colors.cappuccino,
    width: 80,
    height: 80,
    borderRadius: 80,
    marginRight: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarIcon: {
    width: 40,
    height: 40,
  },
  avatarImage: {
    width: 80,
    height: 80,
    borderRadius: 80,
  },
  basicInfo: {
    flexDirection: 'row',
    flexWrap: 'nowrap',
    alignItems: 'center',
  },
  inputFullName: {
    width: '68%',
  },
  input: {
    backgroundColor: colors.background,
  },

  inputBio: {
    backgroundColor: colors.latte,
    marginTop: 20,
  },
  disclaimer: {
    fontFamily: fonts.medium,
    fontSize: 9.9,
    color: colors.cappuccino,
    marginTop: 10,
  },
  disclaimerDisplay: {
    display: 'none',
  },
});
