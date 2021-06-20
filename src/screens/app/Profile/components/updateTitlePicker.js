import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Icon, Input, Text } from '../../../../components';
import { useFormReducer } from '../../../../hooks';
import { color, PropTypes, required } from '../../../../utils';

const UpdateTitlePicker = ({ onClose, onSubmit }) => {
  const { connectField, submitting, handleSubmit } = useFormReducer({
    title: [required('This is required')],
    comment: [],
  });
  return (
    <View style={styles.rootModal}>
      <View style={styles.modalHeading}>
        <Text style={{ flex: 1 }} />
        <Icon name="times-circle" color="red" size={18} onPress={onClose} />
      </View>
      <View>
        {connectField('title', {
          placeholder: 'Title',
        })(Input)}
        {connectField('comment', {
          placeholder: 'Comment',
        })(Input)}
      </View>
      <Button
        loading={submitting}
        text="Submit"
        onPress={handleSubmit((formData) => {
          onSubmit(formData);
        })}
      />
    </View>
  );
};

export default UpdateTitlePicker;

UpdateTitlePicker.propTypes = {
  onClose: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
  rootModal: {
    backgroundColor: color.white,
    marginHorizontal: 0,
    borderTopEndRadius: 12,
    borderTopLeftRadius: 12,
    padding: 20,
  },
  modalHeading: {
    flexDirection: 'row',
    alignContent: 'center',
    alignItems: 'center',
  },
});
