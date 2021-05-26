import React, { useEffect, useRef } from 'react';
import { StyleSheet, View } from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';
import { Avatar, Button, Container, Input } from '../../../components';
import {
  containerWidth,
  messages,
  required,
  showToast,
  validateEmail,
  validatePhoneNumber,
} from '../../../utils';
import { useFormReducer } from '../../../hooks';
import NavigationService from '../../../NavigationService';

const validators = {
  name: [required(messages.validation.name)],
  email: [required(messages.validation.enterEmail), validateEmail],
  phone: [required(messages.validation.enterPhoneNumber), validatePhoneNumber],
};

const uri =
  'https://www.atlassian.com/dam/jcr:ba03a215-2f45-40f5-8540-b2015223c918/Max-R_Headshot%20(1).jpg';

const EditProfile = () => {
  const { connectField, submitting, handleSubmit } = useFormReducer(validators);
  const nameRef = useRef(null);
  const dobRef = useRef(null);
  const emailRef = useRef(null);
  const phoneRef = useRef(null);
  useEffect(() => {}, []);
  return (
    <Container keyboardAware>
      <Avatar
        imgSrc={{ uri }}
        size={100}
        containerStyle={styles.avatar}
        showEdit
        onEditPress={() => {
          launchImageLibrary(
            {
              mediaType: 'photo',
              includeBase64: false,
              maxHeight: 200,
              maxWidth: 200,
            },
            (response) => {
              console.log('Response of image', response);
            },
          );
        }}
      />
      <View style={styles.fieldContainer}>
        {connectField('name', {
          placeholder: 'Name',
          inputRef: nameRef,
          onSubmitEditing: () => {
            dobRef.current?.onPressDate();
          },
          style: styles.input,
        })(Input)}
        {connectField('email', {
          placeholder: 'Email address',
          inputRef: emailRef,
          onSubmitEditing: () => {
            phoneRef.current?.focus();
          },
          keyboardType: 'email-address',
          style: styles.input,
        })(Input)}
        {connectField('phone', {
          placeholder: 'Phone number',
          inputRef: phoneRef,
          blurOnSubmit: true,
          keyboardType: 'number-pad',
          style: styles.input,
        })(Input)}
      </View>
      <View style={styles.button}>
        <Button
          text="Save"
          onPress={handleSubmit(() => {
            showToast('Data updated sucessfully', 'SHORT');
            NavigationService.goBack();
          })}
          loading={submitting}
        />
      </View>
    </Container>
  );
};

EditProfile.defaultProps = {};

EditProfile.propTypes = {};

export default EditProfile;

const styles = StyleSheet.create({
  container: {},
  avatar: {
    alignSelf: 'center',
  },
  input: {
    marginVertical: 5,
  },
  fieldContainer: {
    marginTop: 30,
  },
  button: {
    position: 'absolute',
    bottom: 25,
    width: containerWidth,
    alignSelf: 'center',
  },
});
