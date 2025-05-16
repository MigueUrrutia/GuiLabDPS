import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import colors from '../utils/colors';

export default function ParticipantInput({ onAddParticipant }) {
  const [name, setName] = useState('');

  const handleAdd = () => {
    if (name.trim()) {
      onAddParticipant(name.trim());
      setName('');
    }
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder="Enter participant name"
        value={name}
        onChangeText={setName}
        style={styles.input}
      />
      <Button title="Add" onPress={handleAdd} color={colors.primary} />
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    margin: 10,
  },
  input: {
    flex: 1,
    borderColor: colors.primary,
    borderWidth: 1,
    marginRight: 10,
    padding: 8,
    borderRadius: 5,
  },
});
