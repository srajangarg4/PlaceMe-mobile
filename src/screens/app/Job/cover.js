import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Avatar } from '../../../components';
import { color, PropTypes, viewStyleType } from '../../../utils';

const Cover = ({ style, logo }) => (
  <View style={[styles.container, style]}>
    <View style={styles.innerContainer}>
      <Avatar
        imgSrc={{ uri: logo }}
        containerStyle={styles.logo}
        size={120}
        imageStyle={styles.imgae}
      />
    </View>
  </View>
);

Cover.defaultProps = {
  style: null,
  logo: '',
};

Cover.propTypes = {
  style: viewStyleType,
  logo: PropTypes.string,
};

export default Cover;

const styles = StyleSheet.create({
  container: {
    height: 150,
  },
  innerContainer: {
    height: '80%',
    backgroundColor: color.attackColors.color,
  },
  logo: {
    position: 'absolute',
    bottom: '-40%',
    alignSelf: 'center',
    borderRadius: 0,
  },
  imgae: {
    borderRadius: 20,
  },
});
