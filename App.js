// Openning Android Simulator From Command Line
// ```
// >cd C:\Users\cardosm6\Appdata\local\Android\Sdk\Emulator
// >emulator -list-avds
// >emulator -avd Pixel_3a_API_28
// ```
// On a new terminal run `yarn start`
// On the same terminal type `a` to open Expo on the Android simulator

import React from 'react';
import { StyleSheet, View } from 'react-native';
import Header from './components/Header';
import StartGameScreen from './screens/StartGameScreen';

export default function App() {
  return (
    <View style={styles.screen}>
      <Header title="The Guess A Number Game"/>
      <StartGameScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
