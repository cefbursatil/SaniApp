import React from 'react';
import { StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Sani } from "../screens/Sani";
import { DetailOdont } from "../screens/DetailOdont";


const Stack = createNativeStackNavigator();

const Navigation = () => (
  <NavigationContainer>
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
      <Stack.Screen options={{ headerTintColor: 'black' }} name="Detail" component={DetailOdont} />
    </Stack.Navigator>
  </NavigationContainer>
);

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'white',
  }
})

export default Navigation;