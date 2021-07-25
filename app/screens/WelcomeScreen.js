import React from 'react';
import { ImageBackground, View, Image, Text, StyleSheet } from 'react-native';

import AppButton from '../components/AppButton';
import NAVIGATION_ROUTES from '../navigation/routes';

const WelcomeScreen = ({ navigation }) => {
    return (
        <ImageBackground blurRadius={10} style={styles.background} source={require('../assets/background.jpg')}>
            <View style={styles.logoContainer}>
                <Image style={styles.logo} source={require('../assets/logo-red.png')}/>
                <Text style={styles.tagline}>Sell What You Don't Need</Text>
            </View>
            <View style={styles.buttonsContainer}>
                <AppButton label="Login" onPress={() => navigation.navigate(NAVIGATION_ROUTES.LOGIN_SCREEN)}/>
                <AppButton label="Register" color="secondary" onPress={() => navigation.navigate(NAVIGATION_ROUTES.REGISTER_SCREEN)}/>
            </View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    buttonsContainer: {
        width: '100%',
        padding: 20,
    },
    logo: {
        width: 100,
        height: 100,
    },
    logoContainer: {
        alignItems: 'center',
        position: 'absolute',
        top: 70,
    },
    tagline: {
        fontSize: 25,
        fontWeight: '600',
        paddingVertical: 20,
    }
});

export default WelcomeScreen;