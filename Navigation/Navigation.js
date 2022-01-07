import React,{useContext} from 'react';
import { StyleSheet,TouchableOpacity,View} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Sani } from "../screens/Sani";
import { DetailOdont } from "../screens/DetailOdont";
import { Ionicons } from '@expo/vector-icons';
import Styles from '../Components/Odont/Styles/Styles';
import { GeneralContext } from '../context/GeneralContext';
const Stack = createNativeStackNavigator();

const Navigation = () => {
  
  const {setactivateSearch,activateSearch,setSearch} = useContext(GeneralContext)
  const conditionalSearch = () => {
      setactivateSearch(!activateSearch);
      setSearch("");
    };
  return(
  <Stack.Navigator
    screenOptions={{
      headerStyle: styles.header,
      headerTintColor: 'white',
      headerRight: ()=> <View styles={styles.icons}>
        <Ionicons style={{margin: 2}} onPress={() => conditionalSearch()} name="search" size={24} color="white"/>
        </View>
        
      

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
    <Stack.Screen options={({route}) =>({ headerTintColor: 'white', title: route.params.odont.nombre })} name="Detail" component={DetailOdont} />
  </Stack.Navigator>

)};

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'black',
  },
  icons:{
    flexDirection: 'row', 
    alignSelf: 'flex-start'
  }
})


export default Navigation;