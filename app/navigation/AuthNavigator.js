import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import WelcomeScreen from "../screens/WelcomeScreen";


const Stack = createStackNavigator();

// "navigation" prop is automatically passed to our components.
// This allows us to navigate from one screen to the other.
const AuthNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen options={{ title: 'Welcome', headerShown: false }} name="WelcomeScreen" component={WelcomeScreen}/>
            <Stack.Screen name="LoginScreen" component={LoginScreen}/>
            <Stack.Screen name="RegisterScreen" component={RegisterScreen}/>
        </Stack.Navigator>
    );
};

export default AuthNavigator;