import React from 'react';
import { StyleSheet, TouchableOpacity, ViewPropTypes } from 'react-native';
import PropTypes from 'prop-types';
import { color } from '../../utils';

const Card = ({
  children, style, onPress, ...props
}) => (
  <TouchableOpacity
    {...props}
    onPress={onPress}
    disabled={!onPress}
    activeOpacity={1}
    style={[styles.card, style]}
  >
    {children}
  </TouchableOpacity>

);

const styles = StyleSheet.create({
  card: {
    shadowColor: '#EBEBEB',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.8,
    shadowRadius: 7,
    elevation: 3,
    backgroundColor: color.white,
  },
});

Card.defaultProps = {
  style: {},
  onPress: undefined,
};

Card.propTypes = {
  children: PropTypes.node.isRequired,
  style: ViewPropTypes.style,
  onPress: PropTypes.func,
};
export default Card;
