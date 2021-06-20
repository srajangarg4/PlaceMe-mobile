import React, { useCallback, useState } from 'react';
import { StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import { BottomActionSheet, Button, Container, Input } from '../../../components';
import { useFormReducer } from '../../../hooks';
import { updateAcademicDetails } from '../../../middleware';
import NavigationService from '../../../NavigationService';
import { flattenObject, getDifference, showToast, unflatten } from '../../../utils';
import UpdateTitlePicker from './components/updateTitlePicker';
import FormSection from './formSection';

const validators = {
  secondary_percentage: [],
  secondary_board: [],
  secondary_schoolName: [],
  seniorSecondary_percentage: [],
  seniorSecondary_board: [],
  seniorSecondary_schoolName: [],
  academicGap: [],
  graduation_batch_passingYear: [],
  graduation_batch_startingYear: [],
  graduation_department: [],
  graduation_rollNumber: [],
};

const AcademyDetail = () => {
  const academicDetail = useSelector((state) => state.academicDetail);

  const [showActionSheet, setShowActionSheet] = useState(false);

  const showModal = useCallback(() => setShowActionSheet(true), []);
  const hideModal = useCallback(() => setShowActionSheet(false), []);

  const {
    connectField, handleSubmit, submitting, getFormValues,
  } = useFormReducer(validators, flattenObject(academicDetail));

  const handleFormSubmit = useCallback(({ title, comment }) => {
    const formData = getFormValues();
    const previousData = flattenObject(academicDetail);
    const differernce = getDifference(previousData, formData);
    if (differernce) {
      updateAcademicDetails({
        data: unflatten(differernce),
        comment: comment ?? null,
        title,
      })
        .then((res) => console.log('------, resukt', res));
      showToast('Personal Deatails updated');
      NavigationService.goBack();
    }
  }, [academicDetail, getFormValues]);

  return (
    <Container>
      <BottomActionSheet onRequestClose={hideModal} show={showActionSheet}>
        <UpdateTitlePicker
          onClose={hideModal}
          onSubmit={handleFormSubmit}
        />
      </BottomActionSheet>
      <FormSection title="Secondary Schooling Details" open>
        {connectField('secondary_percentage', {
          placeholder: 'Percentage',
        })(Input)}
        {connectField('secondary_board', {
          placeholder: 'Board Name',
        })(Input)}
        {connectField('secondary_schoolName', {
          placeholder: 'School Name',
        })(Input)}

      </FormSection>
      <FormSection
        title="Senior Secondary Schooling Details"
      >
        {connectField('seniorSecondary_percentage', {
          placeholder: 'Percentage',
        })(Input)}
        {connectField('seniorSecondary_board', {
          placeholder: 'Board Name',
        })(Input)}
        {connectField('seniorSecondary_schoolName', {
          placeholder: 'School Name',
        })(Input)}

      </FormSection>
      <FormSection
        title="Graduation Details"
      >
        {connectField('graduation_batch_startingYear', {
          placeholder: 'Starting Year',
        })(Input)}
        {connectField('graduation_batch_passingYear', {
          placeholder: 'Passing Year',
        })(Input)}

        {connectField('graduation_department', {
          placeholder: 'Department',
        })(Input)}
        {connectField('graduation_rollNumber', {
          placeholder: 'Roll Number',
        })(Input)}
      </FormSection>
      <Button
        text="Submit"
        loading={submitting}
        onPress={handleSubmit(() => {
          showModal();
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
