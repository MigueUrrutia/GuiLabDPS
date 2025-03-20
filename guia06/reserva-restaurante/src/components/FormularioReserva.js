import React, { useState } from "react";
import { Text, View, StyleSheet, TextInput, Button, Alert, ScrollView, TouchableHighlight, Platform,} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import uuid from "react-native-uuid";

const FormularioReserva = ({
  reservas,
  setReservas,
  setMostrarForm,
  guardarReservasStorage,
}) => {
  const [nombre, setNombre] = useState("");
  const [fecha, setFecha] = useState(new Date());
  const [hora, setHora] = useState(new Date());
  const [personas, setPersonas] = useState("");
  const [seccion, setSeccion] = useState("No fumadores");

  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showTimePicker, setShowTimePicker] = useState(false);

  const crearNuevaReserva = () => {
    if (!nombre || !personas) {
      mostrarAlerta();
      return;
    }

    const reserva = {
      id: uuid.v4(),
      nombre,
      fecha: fecha.toLocaleDateString(),
      hora: hora.toLocaleTimeString(),
      personas,
      seccion,
    };

    const reservasActualizadas = [...reservas, reserva];
    setReservas(reservasActualizadas);
    guardarReservasStorage(JSON.stringify(reservasActualizadas));
    setMostrarForm(false);

    setNombre("");
    setPersonas("");
    setFecha(new Date());
    setHora(new Date());
    setSeccion("No fumadores");
  };

  const mostrarAlerta = () => {
    Alert.alert("Error", "Todos los campos son obligatorios", [{ text: "OK" }]);
  };

  return (
    <ScrollView style={styles.formulario}>
      <View>
        <Text style={styles.label}>Nombre:</Text>
        <TextInput
          style={styles.input}
          onChangeText={setNombre}
          value={nombre}
        />
      </View>

      <View>
        <Text style={styles.label}>Fecha:</Text>
        <Button
          title="Seleccionar Fecha"
          onPress={() => setShowDatePicker(true)}
        />
        {showDatePicker && (
          <DateTimePicker
            value={fecha}
            mode="date"
            display={Platform.OS === "ios" ? "spinner" : "default"}
            onChange={(event, selectedDate) => {
              setShowDatePicker(false);
              if (selectedDate) setFecha(selectedDate);
            }}
          />
        )}
        <Text>{fecha.toLocaleDateString()}</Text>
      </View>

      <View>
        <Text style={styles.label}>Hora:</Text>
        <Button
          title="Seleccionar Hora"
          onPress={() => setShowTimePicker(true)}
        />
        {showTimePicker && (
          <DateTimePicker
            value={hora}
            mode="time"
            display={Platform.OS === "ios" ? "spinner" : "default"}
            onChange={(event, selectedTime) => {
              setShowTimePicker(false);
              if (selectedTime) setHora(selectedTime);
            }}
          />
        )}
        <Text>{hora.toLocaleTimeString()}</Text>
      </View>

      <View>
        <Text style={styles.label}>Cantidad de Personas:</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          onChangeText={setPersonas}
          value={personas}
        />
      </View>

      <View>
        <Text style={styles.label}>Sección:</Text>
        <TouchableHighlight
          onPress={() =>
            setSeccion(
              seccion === "No fumadores" ? "Fumadores" : "No fumadores"
            )
          }
          style={styles.btnSeccion}
        >
          <Text style={styles.textoSeccion}>{seccion}</Text>
        </TouchableHighlight>
      </View>

      <View>
        <TouchableHighlight
          onPress={crearNuevaReserva}
          style={styles.btnSubmit}
        >
          <Text style={styles.textoSubmit}>Crear Nueva Reserva</Text>
        </TouchableHighlight>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  formulario: {
    backgroundColor: "#FFF",
    paddingHorizontal: 20,
    paddingVertical: 10,
    flex: 1,
  },
  label: {
    fontWeight: "bold",
    fontSize: 18,
    marginTop: 20,
  },
  input: {
    marginTop: 10,
    height: 50,
    borderColor: "#e1e1e1",
    borderWidth: 1,
    borderStyle: "solid",
  },
  btnSeccion: {
    padding: 10,
    backgroundColor: "#B03052",
    marginVertical: 10,
  },
  textoSeccion: {
    color: "#FFF",
    fontWeight: "bold",
    textAlign: "center",
  },
  btnSubmit: {
    padding: 10,
    backgroundColor: "#28a745",
    marginVertical: 10,
  },
  textoSubmit: {
    color: "#FFF",
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default FormularioReserva;
