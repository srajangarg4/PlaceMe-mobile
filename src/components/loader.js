import React from 'react';
import { ActivityIndicator, View, ViewPropTypes } from 'react-native';
import PropTypes from 'prop-types';
import { color as colors } from '../utils';

const Loader = ({
  show, style, size, color,
}) => {
  if (show) {
    return (
      <View style={style}>
        <ActivityIndicator size={size} color={color} />
      </View>
    );
  }
  return null;
};

Loader.defaultProps = {
  show: false,
  style: {},
  size: 'large',
  color: colors.primary,
};

Loader.propTypes = {
  show: PropTypes.bool,
  color: PropTypes.string,
  style: ViewPropTypes.style,
  size: PropTypes.string,
};

export default Loader;
