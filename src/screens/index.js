import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { screens } from '../utils';
import NavigationService from '../NavigationService';
import AuthStack from './auth';

const Stack = createStackNavigator();

const AppNavigator = () => (
  <NavigationContainer
    ref={(navigatorRef) => {
      NavigationService.setTopLevelNavigator(navigatorRef);
    }}
  >
    <Stack.Navigator
      headerMode="none"
    >
      <Stack.Screen
        name={screens.authStack.path}
        component={AuthStack}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

export default AppNavigator;
