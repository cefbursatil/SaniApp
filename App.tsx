import { StatusBar } from 'expo-status-bar';
import React from 'react'
import { Provider } from 'react-redux';
import store from './store';
import { StyleSheet} from 'react-native';
import MainNavigation from './Navigation';
import { init } from './db';
import WrapperContext from './Components/Wrapper/WrapperContext';

init()
.then(() => console.log('Database initialized'))
.catch(err => {
  console.log('Database failed to connect')
  console.log(err.message)
})

export default function App() {
  return (
    <Provider store={store}>
      <WrapperContext>    
        <MainNavigation/>
        <StatusBar style="auto" />
      </WrapperContext>    
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
