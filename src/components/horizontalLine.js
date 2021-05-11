import React from 'react';
import { StyleSheet, View } from 'react-native';
import { color, PropTypes, viewStyleType } from '../utils';

const HorizontalLine = ({ lineColor, style }) => (
  <View
    style={[
      styles.line,
      { backgroundColor: lineColor ?? color.ultraLightGray },
      style,
    ]}
  />
);

HorizontalLine.defaultProps = {
  lineColor: undefined,
  style: undefined,
};
HorizontalLine.propTypes = {
  lineColor: PropTypes.string,
  style: viewStyleType,
};

export default HorizontalLine;

const styles = StyleSheet.create({
  line: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: color.ultraLightGray,
    marginVertical: 5,
  },
});
