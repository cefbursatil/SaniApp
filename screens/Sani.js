import React, { useState, useEffect,useContext } from 'react';
import {
  View, Text
} from 'react-native';
import { OdontList } from '../Components/Odont/OdontList/OdontList';
import AppLoading from 'expo-app-loading';
import useFonts from '../hooks/useFonts';
import { GeneralContext } from '../context/GeneralContext';
import SearchBar from '../Components/search/SearchBar';

export const Sani = ({navigation}) => {

    // return (

    //                 <WrapperContext>    
    //                 <Header/>
    //                 <Text>YEAH</Text>
    //                 <OdontList navigation={navigation}/>
    //                 </WrapperContext>  

                    
    
    //         )

    const {search,setSearch,clicked,setClicked,activateSearch,setactivateSearch} = useContext(GeneralContext)
    const [IsReady, SetIsReady] = useState(false);

    const LoadFonts = async () => {
    await useFonts();
    };
    //console.log("READY FONTS "+IsReady);
    if (!IsReady) {
    return (
        <AppLoading
        startAsync={LoadFonts}
        onFinish={() => {
            //console.log("ReadyFonts");
            SetIsReady(true);
        }
        }
        onError={() => {
            console.log("Error Fonts");
        }}
        />
    );
    }
    else{
        return (
            <View>
                {activateSearch && <SearchBar
                    searchPhrase={search}
                    setSearchPhrase={setSearch}
                    clicked={clicked}
                    setClicked={setClicked}
                    setactivateSearch={setactivateSearch}

                />}
                <OdontList navigation={navigation}/>
            </View>
                

        )
    }

};
