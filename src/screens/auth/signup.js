import React, { useRef } from 'react';
import {
  StyleSheet, View,
} from 'react-native';
import {
  Button, Container, Heading, Input,
} from '../../components';
import { useFormReducer } from '../../hooks';
import { signup } from '../../middleware/auth';
import {
  confirmPasswordValidator,
  messages, required, Roles, validateEmail, validateFirstName,
  validatePassword, validatePhoneNumber,
} from '../../utils';

const validators = {
  firstName: [required(messages.required.firstName), validateFirstName],
  lastName: [required(messages.required.lastName), validateFirstName],
  mobile: [required(messages.required.phoneNumber), validatePhoneNumber],
  email: [required(messages.required.email), validateEmail],
  password: [required(messages.required.password), validatePassword],
  confPassword: [required(messages.required.confPassoword), confirmPasswordValidator],
};

const Signup = () => {
  const { connectField, handleSubmit, submitting } = useFormReducer(validators);

  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);
  const emailRef = useRef(null);
  const phoneNumberRef = useRef(null);
  const passwordRef = useRef(null);
  const confPassRef = useRef(null);

  return (
    <Container style={styles.container}>
      <Heading heading={messages.signup.heading} />
      <View style={styles.fieldContainer}>
        {connectField('firstName', {
          placeholder: 'First name',
          inputRef: firstNameRef,
          onSubmitEditing: () => {
            lastNameRef.current?.focus();
          },
        })(Input)}
        {connectField('lastName', {
          placeholder: 'Last name',
          inputRef: lastNameRef,
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
        onPress={handleSubmit(async (data) => {
          const authData = {
            name: {
              firstName: data.firstName,
              lastName: data.lastName,
            },
            email: data.email,
            mobile: data.mobile,
            role: Roles.STUDENT,
          };
          const { password } = data;
          await signup(authData, password);
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
