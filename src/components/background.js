import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { PropTypes, requireType } from '../utils';

const Background = ({ imgSrc, inverted }) => (
  <View>
    <Image
      source={imgSrc}
      style={[
        StyleSheet.absoluteFillObject,
        styles.image,
        inverted ? styles.inverted : null,
      ]}
      resizeMode="center"
    />
  </View>
);

Background.defaultProps = {
  inverted: false,
};
Background.propTypes = {
  imgSrc: requireType.isRequired,
  inverted: PropTypes.bool,
};

export default Background;

const styles = StyleSheet.create({
  image: {
    width: 300,
    height: 350,
    marginLeft: 160,
    opacity: 0.1,
  },
  inverted: {
    transform: [{ rotateY: '180deg' }],
  },
});
