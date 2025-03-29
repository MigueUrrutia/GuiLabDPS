import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ContactScreen from "../screens/ContactScreen";

const Stack = createStackNavigator();

export default function ContactStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Contact" component={ContactScreen} options={{ headerShown: false }} />
        </Stack.Navigator>
    );
}