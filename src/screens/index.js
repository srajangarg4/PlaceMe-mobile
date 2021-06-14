import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { screens } from '../utils';
import NavigationService from '../NavigationService';
import AuthStack from './auth';
import Middleware from './middleware';
import { AppStack } from './app';

const Stack = createStackNavigator();

const modules = { middleware: 'middleware', auth: 'auth', app: 'app' };

// UserService.loginUser('17egjcs161@gitjaipur.com', 'Papa@1234').then((res) => {
//   console.log('Login Result', res.result.otherDetails);
// });

const AppNavigator = () => {
  const [module, setModule] = useState(modules.middleware);

  useEffect(() => {
    // console.log('User', user);
    setModule(modules.app);
  }, []);

  return (
    <NavigationContainer
      ref={(navigatorRef) => {
        NavigationService.setTopLevelNavigator(navigatorRef);
      }}
    >
      <Stack.Navigator
        headerMode="none"
      >
        {module === modules.middleware && (
        <Stack.Screen
          name={screens.middleware.path}
          component={Middleware}
        />
        )}
        {module === modules.auth && (
        <Stack.Screen
          name={screens.authStack.path}
          component={AuthStack}
        />
        )}
        {module === modules.app && (
        <Stack.Screen
          name={screens.appStack.path}
          component={AppStack}
        />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
