import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeStack from "./HomeStack";
import ContactStack from "./ContactStack";
import AboutStack from "./AboutStack";

const tab = createBottomTabNavigator();

export default function Navigation() {
    return (
        <tab.Navigator>
            <tab.Screen name="home" component={HomeStack} options={{title: 'Home'}}/>
            <tab.Screen name="contact" component={ContactStack} options={{title: 'Contact'}} />
            <tab.Screen name="about" component={AboutStack} options={{title: 'About'}}/>
        </tab.Navigator>
    );
}