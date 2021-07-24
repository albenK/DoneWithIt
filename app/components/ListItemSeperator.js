import React from 'react';
import { View, StyleSheet } from 'react-native';

import APP_COLORS from '../config/colors';

const ListItemSeperator = () => {
    return (
        <View style={styles.seperator}></View>
    );
};

const styles = StyleSheet.create({
    seperator: {
        width: '100%',
        height: 1,
        backgroundColor: APP_COLORS.light,
    }
});

export default ListItemSeperator;