import { StatusBar } from 'expo-status-bar';
import React from 'react'
import { Provider } from 'react-redux';
import store from './store';
import { StyleSheet} from 'react-native';
import MainNavigation from './Navigation';
export default function App() {
  return (
    <Provider store={store}>
      <MainNavigation/>
      <StatusBar style="auto" />
    </Provider>
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
