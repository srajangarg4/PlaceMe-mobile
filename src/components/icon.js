/* eslint-disable indent */
import React from 'react';
import { StyleSheet } from 'react-native';
import MaterialIcon from 'react-native-vector-icons/FontAwesome5';
import { imageStyleType, PropTypes } from '../utils';

const Icon = ({
  name,
  style,
  size,
  onPress,
  color,
}) => (
  <MaterialIcon
    name={name}
    color={color}
    size={size}
    style={[
        styles.icon,
        style,
      ]}
    onPress={onPress}
  />
);

Icon.defaultProps = {
  style: undefined,
  size: 15,
  onPress: undefined,
  color: 'black',
};
Icon.propTypes = {
  name: PropTypes.string.isRequired,
  style: imageStyleType,
  size: PropTypes.number,
  onPress: PropTypes.func,
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
