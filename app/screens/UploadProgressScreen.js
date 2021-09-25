import React from 'react';
import { View, StyleSheet, Modal } from 'react-native';
import ProgressBar from 'react-native-progress/Bar'
import LottieView from 'lottie-react-native';

import APP_COLORS from '../config/colors';

const UploadProgressScreen = ({ progress = 0, isVisible = false, onDone }) => {
  return (
    <Modal visible={isVisible}>
      <View style={styles.container}>
        { progress < 1 ? 
          (<ProgressBar progress={progress} color={APP_COLORS.primary} width={200}/>)
          : (<LottieView
              style={styles.doneAnimation}
              source={require('../assets/animations/done.json')}
              autoPlay
              loop={false}
              onAnimationFinish={onDone}
            />)
        }
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  doneAnimation: {
    width: 150,
  }
});

export default UploadProgressScreen;