import React, { useState, useEffect } from 'react';
import {View,Text,Button,TextInput} from 'react-native';

import { useSelector } from 'react-redux';
import { getFirestore1 } from '../Services/getFirestore1';
//import AppLoading from 'expo-app-loading';
//import useFonts from '../hooks/useFonts';
export const ContactOdont = ({ navigation }) => {
    const odont = useSelector(state=>state.odontologos.filteredOdont)
    const {nombre,Consultorio,email,tel} = odont[0]
    const [itemList,setItemList] = useState([]);
    const [actualid,setactualid] = useState(0);
    const [name,setName] = useState('');
    const [emailc,setEmail] = useState('');
    const [telc,setTel] = useState('');
    const [result,setResult] = useState(null);


  
    //const {nombre,Consultorio,Especialidad} = route.params.odont

    const handleChangeName = (value) => {
        setName(value);
    }
    const handleChangeEmail = (value) => {
        setEmail(value);
    }
    const handleChangeTel = (value) => {
        setTel(value);
    }
    const handleAddItem = () => {
        console.log("AddData")
        const item= {
            name: name,
            email: emailc,
            tel: telc,
        };
        const task = new Promise((resolve,reject) => {  
            const db =getFirestore1();
            console.log("TASK")
            db.collection('Clientes').add({
                name: name,
                email: emailc,
                tel: telc,
            }).then(resp => resolve(resp))
        })
        task.then((res,err)=>{
            if(err) console.log(err)
            setResult(result)
            setItemList(item);
            setResult(item);
            setName('');
            setEmail('');
            setTel('');
            console.log("AddData ok")
            console.log("RESULTADO")

        }).catch((error) =>{
            console.log("ERROR FIREBASE")

        }).finally(() =>{
            console.log('finalizado')
        })

    } 
   

    return (
                <View>
                    {!result &&<View>
                        <Text>Danos tus datos para que el odontologo te contacte</Text>
                        <TextInput
                            placeholder="Nombre"

                            onChangeText={handleChangeName}
                            value={name}
                        />
                        <TextInput
                            placeholder="Email"

                            onChangeText={handleChangeEmail}
                            value={emailc}
                        />
                        <TextInput
                            placeholder="Telefono"

                            onChangeText={handleChangeTel}
                            value={telc}
                        />
                        <Button
                            title="Recibir Datos Odontologo"
                            onPress={handleAddItem}
                            color="#841584"
                            accessibilityLabel="Enviar Info y recibir datos de odontologo"
                        />
                    </View>}
                    {result &&<View>
                        <Text>Nombre: {nombre}</Text> 
                        <Text>Consultorio: {Consultorio}</Text> 
                        <Text>Email: {email}</Text> 
                        <Text>tel: {tel}</Text> 
                        </View>
                    } 
                </View>
            )

};