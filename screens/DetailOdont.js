import React, { useState, useEffect } from 'react';
import {View,Text} from 'react-native';
import Header from '../Components/Odont/Header/Header';
import WrapperContext from '../Components/Wrapper/WrapperContext';
import { useSelector } from 'react-redux';
//import AppLoading from 'expo-app-loading';
//import useFonts from '../hooks/useFonts';
export const DetailOdont = ({ route }) => {
    const odont = useSelector(state=>state.odontologos.filteredOdont)

    const {nombre,Consultorio,Especialidad} = odont[0]

    //const {nombre,Consultorio,Especialidad} = route.params.odont

    return (
                <View>
                    <Text>{nombre}</Text>
                </View>
                      
            )

};