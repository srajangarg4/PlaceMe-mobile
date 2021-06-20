import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { cat, color, PropTypes } from '../utils';
import Text from './text';

const Error = ({ heading, subHeading }) => (
  <View style={styles.container}>
    <Image source={cat} style={{ width: '100%', height: 400 }} resizeMode="contain" />
    <Text centerAlign fontType="bold" color={color.primary}>{heading}</Text>
    <Text centerAlign>{subHeading}</Text>
  </View>
);

Error.defaultProps = {
  heading: '',
  subHeading: '',
};

Error.propTypes = {
  heading: PropTypes.string,
  subHeading: PropTypes.string,
};
export default Error;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
  },
});
