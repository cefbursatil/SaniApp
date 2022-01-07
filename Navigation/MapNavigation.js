import React, {useContext } from "react";
import { View,StyleSheet} from 'react-native';
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { MapScreen } from "../screens/MapScreen";
import { Ionicons } from "@expo/vector-icons";
import { GeneralContext } from "../context/GeneralContext";

const Stack = createNativeStackNavigator();

const MapNavigation= () => {
const {setactivateSearch,activateSearch,setSearch} = useContext(GeneralContext)
const conditionalSearch = () => {
    setactivateSearch(!activateSearch);
    setSearch("");
  };
return(
    <Stack.Navigator
        screenOptions={
            {
                headerStyle: styles.header,
                headerTintColor: 'white',
                headerRight: ()=> <View>
                <Ionicons style={{margin: 2}} onPress={() => conditionalSearch()} name="search" size={24} color="white"/>
                </View>
            }
        }
    >
        <Stack.Screen name='MapScreen' component={MapScreen} />
    </Stack.Navigator>
)

}
const styles = StyleSheet.create({
    header: {
      backgroundColor: 'black',
    },
    icons:{
      flex:1,
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent: "flex-end"
    }
  })
export default MapNavigation;