import React from 'react';
import { View, StyleSheet, Modal } from 'react-native';

import AppText from '../components/AppText';

const UploadProgressScreen = ({ progress = 0, isVisible = false }) => {
  return (
    <Modal visible={isVisible}>
        <View style={styles.container}>
            <AppText>{progress * 100}%</AppText>
        </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
      alignItems: 'center',
      flex: 1,
      justifyContent: 'center',
  }
});

export default UploadProgressScreen;