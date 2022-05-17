import React, {FC} from 'react';
import {View, Text} from 'react-native';
import {styles} from '../theme/appTheme';

interface Props {
  texto: string;
  color: 'greyDark' | 'greyLight' | 'orange';
}

export const BotonCalc: FC<Props> = ({texto, color}) => {
  return (
    <View style={styles.boton}>
      <Text style={styles.botonTexto}>{texto}</Text>
    </View>
  );
};
