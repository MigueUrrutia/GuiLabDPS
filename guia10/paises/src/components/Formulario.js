import React, { useState } from 'react';
import { Text, View, StyleSheet, TouchableWithoutFeedback, Alert} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

const Formulario = ({ busqueda, guardabusqueda, guardaconsultar }) => {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(busqueda.pais ?? "");
    const [items, setItems] = useState([
            { label: "-- Selecciona un país --", value: "" },
            { label: "Canadá", value: "ca" },
            { label: "El Salvador", value: "sv" },
            { label: "Guatemala", value: "gt" },
            { label: "Honduras", value: "hn" },
            { label: "Nicaragua", value: "ni" },
            { label: "Panamá", value: "pa" },
            { label: "Costa Rica", value: "cr" },
            { label: "México", value: "mx" },
            { label: "Argentina", value: "ar" },
            { label: "Estados Unidos", value: "us" },
            { label: "Colombia", value: "co" },
            { label: "España", value: "es" },
            { label: "Perú", value: "pe" },
        ]);

        const consultarPais = () => {
            if (value.trim() === "") {
                mostrarAlerta();
                return; 
            }
            guardarconsultar(true);
        };

        const mostrarAlerta = () => {
            Alert.alert(
                "Error",
                "Debes seleccionar un país",
                [{ text: "Entendido" }]
            );
        };

        return (
            <View>
                <View>
                    <Text style={Styles.input}>País</Text>
                </View>
            <DropDownPicker
            style={Styles.dropdown}
            open={open} 
            value={value}
            items={items}
            setOpen={setOpen}
            setValue={setValue}
            setItems={setValue}
            placeholder="Selecciona un país"
            onChangeValue={(val) => {
                setValue(val);
                guardabusqueda({
                    ...busqueda,
                    pais: val
                });
            }}
            listMode="MODAL"
            dropDownDirection="AUTO"
            scrollViewProps={{
                nestedScrollEnabled: true,
            }}
            />
            <TouchableWithoutFeedback onPress={consultarPais}>
                <View style={Styles.btnBuscar}>
                    <Text style={Styles.textoBuscar}>Buscar</Text>
            </View>
            </TouchableWithoutFeedback>
            </View>
        );
    };
    
    const Styles = StyleSheet.create({
        input: {
            padding: 10,
            height: 50,
            fontSize: 20,
            marginBottom: 10,
            textAlign: "center",
            color: "#000",
        },
        dropdown: {
            backgroundColor: "#fff",
            marginBottom: 20,
            borderColor: "#000",
        },
        btnBuscar: {
            backgroundColor: "#000",
            height: 50,
            marginTop: 20,
            justifyContent: "center",
            alignItems: "center",
        },
        textoBuscar: {
            color: "#fff",
            fontWeight: "bold",
            textTransform: "uppercase",
            fontSize: 18,
        },
    });

    export default Formulario;