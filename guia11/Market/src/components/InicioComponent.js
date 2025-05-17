import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet, Alert} from "react-native";
import { Input, Icon } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";

import { API_URL } from "../utils/config";

export default function PantallaInicio() {
    const [usuario, setUsuario] = useState("");
    const [contrasena, setContrasena] = useState("");
    const navigation = useNavigation();

    const Entrar = () => {
        if (!!usuario && !!contrasena) {
            fetch(`${API_URL}/login`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    usuario,
                    contrasena,
                }),
            })
                .then((response) => response.json())
                .then((responseJson) => {
                    const autenticado = responseJson.autenticado;
                    if (autenticado) {
                        navigation.navigate("ListaProductos");
                    } else {
                        Alert.alert("Usuario", responseJson.message, [{ text: 'OK' }], { cancelable: false });
                        }
                    })
                    .catch((error) => {
                        console.error(error);
                        Alert.alert('Aviso', 'Error de Internet', [{ text: 'OK' }], { cancelable: false });
                    });
                } else {
                    Alert.alert('Aviso', 'No introdujo datos', [{ text: 'OK' }], { cancelable: false });
                }
            };
              return (
    <View style={style.Container}>
      <Text style={style.Bienvenida}>Bienvenidos</Text>
      <Image
        style={style.Logo}
        source={require("../../assets/market.jpg")}
      />
      <View style={style.Form}>
        <Input
          placeholder="USUARIO"
          onChangeText={setUsuario}
          value={usuario}
          rightIcon={<Icon name="person" size={24} color="black" />}
        />
        <Input
          placeholder="CONTRASEÑA"
          onChangeText={setContrasena}
          value={contrasena}
          secureTextEntry={true}
          rightIcon={<Icon name="lock" size={24} color="black" />}
        />
      </View>
      <TouchableOpacity style={style.LoginButton} onPress={Entrar}>
        <Text style={style.TextButton}>Entrar</Text>
      </TouchableOpacity>
    </View>
  );
}

const style = StyleSheet.create({
  Container: {
    flex: 1,
    padding: 10,
  },
  Bienvenida: {
    fontSize: 34,
    marginTop: 25,
    alignSelf: "center",
  },
  Logo: {
    width: 200,
    height: 160,
    alignSelf: "center",
    marginTop: 15,
  },
  Form: {
    marginLeft: 10,
    marginRight: 10,
  },
  LoginButton: {
    height: 50,
    backgroundColor: "red",
    marginTop: 15,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 20,
    marginRight: 20,
  },
  TextButton: {
    color: "white",
    fontSize: 22,
    textAlign: "center",
  },
});