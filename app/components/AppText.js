import React from 'react';
import { Text, StyleSheet, Platform } from 'react-native';

const AppText = ({ children, style }) => {
    return (
        <Text style={[styles.text, style]}>{children}</Text>
    );
};

const styles = StyleSheet.create({
    text: {
       fontSize: 18,
       ...Platform.select({
           android: {
               fontFamily: 'Roboto',
           },
           ios: {
               fontFamily: 'Avenir',
           }
       }),
    }
});

export default AppText;