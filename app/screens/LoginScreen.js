import React from 'react';
import { Image, StyleSheet } from 'react-native';

import { Formik } from 'formik';
import * as Yup from 'yup';

import AppScreen from '../components/AppScreen';
import AppButton from '../components/AppButton';
import AppFormField from '../components/AppFormField';

const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label('Email'),
    password: Yup.string().required().min(4).label('Password'),
});

const LoginScreen = () => {
    return (
        <AppScreen style={styles.container}>
            <Image style={styles.logo} source={require('../assets/logo-red.png')}/>

            <Formik
                initialValues={{ email: '', password: ''}}
                validationSchema={validationSchema}
                onSubmit={values => console.log(values)}

            >
                {
                    ({ handleSubmit }) => {
                        return (
                            <>
                                <AppFormField
                                    name="email"
                                    icon="email"
                                    placeholder="Email"
                                    keyboardType="email-address"
                                    autoCapitalize="none"
                                    autoCorrect={false}
                                    textContentType="emailAddress"
                                />
                                <AppFormField
                                    name="password"
                                    icon="lock"
                                    placeholder="Password"
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