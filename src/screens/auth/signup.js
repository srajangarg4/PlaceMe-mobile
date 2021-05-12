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
  confirmPasswordValidator,
  messages, required, validateEmail, validateFirstName, validatePassword, validatePhoneNumber,
} from '../../utils';

const validators = {
  name: [required(messages.required.name), validateFirstName],
  mobile: [required(messages.required.phoneNumber), validatePhoneNumber],
  email: [required(messages.required.email), validateEmail],
  password: [required(messages.required.password), validatePassword],
  confPassword: [required(messages.required.confPassoword), confirmPasswordValidator],
};

const Signup = () => {
  const { connectField, handleSubmit, submitting } = useFormReducer(validators);

  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const phoneNumberRef = useRef(null);
  const passwordRef = useRef(null);
  const confPassRef = useRef(null);

  const dispatch = useDispatch();

  return (
    <Container style={styles.container}>
      <Heading heading={messages.signup.heading} />
      <View style={styles.fieldContainer}>
        {connectField('name', {
          placeholder: 'Name',
          inputRef: nameRef,
          onSubmitEditing: () => {
            emailRef.current?.focus();
          },
        })(Input)}
        {connectField('email', {
          placeholder: 'College email address',
          keyboardType: 'email-address',
          inputRef: emailRef,
          onSubmitEditing: () => {
            phoneNumberRef.current?.focus();
          },
        })(Input)}
        {connectField('mobile', {
          placeholder: 'Mobile Number',
          inputRef: phoneNumberRef,
          onSubmitEditing: () => {
            passwordRef.current?.focus();
          },
        })(Input)}
        {connectField('password', {
          placeholder: 'Password',
          secureTextEntry: true,
          inputRef: passwordRef,
          onSubmitEditing: () => {
            confPassRef.current?.focus();
          },
        })(Input)}
        {connectField('confPassword', {
          placeholder: 'Confirm Password',
          secureTextEntry: true,
          inputRef: confPassRef,
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

export default Signup;
