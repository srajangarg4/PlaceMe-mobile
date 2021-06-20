import React from 'react';
import {
  Image,
  StyleSheet,
  View,
  TextInput as Input,
  ViewPropTypes,
} from 'react-native';
import PropTypes from 'prop-types';
import { color, fonts, refType } from '../../utils';
import Text from '../text';

const TextInput = ({
  rightImageSrc,
  placeholder,
  onChange,
  errorMessage,
  style,
  borderColor,
  keyboardType,
  secureTextEntry,
  maxLength,
  showError,
  value,
  disabled,
  autoFocus,
  blurOnSubmit,
  onSubmitEditing,
  returnType,
  inputRef,
  onBlur,
  autoComplete,
  autoCompleteType,
  onFocus,
  ...props
}) => (
  <View>
    <View
      style={[
        styles.inputTextField,
        style,
        borderColor ? { borderBottomColor: borderColor } : null,
        showError ? { borderBottomColor: color.error } : null,
      ]}
    >
      <Input
        {...props}
        placeholder={placeholder}
        onChange={onChange}
        style={[
          styles.input,
          !rightImageSrc ? { marginHorizontal: 0 } : {},
        ]}
        keyboardType={keyboardType}
        secureTextEntry={!!secureTextEntry}
        maxLength={maxLength}
        value={value}
        editable={!disabled}
        autoFocus={autoFocus}
        blurOnSubmit={blurOnSubmit}
        onSubmitEditing={onSubmitEditing}
        ref={inputRef}
        returnKeyType={returnType}
        selectionColor={color.textGray}
        underlineColorAndroid="transparent"
        onFocus={onFocus || null}
        onBlur={onBlur || null}
      />
      {rightImageSrc ? (
        <Image
          source={rightImageSrc}
          style={[
            styles.leftImageStyle,
            disabled ? { backgroundColor: color.ultraLightGray } : {},
          ]}
        />
      ) : null}
    </View>
    <Text
      type="hs"
      style={[
        styles.errorText,
      ]}
    >
      {showError && errorMessage ? errorMessage : ''}
    </Text>
  </View>
);

TextInput.defaultProps = {
  rightImageSrc: undefined,
  placeholder: '',
  onChange: undefined,
  errorMessage: '',
  style: undefined,
  borderColor: color.ultraLightGray,
  keyboardType: 'ascii-capable',
  secureTextEntry: false,
  maxLength: undefined,
  showError: false,
  value: undefined,
  disabled: false,
  autoFocus: false,
  blurOnSubmit: undefined,
  onSubmitEditing: undefined,
  returnType: 'next',
  inputRef: undefined,
  onFocus: undefined,
  onBlur: undefined,
  autoComplete: false,
  autoCompleteType: '',
};

TextInput.propTypes = {
  rightImageSrc: PropTypes.number,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  errorMessage: PropTypes.string,
  style: ViewPropTypes.style,
  borderColor: PropTypes.string,
  keyboardType: PropTypes.string,
  secureTextEntry: PropTypes.bool,
  maxLength: PropTypes.number,
  showError: PropTypes.bool,
  // eslint-disable-next-line react/forbid-prop-types
  value: PropTypes.any,
  disabled: PropTypes.bool,
  autoFocus: PropTypes.bool,
  blurOnSubmit: PropTypes.bool,
  onSubmitEditing: PropTypes.func,
  returnType: PropTypes.string,
  inputRef: refType,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  autoComplete: PropTypes.bool,
  autoCompleteType: PropTypes.string,
};

const borderRadius = 12;

const styles = StyleSheet.create({
  leftImageStyle: {
    width: 25,
    height: 25,
    marginHorizontal: 12,
  },
  inputTextField: {
    borderBottomWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    overflow: 'hidden',
  },
  input: {
    fontSize: 16,
    flex: 1,
    paddingVertical: 4,
    paddingHorizontal: 4,
    borderTopRightRadius: borderRadius,
    borderBottomRightRadius: borderRadius,
    color: color.primary,
    fontFamily: fonts.semiBold,
  },
  errorText: {
    color: color.error,
    paddingHorizontal: 3,
    fontFamily: fonts.regular,
    marginBottom: 2,
    height: 22,
  },
});

export default TextInput;
