import React, { useRef } from 'react';
import { StyleSheet, View } from 'react-native';
import {
  Button, Container, Input, Text,
} from '../../../components';
import {
  confirmPasswordValidator, containerWidth, messages, required, showToast, validatePassword,
} from '../../../utils';
import { useFormReducer } from '../../../hooks/useFormReducer';
import NavigationService from '../../../NavigationService';

const validators = {
  oldPassword: [required(messages.required.oldPassword), validatePassword],
  password: [required(messages.required.newPassword), validatePassword],
  confirmPassword: [
    required(messages.required.confPassoword),
    confirmPasswordValidator,
  ],
};
const ChangePassword = () => {
  const { connectField, handleSubmit, submitting } = useFormReducer(validators);
  const oldPasswordRef = useRef(null);
  const newPasswordRef = useRef(null);
  const confPasswordRef = useRef(null);
  return (
    <Container keyboardAware>
      {connectField('oldPassword', {
        placeholder: 'Old Password',
        secureTextEntry: true,
        style: styles.input,
        inputRef: oldPasswordRef,
        onSubmitEditing: () => newPasswordRef.current?.focus(),
      })(Input)}
      {connectField('password', {
        placeholder: 'New Password',
        secureTextEntry: true,
        style: styles.input,
        inputRef: newPasswordRef,
        onSubmitEditing: () => confPasswordRef.current?.focus(),
      })(Input)}
      {connectField('confirmPassword', {
        placeholder: 'Confirm Password',
        secureTextEntry: true,
        style: styles.input,
        inputRef: confPasswordRef,
        returnType: 'go',
        blurOnSubmit: true,
      })(Input)}
      <Text fontSize={11} style={[{ marginHorizontal: 3, marginBottom: 10 }]}>
        <Text fontSize={11} fontType="semiBold">
          {messages.note}
        </Text>
        {messages.passwordDescription}
      </Text>
      <View style={styles.button}>
        <Button
          text="Save"
          onPress={handleSubmit(() => {
            showToast('Password saved sucessfully', 'SHORT');
            NavigationService.goBack();
          })}
          loading={submitting}
        />
      </View>
    </Container>
  );
};

export default ChangePassword;

const styles = StyleSheet.create({
  button: {
    position: 'absolute',
    bottom: 25,
    width: containerWidth,
    alignSelf: 'center',
  },
  container: {
    marginVertical: 30,
  },
  input: {
    marginVertical: 8,
  },
});
