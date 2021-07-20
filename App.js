import React, { useEffect, useState } from 'react';

import AppScreen from './app/components/AppScreen';
import AccountScreen from './app/screens/AccountScreen';
import WelcomeScreen from './app/screens/WelcomeScreen';
import MessagesScreen from './app/screens/MessagesScreen';
import ListingsScreen from './app/screens/ListingsScreen';
import AppIcon from './app/components/AppIcon';
import ListItem from './app/components/ListItem';
import AppTextInput from './app/components/AppTextInput';
import AppOptionPicker from './app/components/AppOptionPicker';
import LoginScreen from './app/screens/LoginScreen';
import RegisterScreen from './app/screens/RegisterScreen';
import ListingEditScreen from './app/screens/ListingEditScreen';
import AppCard from './app/components/AppCard';
import AppImageInput from './app/components/AppImageInput';

import AppImageInputList from './app/components/AppImageInputList';


const App = () => {
  const [ imageUris, setImageUris ] = useState([]);

  const handleAdd = (uri) => {
    setImageUris([ ...imageUris, uri ]);
  };

  const handleRemove = (uri) => {
    setImageUris(imageUris.filter(imageUri => imageUri !== uri));
  };

  return (
    <AppScreen>
      <AppImageInputList imageUris={imageUris} onAddImage={handleAdd} onRemoveImage={handleRemove}/>
    </AppScreen>
  );
}

export default App;
