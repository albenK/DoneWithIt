import React from 'react';
import { View, TextInput, Platform, StyleSheet} from 'react-native';

import { MaterialCommunityIcons } from '@expo/vector-icons';
import COLORS from '../config/colors';

const AppTextInput = ({ icon, ...otherProps }) => {
    return (
        <View style={styles.container}>
            {!!icon && <MaterialCommunityIcons
                name={icon}
                size={20}
                color={COLORS.medium}
                style={styles.icon}
            />}
            <TextInput style={styles.textInput} { ...otherProps }/>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: '100%',
        padding: 15,
        borderRadius: 25,
        marginVertical: 10,
        backgroundColor: COLORS.light,
    },
    icon: {
        marginRight: 10,
    },
    textInput: {
        flex: 1,
        fontSize: 18,
        color: COLORS.dark,
        ...Platform.select({
            android: {
                fontFamily: 'Roboto',
            },
            ios: {
                fontFamily: 'Avenir',
            }
        }),
    }
});

export default AppTextInput;