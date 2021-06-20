import React from 'react';
import { StyleSheet, View } from 'react-native';
import RNDatePicker from 'react-native-datepicker';
import {
  color,
  fonts,
  PropTypes,
  refType,
  viewStyleType,
} from '../../utils';
import HorizontalLine from '../horizontalLine';
import Text from '../text';

const getLineColor = (value, showError) => {
  if (value) return color.secondary;
  if (showError) return color.error;
  return color.ultraLightGray;
};

const DatePicker = ({
  value,
  placeholder,
  style,
  onChange,
  showError,
  errorMessage,
  inputRef,
  onSubmitEditing,
  ...props
}) => (
  <View style={[styles.container, style]}>
    <Text style={[styles.animatedtext]}>{!value ? '' : placeholder}</Text>
    <RNDatePicker
      customStyles={{
        dateInput: {
          borderWidth: 0,
          flex: 1,
          alignItems: 'flex-start',
          justifyContent: 'flex-end',
          marginBottom: 15,
          paddingLeft: 3,
        },
        dateIcon: {
          width: 25,
          height: 25,
        },
        dateText: {
          color: color.primary,
          fontFamily: fonts.semiBold,
          fontSize: 15,
        },
        placeholderText: {
          fontSize: 15,
          color: color.textGray,
          fontFamily: fonts.semiBold,
        },
      }}
      style={[styles.datePicker]}
      placeholder={placeholder}
      date={value}
      onDateChange={(date) => {
        onChange(date);
        if (onSubmitEditing) {
          onSubmitEditing();
        }
      }}
      format="DD/MM/YYYY"
      ref={inputRef}
      {...props}
    />
    <HorizontalLine
      lineColor={getLineColor(value, showError)}
      style={{ marginVertical: 0, height: 1 }}
    />

    <Text
      type="hs"
      style={[styles.errorText]}
    >
      {showError && errorMessage ? errorMessage : ''}
    </Text>
  </View>
);

DatePicker.defaultProps = {
  style: {},
  showError: false,
  errorMessage: undefined,
  inputRef: undefined,
  onSubmitEditing: undefined,
  value: undefined,
};
DatePicker.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf([Date])]),
  placeholder: PropTypes.string.isRequired,
  style: viewStyleType,
  onChange: PropTypes.func.isRequired,
  showError: PropTypes.bool,
  errorMessage: PropTypes.string,
  inputRef: refType,
  onSubmitEditing: PropTypes.func,
};

export default DatePicker;

const styles = StyleSheet.create({
  container: {},
  animatedtext: {
    marginLeft: 3,
    color: color.textGray,
    fontSize: 12,
    fontFamily: fonts.semiBold,
  },
  errorText: {
    color: color.error,
    paddingHorizontal: 3,
    fontFamily: fonts.regular,
    marginBottom: 2,
    height: 22,
  },
  datePicker: {
    width: '100%',
  },
});
