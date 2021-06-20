import React from 'react';
import 'react-native-gesture-handler';
import { Provider } from 'react-redux';
import { StatusBar, LogBox } from 'react-native';
import AppNavigator from './src/screens';
import store from './src/store';

export default function App() {
  LogBox.ignoreAllLogs(true);
  return (
    <Provider store={store}>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <AppNavigator />
    </Provider>
  );
}
