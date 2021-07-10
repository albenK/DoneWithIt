import React from 'react';
import { Image, StyleSheet } from 'react-native';

import { Formik } from 'formik';

import AppScreen from '../components/AppScreen';
import AppTextInput from '../components/AppTextInput';
import AppButton from '../components/AppButton';

const LoginScreen = () => {
    return (
        <AppScreen style={styles.container}>
            <Image style={styles.logo} source={require('../assets/logo-red.png')}/>

            <Formik
                initialValues={{ email: '', password: ''}}
                onSubmit={values => console.log(values)}

            >
                {
                    ({ handleChange, handleSubmit }) => {
                        return (
                            <>
                                <AppTextInput
                                    icon="email"
                                    placeholder="Email"
                                    keyboardType="email-address"
                                    onChangeText={handleChange('email')}
                                    autoCapitalize="none"
                                    autoCorrect={false}
                                    textContentType="emailAddress"
                                />
                                <AppTextInput
                                    icon="lock"
                                    placeholder="Password"
                                    onChangeText={handleChange('password')}
                                    secureTextEntry
                                    autoCapitalize="none"
                                    autoCorrect={false}
                                    textContentType="password"
                                />
                                <AppButton
                                    label="Login"
                                    onPress={handleSubmit}
                                />
                            </>
                        );
                    }
                }
            </Formik>
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