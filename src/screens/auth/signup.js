import React from 'react';
import {
  StyleSheet,
} from 'react-native';
import { Button, Container, TextInput } from '../../components';
import { useFormReducer } from '../../hooks';

const validators = {
  name: [],
  password: [],
};

const Signup = () => {
  const { connectField } = useFormReducer(validators);
  return (
    <Container style={styles.container} centerAligned>
      {connectField('name', {
        placeholder: 'Name',
      })(TextInput)}
      {connectField('password', {
        placeholder: 'Password',
      })(TextInput)}
      <Button fullWidth text="Submit" />
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 15,
  },
});

export default Signup;
