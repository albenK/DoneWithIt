import React from 'react';
import { Image, StyleSheet } from 'react-native';

import * as Yup from 'yup';

import AppScreen from '../components/AppScreen';
import AppSubmitButton from '../components/AppSubmitButton';
import AppFormField from '../components/AppFormField';
import AppForm from '../components/AppForm';

const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label('Email'),
    password: Yup.string().required().min(4).label('Password'),
});

const LoginScreen = () => {
    return (
        <AppScreen style={styles.container}>
            <Image style={styles.logo} source={require('../assets/logo-red.png')}/>

            <AppForm
                initialValues={{ email: '', password: ''}}
                validationSchema={validationSchema}
                onSubmit={values => console.log(values)}
            >
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
                <AppSubmitButton label="Login"/>
            </AppForm>
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