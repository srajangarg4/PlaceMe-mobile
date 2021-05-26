import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Container, Input, Text } from '../../../components';
import { useFormReducer } from '../../../hooks';
import FormSection from './formSection';

const validators = {
  fatherName: [],
  fatherOccupation: [],
  fatherMobile: [],

  motherName: [],
  motherOccupation: [],
  motherMobile: [],

  dob: [],
  bloodGroup: [],

  area: [],
  state: [],
  district: [],
  city: [],
  pincode: [],

  aadharNumber: [],
  aadharPic: [],

  emergencyContact: [],
};

const PersonalDetails = () => {
  const { connectField, submitting, handleSubmit } = useFormReducer(validators);
  return (
    <View style={styles.root}>
      <Container>
        <FormSection title="Basic Details" open>
          {connectField('dob', {
            placeholder: 'Date of birth',
          })(Input)}
          {connectField('bloodGroup', {
            placeholder: 'Blood Group',
          })(Input)}
        </FormSection>
        <FormSection title="Father Details" open>
          {connectField('fatherName', {
            placeholder: 'Name',
          })(Input)}
          {connectField('fatherOccupation', {
            placeholder: 'Occupation',
          })(Input)}
          {connectField('fatherMobile', {
            placeholder: 'Contact Number',
          })(Input)}
        </FormSection>
        <FormSection title="Mother Details" open>
          {connectField('motherName', {
            placeholder: 'Name',
          })(Input)}
          {connectField('motherOccupation', {
            placeholder: 'Occupation',
          })(Input)}
          {connectField('motherMobile', {
            placeholder: 'Contact Number',
          })(Input)}
        </FormSection>
      </Container>

      <View
        style={{
          padding: 10,
        }}
      >
        <Button
          loading={submitting}
          text="Send for verificcation"
          onPress={handleSubmit((data) => {
            console.log('Details', data);
          })}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});

export default PersonalDetails;
