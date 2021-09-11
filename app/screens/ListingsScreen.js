import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, StyleSheet } from 'react-native';

import AppScreen from '../components/AppScreen';
import AppText from '../components/AppText';
import AppCard from '../components/AppCard';
import LISTINGS_API from '../api/listings';
import APP_COLORS from '../config/colors';
import NAVIGATION_ROUTES from '../navigation/routes';
import AppButton from '../components/AppButton';

const ListingsScreen = ({ navigation }) => {
    const [ listings, setListings ] = useState([]);
    const [ hasError, setHasError ] = useState(false); // Don't care about the error message.
    const [ isLoading, setIsLoading ] = useState(true);

    useEffect(() => {
        loadListings();
    }, []);

    const loadListings = async () => {
        setIsLoading(true);
        const response = await LISTINGS_API.getListings();
        setIsLoading(false);

        if (!response.ok) {
            return setHasError(true);
        }
        setHasError(false);
        setListings(response.data);
    };

    return (
        <AppScreen style={styles.screen}>
            { hasError && (
                <>
                    <AppText>Couldn't retrieve the listings.</AppText>
                    <AppButton label="Retry" onPress={loadListings}/>
                </>
            )}

            <ActivityIndicator animating={isLoading} size="large" color={APP_COLORS.primary}/>

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