import React from 'react';
import { View, StyleSheet, Modal } from 'react-native';
import ProgressBar from 'react-native-progress/Bar'

import APP_COLORS from '../config/colors';

const UploadProgressScreen = ({ progress = 0, isVisible = false }) => {
  return (
    <Modal visible={isVisible}>
      <View style={styles.container}>
        <ProgressBar progress={progress} color={APP_COLORS.primary} width={200}/>
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