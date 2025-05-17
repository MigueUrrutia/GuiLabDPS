import React, { useState, useCallback } from 'react';
import {
  View, Text, TouchableOpacity, ScrollView, Image, Alert, StyleSheet
} from 'react-native';
import { Input } from 'react-native-elements';
import { useNavigation, useRoute, useFocusEffect } from '@react-navigation/native';
import { API_URL } from '../utils/config';

export default function PaginaDetalle() {
  const navigation = useNavigation();
  const route = useRoute();

  const [nombre, setNombre] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [cantidad, setCantidad] = useState('');
  const [preciodecosto, setPreciodecosto] = useState('');
  const [preciodeventa, setPreciodeventa] = useState('');
  const [fotografia, setFotografia] = useState('');
  const [id, setId] = useState('');

  useFocusEffect(
    useCallback(() => {
      const p = route.params;
      setNombre(p.nombre || '');
      setDescripcion(p.descripcion || '');
      setCantidad(String(p.cantidad ?? ''));
      setPreciodecosto(p.preciodecosto || '');
      setPreciodeventa(p.preciodeventa || '');
      setFotografia(p.fotografia || '');
      setId(p.id || '');
    }, [route.params])
  );

  const Actualizar = () => {
    fetch(`${API_URL}/productos/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        nombre,
        descripcion,
        cantidad: parseInt(cantidad),
        preciodecosto: parseFloat(preciodecosto),
        preciodeventa: parseFloat(preciodeventa),
        fotografia,
      }),
    })
      .then((res) => res.json())
      .then((resJson) => {
        const mensaje = resJson.mensaje || 'Producto actualizado con éxito';
        Alert.alert('Éxito', mensaje);
        navigation.goBack();
      })
      .catch((error) => {
        console.error(error);
        Alert.alert('Error de Internet');
      });
  };

  const Eliminar = () => {
    fetch(`${API_URL}/productos/${id}`, {
      method: 'DELETE',
    })
      .then((res) => res.json())
      .then((resJson) => {
        const mensaje = resJson.mensaje || 'Producto eliminado con éxito';
        Alert.alert('Éxito', mensaje);
        navigation.goBack();
      })
      .catch((error) => {
        console.error(error);
        Alert.alert('Error de Internet');
      });
  };

  return (
    <View style={style.Container}>
      <ScrollView style={style.ScrollView}>
        <View style={style.Header}>
          <TouchableOpacity style={style.EditarButton} onPress={Actualizar}>
            <Text style={style.TextButton}>Actualizar</Text>
          </TouchableOpacity>

          <TouchableOpacity style={style.EliminarButton} onPress={Eliminar}>
            <Text style={style.TextButton}>Eliminar</Text>
          </TouchableOpacity>
        </View>

        <View style={{ flex: 1, padding: 20 }}>
          <Input label="Nombre" value={nombre} placeholder="Nombre" onChangeText={setNombre} />
          <Input label="Descripción" value={descripcion} placeholder="Descripción" onChangeText={setDescripcion} />
          <Input label="Precio de costo" value={preciodecosto} placeholder="Precio de costo" keyboardType="numeric" onChangeText={setPreciodecosto} />
          <Input label="Precio de venta" value={preciodeventa} placeholder="Precio de venta" keyboardType="numeric" onChangeText={setPreciodeventa} />
          <Input label="Cantidad" value={cantidad} placeholder="Cantidad" keyboardType="numeric" onChangeText={setCantidad} />
          <Input label="Fotografía" value={fotografia} placeholder="URL de fotografía" onChangeText={setFotografia} />
          <Image style={{ width: 100, height: 100, alignSelf: 'center' }} source={{ uri: fotografia }} />
        </View>
      </ScrollView>
    </View>
  );
}

const style = StyleSheet.create({
  Container: {
    flex: 1,
  },
  ScrollView: {
    flex: 1,
  },
  Header: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 60,
  },
  EditarButton: {
    flex: 1,
    height: 40,
    backgroundColor: 'black',
    borderRadius: 5,
    justifyContent: 'center',
    marginLeft: 5,
    marginRight: 5,
  },
  EliminarButton: {
    flex: 1,
    height: 40,
    backgroundColor: 'black',
    borderRadius: 5,
    justifyContent: 'center',
    marginLeft: 5,
    marginRight: 5,
  },
  TextButton: {
    color: 'white',
    fontSize: 22,
    textAlign: 'center',
  },
});
