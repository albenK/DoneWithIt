import React from 'react';
import { Image, StyleSheet } from 'react-native';

import { Formik } from 'formik';
import * as Yup from 'yup';

import AppScreen from '../components/AppScreen';
import AppText from '../components/AppText';
import AppTextInput from '../components/AppTextInput';
import AppButton from '../components/AppButton';
import AppErrorMessage from '../components/AppErrorMessage';

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
                    ({ handleChange, handleSubmit, errors, setFieldTouched, touched }) => {
                        return (
                            <>
                                <AppTextInput
                                    icon="email"
                                    placeholder="Email"
                                    keyboardType="email-address"
                                    onChangeText={handleChange('email')}
                                    onBlur={() => setFieldTouched('email')}
                                    autoCapitalize="none"
                                    autoCorrect={false}
                                    textContentType="emailAddress"
                                />
                                <AppErrorMessage visible={touched.email} errorMessage={errors.email}/>
                                <AppTextInput
                                    icon="lock"
                                    placeholder="Password"
                                    onChangeText={handleChange('password')}
                                    onBlur={() => setFieldTouched('password')}
                                    secureTextEntry
                                    autoCapitalize="none"
                                    autoCorrect={false}
                                    textContentType="password"
                                />
                                 <AppErrorMessage visible={touched.password} errorMessage={errors.password}/>
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