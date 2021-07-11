import React from 'react';
import { StyleSheet } from 'react-native';

import AppText from '../AppText';

const AppErrorMessage = ({ visible, errorMessage }) => {
    if (!errorMessage || !visible) {
        return null; 
    }

    return (
        <AppText style={styles.text}>{errorMessage}</AppText>
    );
};

const styles = StyleSheet.create({
    text: {
        color: 'red',
    } 
});

export default AppErrorMessage;