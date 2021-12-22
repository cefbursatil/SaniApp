import React from "react"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { MapScreen } from "../screens/MapScreen";

const Stack = createNativeStackNavigator();

const MapNavigation= () => {
return(
    <Stack.Navigator>
        <Stack.Screen name='MapScreen' component={MapScreen} />
    </Stack.Navigator>
)

}

export default MapNavigation;