import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';

import AppIcon from './AppIcon';
import AppText from './AppText';

const AppCategoryPickerItem = ({ item, onPress }) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={onPress}>
            <AppIcon backgroundColor={item.backgroundColor} name={item.icon} size={80}/>
            <AppText style={styles.label}>{ item.label }</AppText>
        </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        paddingHorizontal: 15,
        paddingVertical: 15,
        width: '33%',
    },
    label: {
        marginTop: 5,
        textAlign: 'center',
    }
});

export default AppCategoryPickerItem;