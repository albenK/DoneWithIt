import React from 'react';
import { View, StyleSheet } from 'react-native';

import COLORS from '../config/colors';

const ListItemSeperator = () => {
    return (
        <View style={styles.seperator}></View>
    );
};

const styles = StyleSheet.create({
    seperator: {
        width: '100%',
        height: 1,
        backgroundColor: COLORS.light,
    }
});

export default ListItemSeperator;