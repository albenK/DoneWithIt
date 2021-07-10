import React, { useState } from 'react';

import AppScreen from './app/components/AppScreen';
import AccountScreen from './app/screens/AccountScreen';
import WelcomeScreen from './app/screens/WelcomeScreen';
import MessagesScreen from './app/screens/MessagesScreen';
import ListingsScreen from './app/screens/ListingsScreen';
import AppIcon from './app/components/AppIcon';
import ListItem from './app/components/ListItem';
import AppTextInput from './app/components/AppTextInput';
import AppOptionPicker from './app/components/AppOptionPicker';

const CATEGORIES = [
  { label: 'Furniture', value: 0 },
  { label: 'Clothing', value: 1 },
  { label: 'Cameras', value: 2 }
];

const App = () => {
  const [ category, setCategory ] = useState(CATEGORIES[2]);
  return (
    <AppScreen>
      <AppOptionPicker selectedItem={category} onSelectItem={(item) => setCategory(item)} items={CATEGORIES} icon="apps" placeholder="Category"/>
      <AppTextInput icon="email" placeholder="Username"/>
    </AppScreen>
  );
}

export default App;
