import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';

import COLORS from '../config/colors';

const AppButton = ({ label, color = "primary", onPress }) => {
    return (
        <TouchableOpacity style={[styles.button, { backgroundColor: COLORS[color]}]} onPress={onPress}>
            <Text style={styles.text}>{label}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        padding: 15,
        backgroundColor: COLORS.primary,
        borderRadius: 25,
        marginVertical: 10,
    },
    text: {
        fontSize: 18,
        textTransform: 'uppercase',
        fontWeight: 'bold',
        color: COLORS.white
    }
});

export default AppButton;