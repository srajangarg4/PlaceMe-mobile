import React from 'react';
import { StyleSheet, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { imageStyleType, PropTypes, viewStyleType } from '../utils';
import * as Icons from '../utils/icons';

const Icon = ({
  name,
  style,
  containerStyle,
  size = 15,
  onPress,
  rounded,
  color = 'white',
}) => (
  <TouchableOpacity
    activeOpacity={1.0}
    style={[
      containerStyle,
      rounded
        ? {
          ...styles.rounded,
          width: size,
          height: size,
          borderRadius: size / 2,
          backgroundColor: color,
        }
        : null,
    ]}
    onPress={onPress}
  >
    <Image
      source={Icons[name]}
      style={[
        styles.icon,
        size
          ? {
            width: rounded ? size / 2 : size,
            height: rounded ? size / 2 : size,
          }
          : null,
        style,
      ]}
      resizeMode="contain"
    />
  </TouchableOpacity>
);

Icon.defaultProps = {
  style: undefined,
  containerStyle: undefined,
  size: 15,
  onPress: undefined,
  rounded: false,
  color: 'white',
};
Icon.propTypes = {
  name: PropTypes.string.isRequired,
  style: imageStyleType,
  containerStyle: viewStyleType,
  size: PropTypes.number,
  onPress: PropTypes.func,
  rounded: PropTypes.bool,
  color: PropTypes.string,
};

export default Icon;

const styles = StyleSheet.create({
  icon: {
    width: 20,
    height: 20,
  },
  rounded: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
