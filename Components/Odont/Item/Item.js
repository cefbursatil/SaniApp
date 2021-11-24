import React from 'react';
import { View,Text} from 'react-native';
import Styles from '../Styles/Styles';

const Item = (item) => {
    const {nombre,Consultorio,Especialidad} = item
    console.log("item")
    console.log(item)
  return (

      <View style={[Styles.containerShadow, Styles.containerColor]}>
        <Text>Nombre: {nombre}</Text>
        <Text>Consultorio: {Consultorio}</Text>
        <Text>Especialidad: {Especialidad}</Text>
      </View>

  );
};

export default Item;