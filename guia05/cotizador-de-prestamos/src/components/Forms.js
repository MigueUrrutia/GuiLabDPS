import React, { useState } from 'react';
import { StyleSheet, TextInput, View, Platform, Modal, TouchableOpacity, Text } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import colors from '../utils/colors';

export default function Form(props) {
  const { setCapital, setInterest, setMonths } = props;
  const [months, setLocalMonths] = useState("3");
  const [isPickerVisible, setPickerVisible] = useState(false); // Estado para el modal en iOS

  const handleMonthChange = (value) => {
    setLocalMonths(value);
    setMonths(value);
    setPickerVisible(false); // Cierra el modal en iOS después de seleccionar
  };

  return (
    <View style={styles.viewForm}>
      <View style={styles.viewInputs}>
        <TextInput
          placeholder="Cantidad a pedir"
          keyboardType="numeric"
          style={styles.input}
          onChange={(e) => setCapital(e.nativeEvent.text)}
        />
        <TextInput
          placeholder="Interés %"
          keyboardType="numeric"
          style={[styles.input, styles.inputPercentage]}
          onChange={(e) => setInterest(e.nativeEvent.text)}
        />
      </View>

      {Platform.OS === 'ios' ? (
        <>
          <TouchableOpacity
            style={styles.pickerButton}
            onPress={() => setPickerVisible(true)}
          >
            <Text style={styles.pickerButtonText}>{months} meses</Text>
          </TouchableOpacity>

          <Modal
            visible={isPickerVisible}
            animationType="slide"
            transparent={true}
          >
            <View style={styles.modalContainer}>
              <View style={styles.modalContent}>
                <Picker
                  selectedValue={months}
                  onValueChange={handleMonthChange}
                  style={styles.picker} // Aplica estilos para asegurar visibilidad
                >
                  <Picker.Item label="3 meses" value="3" />
                  <Picker.Item label="6 meses" value="6" />
                  <Picker.Item label="12 meses" value="12" />
                  <Picker.Item label="24 meses" value="24" />
                </Picker>
                <TouchableOpacity
                  style={styles.closeButton}
                  onPress={() => setPickerVisible(false)}
                >
                  <Text style={styles.closeButtonText}>Cerrar</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>
        </>
      ) : (
        <Picker
          selectedValue={months}
          style={styles.picker}
          onValueChange={handleMonthChange}
          mode="dialog"
        >
          <Picker.Item label="3 meses" value="3" />
          <Picker.Item label="6 meses" value="6" />
          <Picker.Item label="12 meses" value="12" />
          <Picker.Item label="24 meses" value="24" />
        </Picker>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  viewForm: {
    position: 'absolute',
    bottom: 0,
    width: '85%',
    paddingHorizontal: 50,
    backgroundColor: colors.PRIMARY_COLOR,
    borderRadius: 30,
    height: 150,
    justifyContent: 'center',
  },
  viewInputs: {
    flexDirection: 'row',
  },
  input: {
    height: 50,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: colors.PRIMARY_COLOR,
    borderRadius: 5,
    width: '60%',
    marginRight: 5,
    marginLeft: -5,
    marginBottom: 10,
    color: '#000',
    paddingHorizontal: 20,
  },
  inputPercentage: {
    width: '40%',
    marginLeft: 5,
  },
  picker: {
    width: '100%', // Asegura que el Picker sea visible
  },
  pickerButton: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: colors.PRIMARY_COLOR,
    borderRadius: 5,
    marginTop: 10,
  },
  pickerButtonText: {
    fontSize: 16,
    color: '#000',
  },
  modalContainer: {
    flex: 1, // Hace que el modal ocupe toda la pantalla
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent: {
    backgroundColor: '#fff',
    width: '80%',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
  },
  closeButton: {
    marginTop: 10,
    padding: 10,
    backgroundColor: colors.PRIMARY_COLOR,
    borderRadius: 5,
  },
  closeButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});
