import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { color, screens } from '../../utils';
import Signin from './signin';
import Signup from './signup';
import OnBoarding from './onBoarding';

const Stack = createStackNavigator();

const AuthStack = () => (
  <Stack.Navigator
    screenOptions={{
      headerTitle: null,
      headerStyle: {
        backgroundColor: color.background,
        elevation: 0,
      },
      headerTintColor: color.secondary,
      cardStyle: {
        backgroundColor: color.background,
      },
    }}
  >
    <Stack.Screen
      options={{ headerShown: false }}
      name={screens.onBoarding.path}
      component={OnBoarding}
    />
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
