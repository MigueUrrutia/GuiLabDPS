import React from "react";
import { View, Text, FlatList, Image, StyleSheet } from "react-native";

const dogBreeds = [
    { name: "Afghan Hound", country: "Afghanistan", image: require("../../assets/dogs/afghan.png") },
    { name: "Dachshund", country: "Germany", image: require("../../assets/dogs/dachshund.png") },
    { name: "Bulldog", country: "UK", image: require("../../assets/dogs/bulldog.png") },
    { name: "Collie", country: "Scotland", image: require("../../assets/dogs/collie.png") },
    { name: "Terrier", country: "Ireland", image: require("../../assets/dogs/terrier.png") },
];

export default function DogsScreen() {
    return (
        <FlatList
            data={dogBreeds}
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
