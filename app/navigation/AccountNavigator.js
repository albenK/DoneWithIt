import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import NAVIGATION_ROUTES from "./routes";

import AccountScreen from "../screens/AccountScreen";
import MessagesScreen from "../screens/MessagesScreen";

const Stack = createStackNavigator();

const AccountNavigator = () => {
    return (
        <Stack.Navigator>
           <Stack.Screen name={NAVIGATION_ROUTES.ACCOUNT_SCREEN} component={AccountScreen}/>
           <Stack.Screen name={NAVIGATION_ROUTES.MESSAGES_SCREEN} component={MessagesScreen}/>
        </Stack.Navigator>
    );
};

export default AccountNavigator;