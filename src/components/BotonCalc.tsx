import React, {FC} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {styles} from '../theme/appTheme';

interface Props {
  texto: string;
  color?: '#2D2D2D' | '#9B9B9B' | '#FF9427';
  ancho?: boolean;
  accion: (numeroTexto: string) => void;
}

export const BotonCalc: FC<Props> = ({
  texto,
  color = '#2D2D2D',
  ancho = false,
  accion,
}) => {
  return (
    <TouchableOpacity onPress={() => accion(texto)}>
      <View
        style={{
          ...styles.boton,
          backgroundColor: color,
          width: ancho ? 180 : 80,
        }}>
        <Text
          style={{
            ...styles.botonTexto,
            color: color === '#9B9B9B' ? 'black' : 'white',
          }}>
          {texto}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
