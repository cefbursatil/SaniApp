import React from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';
import colors from '../../../constants/colors';

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>SANI Odontologos</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 90,
    paddingTop: 36,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTitle: {
    color: 'black' ,
    fontSize: 22,
    fontFamily: "GothamBook"
  }
});

export default Header;