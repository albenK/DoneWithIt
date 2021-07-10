import React from 'react';

import AppScreen from './app/components/AppScreen';
import AccountScreen from './app/screens/AccountScreen';
import WelcomeScreen from './app/screens/WelcomeScreen';
import MessagesScreen from './app/screens/MessagesScreen';
import ListingsScreen from './app/screens/ListingsScreen';
import AppIcon from './app/components/AppIcon';
import ListItem from './app/components/ListItem';
import AppTextInput from './app/components/AppTextInput';
import AppOptionPicker from './app/components/AppOptionPicker';

const App = () => {
  return (
    <AppScreen>
      <AppOptionPicker icon="apps" placeholder="Category"/>
      <AppTextInput icon="email" placeholder="Username"/>
    </AppScreen>
  );
}

export default App;
