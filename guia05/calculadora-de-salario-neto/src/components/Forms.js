import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import colors from '../utils/colors';

export default function Form(props) {
  const { setNombre, setSalarioBase } = props;

  return (
    <View style={styles.viewForm}>
      <View style={styles.viewInputs}>
        <TextInput
          placeholder="Nombre"
          style={styles.input}
          onChangeText={setNombre}
        />
        <TextInput
          placeholder="Salario base"
          keyboardType="numeric"
          style={styles.input}
          onChangeText={(text) => setSalarioBase(parseFloat(text))}
        />
      </View>
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
    flexDirection: 'column',
  },
  input: {
    height: 50,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: colors.PRIMARY_COLOR,
    borderRadius: 5,
    width: '100%',
    marginBottom: 10,
    color: '#000',
    paddingHorizontal: 20,
  },
});