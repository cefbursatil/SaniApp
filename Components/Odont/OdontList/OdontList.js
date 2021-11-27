import React, { useEffect, useState, useContext } from "react";
import { View, Text,TouchableOpacity} from 'react-native';
import Item from "../Item/Item"
import Spinner from "../Stateless/Spinner/Spinner";
//import { useParams } from "react-router";
import { GeneralContext } from "../../../context/GeneralContext";
import { getFirestore1 } from "../../../Services/getFirestore1";
import { useSelector } from "react-redux";
export const OdontList = ({navigation}) => {
    const {loading} = useContext(GeneralContext)
    const result= useSelector(state => state.odontologos.odontologos)
    console.log("data")
    console.log(result)
    const handleSelectOdont = (item) => {
        navigation.navigate('Detail', {
          odont: item,
        });
      };

    // aca estoy filtrando los productos
    
    const filter = result && result.filter((p) => p.nombre.toLowerCase().includes(search.toLowerCase()));
    //const filter=result;
    //console.log("LOADING "+loading );
    return (
        <View  style={{display: 'flex', flexDirection: 'column'}}>
            {(loading) && <Spinner/>}
            {result && filter.map((item =>
                (
                    <TouchableOpacity onPress={() => handleSelectOdont(item)}
                    key={item.id}
                    >
                    <Item 
                        {...item}
                        
                    />
                    
                    </TouchableOpacity>  
                )))}
        </View>
    )
}