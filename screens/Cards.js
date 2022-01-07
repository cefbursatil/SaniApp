import {View,Text,TouchableOpacity,Image} from 'react-native';
import { CardSection } from '../Components/Odont/Cards/CardSection';
import React from 'react';
import { validatePathConfig } from '@react-navigation/native';
export const Cards = ({navigation}) => {

    const handleSelectOptionTab = (item) => {
        navigation.navigate(item);
      };
    return (
        <View style={styles.mainContainer}>

            <TouchableOpacity style={styles.containerStyle} onPress={() => handleSelectOptionTab("ListOdonto")}>
            <Image style={styles.imageStyle} source={require('../assets/Images/Odontologa.jpeg')} />
            <Text>Lista de Odontologos</Text>
            </TouchableOpacity>


            <TouchableOpacity style={styles.containerStyle} onPress={() => handleSelectOptionTab("MapNavigation")}>
                <Image style={styles.imageStyle} source={require('../assets/Images/EncontrarCerca.jpg')} />
                <Text>Buscar en Mapa</Text>
            </TouchableOpacity>

        </View>
    )
}
const styles ={
    mainContainer: {

    },
    containerStyle: {
          padding: 10,
          backgroundColor: 'white',
          borderWidth:0,
          marginBottom:10,
          marginLeft:10,
          marginRight:10,
          borderColor:'#808080',
          marginTop:20,
          elevation: 10,
          alignItems: 'center',
          justifyContent: 'center',
      },
      textStyle: {
        padding: 10,
        backgroundColor: 'white',
        margin:5,
    },
    imageStyle:{
        resizeMode: "cover",
        width: '100%',
        height: 150,
        margin:5
    }
  }