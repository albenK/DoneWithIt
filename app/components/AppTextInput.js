import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

import { MaterialCommunityIcons } from '@expo/vector-icons';

import DEFAULT_STYLES from '../config/styles';

const AppTextInput = ({ icon, width = '100%', ...otherProps }) => {
    return (
        <View style={[styles.container, { width }]}>
            {!!icon && <MaterialCommunityIcons
                name={icon}
                size={20}
                color={DEFAULT_STYLES.APP_COLORS.medium}
                style={styles.icon}
            />}
            <TextInput
                placeholderTextColor={DEFAULT_STYLES.APP_COLORS.medium}
                style={styles.textInput} { ...otherProps }
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 15,
        borderRadius: 25,
        marginVertical: 10,
        backgroundColor: DEFAULT_STYLES.APP_COLORS.light,
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