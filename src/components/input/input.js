import React, { useEffect, useRef, useState } from 'react';
import {
  Animated, Easing, StyleSheet, View,
} from 'react-native';
import PropTypes from 'prop-types';
import TextInput from './textInput';
import {
  color, fonts, refType, viewStyleType,
} from '../../utils';

const Input = ({
  rightImageSrc,
  placeholder,
  onChange,
  errorMessage,
  style,
  errorTextSize,
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
  returnType = 'next',
  inputRef,
  onBlur,
  onFocus,
  children,
  ...props
}) => {
  const opacity = useRef(new Animated.Value(0)).current;
  const [isFocused, setisFocused] = useState(false);
  useEffect(() => {
    if (value) {
      Animated.timing(opacity, {
        toValue: 1,
        duration: 50,
        useNativeDriver: false,
      }).start();
    }
  }, [value, opacity]);
  const onBlurAnimation = () => {
    setisFocused(false);
    if (!value) {
      Animated.timing(opacity, {
        toValue: 0,
        duration: 150,
        useNativeDriver: false,
      }).start();
    }
  };

  const onFocusAnimation = () => {
    setisFocused(true);
    if (!value) {
      Animated.timing(opacity, {
        toValue: 1,
        duration: 150,
        useNativeDriver: false,
      }).start();
    }
  };

  const labelStyle = {
    top: value
      ? 0
      : opacity.interpolate({
        inputRange: [0, 1],
        outputRange: [23, 0],
        easing: Easing.linear,
      }),
    fontSize: opacity.interpolate({
      inputRange: [0, 1],
      outputRange: [15, 12],
    }),
  };
  return (
    <View style={[style]}>
      <Animated.Text style={[styles.animatedtext, labelStyle]}>
        {placeholder}
      </Animated.Text>
      <View>
        {!children ? (
          <TextInput
            onBlur={onBlur || onBlurAnimation}
            onFocus={onFocus || onFocusAnimation}
            style={[styles.textInput]}
            onChangeText={onChange}
            rightImageSrc={rightImageSrc}
            errorMessage={errorMessage}
            errorTextSize={errorTextSize}
            borderColor={
              isFocused || value ? color.secondary : color.ultraLightGray
            }
            keyboardType={keyboardType}
            secureTextEntry={secureTextEntry}
            maxLength={maxLength}
            showError={showError}
            value={value}
            disabled={disabled}
            autoFocus={autoFocus}
            blurOnSubmit={!!blurOnSubmit}
            onSubmitEditing={onSubmitEditing}
            returnType={returnType}
            inputRef={inputRef}
            {...props}
          />
        ) : (
          children
        )}
      </View>
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  textInput: {
    paddingTop: 15,
  },
  animatedtext: {
    position: 'absolute',
    marginLeft: 3,
    color: color.textGray,
    fontSize: 12,
    fontFamily: fonts.semiBold,
  },
});

Input.propTypes = {
  children: PropTypes.node,
  rightImageSrc: PropTypes.number,
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  errorMessage: PropTypes.string,
  style: viewStyleType,
  errorTextSize: PropTypes.number,
  borderColor: PropTypes.string,
  keyboardType: PropTypes.string,
  secureTextEntry: PropTypes.bool,
  maxLength: PropTypes.number,
  showError: PropTypes.bool,
  value: PropTypes.string,
  disabled: PropTypes.bool,
  autoFocus: PropTypes.bool,
  blurOnSubmit: PropTypes.bool,
  onSubmitEditing: PropTypes.func,
  returnType: PropTypes.string,
  inputRef: refType,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
};

Input.defaultProps = {
  children: undefined,
  rightImageSrc: undefined,
  errorMessage: '',
  style: undefined,
  errorTextSize: undefined,
  borderColor: color.darkGray,
  keyboardType: 'ascii-capable',
  secureTextEntry: false,
  maxLength: undefined,
  showError: false,
  disabled: false,
  autoFocus: false,
  blurOnSubmit: undefined,
  onSubmitEditing: undefined,
  returnType: 'next',
  inputRef: () => {},
  onFocus: undefined,
  onBlur: undefined,
  value: undefined,
};
