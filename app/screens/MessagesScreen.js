import React from 'react';
import { FlatList, View, StyleSheet } from 'react-native';

import AppScreen from '../components/AppScreen';
import ListItem from '../components/ListItem';
import ListItemSeperator from '../components/ListItemSeperator';

const messages = [
    {
        id: 1,
        title: 'T1',
        description: 'D1',
        image: require('../assets/mosh.jpg'),
    },
    {
        id: 2,
        title: 'T2',
        description: 'D2',
        image: require('../assets/mosh.jpg'),
    }
];

const MessagesScreen = () => {
    return (
        <AppScreen>
            <FlatList
                data={messages}
                keyExtractor={(message) => message.id.toString()}
                renderItem={({ item }) => {
                    return (
                        <ListItem
                            title={item.title}
                            subTitle={item.description}
                            image={item.image}
                            onPress={() => { console.log('Message selected ', item); }}
                        />
                    );
                }}
                ItemSeparatorComponent={ListItemSeperator}
            />
        </AppScreen>
    );
};

const styles = StyleSheet.create({

});

export default MessagesScreen;