import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { color, screens } from '../../utils';
import Signin from './signin';
import Signup from './signup';

const Stack = createStackNavigator();

const AuthStack = () => (
  <Stack.Navigator
    headerMode="none"
    screenOptions={{
      headerTitle: null,
      cardStyle: {
        backgroundColor: color.background,
      },
    }}
  >
    <Stack.Screen
      name={screens.signin.path}
      component={Signin}
    />
    <Stack.Screen
      name={screens.signup.path}
      component={Signup}
    />
  </Stack.Navigator>
);

export default AuthStack;
