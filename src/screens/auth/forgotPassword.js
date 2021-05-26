import React from 'react';
import { StyleSheet } from 'react-native';
import {
  Button, Container, Heading, Input,
} from '../../components';
import { useFormReducer } from '../../hooks/useFormReducer';
import {
  messages,
  required,
  showToast,
  validateEmail,
} from '../../utils';

const validators = {
  email: [required(messages.validation.enterEmail), validateEmail],
};

const ForgotPassword = () => {
  const { submitting, connectField, handleSubmit } = useFormReducer(validators);
  return (
    <Container>
      <Heading heading={messages.forgotPassoword.heading} />
      {connectField('email', {
        keyboardType: 'email-address',
        placeholder: messages.forgotPassoword.emailPlaceholder,
        style: styles.field,
      })(Input)}
      <Button
        text={messages.forgotPassoword.buttonLabel}
        textType="h5"
        loading={submitting}
        onPress={handleSubmit(() => {
          showToast(
            messages.forgotPassoword.linkSent,
            'SHORT',
          );
        })}
      />
    </Container>
  );
};

const styles = StyleSheet.create({
  field: {
    marginBottom: 5,
  },
});

export default ForgotPassword;
