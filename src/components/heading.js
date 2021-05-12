import React from 'react';
import { StyleSheet, View } from 'react-native';
import PropTypes from 'prop-types';
import Text from './text';
import { color, viewStyleType } from '../utils';

const Heading = ({ heading, style, fontSize }) => (
  <View style={[styles.headingContainer, style]}>
    <Text color={color.primary} fontSize={fontSize} fontType="semiBold">
      {heading}
    </Text>
  </View>
);

const styles = StyleSheet.create({
  headingContainer: {
    marginBottom: 40,
  },
});
Heading.defaultProps = {
  style: undefined,
  fontSize: 28,
};
Heading.propTypes = {
  heading: PropTypes.string.isRequired,
  style: viewStyleType,
  fontSize: PropTypes.number,
};
export default Heading;
