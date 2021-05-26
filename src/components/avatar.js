import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {
  color,
  imageStyleType,
  PropTypes,
  requireType,
  viewStyleType,
} from '../utils';

const Avatar = ({
  imgSrc,
  size = 50,
  borderColor,
  containerStyle,
  imageStyle,
  showEdit,
}) => (
  <View style={[styles.container, containerStyle]}>
    <Image
      source={imgSrc}
      style={[
        styles.avatar,
        { height: size, width: size, borderRadius: size / 2 },
        { borderColor },
        imageStyle,
      ]}
    />
    {showEdit ? (
      <View style={styles.editIcon}>
        <Icon name="pencil-alt" size={15} color={color.secondary} />
      </View>
    ) : null}
  </View>
);

Avatar.defaultProps = {
  size: 50,
  borderColor: color.secondary,
  containerStyle: undefined,
  imageStyle: undefined,
  showEdit: false,
};
Avatar.propTypes = {
  imgSrc: requireType.isRequired,
  size: PropTypes.number,
  borderColor: PropTypes.string,
  containerStyle: viewStyleType,
  imageStyle: imageStyleType,
  showEdit: PropTypes.bool,
};

export default Avatar;

const styles = StyleSheet.create({
  container: {
    overflow: 'hidden',
  },
  avatar: {
    width: 50,
    height: 50,
    overflow: 'hidden',
  },
  editIcon: {
    position: 'absolute',
    bottom: 0,
    right: 5,
    borderColor: 'red',
    borderWidth: 1,
    padding: 5,
    backgroundColor: 'white',
    borderRadius: 15,
  },
});
