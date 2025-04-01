import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import DogsScreen from "../screens/DogsScreen";
import CatsScreen from "../screens/CatsScreen";
import { Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

export default function Navigation() {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ color, size }) => {
                    let iconName;
                    if (route.name === "Dogs") {
                        iconName = "paw";
                    } else if (route.name === "Cats") {
                        iconName = "logo-octocat";
                    }
                    return <Ionicons name={iconName} size={size} color={color} />;
                },
            })}
        >
            <Tab.Screen name="Dogs" component={DogsScreen} />
            <Tab.Screen name="Cats" component={CatsScreen} />
        </Tab.Navigator>
    );
}
