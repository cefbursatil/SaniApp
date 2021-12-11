import React from 'react';
import {View,Text,StyleSheet} from 'react-native';
import MapView, { Marker,PROVIDER_GOOGLE} from 'react-native-maps';
import { useSelector} from "react-redux";
//import AppLoading from 'expo-app-loading';
//import useFonts from '../hooks/useFonts';
export const Map = () => {
    const initialRegion = {
        latitude: 4.703376,
        longitude: -74.069995,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
    };
    const odonts = useSelector(state => state.odontologos.odontologos);


    const mapStyle = [
        {
          "featureType": "administrative",
          "elementType": "geometry",
          "stylers": [
            {
              "visibility": "off"
            }
          ]
        },
        {
          "featureType": "poi",
          "stylers": [
            {
              "visibility": "off"
            }
          ]
        },
        {
          "featureType": "road",
          "elementType": "labels.icon",
          "stylers": [
            {
              "visibility": "off"
            }
          ]
        },
        {
          "featureType": "transit",
          "stylers": [
            {
              "visibility": "off"
            }
          ]
        }
      ]
    return (
        <MapView
            provider={PROVIDER_GOOGLE}
            style={styles.container}
            initialRegion={initialRegion}
            customMapStyle={mapStyle}
        >
            {odonts.map(item=>(
            <Marker key={item.id} title={item.nombre} coordinate={{
                latitude: item.lat,
                longitude: item.long,
            }} />   
            ))}
        </MapView>
                      
            )

};

const styles = StyleSheet.create({
    container:{
        flex:1,
    }
})