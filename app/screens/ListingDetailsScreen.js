import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

import AppText from '../components/AppText';
import ListItem from '../components/ListItem';
import APP_COLORS from '../config/colors';

const ListingDetailsScreen = ({ route }) => {
    /* route prop is being passed in here by react-navigation.
    */
    const listing = route.params.item;

    return (
        <View>
            <Image style={styles.image} source={listing.image}/>
            <View style={styles.detailsContainer}>
                <AppText style={styles.title}>{listing.title}</AppText>
                <AppText style={styles.price}>{`\$${listing.price}`}</AppText>
                <View style={styles.userContainer}>
                    <ListItem
                        image={require('../assets/mosh.jpg')}
                        title="Mosh Hamedani"
                        subTitle="5 Listings"
                    />
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    detailsContainer: {
        padding: 20,
    },
    image: {
        width: '100%',
        height: 300,
    },
    price: {
        marginVertical: 10,
        color: APP_COLORS.secondary,
        fontWeight: 'bold'
    },
    title: {
        fontSize: 24,
        fontWeight: '500'
    },
    userContainer: {
        marginVertical: 40,
    }
});

export default ListingDetailsScreen;