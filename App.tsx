import { StatusBar } from 'expo-status-bar';
import React, { Fragment } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Navigation from './Navigation/Navigation';
export default function App() {
  return (
    <Fragment>
      <Navigation/>
      <StatusBar style="auto" />
    </Fragment>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
