import React, { useEffect } from 'react';
import { View, StyleSheet, Image, TouchableOpacity, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import COLORS from '../config/colors';

const AppImageInput = ({ imageUri, onChangeImage }) => {

  useEffect(() => {
    askPermission();
  },[]);

  const askPermission = async () => {
    const result = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!result.granted) {
      alert('You need to enable permissions to upload photos. Please go to your settings and enable photo access for this app.');
    }
  };

  const selectImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 0.5, // value must be between 0 - 1
      });
      if (!result.cancelled) {
        onChangeImage(result.uri);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handlePress = () => {
    // If no imageUri prop was provided, select an image.
    if (!imageUri) {
      selectImage();
    } else {
      Alert.alert('Delete',
        'Are you sure you want to delete this image?',
        [
          { text: 'Yes', onPress: () => onChangeImage(null)},
          { text: 'No' }
        ]
      );
    }
  };
  return (
    <TouchableOpacity onPress={handlePress}>
      <View style={styles.container}>
        { !imageUri && <MaterialCommunityIcons color={COLORS.medium} name="camera" size={40}/> }
        { imageUri && <Image style={styles.image} source={{ uri: imageUri }}/>}
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: COLORS.light,
    borderRadius: 15,
    height: 100,
    justifyContent: 'center',
    overflow: 'hidden',
    width: 100,
  },
  image: {
    width: '100%',
    height: '100%',
  }
});

export default AppImageInput;