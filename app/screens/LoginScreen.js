import React, { useState } from 'react';
import { Image, StyleSheet } from 'react-native';

import AppScreen from '../components/AppScreen';
import AppTextInput from '../components/AppTextInput';
import AppButton from '../components/AppButton';

const LoginScreen = () => {
    const [ email, setEmail ] = useState();
    const [ password, setPassword ] = useState();

    return (
        <AppScreen style={styles.container}>
            <Image style={styles.logo} source={require('../assets/logo-red.png')}/>
            <AppTextInput
                icon="email"
                placeholder="Email"
                keyboardType="email-address"
                onChangeText={(text) => setEmail(text)}
                autoCapitalize="none"
                autoCorrect={false}
                textContentType="emailAddress"
            />
            <AppTextInput
                icon="lock"
                placeholder="Password"
                onChangeText={(text) => setPassword(text)}
                secureTextEntry
                autoCapitalize="none"
                autoCorrect={false}
                textContentType="password"
            />

            <AppButton label="Login" onPress={() => { console.log(email, password)}}/>
        </AppScreen>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
    logo: {
        width: 80,
        height: 80,
        alignSelf: 'center',
        marginTop: 50,
        marginBottom: 20,
    }
});

export default LoginScreen;