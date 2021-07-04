import React from 'react';
import { StyleSheet } from 'react-native';

import WelcomeScreen from './app/screens/WelcomeScreen';

const App = () => {
  return (
    <WelcomeScreen/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
