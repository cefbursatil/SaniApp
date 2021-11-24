import React, {useState} from 'react';
import {View,TextInput,Button,FlatList,Text } from 'react-native';
import styles from './Styles/Styles';
import ModalComponent from './Modal/Modal';
export const List2 = () => {
    const [text,setText] = useState('');
    const handleChangeText = (value) => {
        setText(value);
    }
    const [itemSelected, setItemSelected] = useState({});
    const [modalVisible, setModalVisible] = useState(false);
    const [itemList,setItemList] = useState([]);
    const [actualid,setactualid] = useState(0);
    const [itemComplete,setItemComplete] = useState([]);
    const handleAddItem = () => {
        const item= {
            value: text,
            id: actualid,
        };
        setItemList([...itemList,item]);
        setactualid(actualid+1);
        setText('');
    }   
    const handleConfirmDelete = () => {
        const id = itemSelected.id;
        setItemList(itemList.filter(item => item.id !== id));
        setModalVisible(false);
        setItemSelected({});
    }
    const handleModal = id => {
        setItemSelected(itemList.find(item => item.id === id));
        setModalVisible(true);
    }
    const handleComplete = id => {
        setItemSelected(itemList.find(item => item.id === id));
        setItemComplete([...itemComplete,itemList.find(item => item.id === id)]);
        setItemList(itemList.filter(item => item.id !== id));
      }
    return (
        <View>
            <View style={styles.inputContainer}>
                <TextInput
                placeholder="Item de lista"
                style={styles.input}
                onChangeText={handleChangeText}
                value={text}
                />
                <Button
                title="ADD"
                onPress={handleAddItem}
                />
            </View>
            <View style={styles.items}>
            <Text>Añadidas</Text>
            <FlatList
            data={itemList}
            keyExtractor={item => item.id}
            renderItem={(data) => (
                <View style={styles.item} key={data.item.id}>
                <Text>{data.item.value}</Text>
                <Button title="X" onPress={() => handleModal(data.item.id)} />
                <Button title="✓" onPress={() => handleComplete(data.item.id)} />
                </View>
            )}
            />
            </View>
            <View style={styles.items}>
                <Text>Completadas</Text>
                <FlatList
                data={itemComplete}
                keyExtractor={item => item.id}
                renderItem={(data) => (
                    <View style={styles.item} key={data.item.id}>
                    <Text>{data.item.value}</Text>
                    </View>
                )}
                />
            </View>
            <ModalComponent
            itemSelected ={itemSelected}
            handleConfirmDelete = {handleConfirmDelete}
            modalVisible = {modalVisible}
            />              
         </View>    
        
    )
}
