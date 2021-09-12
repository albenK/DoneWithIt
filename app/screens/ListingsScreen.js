import React, { useEffect } from 'react';
import { FlatList, StyleSheet } from 'react-native';

import AppScreen from '../components/AppScreen';
import AppText from '../components/AppText';
import AppCard from '../components/AppCard';
import LISTINGS_API from '../api/listings';
import APP_COLORS from '../config/colors';
import NAVIGATION_ROUTES from '../navigation/routes';
import AppButton from '../components/AppButton';
import LoadingSpinner from '../components/LoadingSpinner';
import useApi from '../hooks/useApi';

const ListingsScreen = ({ navigation }) => {
    const { data: listings, hasError, isLoading, request: loadListings } = useApi(LISTINGS_API.getListings);

    useEffect(() => {
        loadListings();
    }, []);

    if (isLoading) {
        return (
            <AppScreen style={styles.screen}>
                <LoadingSpinner visible/>
            </AppScreen>
        );
    }

    if (hasError) {
        return (
            <AppScreen style={[styles.screen, { justifyContent: 'center', alignItems: 'center'}]}>
                <AppText>Couldn't retrieve the listings.</AppText>
                <AppButton label="Retry" onPress={loadListings}/>
            </AppScreen>
        );
    }

    return (
        <AppScreen style={styles.screen}>
            <FlatList
                data={listings}
                keyExtractor={item => item.id.toString()}
                renderItem={({ item }) => {
                    return (
                        <AppCard
                            title={item.title}
                            subTitle={`$${item.price}`}
                            imageUrl={item.images[0].url}
                            onPress={() => navigation.navigate(NAVIGATION_ROUTES.LISTING_DETAILS_SCREEN, { item })}
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