import React from 'react';
import { StyleSheet, View } from 'react-native';
import { color, PropTypes, viewStyleType } from '../utils';

const HorizontalLine = ({ lineColor, style, height }) => (
  <View
    style={[
      styles.line,
      { backgroundColor: lineColor ?? color.ultraLightGray },
      { height },
      style,
    ]}
  />
);

HorizontalLine.defaultProps = {
  lineColor: undefined,
  style: undefined,
  height: StyleSheet.hairlineWidth,
};
HorizontalLine.propTypes = {
  lineColor: PropTypes.string,
  style: viewStyleType,
  height: PropTypes.number,
};

export default HorizontalLine;

const styles = StyleSheet.create({
  line: {
    backgroundColor: color.ultraLightGray,
    marginVertical: 5,
  },
});
