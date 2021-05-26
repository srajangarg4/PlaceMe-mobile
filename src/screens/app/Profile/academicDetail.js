import React from 'react';
import { StyleSheet } from 'react-native';
import { Button, Container, Input } from '../../../components';
import { useFormReducer } from '../../../hooks';
import FormSection from './formSection';

const validators = {
  secondaryPercentage: [],
  secondaryBoard: [],
  secondarySchoolName: [],
  secondaryMarksheet: [],
  seniorSecondaryPercentage: [],
  seniorSecondaryBoard: [],
  seniorSecondarySchoolName: [],
  seniorSecondaryMarksheet: [],
  graduationRollNumber: [],
};

const AcademyDetail = () => {
  const { connectField, handleSubmit, submitting } = useFormReducer(validators);
  return (
    <Container>
      <FormSection title="Secondary Schooling Details" open>
        {connectField('secondaryPercentage', {
          placeholder: 'Percentage',
        })(Input)}
        {connectField('secondaryBoard', {
          placeholder: 'Board Name',
        })(Input)}
        {connectField('secondarySchoolName', {
          placeholder: 'School Name',
        })(Input)}
        {connectField('secondaryMarksheet', {
          placeholder: 'Marksheet',
        })(Input)}
      </FormSection>
      <FormSection
        connectField={connectField}
        title="Senior Secondary Schooling Details"
      >
        {connectField('secondaryPercentage', {
          placeholder: 'Percentage',
        })(Input)}
        {connectField('secondaryBoard', {
          placeholder: 'Board Name',
        })(Input)}
        {connectField('secondarySchoolName', {
          placeholder: 'School Name',
        })(Input)}
        {connectField('secondaryMarksheet', {
          placeholder: 'Marksheet',
        })(Input)}
      </FormSection>
      <Button
        text="Submit"
        loading={submitting}
        onPress={handleSubmit((data) => {
          console.log('Data', data);
        })}
        style={styles.button}
      />
    </Container>
  );
};

const styles = StyleSheet.create({
  button: {
    marginVertical: 15,
  },
});

export default AcademyDetail;
