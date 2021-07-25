import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import ListingEditScreen from "../screens/ListingEditScreen";

import FeedNavigator from "./FeedNavigator";
import AccountNavigator from "./AccountNavigator";

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Feed" component={FeedNavigator}/>
            <Tab.Screen name="ListingEditScreen" component={ListingEditScreen}/>
            <Tab.Screen name="AccountScreen" component={AccountNavigator}/>
        </Tab.Navigator>    
    );
};

export default AppNavigator;