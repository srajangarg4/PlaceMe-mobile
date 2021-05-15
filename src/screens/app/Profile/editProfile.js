import React, { useEffect, useRef } from 'react';
import { StyleSheet, View } from 'react-native';
import { connect, useSelector } from 'react-redux';
import { launchImageLibrary } from 'react-native-image-picker';
import {
  Avatar, Button, Container, Input,
} from '../../../components';
import {
  containerWidth,
  messages, PropTypes, required, showToast, validateEmail, validatePhoneNumber,
} from '../../../utils';
import { useFormReducer } from '../../../hooks';
import NavigationService from '../../../NavigationService';

const validators = {
  name: [required(messages.validation.name)],
  email: [required(messages.validation.enterEmail), validateEmail],
  phone: [required(messages.validation.enterPhoneNumber), validatePhoneNumber],
};

const EditProfile = ({ photoUri, updateImage }) => {
  const {
    connectField, submitting, handleSubmit, change,
  } = useFormReducer(validators);
  const nameRef = useRef(null);
  const dobRef = useRef(null);
  const emailRef = useRef(null);
  const phoneRef = useRef(null);
  const user = useSelector((state) => state.user);
  useEffect(() => {
    Object.keys(validators).forEach((key) => {
      change(key, user[key]);
    });
  }, [change, user]);
  return (
    <Container keyboardAware>
      <Avatar
        imgSrc={{ uri: photoUri }}
        size={100}
        containerStyle={styles.avatar}
        showEdit
        onEditPress={() => {
          launchImageLibrary({
            mediaType: 'photo',
            includeBase64: false,
            maxHeight: 200,
            maxWidth: 200,
          },
          (response) => {
            const { uri } = response;
            updateImage({ photo: uri });
          });
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

EditProfile.defaultProps = {
  photoUri: undefined,
};

EditProfile.propTypes = {
  photoUri: PropTypes.string,
  updateImage: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  photoUri: state.user?.photo,
});

export default connect(mapStateToProps, {
})(EditProfile);

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
