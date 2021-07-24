import React from 'react';
import { StyleSheet } from 'react-native';

import { MaterialCommunityIcons } from '@expo/vector-icons';
import APP_COLORS from '../config/colors';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

const ListItemDeleteAction = ({ onPress }) => {
    return (
        <TouchableWithoutFeedback style={styles.container} onPress={onPress}>
            <MaterialCommunityIcons name="trash-can" color={APP_COLORS.white} size={35}/>
        </TouchableWithoutFeedback>
    );
};

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 70,
        height: '100%',
        backgroundColor: APP_COLORS.danger,
    }
});

export default ListItemDeleteAction;