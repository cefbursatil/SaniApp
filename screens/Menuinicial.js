import React from 'react';
import { Cards } from "./Cards"
import Header from "../Components/Odont/Header/Header"
import { View, Text } from "react-native"
export const MenuInicial = ({navigation}) => {
    return(
        <View>
            <Header/>
            <Text style={styles.texto}>Somos una aplicación que reune los mejores profesionales en odontologia para tu servicio</Text>
            <Cards navigation={navigation}/>
        </View>
    )
}
const styles ={
    texto: {
        fontSize:24,
        margin:10,
        textAlign: 'center',
    },
    
  }