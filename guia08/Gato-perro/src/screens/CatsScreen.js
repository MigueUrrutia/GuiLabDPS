import React from "react";
import { View, Text, FlatList, Image, StyleSheet } from "react-native";

const catBreeds = [
    { name: "Persian", country: "Iran", image: require("../../assets/cats/persian.png") },
    { name: "Siamese", country: "Thailand", image: require("../../assets/cats/siamese.png") },
    { name: "Maine Coon", country: "USA", image: require("../../assets/cats/mainecoon.png") },
    { name: "Bengal", country: "India", image: require("../../assets/cats/bengal.png") },
    { name: "Sphynx", country: "Canada", image: require("../../assets/cats/sphynx.png") },
];

export default function CatsScreen() {
    return (
        <FlatList
            data={catBreeds}
            keyExtractor={(item) => item.name}
            renderItem={({ item }) => (
                <View style={styles.item}>
                    <Image source={item.image} style={styles.image} />
                    <View>
                        <Text style={styles.name}>{item.name}</Text>
                        <Text>{item.country}</Text>
                    </View>
                </View>
            )}
        />
    );
}

const styles = StyleSheet.create({
    item: {
        flexDirection: "row",
        padding: 10,
        alignItems: "center",
    },
    image: {
        width: 50,
        height: 50,
        marginRight: 10,
    },
    name: {
        fontWeight: "bold",
    },
});
