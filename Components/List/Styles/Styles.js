import { StyleSheet } from "react-native";


export default StyleSheet.create({
    screen: {
      padding: 30,
      backgroundColor: '#F0F0F0',
      flex: 1,
    },
    inputContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginTop:50,
    },
    input: {
      borderBottomColor: 'black',
      borderBottomWidth: 1,
      width: 200,
      margin:20,
    },
    inputError: {
      color: 'red',
    },
    items: {
      marginTop: 20,
    },
    item: {
      padding: 10,
      marginTop: 10,
      marginBottom: 10,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      borderColor: 'black',
      borderWidth: 1,
      borderRadius: 5,
      backgroundColor: 'white',
    },
    modalContainer: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    modalContent: {
      padding: 30,
      backgroundColor: 'white',
      alignSelf: 'center',
      alignItems: 'center',
      justifyContent: 'center',
    },
    modalMessage: {
      fontSize: 18,
    },
    modalTitle: {
      fontSize: 30,
      marginTop: 10,
      marginBottom: 20,
    },
    shadow: {
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    }
  });
