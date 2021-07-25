import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import ListingEditScreen from "../screens/ListingEditScreen";

import FeedNavigator from "./FeedNavigator";
import AccountNavigator from "./AccountNavigator";
import NewListingButton from "./NewListingButton";

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen
                name="Feed"
                component={FeedNavigator}
                options={{
                    tabBarIcon: ({ color, size}) => {
                        return <MaterialCommunityIcons name="home" color={color} size={size}/>
                    }
                }}
            />
            <Tab.Screen
                name="ListingEditScreen"
                component={ListingEditScreen}
                options={({ navigation }) => {
                    return {
                        tabBarButton: () => <NewListingButton onPress={() => navigation.navigate('ListingEditScreen')}/>,
                    };
                }}
            />
            <Tab.Screen 
                name="AccountScreen" 
                component={AccountNavigator}
                options={{
                    title: 'Account',
                    tabBarIcon: ({ color, size}) => {
                        return <MaterialCommunityIcons name="account" color={color} size={size}/>
                    }
                }}
            />
        </Tab.Navigator>    
    );
};

export default AppNavigator;