import React, { useState, useEffect } from 'react';
import {View,Text,Button} from 'react-native';
import { ContactOdont } from './ContactOdont';
import { useSelector,useDispatch  } from 'react-redux';
import { selectedOdont } from '../store/actions/list.actions';

//import AppLoading from 'expo-app-loading';
//import useFonts from '../hooks/useFonts';
export const DetailOdont = ( {navigation}) => {
    const odont = useSelector(state=>state.odontologos.filteredOdont)
    const dispatch = useDispatch();
    const {nombre,Consultorio,Especialidad} = odont[0]
    const handleSelectOdont = (item) => {
        dispatch(selectedOdont(item.id))
        navigation.navigate('Contact', {
          odont: item,
        });
      };
    //const {nombre,Consultorio,Especialidad} = route.params.odont

    return (
                <View>
                    <Text>{nombre}</Text>
                    <Text>{Consultorio}</Text>
                    <Text>{Especialidad}</Text>
                    <Button
                        onPress={() => handleSelectOdont(odont[0])}
                        title="Contactar"
                        color="#841584"
                        accessibilityLabel="ContactarDentista"
                    />
                    {}
                </View>
                      
            )

};