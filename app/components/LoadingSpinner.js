import React from 'react';
import LottieView from 'lottie-react-native';

const LoadingSpinner = ({ visible = false }) => {
    if (!visible) {
        return null;
    }

    return (
        <LottieView
            autoPlay
            loop
            source={require('../assets/animations/loadingSpinner.json')}
        />
    );
}

export default LoadingSpinner;