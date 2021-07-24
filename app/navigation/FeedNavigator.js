import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import ListingsScreen from "../screens/ListingsScreen";
import ListingDetailsScreen from "../screens/ListingDetailsScreen";

const Stack = createStackNavigator();

const FeedNavigator = () => {
    /* mode="modal" makes it so that we navigate to a screen as a modal.
     We can swipe down from the top to dismiss the screen. 
     This only works on IOS. Default value for mode is "card"*/
    return (
        <Stack.Navigator mode="modal">
           <Stack.Screen name="ListingsScreen" component={ListingsScreen}/>
           <Stack.Screen options={{ headerShown: false }} name="ListingDetailScreen" component={ListingDetailsScreen}/>
        </Stack.Navigator>
    );
};

export default FeedNavigator;