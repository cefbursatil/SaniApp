import React,{useState, useContext} from 'react';
import {View,Text,StyleSheet,TouchableHighlight, Button} from 'react-native';
import MapView, { Marker,PROVIDER_GOOGLE,Callout} from 'react-native-maps';
import { useSelector,useDispatch} from "react-redux";
import { GeneralContext } from '../context/GeneralContext';
import { selectedOdont } from '../store/actions/list.actions';
//import AppLoading from 'expo-app-loading';
//import useFonts from '../hooks/useFonts';
export const Map = ({navigation,Location}) => {
  const [result,setResult] = useState(null);
  const {search} = useContext(GeneralContext)
  const dispatch = useDispatch();
    console.log("LOCATION")
    console.log(Location)

    const initialRegion = {
        latitude: Location.lat,
        longitude: Location.lng,
        //latitude: 4.720187,
        //longitude: -74.074391,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
    }
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

     const handleClickMarker = (item) => {
        console.log("CLICK MARKER")
        console.log(item)
          setResult(item)
      };
      const handleClickMap = () => {
        console.log("CLICK MAP")
          setResult(null)
      };
      const handleSelectOdont = (item) => {
        dispatch(selectedOdont(item.id))
        navigation.navigate('Detail', {
          odont: item,
        });
      };
    return (
        <View style={styles.container}>
            <MapView
              provider={PROVIDER_GOOGLE}
              style={styles.container}
              initialRegion={initialRegion}
              customMapStyle={mapStyle}
              showsUserLocation={true}
              onPress= {()=>handleClickMap()}>
              {odonts.map(item=>(
              <Marker key={item.id} title={item.nombre} coordinate={{
                  latitude: item.lat,
                  longitude: item.long,
              }} 
              onPress= {()=>handleClickMarker(item)}
              description={item.Especialidad}>
                <Callout tooltip>
                <TouchableHighlight onPress= {()=>handleClickMarker(item)} underlayColor='#dddddd'>
                    <View>
                        <Text>{item.nombre}{"\n"}{item.description}</Text>
                    </View>
                </TouchableHighlight>
              </Callout>
            </Marker>
              ))}
          </MapView>
          {result &&
           <View style={styles.containerinf}>
                <Text> {result.nombre}</Text>
                <Button
                  onPress={() => handleSelectOdont(result)}
                  title="Más Información"
                  color="#841584"
                  accessibilityLabel="More Info about this Dentist"
                />
             </View>   
             }
        </View>
                      
            )

};

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    containerinf:{
      flex:0.5,
  }
})