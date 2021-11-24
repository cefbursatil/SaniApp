import React from 'react'
import { Modal,Text,View, Button } from 'react-native'
import styles from '../Styles/Styles'
export const ModalComponent = ({itemSelected,handleConfirmDelete,modalVisible}) => {


    return (
        <Modal animationType="slide" visible={modalVisible} transparent>
        <View style={styles.modalContainer}>
          <View style={[styles.modalContent, styles.shadow]}>
            <Text style={styles.modalMessage}>¿Está seguro que desea borrar?</Text>
            <Text style={styles.modalTitle}>{itemSelected.value}</Text>
            <View>
              <Button
                onPress={handleConfirmDelete}
                title="CONFIRMAR"
              />
            </View>
          </View>
        </View>
      </Modal>
    )
}
export default ModalComponent