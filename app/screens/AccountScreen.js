import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';

import AppScreen from '../components/AppScreen';
import ListItem from '../components/ListItem';
import AppIcon from '../components/AppIcon';
import APP_COLORS from '../config/colors';
import ListItemSeperator from '../components/ListItemSeperator';
import NAVIGATION_ROUTES from '../navigation/routes';

const MENU_ITEMS = [
    {
        title: 'My Listings',
        icon: {
            name: 'format-list-bulleted',
            backgroundColor: APP_COLORS.primary,
        },
        targetScreen: NAVIGATION_ROUTES.MESSAGES_SCREEN // TODO: Create a My Listings screen component.
    },
    {
        title: 'My Messages',
        icon: {
            name: 'email',
            backgroundColor: APP_COLORS.secondary,
        },
        targetScreen: NAVIGATION_ROUTES.MESSAGES_SCREEN
    }
];

const AccountScreen = ({ navigation }) => {
    return (
        <AppScreen style={styles.screen}>
            <View style={styles.container}>
                <ListItem
                    title="Alben Kalambukadu"
                    subTitle="test@test.com"
                    image={require('../assets/mosh.jpg')}
                />
            </View>

            <View style={styles.container}>
                <FlatList
                    data={MENU_ITEMS}
                    keyExtractor={item => item.title}
                    ItemSeparatorComponent={ListItemSeperator}
                    renderItem={({ item }) => {
                        return (
                            <ListItem
                                title={item.title}
                                IconComponent={<AppIcon name={item.icon.name} backgroundColor={item.icon.backgroundColor}/>}
                                onPress={() => navigation.navigate(item.targetScreen)}
                            />
                        );
                    }}
                />
            </View>

            <ListItem
                title="Logout"
                IconComponent={<AppIcon name="logout" backgroundColor="#ffe66d"/>}
            />
        </AppScreen>
    );
};

const styles = StyleSheet.create({
    container: {
        marginVertical: 20,
    },
    screen: {
        backgroundColor: APP_COLORS.light,
    }
});

export default AccountScreen;