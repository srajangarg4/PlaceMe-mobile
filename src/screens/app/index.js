import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { color, screens } from '../../utils';
import Dashboard from './dashboard';

const Stack = createStackNavigator();

const AppStack = () => (
  <Stack.Navigator
    screenOptions={{
      headerTitle: null,
      headerStyle: {
        backgroundColor: color.background,
        elevation: 0,
      },
      headerTintColor: color.primary,
      cardStyle: {
        backgroundColor: color.background,
      },
    }}
  >
    <Stack.Screen
      name={screens.dashboard.path}
      component={Dashboard}
    />
  </Stack.Navigator>
);

export default AppStack;
