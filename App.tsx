import { StatusBar } from 'expo-status-bar';
import React, { Fragment } from 'react';
import { StyleSheet} from 'react-native';
import MainNavigation from './Navigation';
export default function App() {
  return (
    <Fragment>
      <MainNavigation/>
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
