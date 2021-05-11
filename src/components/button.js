import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  ViewPropTypes,
  Animated,
  View,
  Easing,
} from 'react-native';
import PropTypes from 'prop-types';
import Text from './text';
import { color as colors, viewStyleType } from '../utils';
import Loader from './loader';

const Button = ({
  disabled,
  style,
  onPress,
  lightTheme,
  text,
  textStyle,
  fullWidth,
  textColor,
  textType,
  textFontType,
  loading,
  smallLoader,
  thinStyle,
  loaderStyle,
  loaderColor,
  children,
  ...props
}) => {
  const [btnWidth, setBtnWidth] = useState(170);
  const [showLoader, setShowLoader] = useState(false);
  const [animatedValue] = useState(new Animated.Value(btnWidth));
  const animatedStyle = {
    width: animatedValue,
  };
  const shrinkButton = () => {
    Animated.timing(animatedValue, {
      toValue: 52,
      duration: 200,
      easing: Easing.linear,
      useNativeDriver: false,
    }).start(() => {
      setShowLoader(true);
    });
  };
  const expandButton = () => {
    Animated.timing(animatedValue, {
      toValue: btnWidth,
      duration: 0,
      easing: Easing.linear,
      useNativeDriver: false,
    }).start(() => {
      setShowLoader(false);
    });
  };
  useEffect(() => {
    if (loading) {
      shrinkButton();
    } else expandButton();
  });

  return (
    <>
      {showLoader ? (
        <View style={[styles.loaderContainer, style]}>
          <Loader
            show
            style={[
              smallLoader ? styles.smallLoader : styles.loaderStyle,
              loaderStyle,
            ]}
            size={smallLoader ? 'small' : 'large'}
            color={loaderColor}
          />
        </View>
      ) : (
        <View
          onLayout={(event) => {
            const { width } = event.nativeEvent.layout;
            setBtnWidth(width);
          }}
          style={styles.animatedViewContainer}
        >
          <Animated.View
            style={[
              styles.button,
              lightTheme ? styles.lightTheme : styles.defaultTheme,
              disabled ? styles.disabled : null,
              fullWidth ? styles.fullWidth : {},
              style,
              animatedStyle,
            ]}
          >
            <TouchableOpacity
              {...props}
              disabled={disabled}
              onPress={onPress}
              style={[styles.touchableButton, thinStyle]}
            >
              {
                  children ?? (
                  <Text
                    centerAlign
                    type={textType}
                    style={textStyle}
                    color={lightTheme ? colors.primary : textColor}
                    fontType={textFontType || 'bold'}
                  >
                    {loading ? ' ' : text}
                  </Text>
                  )
                }

            </TouchableOpacity>
          </Animated.View>
        </View>
      )}
    </>
  );
};
Button.defaultProps = {
  style: {},
  textStyle: {},
  onPress: undefined,
  disabled: false,
  textType: 'h5',
  textColor: colors.white,
  fullWidth: false,
  textFontType: 'semiBold',
  lightTheme: false,
  loading: false,
  smallLoader: false,
  thinStyle: {},
  loaderStyle: {},
  loaderColor: colors.white,
  children: undefined,
  text: undefined,
};
Button.propTypes = {
  onPress: PropTypes.func,
  disabled: PropTypes.bool,
  style: viewStyleType,
  text: PropTypes.string,
  textStyle: Text.propTypes.style,
  textColor: Text.propTypes.color,
  textType: Text.propTypes.type,
  fullWidth: PropTypes.bool,
  textFontType: PropTypes.string,
  lightTheme: PropTypes.bool,
  loading: PropTypes.bool,
  smallLoader: PropTypes.bool,
  thinStyle: ViewPropTypes.style,
  loaderStyle: ViewPropTypes.style,
  loaderColor: PropTypes.string,
  children: PropTypes.node,
};

const styles = StyleSheet.create({
  loaderContainer: {
    // alignItems: 'center',
    // justifyContent: 'center',
    alignSelf: 'center',
  },
  button: {
    width: 130,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
  fullWidth: {
    width: '100%',
  },
  lightTheme: {
    backgroundColor: colors.background,
    borderWidth: 1,
    borderColor: colors.primary,
  },
  defaultTheme: {
    backgroundColor: colors.primary,
  },
  touchableButton: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 14,
  },
  loaderStyle: {
    width: 52,
    height: 52,
    backgroundColor: colors.primary,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 2,
    paddingTop: 2,
  },
  smallLoader: {
    width: 47,
    height: 47,
    backgroundColor: colors.secondary,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  animatedViewContainer: {
    alignItems: 'center',
    width: '100%',
  },
  disabled: {
    backgroundColor: '#D1D1D1',
  },
});

export default Button;
