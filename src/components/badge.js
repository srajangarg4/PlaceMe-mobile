import React from 'react';
import { StyleSheet, View } from 'react-native';
import Text from './text';
import {
  color as Color,
  PropTypes,
  textStyleProps,
  viewStyleType,
} from '../utils';

const Badge = ({ text, style, textStyle, color, textColor, onPress }) => (
  <View style={[styles.container, { backgroundColor: color }, style]}>
    <Text
      color={textColor ?? Color.black}
      fontSize={12}
      style={textStyle}
      fontType="semiBold"
      onPress={onPress}
    >
      {text}
    </Text>
  </View>
);

Badge.defaultProps = {
  style: undefined,
  textStyle: undefined,
  color: Color.primary,
  textColor: Color.white,
  onPress: undefined,
};

Badge.propTypes = {
  text: PropTypes.string.isRequired,
  style: viewStyleType,
  textStyle: textStyleProps,
  color: PropTypes.string,
  textColor: PropTypes.string,
  onPress: PropTypes.func,
};

export default Badge;

const styles = StyleSheet.create({
  container: {
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 1,
  },
});
