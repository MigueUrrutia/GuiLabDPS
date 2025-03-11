import React, { useState } from 'react';
import { Text, SafeAreaView, StyleSheet, View, StatusBar } from 'react-native';

import colors from './src/utils/colors';
import Form from './src/components/Forms';
import Footer from './src/components/Footer';
import Result from './src/components/Result';

export default function App() {
  const [nombre, setNombre] = useState('');
  const [salarioBase, setSalarioBase] = useState(null);
  const [salarioNeto, setSalarioNeto] = useState(null);
  const [isss, setIsss] = useState(null);
  const [afp, setAfp] = useState(null);
  const [renta, setRenta] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  const calcularRenta = (salario) => {
    if (salario <= 472.00) {
      return 0; // Tramo I: Sin retención
    } else if (salario <= 895.24) {
      return (salario - 472.00) * 0.10 + 17.67; // Tramo II
    } else if (salario <= 2038.10) {
      return (salario - 895.24) * 0.20 + 60.00; // Tramo III
    } else {
      return (salario - 2038.10) * 0.30 + 288.57; // Tramo IV
    }
  };

  const calcularSalarioNeto = () => {
    if (!nombre || !salarioBase) {
      setErrorMessage('Por favor, ingresa tu nombre y salario base');
      return;
    }

    // Cálculo del ISSS con tope de $30
    const isssCalculado = salarioBase * 0.03;
    const isssFinal = isssCalculado > 30 ? 30 : isssCalculado;

    const afpCalculado = salarioBase * 0.04;
    const rentaCalculado = calcularRenta(salarioBase);

    const deducciones = isssFinal + afpCalculado + rentaCalculado;
    const neto = salarioBase - deducciones;

    setIsss(isssFinal.toFixed(2));
    setAfp(afpCalculado.toFixed(2));
    setRenta(rentaCalculado.toFixed(2));
    setSalarioNeto(neto.toFixed(2));
    setErrorMessage('');
  };

  const reset = () => {
    setNombre('');
    setSalarioBase(null);
    setSalarioNeto(null);
    setIsss(null);
    setAfp(null);
    setRenta(null);
    setErrorMessage('');
  };

  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={styles.Header}>
        <Text style={styles.HeadApp}>Calculadora de Salario Neto</Text>
        <Form
          setNombre={setNombre}
          setSalarioBase={setSalarioBase}
        />
      </SafeAreaView>
      <Result
        nombre={nombre}
        salarioBase={salarioBase}
        salarioNeto={salarioNeto}
        isss={isss}
        afp={afp}
        renta={renta}
        errorMessage={errorMessage}
      />
      <Footer calculate={calcularSalarioNeto} />
    </>
  );
}

const styles = StyleSheet.create({
  Header: {
    backgroundColor: colors.PRIMARY_COLOR,
    height: 200,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    alignItems: 'center',
  },
  HeadApp: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 15,
  },
});