import React from 'react';
import { StyleSheet} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Sani } from "../screens/Sani";
import { DetailOdont } from "../screens/DetailOdont";


const Stack = createNativeStackNavigator();

const Navigation = () => (
  <Stack.Navigator
    screenOptions={{
      headerStyle: styles.header,
      headerTintColor: 'white',
    }}
    initialRouteName="List"
  >
    <Stack.Screen
      name="List"
      component={Sani}
      options={{
        title: 'Bienvenido a Sani',
        
      }}
    />
    <Stack.Screen options={({route}) =>({ headerTintColor: 'black', title: route.params.odont.nombre })} name="Detail" component={DetailOdont} />
  </Stack.Navigator>

);

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'black',
  }
})

export default Navigation;