import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, TouchableWithoutFeedback, TouchableHighlight, FlatList, Platform, Keyboard } from "react-native";
import Reserva from "./src/components/Reserva";
import FormularioReserva from "./src/components/FormularioReserva";
import AsyncStorage from "@react-native-async-storage/async-storage";
import colors from "./src/utils/colors";

const App = () => {
  const [mostrarForm, setMostrarForm] = useState(false);
  const [reservas, setReservas] = useState([]);

  useEffect(() => {
    const obtenerReservasStorage = async () => {
      try {
        const reservasStorage = await AsyncStorage.getItem("reservas");
        if (reservasStorage) {
          setReservas(JSON.parse(reservasStorage));
        }
      } catch (error) {
        console.log(error);
      }
    };
    obtenerReservasStorage();
  }, []);

  const eliminarReserva = id => {
    const reservasFiltradas = reservas.filter(reserva => reserva.id !== id);
    setReservas(reservasFiltradas);
    guardarReservasStorage(JSON.stringify(reservasFiltradas));
  };

  const mostrarFormulario = () => {
    setMostrarForm(!mostrarForm);
  };

  const cerrarTeclado = () => {
    Keyboard.dismiss();
  };

  const guardarReservasStorage = async reservasJSON => {
    try {
      await AsyncStorage.setItem("reservas", reservasJSON);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={cerrarTeclado} accessible={false}>
      <View style={styles.contenedor}>
        <Text style={styles.titulo}>Reservas del Restaurante</Text>
        <View>
          <TouchableHighlight onPress={mostrarFormulario} style={styles.btnMostrarForm} underlayColor={colors.BUTTON_COLOR_DARK}>
            <Text style={styles.textoMostrarForm}>{mostrarForm ? "Cancelar Reserva" : "Nueva Reserva"}</Text>
          </TouchableHighlight>
        </View>
        <View style={styles.contenido}>
          {mostrarForm ? (
            <>
              <Text style={styles.titulo}>Crear Nueva Reserva</Text>
              <FormularioReserva reservas={reservas} setReservas={setReservas} setMostrarForm={setMostrarForm} guardarReservasStorage={guardarReservasStorage} />
            </>
          ) : (
            <>
              <Text style={styles.titulo}>{reservas.length > 0 ? "Lista de Reservas" : "No hay reservas, agrega una"}</Text>
              <FlatList
                style={styles.listado}
                data={reservas}
                renderItem={({ item }) => <Reserva item={item} eliminarReserva={eliminarReserva} />}
                keyExtractor={reserva => reserva.id}
                keyboardShouldPersistTaps="handled"
              />
            </>
          )}
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  contenedor: {
    backgroundColor: colors.PRIMARY_COLOR,
    flex: 1
  },
  titulo: {
    color: "#EFEFEF",
    marginTop: Platform.OS === "ios" ? 40 : 20,
    marginBottom: 20,
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center"
  },
  contenido: {
    flex: 1,
    marginHorizontal: "2.5%"
  },
  listado: {
    flex: 1
  },
  btnMostrarForm: {
    padding: 10,
    backgroundColor: colors.BUTTON_COLOR,
    marginVertical: 10,
    borderRadius: 5,
    alignItems: "center"
  },
  textoMostrarForm: {
    color: "#000000",
    fontWeight: "bold"
  }
});

export default App;
