import React from 'react';
import { View, Text, Button } from 'react-native';
import NavigationService from '../../NavigationService';
import { screens } from '../../utils';

const Signin = () => (
  <View>
    <Text>Signin</Text>
    <Button onPress={() => NavigationService.navigate(screens.signup.path)} title="Move" />
  </View>
);

export default Signin;
