import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import AppIcon from '../components/AppIcon';
import APP_COLORS from '../config/colors';

const NewListingButton = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <AppIcon name="plus-circle" size={60} backgroundColor={APP_COLORS.primary}/>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: APP_COLORS.white,
    bottom: 20,
    borderRadius: 40,
    height: 80,
    justifyContent: 'center',
    width: 80,
  }
});

export default NewListingButton;