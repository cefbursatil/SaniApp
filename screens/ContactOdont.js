import React, { useState, useEffect } from 'react';
import {View,Text,Button} from 'react-native';
import Header from '../Components/Odont/Header/Header';
import WrapperContext from '../Components/Wrapper/WrapperContext';
import { useSelector } from 'react-redux';
//import AppLoading from 'expo-app-loading';
//import useFonts from '../hooks/useFonts';
export const ContactOdont = ({ navigation }) => {
    const odont = useSelector(state=>state.odontologos.filteredOdont)

    const {nombre,Consultorio,Especialidad} = odont[0]
  
    //const {nombre,Consultorio,Especialidad} = route.params.odont

    return (
                <View>
                    <Text>FORM</Text>

                    <Button
                        onPress={() => handleSelectOdont(odont[0])}
                        title="Enviar Info y recibir datos de odontologo"
                        color="#841584"
                        accessibilityLabel="Enviar Info y recibir datos de odontologo"
                    />
                </View>
                      
            )

};