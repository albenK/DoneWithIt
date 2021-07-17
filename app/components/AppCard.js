import React from 'react';
import { View, Image, StyleSheet} from 'react-native';

import AppText from './AppText';

import COLORS from '../config/colors';

const AppCard = ({ title, subTitle, image }) => {
    return (
        <View style={styles.card}>
            <Image style={styles.image} source={image} />
            <View style={styles.detailsContainer}>
                <AppText style={styles.title} numberOfLines={1}>{title}</AppText>
                <AppText style={styles.subTitle} numberOfLines={2}>{subTitle}</AppText>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        borderRadius: 15,
        backgroundColor: COLORS.white,
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
        color: COLORS.secondary,
        fontWeight: 'bold',
    },
    title: {
        marginBottom: 20,
    }
});


export default AppCard;