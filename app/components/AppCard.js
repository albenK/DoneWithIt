import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';

import AppText from './AppText';

import APP_COLORS from '../config/colors';

const AppCard = ({ title, subTitle, imageUrl, onPress }) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.card}>
                <Image style={styles.image} source={{ uri: imageUrl }} />
                <View style={styles.detailsContainer}>
                    <AppText style={styles.title} numberOfLines={1}>{title}</AppText>
                    <AppText style={styles.subTitle} numberOfLines={2}>{subTitle}</AppText>
                </View>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    card: {
        borderRadius: 15,
        backgroundColor: APP_COLORS.white,
        marginBottom: 20,
        overflow: 'hidden'
    },
    detailsContainer: {
        padding: 20,
    },
    image: {
        width: '100%',
        height: 200,
    },
    subTitle: {
        color: APP_COLORS.secondary,
        fontWeight: 'bold',
    },
    title: {
        marginBottom: 20,
    }
});


export default AppCard;