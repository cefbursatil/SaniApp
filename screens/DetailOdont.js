import React, { useState, useEffect } from 'react';
import {View,Text} from 'react-native';
import { OdontList } from '../Components/Odont/OdontList/OdontList';
import Header from '../Components/Odont/Header/Header';
import WrapperContext from '../Components/Wrapper/WrapperContext';
//import AppLoading from 'expo-app-loading';
//import useFonts from '../hooks/useFonts';
export const DetailOdont = ({ route }) => {
    const {nombre,Consultorio,Especialidad} = route.params.odont

    return (
                <View>
                    <Text>{nombre}</Text>
                </View>
                      
            )

};