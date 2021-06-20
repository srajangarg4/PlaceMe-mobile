import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Picker as RNPicker } from '@react-native-picker/picker';
import {
  color, fonts, PropTypes, refType, viewStyleType,
} from '../../utils';
import HorizontalLine from '../horizontalLine';
import Text from '../text';

const getLineColor = (value, showError) => {
  if (value) {
    return color.secondary;
  } if (showError) return color.error;
  return color.ultraLightGray;
};

const Picker = ({
  onChange,
  items = [],
  value,
  inputRef,
  showError,
  style,
  errorMessage,
  placeholder,
}) => (
  <View style={[style]}>
    <RNPicker
      style={[styles.picker]}
      onValueChange={(v) => {
        onChange(v);
      }}
      selectedValue={value}
      mode="dialog"
      ref={(ref) => {
        if (inputRef) {
          // eslint-disable-next-line no-param-reassign
          inputRef.current = ref;
        }
      }}
      focusable
    >
      <RNPicker.Item value="" label={placeholder} color="rgb(159,159,159)" />
      {items.map((i, index) => (
        <RNPicker.Item value={i} label={i} key={index.toString()} />
      ))}
    </RNPicker>
    <HorizontalLine
      lineColor={getLineColor(value, showError)}
      style={styles.line}
    />
    <Text type="hs" style={[styles.errorText]}>
      {showError && errorMessage ? errorMessage : ''}
    </Text>
  </View>
);

Picker.defaultProps = {
  inputRef: undefined,
  showError: false,
  style: {},
  errorMessage: undefined,
  placeholder: undefined,
  value: undefined,
};
Picker.propTypes = {
  onChange: PropTypes.func.isRequired,
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
  value: PropTypes.string,
  inputRef: refType,
  showError: PropTypes.bool,
  style: viewStyleType,
  errorMessage: PropTypes.string,
  placeholder: PropTypes.string,
};

export default Picker;

const styles = StyleSheet.create({
  picker: {
    paddingLeft: 0,
  },
  line: {
    marginVertical: 0,
    height: 1,
  },
  errorText: {
    color: color.error,
    paddingHorizontal: 3,
    fontFamily: fonts.regular,
    marginBottom: 2,
    height: 18,
  },
});
