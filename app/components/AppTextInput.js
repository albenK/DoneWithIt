import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

import { MaterialCommunityIcons } from '@expo/vector-icons';

import DEFAULT_STYLES from '../config/styles';

const AppTextInput = ({ icon, ...otherProps }) => {
    return (
        <View style={styles.container}>
            {!!icon && <MaterialCommunityIcons
                name={icon}
                size={20}
                color={DEFAULT_STYLES.colors.medium}
                style={styles.icon}
            />}
            <TextInput style={styles.textInput} { ...otherProps }/>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        padding: 15,
        borderRadius: 25,
        marginVertical: 10,
        backgroundColor: DEFAULT_STYLES.colors.light,
    },
    icon: {
        marginRight: 10,
    },
    textInput: {
        flex: 1,
        ...DEFAULT_STYLES.text,
    }
});

export default AppTextInput;