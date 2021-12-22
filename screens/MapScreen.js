import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import * as Location from 'expo-location';
import { Map } from './Map';

export const MapScreen = ({navigation}) => {
  const [pickedLocation, setPickedLocation] = useState(null);

  const verifyPermissions = async () => {
    const { status } = await Location.requestForegroundPermissionsAsync();

    if (status !== 'granted') {
      Alert.alert(
        'Permisos insuficientes',
        'Necesita dar permisos de la ubicación para usar la aplicación',
        [{ text: 'Ok' }],
      );
      return false;
    }

    return true;
  }

  const handlePickLocation = async () => {
    const isLocationOk = await verifyPermissions();
    if (!isLocationOk) return;

    const location = await Location.getCurrentPositionAsync({
      timeout: 5000,
    });

    const coords = {
      lat: location.coords.latitude,
      lng: location.coords.longitude,
    };
    setPickedLocation(coords);
 
  };


  useEffect(()=> { 
    if(!pickedLocation){
      (async () => {
        await handlePickLocation();
      })();
    }
},[pickedLocation]);


  return (
    <View style={styles.container}>
      {pickedLocation && <Map navigation={navigation} Location={pickedLocation} />}

      
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
},
});

