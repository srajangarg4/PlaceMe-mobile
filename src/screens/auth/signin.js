import React, { useRef } from 'react';
import {
  StyleSheet, View,
} from 'react-native';
import {
  Button, Container, Heading, Input, Text,
} from '../../components';
import NavigationService from '../../NavigationService';
import {
  color,
  messages, required, screens, showToast, validateEmail, validatePassword,
} from '../../utils';
import { useFormReducer } from '../../hooks';
import { login } from '../../middleware/auth';

const validators = {
  email: [required(messages.required.email), validateEmail],
  password: [required(messages.required.password), validatePassword],
};

const navigateToSignup = () => NavigationService.navigate(screens.signup.path);

const Signin = () => {
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
          autoCompleteType: 'email',
          inputRef: emailRef,
          onSubmitEditing: () => {
            passwordRef.current?.focus();
          },
          textContentType: 'emailAddress',
        })(Input)}
        {connectField('password', {
          placeholder: 'Password',
          inputRef: passwordRef,
          secureTextEntry: true,
          blurOnSubmit: true,
        })(Input)}
        <Text
          onPress={() => NavigationService.navigate(screens.forgotPassword.path)}
          style={styles.leftAlignedText}
          fontType="semiBold"
        >
          {messages.signin.forgotPassoword}
        </Text>
      </View>
      <Text
        centerAlign
        color={color.primary}
        onPress={() => {
          NavigationService.navigate(screens.mobileSignup.path);
        }}
        fontType="semiBold"
        style={styles.text}
      >
        {messages.signin.mobileSignup}
      </Text>
      <Button
        fullWidth
        text="Submit"
        onPress={handleSubmit(async (data) => {
          await login(data, undefined, (error) => showToast(error));
        })}
        loading={submitting}
        style={styles.button}
      />
      <View style={styles.row}>
        <Text centerAlign onPress={navigateToSignup} fontType="semiBold">
          {messages.signin.noAccount}
        </Text>
        <Text color={color.primary} onPress={navigateToSignup} fontType="semiBold">
          {messages.signin.signup}
        </Text>
      </View>
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
  leftAlignedText: {
    textAlign: 'right',
    fontSize: 14,
  },
  button: {
    marginVertical: 25,
  },
  text: {
    marginBottom: 0,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
});

export default Signin;
