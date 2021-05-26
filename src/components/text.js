/* eslint-disable indent */
import React from 'react';
import { Text as ReactText, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { color as colors, fonts, fontSizes, childrenType } from '../utils';

function getFontSize(fontSize, type) {
  switch (type) {
    case 'h1':
      return 22;
    case 'h2':
      return 21;
    case 'h3':
      return 20;
    case 'h4':
      return 18;
    case 'h5':
      return 15;
    case 'hs':
      return 13;
    default:
      return fontSize;
  }
}
function getFontFamily(fontType) {
  switch (fontType) {
    case 'regular':
      return fonts.regular;
    case 'medium':
      return fonts.bold;
    case 'semiBold':
      return fonts.semiBold;
    case 'bold':
      return fonts.bold;
    default:
      return fonts.regular;
  }
}
const Text = ({
  children,
  color,
  type,
  fontSize,
  style,
  onPress,
  fontFamily,
  fontType,
  disabled,
  centerAlign,
  opacity,
  fontScaling,
  underline,
  ...props
}) => {
  if (onPress) {
    return (
      <TouchableOpacity
        onPress={onPress}
        activeOpacity={0.8}
        disabled={disabled}
      >
        <ReactText
          textBreakStrategy="balanced"
          {...props}
          allowFontScaling={fontScaling}
          maxFontSizeMultiplier={1.2}
          style={[
            {
              color,
              fontSize: getFontSize(fontSize, type),
              flexWrap: 'wrap',
              fontFamily: fontFamily || getFontFamily(fontType),
              paddingVertical: 1,
            },
            centerAlign
              ? {
                  textAlign: 'center',
                  alignSelf: 'center',
                }
              : {},
            underline && { textDecorationLine: 'underline' },
            style,
          ]}
        >
          {children}
        </ReactText>
      </TouchableOpacity>
    );
  }
  return (
    <ReactText
      {...props}
      allowFontScaling={fontScaling}
      maxFontSizeMultiplier={1.2}
      style={[
        {
          color,
          fontSize: getFontSize(fontSize, type),
          flexWrap: 'wrap',
          fontFamily: fontFamily || getFontFamily(fontType),
          paddingVertical: 1,
          opacity,
        },
        centerAlign
          ? {
              textAlign: 'center',
              alignSelf: 'center',
            }
          : {},
        underline && { textDecorationLine: 'underline' },
        style,
      ]}
    >
      {children}
    </ReactText>
  );
};

Text.defaultProps = {
  bold: false,
  fontSize: fontSizes.regular,
  type: null,
  style: {},
  children: null,
  color: colors.textGray,
  disabled: false,
  onPress: undefined,
  fontFamily: undefined,
  opacity: undefined,
  fontType: 'regular',
  centerAlign: false,
  fontScaling: true,
  underline: false,
};

Text.propTypes = {
  fontSize: PropTypes.number,
  bold: PropTypes.bool,
  type: PropTypes.string,
  children: childrenType,
  color: PropTypes.string,
  style: ReactText.propTypes.style,
  disabled: PropTypes.bool,
  onPress: PropTypes.func,
  fontFamily: PropTypes.string,
  fontType: PropTypes.string,
  centerAlign: PropTypes.bool,
  opacity: PropTypes.number,
  fontScaling: PropTypes.bool,
  underline: PropTypes.bool,
};

export default Text;
