import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, Modal, View, TouchableOpacity } from 'react-native';
import ParticipantInput from './src/components/ParticipantInput';
import ParticipantList from './src/components/ParticipantList';
import colors from './src/utils/colors.js';

export default function App() {
  const [participants, setParticipants] = useState([]);
  const [winner, setWinner] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  const handleAddParticipant = (name) => {
    setParticipants((current) => [...current, name]);
  };

  const handleSelectWinner = () => {
    if (participants.length > 0) {
      const randomIndex = Math.floor(Math.random() * participants.length);
      const selected = participants[randomIndex];
      setWinner(selected);
      setModalVisible(true);
    }
  };

  const handleReset = () => {
    setParticipants([]);
    setWinner(null);
    setModalVisible(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>🎉 Raffle App 🎉</Text>
      <ParticipantInput onAddParticipant={handleAddParticipant} />
      <ParticipantList
        participants={participants}
        winner={winner}
        onSelectWinner={handleSelectWinner}
        onReset={handleReset}
      />

      <Modal visible={modalVisible} transparent={true} animationType="slide">
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.winnerText}>🏆 Winner: {winner} 🏆</Text>
            <TouchableOpacity onPress={() => setModalVisible(false)} style={styles.closeButton}>
              <Text style={{ color: 'white' }}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    paddingTop: 40,
  },
  title: {
    textAlign: 'center',
    fontSize: 24,
    marginBottom: 10,
    color: colors.primary,
    fontWeight: 'bold',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#000000aa',
  },
  modalContent: {
    margin: 30,
    backgroundColor: colors.white,
    padding: 30,
    borderRadius: 10,
    alignItems: 'center',
  },
  winnerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.primary,
    marginBottom: 20,
  },
  closeButton: {
    backgroundColor: colors.primary,
    padding: 10,
    borderRadius: 5,
  },
});
