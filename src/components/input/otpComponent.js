import React, { useRef } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';
import { color } from '../../utils/theme';
import { refType } from '../../utils/propTypes';

export default function OTPComponent({
  OTP,
  OTPLength,
  onOTPChange,
  OTPref,
  autoFocus,
  keyboardType,
}) {
  const textInputRef = useRef(OTPref);
  return (
    <TouchableOpacity
      onPress={() => textInputRef?.current?.focus()}
      activeOpacity={1.0}
    >
      <TextInput
        style={styles.inputField}
        caretHidden
        onChangeText={(currentOTP) => onOTPChange(currentOTP)}
        maxLength={OTPLength}
        keyboardType={keyboardType}
        ref={textInputRef}
        autoFocus={autoFocus}
      />
      <OTPDigits OTP={OTP} numOfDigits={OTPLength} />
    </TouchableOpacity>
  );
}

OTPComponent.defaultProps = {
  OTPLength: 6,
  onOTPChange: undefined,
  OTPref: undefined,
  autoFocus: false,
  keyboardType: 'phone-pad',
};

OTPComponent.propTypes = {
  OTP: PropTypes.string.isRequired,
  OTPLength: PropTypes.number,
  onOTPChange: PropTypes.func,
  OTPref: refType,
  autoFocus: PropTypes.bool,
  keyboardType: PropTypes.string,
};

const OTPDigits = ({ numOfDigits, OTP }) => (
  <View style={styles.OTPContainer}>
    {Array.from(Array(numOfDigits)).map((x, index) => (
      <OTPDigit number={OTP[index]} key={index.toString()} />
    ))}
  </View>
);

OTPDigits.defaultProps = {
  numOfDigits: 6,
  OTP: '',
};

OTPDigits.propTypes = {
  numOfDigits: PropTypes.number,
  OTP: PropTypes.string,
};

const OTPDigit = ({ number }) => (
  <View>
    <Text
      style={[
        styles.OTPDigit,
        number
          ? { borderColor: color.secondary }
          : { borderColor: color.lightBule },
      ]}
    >
      {number}
    </Text>
  </View>
);

OTPDigit.defaultProps = {
  number: '',
};

OTPDigit.propTypes = {
  number: PropTypes.string,
};

const styles = StyleSheet.create({
  OTPContainer: {
    marginVertical: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  OTPDigit: {
    paddingVertical: 10,
    fontSize: 25,
    textAlign: 'center',
    width: 38,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: color.textGray,
    color: color.primary,
    backgroundColor: color.white,
    marginHorizontal: 5,
  },
  inputField: {
    position: 'absolute',
    height: 0,
    width: '100%',
  },
});
