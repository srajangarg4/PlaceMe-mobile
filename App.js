import React from 'react';
import 'react-native-gesture-handler';
import { Provider } from 'react-redux';
import { StatusBar } from 'react-native';
import AppNavigator from './src/screens';
import store from './src/store';

export default function App() {
  console.log('App');
  return (
    <Provider store={store}>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <AppNavigator />
    </Provider>
  );
}
