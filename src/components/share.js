import React from 'react';
import { StyleSheet, View, Share as RNShare } from 'react-native';
import { color, PropTypes } from '../utils';
import Icon from './icon';
import Text from './text';

const Share = ({ url, showicon }) => (
  <View style={styles.container}>
    <Text style={{ flex: 1, paddingVertical: 15 }} type="hs" color={color.black} numberOfLines={1} ellipsizeMode="tail">
      {url}
    </Text>
    {showicon ? (
      <Icon
        name="copyAndShare"
        size={35}
        onPress={() => {
          RNShare.share({
            title: 'Share With Friends',
            message: url,
          });
        }}
      />
    ) : null}
  </View>
);

Share.defaultProps = {
  showicon: false,
};
Share.propTypes = {
  url: PropTypes.string.isRequired,
  showicon: PropTypes.bool,
};

export default Share;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: color.lightGray,
    paddingHorizontal: 10,
    alignItems: 'center',
    width: '100%',
    borderRadius: 5,
    borderColor: color.lightBule,
    borderWidth: 1,
  },
});
