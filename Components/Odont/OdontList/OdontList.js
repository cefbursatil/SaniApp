import React, { useEffect, useState, useContext } from "react";
import { View, Text,TouchableOpacity} from 'react-native';
import Item from "../Item/Item"
import Spinner from "../Stateless/Spinner/Spinner";
//import { useParams } from "react-router";
import { GeneralContext } from "../../../context/GeneralContext";
import { getFirestore1 } from "../../../Services/getFirestore1";
import { useSelector,useDispatch } from "react-redux";
import { loadOdonts, selectedOdont,UpdateOdont } from "../../../store/actions/list.actions";

export const OdontList = ({navigation}) => {
    const dispatch = useDispatch()
    const [result,setResult] = useState(null);
    const {setLoading,loading,search} = useContext(GeneralContext)
    //console.log("Yeah");
    const task = new Promise((resolve,reject) => {
            
            const db =getFirestore1();
            db.collection('odontologos').get()
            .then(resp => resolve(resp.docs.map(it => ({img:"https://fabriziodellapollaodontologo.com/wp-content/uploads/2020/01/001-1-%C2%BFA-Qu%C3%A9-Se-Dedica-Un-Odont%C3%B3logo-1024x683.jpg",id2:it.id,...it.data()}))))
        
        //acá indico que quiero que este setTimeout demore 3 segundos
    })
    
    useEffect(()=> {
        
        if(!result){
            setLoading(true)
            task.then((res,err)=>{
                if(err) console.log(err)
                console.log("LOAD DATABASE")
                dispatch(UpdateOdont(res))
                console.log("RESULTADO")
                setResult(res)
                setLoading(false);

            }).catch((error) =>{
                console.log("ERROR FIREBASE")
                dispatch(loadOdonts())
                const odonts = useSelector(state => state.odontologos.odontologos);
                setResult(odonts)
                console.log(error)
            }).finally(() =>{
                console.log('finalizado')
            })
        }
    },[result]);

    //console.log("data")
    //console.log(result)

    const handleSelectOdont = (item) => {
        dispatch(selectedOdont(item.id))
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