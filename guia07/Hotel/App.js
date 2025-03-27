import React from "react";
import {
  StyleSheet,
  View,
  Image,
  Text,
  ScrollView,
  Modal,
  Button,
  TouchableHighlight
} from "react-native";

const App = () => {
  const [modalServicio, setModalServicio] = React.useState(false);
  const [modalLugar, setModalLugar] = React.useState(false);
  const [modalHabitacion, setModalHabitacion] = React.useState(false);

  return (
    <ScrollView>
      <View style={{ flexDirection: "row" }}>
        <Image style={styles.banner} source={require("./src/bg.jpg")} />
      </View>

      <View style={styles.contenedor}>
        <Text style={styles.titulo}>Tipos de habitaciones</Text>
        <ScrollView horizontal>
          <View>
            <TouchableHighlight onPress={() => setModalHabitacion(true)}>
              <Image
                style={styles.ciudad}
                source={require("./src/habitacion1.jpg")}
              />
            </TouchableHighlight>
          </View>
          <View>
            <Image
              style={styles.ciudad}
              source={require("./src/habitacion2.jpg")}
            />
          </View>
          <View>
            <Image
              style={styles.ciudad}
              source={require("./src/habitacion3.jpg")}
            />
          </View>
        </ScrollView>

        <Modal transparent={true} animationType="slide" visible={modalHabitacion}>
          <View style={styles.vistaModal}>
            <View style={styles.modal}>
              <Text style={styles.subtitulo}>Habitación Individual</Text>
              <Text>Ideal para una persona, incluye cama sencilla, baño privado y escritorio.</Text>
              <Button title="Cerrar" onPress={() => setModalHabitacion(false)} />
            </View>
          </View>
        </Modal>

        <Text style={styles.titulo}>Servicios del hotel</Text>
        <ScrollView horizontal>
          <View>
            <TouchableHighlight onPress={() => setModalServicio(true)}>
              <Image
                style={styles.ciudad}
                source={require("./src/servicio1.jpg")}
              />
            </TouchableHighlight>
          </View>
          <View>
            <Image
              style={styles.ciudad}
              source={require("./src/servicio2.jpg")}
            />
          </View>
          <View>
            <Image
              style={styles.ciudad}
              source={require("./src/servicio3.jpg")}
            />
          </View>
          <View>
            <Image
              style={styles.ciudad}
              source={require("./src/servicio4.jpg")}
            />
          </View>
        </ScrollView>

        <Modal transparent={true} animationType="slide" visible={modalServicio}>
          <View style={styles.vistaModal}>
            <View style={styles.modal}>
              <Text style={styles.subtitulo}>Piscina al aire libre</Text>
              <Text>Relájate en nuestra piscina con vista panorámica, abierta todos los días.</Text>
              <Button title="Cerrar" onPress={() => setModalServicio(false)} />
            </View>
          </View>
        </Modal>

        <Text style={styles.titulo}>Lugares cercanos de interés</Text>
        <View style={styles.listado}>
          <View style={styles.listaItem}>
            <TouchableHighlight onPress={() => setModalLugar(true)}>
              <Image
                style={styles.mejores}
                source={require("./src/lugar1.jpg")}
              />
            </TouchableHighlight>
          </View>
          <View style={styles.listaItem}>
            <Image
              style={styles.mejores}
              source={require("./src/lugar2.jpg")}
            />
          </View>
          <View style={styles.listaItem}>
            <Image
              style={styles.mejores}
              source={require("./src/lugar3.jpg")}
            />
          </View>
          <View style={styles.listaItem}>
            <Image
              style={styles.mejores}
              source={require("./src/lugar4.jpg")}
            />
          </View>
        </View>

        <Modal transparent={true} animationType="slide" visible={modalLugar}>
          <View style={styles.vistaModal}>
            <View style={styles.modal}>
              <Text style={styles.subtitulo}>Playa El Paraíso</Text>
              <Text>A solo 10 minutos del hotel, perfecta para disfrutar del sol y el mar.</Text>
              <Button title="Cerrar" onPress={() => setModalLugar(false)} />
            </View>
          </View>
        </Modal>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  banner: {
    height: 250,
    flex: 1,
  },
  titulo: {
    fontWeight: "bold",
    fontSize: 24,
    marginVertical: 20,
  },
  contenedor: {
    marginHorizontal: 10,
  },
  ciudad: {
    width: 250,
    height: 300,
    marginRight: 10,
  },
  mejores: {
    width: "100%",
    height: 200,
    marginVertical: 20,
  },
  listaItem: {
    flexBasis: "49%",
  },
  listado: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  vistaModal: {
    backgroundColor: "#000000aa",
    flex: 1,
    justifyContent: "center",
  },
  modal: {
    backgroundColor: "#fff",
    margin: 50,
    padding: 40,
    borderRadius: 10,
  },
  subtitulo: {
    fontWeight: "bold",
    fontSize: 18,
    marginBottom: 10,
  },
});

export default App;
