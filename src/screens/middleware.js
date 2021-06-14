import React from 'react';
import { View } from 'react-native';
import { Loader } from '../components';
import { color } from '../utils';

const Middleware = () => (
  <View
    style={{
      width: '100%',
      height: '100%',
      alignSelf: 'center',
      justifyContent: 'center',
    }}
  >
    <Loader show color={color.primary} size="large" />
  </View>
);

export default Middleware;
