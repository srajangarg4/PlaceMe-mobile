import React, { useCallback, useEffect } from 'react';
import { View } from 'react-native';
import { useDispatch } from 'react-redux';
import { login } from '../actions';
import { AUTH_STATE, getData } from '../AsyncStorage';
import { Loader } from '../components';
import { color } from '../utils';

const Middleware = () => {
  const dispatch = useDispatch();

  const onStartup = useCallback(
    async () => {
      const data = await getData(AUTH_STATE);
      const { token } = { ...data };
      if (token) {
        dispatch(login(data));
      }
    },
    [dispatch],
  );

  useEffect(() => {
    onStartup();
  }, [onStartup]);

  return (
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
};

export default Middleware;
