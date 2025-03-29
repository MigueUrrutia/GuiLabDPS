import  React from "react";
import { View, Text, Button } from "react-native";

export default function HomeScreen(props) {
    const { navigation } = props;
    return (
        <View>
            <Text>Estamos en Home</Text>
            
            <Button
                title="Ir a About"
                onPress={() => navigation.navigate("About")}
            />/
        </View>
    );
}