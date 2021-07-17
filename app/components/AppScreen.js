import React from 'react';
import { SafeAreaView, View, StyleSheet } from 'react-native';

import Constants from 'expo-constants';

const AppScreen = ({ children, style }) => {
    return (
        <SafeAreaView style={[ styles.screen, style ]}>
            <View style={[styles.childrenContainer, style]}>
                { children }
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        paddingTop: Constants.statusBarHeight,
    },
    childrenContainer: {
        flex: 1,
    }
});

export default AppScreen;