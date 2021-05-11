import React, { useRef, useState } from 'react';
import {
  StyleSheet, View, TextInput, Animated, Easing,
} from 'react-native';
import {
  color, fonts, PropTypes, refType, viewStyleType,
} from '../../utils';
import Text from '../text';

const getBorderColor = (isFocused, showError, value) => {
  if (isFocused || value) {
    return color.secondary;
  }
  if (showError) {
    return color.error;
  }
  return color.ultraLightGray;
};

const PhoneInput = ({
  inputRef,
  onChange,
  style,
  autoFoucs,
  value,
  errorMessage,
  showError,
  errorTextSize,
  onSubmitEditing,
  placeholder = 'Phone Number',
  returnType = 'next',
  ...props
}) => {
  const opacity = useRef(new Animated.Value(0)).current;
  const [isFocused, setisFocused] = useState(false);
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
    opacity,
    top: value
      ? 0
      : opacity.interpolate({
        inputRange: [0, 1],
        outputRange: [10, 0],
        easing: Easing.linear,
      }),
  };
  return (
    <View style={[style]}>
      <Animated.Text style={[styles.animatedtext, labelStyle]}>
        {placeholder}
      </Animated.Text>
      <View>
        <View
          style={[
            styles.container,
            {
              borderBottomColor: getBorderColor(isFocused, showError, value),
            },
          ]}
        >
          <View style={styles.row}>
            <Text fontType="semiBold" fontSize={15}> +91</Text>
            <View style={[styles.middleLine]} />
            <TextInput
              onBlur={onBlurAnimation}
              onFocus={onFocusAnimation}
              style={[styles.textInput]}
              onChangeText={onChange}
              errorMessage={errorMessage}
              errorTextSize={errorTextSize}
              borderColor={
                isFocused || value ? color.secondary : color.ultraLightGray
              }
              keyboardType="number-pad"
              showError={showError}
              value={value}
              onSubmitEditing={onSubmitEditing}
              placeholder={isFocused ? '' : placeholder}
              placeholderTextColor={color.textGray}
              selectionColor={color.textGray}
              ref={inputRef}
              returnKeyType={returnType}
              maxLength={10}
              {...props}
            />
          </View>
        </View>
        <Text type="hs" style={[styles.errorText]}>
          {showError && errorMessage ? errorMessage : ''}
        </Text>
      </View>
    </View>
  );
};

PhoneInput.defaultProps = {
  inputRef: undefined,
  style: {},
  autoFoucs: false,
  errorMessage: '',
  showError: false,
  errorTextSize: undefined,
  onSubmitEditing: undefined,
  placeholder: 'Phone Number',
  returnType: 'next',
  value: undefined,
};
PhoneInput.propTypes = {
  inputRef: refType,
  onChange: PropTypes.func.isRequired,
  style: viewStyleType,
  autoFoucs: PropTypes.bool,
  value: PropTypes.string,
  errorMessage: PropTypes.string,
  showError: PropTypes.bool,
  errorTextSize: PropTypes.node,
  onSubmitEditing: PropTypes.func,
  placeholder: PropTypes.string,
  returnType: PropTypes.string,
};

export default PhoneInput;

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    margin: 2,
    borderBottomColor: color.primary,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 15,
  },
  textInput: {
    paddingVertical: 5,
    fontSize: 15,
    fontFamily: fonts.semiBold,
    color: color.primary,
    flex: 1,
  },
  code: {
    width: 37,
  },
  mobileNumber: {
    flex: 1,
  },
  middleLine: {
    height: 20,
    width: 1,
    backgroundColor: color.textGray,
    marginHorizontal: 10,
  },
  animatedtext: {
    position: 'absolute',
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
});
