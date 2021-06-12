import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { color, screens } from '../../../utils';
import {} from '../Job';
import Dashboard from './dashboard';

const Stack = createStackNavigator();

const HomeNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
      cardStyle: {
        backgroundColor: color.background,
      },
    }}
  >
    <Stack.Screen name={screens.home.path} component={Dashboard} />
  </Stack.Navigator>
);

export default HomeNavigator;
