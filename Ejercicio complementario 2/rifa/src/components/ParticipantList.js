import React from 'react';
import { View, Text, FlatList, Button, StyleSheet } from 'react-native';
import colors from '../utils/colors';

export default function ParticipantList({ participants, winner, onSelectWinner, onReset }) {
  return (
    <View style={styles.container}>
      <FlatList
        data={participants}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <Text style={item === winner ? styles.winner : styles.name}>
            {item}
          </Text>
        )}
      />
      <View style={styles.buttons}>
        <Button title="Select Winner" onPress={onSelectWinner} color={colors.accent} />
        <Button title="Reset" onPress={onReset} color={colors.danger} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
  name: {
    padding: 10,
    backgroundColor: colors.white,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  winner: {
    padding: 10,
    backgroundColor: colors.accent,
    color: colors.white,
    fontWeight: 'bold',
  },
  buttons: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});
