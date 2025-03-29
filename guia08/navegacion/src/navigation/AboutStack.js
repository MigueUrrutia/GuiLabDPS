import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import AboutScreen from "../screens/AboutScreen";

const Stack = createStackNavigator();

export default function AboutStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="About" component={AboutScreen} options={{ headerShown: false }} />
        </Stack.Navigator>
    );
}