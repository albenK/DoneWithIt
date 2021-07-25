import React from 'react';
import { FlatList, Platform, StyleSheet } from 'react-native';

import AppScreen from '../components/AppScreen';
import AppCard from '../components/AppCard';

import APP_COLORS from '../config/colors';

const LISTINGS = [
    {
        id: 1,
        title: 'Red jacket for sale',
        price: 100,
        image: require('../assets/jacket.jpg'),
    },
    {
        id: 2,
        title: 'Couch in great condition',
        price: 1000,
        image: require('../assets/couch.jpg'),
    }
];

const ListingsScreen = ({ navigation }) => {
    return (
        <AppScreen style={styles.screen}>
            <FlatList
                data={LISTINGS}
                keyExtractor={item => item.id.toString()}
                renderItem={({ item }) => {
                    return (
                        <AppCard
                            title={item.title}
                            subTitle={`$${item.price}`}
                            image={item.image}
                            onPress={() => navigation.navigate('ListingDetailScreen', { item })}
                        />
                    );
                }}
            />
        </AppScreen>
    );
};

const styles = StyleSheet.create({
    screen: {
        paddingHorizontal: 10,
        backgroundColor: APP_COLORS.light,
    }
});

export default ListingsScreen;