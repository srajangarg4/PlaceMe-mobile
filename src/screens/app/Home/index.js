import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { color, screens } from '../../../utils';
import { Dashboard } from '../dashboard';

const Stack = createStackNavigator();

const HomeStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name={screens.home.path}
      component={Dashboard}
      options={{
        headerStyle: {
          backgroundColor: color.background,
          elevation: 14,
        },
        cardStyle: {
          backgroundColor: color.background,
        },
      }}
    />
  </Stack.Navigator>
);
export default HomeStack;
