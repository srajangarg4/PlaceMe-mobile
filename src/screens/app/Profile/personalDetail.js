import React, { useCallback, useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { useSelector } from 'react-redux';
import bloodGroups from '../../../assets/data/bloodGroups';
import {
  BottomActionSheet,
  Button,
  Container,
  DatePicker,
  Input,
  Picker,
} from '../../../components';
import { useFormReducer } from '../../../hooks';
import { updatePersonalDetails } from '../../../middleware';
import NavigationService from '../../../NavigationService';
import { flattenObject, getDifference, required, showToast, unflatten, validatePhoneNumber } from '../../../utils';
import UpdateTitlePicker from './components/updateTitlePicker';
import FormSection from './formSection';

const validators = {
  fatherDetails_name: [],
  fatherDetails_occupation: [],
  fatherDetails_mobile: [],

  motherDetails_name: [],
  motherDetails_occupation: [],
  motherDetails_mobile: [required('This is required'), validatePhoneNumber],

  dob: [],
  bloodGroup: [],

  address_area: [],
  address_state: [],
  address_district: [],
  address_city: [],
  address_pincode: [],

  emergencyContact: [],

  // aadharNumber: [],
  // aadharPic: [],

};

const PersonalDetails = () => {
  const personalDetail = useSelector((state) => state.personalDetail);
  const [showActionSheet, setShowActionSheet] = useState(false);

  const {
    connectField, submitting, handleSubmit, change, getFormValues,
  } = useFormReducer(validators);

  const showModal = useCallback(() => setShowActionSheet(true), []);
  const hideModal = useCallback(() => setShowActionSheet(false), []);

  const handleFormSubmit = useCallback(({ title, comment }) => {
    const formData = getFormValues();
    const previousData = flattenObject(personalDetail);
    const differernce = getDifference(previousData, formData);
    if (differernce) {
      updatePersonalDetails({
        data: unflatten(differernce),
        comment: comment ?? null,
        title,
      })
        .then((res) => console.log('------, resukt', res));
      showToast('Personal Deatails updated');
      NavigationService.goBack();
    }
  }, [getFormValues, personalDetail]);

  useEffect(() => {
    const data = flattenObject(personalDetail);
    Object.keys(data).forEach((key) => {
      change(key, data[key]);
    });
  }, [personalDetail, change]);

  return (
    <View style={styles.root}>
      <Container>
        <BottomActionSheet onRequestClose={hideModal} show={showActionSheet}>
          <UpdateTitlePicker
            onClose={hideModal}
            onSubmit={handleFormSubmit}
          />
        </BottomActionSheet>
        <FormSection title="Basic Details" open>
          {connectField('dob', {
            placeholder: 'Date of birth',
          })(DatePicker)}
          {connectField('bloodGroup', {
            placeholder: 'Blood Group',
            items: bloodGroups,
          })(Picker)}
        </FormSection>
        <FormSection title="Father Details" open>
          {connectField('fatherDetails_name', {
            placeholder: 'Name',
          })(Input)}
          {connectField('fatherDetails_occupation', {
            placeholder: 'Occupation',
          })(Input)}
          {connectField('fatherDetails_mobile', {
            placeholder: 'Contact Number',
          })(Input)}
        </FormSection>
        <FormSection title="Mother Details" open>
          {connectField('motherDetails_name', {
            placeholder: 'Name',
          })(Input)}
          {connectField('motherDetails_occupation', {
            placeholder: 'Occupation',
          })(Input)}
          {connectField('motherDetails_mobile', {
            placeholder: 'Contact Number',
          })(Input)}
        </FormSection>
        <FormSection title="Address Details">
          {connectField('address_area', {
            placeholder: 'Area',
          })(Input)}
          {connectField('address_state', {
            placeholder: 'State',
          })(Input)}
          {connectField('address_district', {
            placeholder: 'District',
          })(Input)}
          {connectField('address_city', {
            placeholder: 'City',
          })(Input)}
          {connectField('address_pincode', {
            placeholder: 'Pincode',
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
          onPress={handleSubmit(() => showModal())}
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
