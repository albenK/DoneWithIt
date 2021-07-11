import React from 'react';
import { StyleSheet } from 'react-native';

import * as Yup from 'yup';

import AppScreen from '../components/AppScreen';
import { AppForm, AppFormField, AppSubmitButton } from '../components/forms';

const validationSchema = Yup.object().shape({
    name: Yup.string().required().label('Name'),
    email: Yup.string().required().email().label('Email'),
    password: Yup.string().required().min(4).label('Password'),
});

const RegisterScreen = () => {
    return (
        <AppScreen style={styles.container}>
            <AppForm
                initialValues={{ name: '', email: '', password: ''}}
                validationSchema={validationSchema}
                onSubmit={values => console.log(values)}
            >
                <AppFormField
                    name="name"
                    icon="face"
                    placeholder="Name"
                    autoCapitalize="words"
                    autoCorrect={false}
                    textContentType="name"
                />

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
                <AppSubmitButton label="Register"/>
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

export default RegisterScreen;