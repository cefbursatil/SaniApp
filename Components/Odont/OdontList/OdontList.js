import React, { useEffect, useState, useContext } from "react";
import { View, Text,TouchableOpacity} from 'react-native';
import Item from "../Item/Item"
import Spinner from "../Stateless/Spinner/Spinner";
//import { useParams } from "react-router";
import { GeneralContext } from "../../../context/GeneralContext";
import { getFirestore1 } from "../../../Services/getFirestore1";
export const OdontList = ({navigation}) => {
    const [result,setResult] = useState(null);
    const {setLoading,loading,search,setSearch} = useContext(GeneralContext)

    //const {namecat} = useParams();

    const task = new Promise((resolve,reject) => {
        
            const db =getFirestore1();
            //console.log(db)
            db.collection('odontologos').get()
            .then(resp => resolve(resp.docs.map(it => ({img:"https://fabriziodellapollaodontologo.com/wp-content/uploads/2020/01/001-1-%C2%BFA-Qu%C3%A9-Se-Dedica-Un-Odont%C3%B3logo-1024x683.jpg",id2:it.id,...it.data()}))))
           
        //acá indico que quiero que este setTimeout demore 3 segundos
    })
    
    useEffect(()=> {
        
        if(!result){
            setLoading(true)
            task.then((res,err)=>{
                if(err) console.log(err)
                setResult(res)
                setLoading(false);
                console.log("RESULTADO")
                console.log(res)
            }).catch((error) =>{
                console.log(error)
            }).finally(() =>{
                console.log('finalizado')
            })
        }
    },[result]);
    
    const handleSelectOdont = (item) => {
        navigation.navigate('Detail', {
          odont: item,
        });
      };

    // aca estoy filtrando los productos
    
    const filter = result && result.filter((p) => p.nombre.toLowerCase().includes(search.toLowerCase()));
    //const filter=result;
    console.log("LOADING "+loading );
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