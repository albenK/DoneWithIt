import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import NAVIGATION_ROUTES from "./routes";

import AccountNavigator from "./AccountNavigator";
import FeedNavigator from "./FeedNavigator";
import ListingEditScreen from "../screens/ListingEditScreen";
import NewListingButton from "./NewListingButton";

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen
                name={NAVIGATION_ROUTES.FEED_NAVIGATOR}
                component={FeedNavigator}
                options={{
                    title: 'Feed',
                    tabBarIcon: ({ color, size}) => {
                        return <MaterialCommunityIcons name="home" color={color} size={size}/>
                    }
                }}
            />
            <Tab.Screen
                name={NAVIGATION_ROUTES.LISTING_EDIT_SCREEN}
                component={ListingEditScreen}
                options={({ navigation }) => {
                    return {
                        tabBarButton: () => <NewListingButton onPress={() => navigation.navigate(NAVIGATION_ROUTES.LISTING_EDIT_SCREEN)}/>,
                    };
                }}
            />
            <Tab.Screen 
                name={NAVIGATION_ROUTES.ACCOUNT_NAVIGATOR}
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