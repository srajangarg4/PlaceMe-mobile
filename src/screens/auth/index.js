import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { color, screens } from '../../utils';
import Signin from './signin';
import Signup from './signup';
import Onboarding from './onboarding';
import ForgotPassword from './forgotPassword';
import otpSignup from './otpSignup';
import OTP from './otp';

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
      component={Onboarding}
    />
    <Stack.Screen
      name={screens.signin.path}
      component={Signin}
    />
    <Stack.Screen
      name={screens.signup.path}
      component={Signup}
    />
    <Stack.Screen
      name={screens.forgotPassword.path}
      component={ForgotPassword}
    />
    <Stack.Screen
      name={screens.mobileSignup.path}
      component={otpSignup}
    />
    <Stack.Screen
      name={screens.otp.path}
      component={OTP}
    />

  </Stack.Navigator>
);

export default AuthStack;
