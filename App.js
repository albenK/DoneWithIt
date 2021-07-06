import React from 'react';

import AppScreen from './app/components/AppScreen';
import AccountScreen from './app/screens/AccountScreen';
import WelcomeScreen from './app/screens/WelcomeScreen';
import MessagesScreen from './app/screens/MessagesScreen';
import ListingsScreen from './app/screens/ListingsScreen';
import AppIcon from './app/components/AppIcon';
import ListItem from './app/components/ListItem';
import AppTextInput from './app/components/AppTextInput';

const App = () => {
  return (
    <AppScreen>
      <AppTextInput icon="email" placeholder="Username"/>
    </AppScreen>
  );
}

export default App;
