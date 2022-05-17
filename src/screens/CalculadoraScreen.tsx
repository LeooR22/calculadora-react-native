import React from 'react';
import {Text, View} from 'react-native';
import {BotonCalc} from '../components/BotonCalc';
import {styles} from '../theme/appTheme';

export const CalculadoraScreen = () => {
  return (
    <View style={styles.calculadoraContainer}>
      <Text style={styles.resultadoPequeno}>1,500.00</Text>
      <Text style={styles.resultado}>1,500.00</Text>

      <View style={styles.fila}>
        {/* Boton */}
        <BotonCalc texto="C" color="greyLight" />
        <BotonCalc texto="+/-" color="greyLight" />
        <BotonCalc texto="del" color="greyLight" />
        <BotonCalc texto="/" color="orange" />

        {/*  #2D2D2D GRIS OSCURDO*/}
        {/*  #9B9B9B GRIS CLARO */}
        {/* #FF9427 NARAJNA  */}
      </View>
    </View>
  );
};
