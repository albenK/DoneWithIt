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
import { Button } from 'react-native';

import * as ImagePicker from 'expo-image-picker';

const App = () => {
  const [ imageUri, setImageUri ] = useState();

  const selectImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync();
    setImageUri(result.uri);
  };
  return (
    <AppScreen>
      <Button title="Select Image" onPress={selectImage}/>
      <AppImageInput imageUri={imageUri} onChangeImage={setImageUri}/>
    </AppScreen>
  );
}

export default App;
