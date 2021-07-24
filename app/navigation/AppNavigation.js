import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import AccountScreen from "../screens/AccountScreen";
import ListingEditScreen from "../screens/ListingEditScreen";

import FeedNavigator from "./FeedNavigator";

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Feed" component={FeedNavigator}/>
            <Tab.Screen name="ListingEditScreen" component={ListingEditScreen}/>
            <Tab.Screen name="AccountScreen" component={AccountScreen}/>
        </Tab.Navigator>    
    );
};

export default AppNavigator;