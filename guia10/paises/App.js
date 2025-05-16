import React, {useState, useEffect}  from "react";
import { Text, View, StyleSheet, Alert} from "react-native";
import Formulario from "./src/components/Formulario";
import Pais from "./src/components/Pais";

export default function App() {
  const [busqueda, guardabusqueda] = useState({país: ""});
  const [consultar, guardarconsultar] = useState(false);
  const [resultado, guardarResultado] = useState({});
 

  useEffect(() => {
    const {pais} = busqueda;
    const consultarPaís = async () => {
      if (consultar) {
        const url = `https://servicodados.ige.gov.br/api/v1/paises/${pais}`;
        try {
          const respuesta = await fetch(url);
          const resultado = await respuesta.json();
          guardarResultado(resultado);
          guardarconsultar(false);
        } catch (error) {
          mostrarAlerta();
        }
      }
    };
    consultarPaís();
  }, [consultar]);
  

  const mostrarAlerta = () => {
    Alert.alert("Error", "No hay resultado intenta con otra ciudad o país") 
    [{ Text: "Ok" }];
  };

  return (
    <View style={styles.app}>
      <View style={styles.contenido}>
        <View style={{ zIndex: 1000 }}>
          <Formulario
            busqueda={busqueda}
            guardabusqueda={guardabusqueda}
            guardaconsultar={guardaconsultar}
            />
    </View>
    <View style={{ zIndex: 1}}>
      <Pais resultado={resultado} />
    </View>
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  app: {
    flex: 1,
    backgroundColor: "rgb(71,149,212)",
    justifyContent: "center",
  },
  contenido: {
    margin: "2.5%",
  }
});