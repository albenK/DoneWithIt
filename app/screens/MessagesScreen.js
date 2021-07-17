import React, { useState } from 'react';
import { FlatList } from 'react-native';

import AppScreen from '../components/AppScreen';
import ListItem from '../components/ListItem';
import ListItemSeperator from '../components/ListItemSeperator';
import ListItemDeleteAction from '../components/ListItemDeleteAction';

const initialMessages = [
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
    const [ messages, setMessages ] = useState(initialMessages);
    const [ isRefreshing, setIsRefreshing ] = useState(false);

    const handleDelete = (message) => {
        // TODO: Delete the message from server.
        setMessages(previousValue => {
            return previousValue.filter(m => m.id !== message.id);
        });
    };

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
                            renderRightActions={() => <ListItemDeleteAction onPress={() => { handleDelete(item)}}/> }
                        />
                    );
                }}
                ItemSeparatorComponent={ListItemSeperator}
                refreshing={isRefreshing}
                onRefresh={() => {
                    // TODO: Refresh data from server.
                    console.log('onRefresh running');
                    setMessages([
                        {
                            id: 2,
                            title: 'T2',
                            description: 'D2',
                            image: require('../assets/mosh.jpg'),
                        }
                    ]);
                }}
            />
        </AppScreen>
    );
};

export default MessagesScreen;