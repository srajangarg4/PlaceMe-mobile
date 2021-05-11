import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import {
  color, imageStyleType, PropTypes, requireType, viewStyleType,
} from '../utils';
import Icon from './icon';

const Avatar = ({
  imgSrc,
  size = 50,
  borderColor,
  containerStyle,
  imageStyle,
  showEdit,
  onEditPress,
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
        <Icon
          name="edit"
          rounded
          size={30}
          containerStyle={{ borderColor: color.secondary, borderWidth: 1 }}
          onPress={onEditPress}
        />
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
  onEditPress: undefined,
};
Avatar.propTypes = {
  imgSrc: requireType.isRequired,
  size: PropTypes.number,
  borderColor: PropTypes.string,
  containerStyle: viewStyleType,
  imageStyle: imageStyleType,
  showEdit: PropTypes.bool,
  onEditPress: PropTypes.func,
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
  },
});
