import React from 'react';

import WelcomeScreen from './app/screens/WelcomeScreen';
import MessagesScreen from './app/screens/MessagesScreen';
import AppScreen from './app/components/AppScreen';
import AppIcon from './app/components/AppIcon';
import ListItem from './app/components/ListItem';

const App = () => {
  return (
    <AppScreen>
      <ListItem
        title="Hello"
        
        ImageComponent={<AppIcon name="email" size={40}/>}
      />
    </AppScreen>
  );
}

export default App;
