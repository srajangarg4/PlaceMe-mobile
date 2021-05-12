import React, { useRef } from 'react';
import {
  StyleSheet, View,
} from 'react-native';
import { useDispatch } from 'react-redux';
import { updateAuth } from '../../actions';
import {
  Button, Container, Heading, Input,
} from '../../components';
import { useFormReducer } from '../../hooks';
import {
  messages, required, validateEmail, validatePassword,
} from '../../utils';

const validators = {
  email: [required(messages.required.email), validateEmail],
  password: [required(messages.required.password), validatePassword],
};

const Signin = () => {
  const dispatch = useDispatch();
  const { connectField, handleSubmit, submitting } = useFormReducer(validators);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  return (
    <Container style={styles.container}>
      <Heading heading={messages.signin.heading} />
      <View style={styles.fieldContainer}>

        {connectField('email', {
          placeholder: 'Email address',
          keyboardType: 'email-address',
          inputRef: emailRef,
          onSubmitEditing: () => {
            passwordRef.current?.focus();
          },
        })(Input)}
        {connectField('password', {
          placeholder: 'Password',
          inputRef: passwordRef,
          secureTextEntry: true,
          blurOnSubmit: true,
        })(Input)}
      </View>
      <Button
        fullWidth
        text="Submit"
        onPress={handleSubmit(() => {
          dispatch(updateAuth({ token: '123' }));
        })}
        loading={submitting}
      />
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 15,
  },
  fieldContainer: {
    marginBottom: 25,
  },
});

export default Signin;
