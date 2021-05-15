import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { color, screens } from '../../../utils';
import Home from './home';

const Stack = createStackNavigator();

const HomeStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name={screens.home.path}
      component={Home}
      options={{
        headerTitle: null,
        headerStyle: {
          backgroundColor: color.background,
        },
        cardStyle: {
          backgroundColor: color.background,
        },
      }}
    />
  </Stack.Navigator>
);
export default HomeStack;
