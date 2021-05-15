import React, { useRef } from 'react';
import { StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import {
  Button,
  Container,
  Heading,
  PhoneInput,
  Text,
} from '../../components';
import NavigationService from '../../NavigationService';
import {
  color,
  messages,
  required,
  screens,
  validatePhoneNumber,
} from '../../utils';
import { useFormReducer } from '../../hooks';
import { updateAuth as updateUserAction } from '../../actions';

const validators = {
  phoneNumber: [
    required(messages.required.phoneNumber),
    validatePhoneNumber,
  ],
};
const OtpSignup = () => {
  const { connectField, handleSubmit, submitting } = useFormReducer(validators);
  const phoneNumberRef = useRef(null);

  return (
    <Container>
      <Heading heading={messages.signinMobile.heading} />
      {connectField('phoneNumber', {
        placeholder: messages.signinMobile.phonePlaceholder,
        keyboardType: 'number-pad',
        returnType: 'done',
        inputRef: phoneNumberRef,
        blurOnSubmit: true,
        style: styles.item,
      })(PhoneInput)}
      <Button
        onPress={handleSubmit(() => NavigationService.navigate(screens.otp.path))}
        text={messages.signinMobile.label}
        textType="h5"
        loading={submitting}
        style={styles.item}
      />
      <Text
        centerAlign
        color={color.primary}
        onPress={() => {
          NavigationService.goBack();
        }}
        style={styles.item}
        fontType="semiBold"
      >
        {messages.signinMobile.signinEmail}
      </Text>
    </Container>
  );
};

export default connect(null, {
  updateUser: updateUserAction,
})(OtpSignup);

const styles = StyleSheet.create({
  item: {
    marginBottom: 25,
  },
});
