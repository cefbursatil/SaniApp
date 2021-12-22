import React from 'react';
import { StyleSheet,View,Text} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Navigation from './Navigation';
import MapNavigation from './MapNavigation';
import { Ionicons } from '@expo/vector-icons';

const BottomTabs = createBottomTabNavigator();

const TabNavigation= () => {
    return(
        <BottomTabs.Navigator screenOptions={{
            headerShown:false,
            tabBarStyles: styles.tabBar,
            tabBarShowLabel:false,
        }}>
            <BottomTabs.Screen name="ListOdonto" component={Navigation} 
                options={{
                    tabBarIcon: ({focused}) => (
                        <View style={styles.item}>
                            <Ionicons name="md-home" size={24} color={focused ? 'blue' : "black"}  />
                            <Text>Lista</Text>
                        </View>
                    )
                }}
            />
            <BottomTabs.Screen 
                name="MapNavigation" 
                component={MapNavigation}
                options={{
                    tabBarIcon: ({focused}) => (
                        <View style={styles.item}>
                            <Ionicons name="md-map" size={24} color={focused ? 'blue' : "black"} />
                            <Text>Map</Text>
                        </View>
                    )}}
            />
        </BottomTabs.Navigator>
    )
}

export default TabNavigation;
const styles = StyleSheet.create({
    tabBar:{
        shadowColor:'#7f5df0',
        shadowOffset:{witdth:0, height:10},
        shadowOpacity: 0.25,
        shadowRadius: 0.25,
        elevation:5,
        position: 'absolute',
        bottom:25,
        left: 20,
        right: 20,
        borderRadius:15,
        height: 90,
    },
    item: {
        flex:1,
        justifyContent: 'center',
        alignItems: "center",
    }
})

