import React, { useState } from "react";
import { Text, View, StyleSheet, TextInput, Button, Alert, ScrollView, TouchableHighlight, Platform } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import uuid from "react-native-uuid";
import colors from "../utils/colors";

const Formulario = ({ citas, setCitas, guardarMostrarForm, guardarCitasStorage }) => {
    const [paciente, guardarPaciente] = useState("");
    const [doctor, guardarDoctor] = useState("");
    const [telefono, guardarTelefono] = useState("");
    const [fecha, guardarFecha] = useState(new Date());
    const [hora, guardarHora] = useState(new Date());
    const [sintomas, guardarSintomas] = useState("");

    // Estados para controlar pickers
    const [showDatePicker, setShowDatePicker] = useState(false);
    const [showTimePicker, setShowTimePicker] = useState(false);

    const crearNuevaCita = () => {
        if (!paciente || !doctor || !telefono || !sintomas) {
            mostrarAlerta();
            return;
        }

        const cita = { paciente, doctor, telefono, fecha, hora, sintomas, id: uuid.v4() };

        //Agregar al state
        const citasNuevo = [...citas, cita];
        setCitas(citasNuevo);

        //Guardar en storage
        guardarCitasStorage(JSON.stringify(citasNuevo));

        //Ocultar formulario
        guardarMostrarForm(false);

        //Resetear formulario
        guardarPaciente("");
        guardarDoctor("");
        guardarTelefono("");
        guardarSintomas("");
        guardarFecha(new Date());
        guardarHora(new Date());
    };

    const mostrarAlerta = () => {
        Alert.alert("Error", "Todos los campos son obligatorios", [{ text: "OK" }]);
    };
    return (
        <ScrollView style={styles.formulario}>
            <View>
                <Text style={styles.label}>Paciente:</Text>
                <TextInput
                style={styles.input}
                onChangeText={guardarPaciente}
                value={paciente} />
            </View>
            <View>
                <Text style={styles.label}>Doctor:</Text>
                <TextInput
                style={styles.input}
                onChangeText={guardarDoctor}
                value={doctor} />
            </View>
            <View>
                <Text style={styles.label}>Teléfono de contacto:</Text>
                <TextInput
                style={styles.input}
                keyboardType="numeric"
                onChangeText={guardarTelefono}
                value={telefono} />
            </View>
            <View>
                <Text style={styles.label}>Fecha:</Text>
                <Button title="Seleccionar Fecha" onPress={() => setShowDatePicker(true)} />
                    {showDatePicker && (
                        <DateTimePicker
                        value={fecha}
                        mode="date"
                        display={Platform.OS === "ios" ? "spinner" : "default"}
                        onChange={(event, selectedDate) => {
                            setShowDatePicker(false);
                            if (selectedDate) guardarFecha(selectedDate);
                        }}
                        />
                    )}
                    <Text>{fecha.toLocaleDateString()}</Text>
            </View>
            <View>
                <Text style={styles.label}>Hora:</Text>
                <Button title="Seleccionar hora" onPress={() => setShowTimePicker(true)} />
                    {showTimePicker && (
                        <DateTimePicker
                        value={hora}
                        mode="time"
                        display={Platform.OS === "ios" ? "spinner" : "default"}
                        onChange={(event, selectedTime) => {
                            setShowTimePicker(false);
                            if (selectedTime) guardarHora(selectedTime);
                        }}
                        />
                    )}
                    <Text>{hora.toLocaleTimeString()}</Text>
            </View>
            <View>
                <Text style={styles.label}>Síntomas:</Text>
                <TextInput
                multiline style ={styles.input}
                onChangeText={guardarSintomas}
                value={sintomas} />
            </View>
            <View>
                <TouchableHighlight onPress={crearNuevaCita} style={styles.btnSubmit}>
                    <Text style={styles.textoSubmit}>Crear nueva cita</Text>
                </TouchableHighlight>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    formulario: {
        backgroundColor: '#FFF',
        paddingHorizontal: 20,
        paddingVertical: 10,
        flex: 1
    },
    label: {
        fontWeight: "bold",
        fontSize: 18,
        marginTop: 20
    },
    input: {
        marginTop: 10,
        height: 50,
        borderColor: "#e1e1e1",
        borderWidth: 1,
        borderStyle: "solid"
    },
    btnSubmit: {
        padding: 10,
        backgroundColor: colors.BUTTON_COLOR,
        marginVertical: 10
    },
    textoSubmit: {
        color: "#FFF",
        fontWeight: "bold",
        textAlign: "center"
    }
});

export default Formulario;