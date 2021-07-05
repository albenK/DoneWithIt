import React from 'react';
import { View, StyleSheet, Image, TouchableHighlight } from 'react-native';

import Swipeable from 'react-native-gesture-handler/Swipeable';

import AppText from './AppText';
import COLORS from '../config/colors';

const ListItem = ({ image, title, subTitle, IconComponent, onPress, renderRightActions }) => {
    return (
        <Swipeable friction={2} rightThreshold={20} renderRightActions={renderRightActions}>
            <TouchableHighlight underlayColor={COLORS.light} onPress={onPress}>
                <View style={styles.container}>
                    { IconComponent }
                    { !!image && <Image style={styles.image} source={image} />}
                    <View style={styles.detailsContainer}>
                        <AppText style={styles.title}>{title}</AppText>
                        { !!subTitle && <AppText style={styles.subTitle}>{subTitle}</AppText>}
                    </View>
                </View>
            </TouchableHighlight>
        </Swipeable>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 15,
        backgroundColor: COLORS.white,
    },
    detailsContainer: {
        justifyContent: 'center',
        marginLeft: 10,
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 35,
    },
    subTitle: {
        color: COLORS.medium,
    },
    title: {
        fontWeight: '500'
    }
});

export default ListItem;