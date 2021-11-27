import React from "react"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { Map } from "../screens/Map";

const Stack = createNativeStackNavigator();

const MapNavigation= () => {
return(
    <Stack.Navigator>
        <Stack.Screen name='Map' component={Map} />
    </Stack.Navigator>
)

}

export default MapNavigation;