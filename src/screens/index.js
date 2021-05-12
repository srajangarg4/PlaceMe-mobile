import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useSelector } from 'react-redux';
import { screens } from '../utils';
import NavigationService from '../NavigationService';
import AuthStack from './auth';
import { AUTH_STATE, getData } from '../AsyncStorage';
import Middleware from './middleware';
import AppStack from './app';

const Stack = createStackNavigator();

const modules = { middleware: 'middleware', auth: 'auth', app: 'app' };

const AppNavigator = () => {
  const [module, setModule] = useState(modules.middleware);
  const auth = useSelector((state) => state.auth);

  const checkLogin = async () => {
    let data = { ...auth };
    if (!auth?.token) {
      data = await getData(AUTH_STATE);
    }
    if (data?.token) {
      setModule(modules.app);
    } else {
      setModule(modules.auth);
    }
  };

  useEffect(() => {
    checkLogin();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [auth]);
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
