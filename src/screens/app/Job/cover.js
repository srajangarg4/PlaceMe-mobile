import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Avatar } from '../../../components';
import { color, viewStyleType } from '../../../utils';

const uri =
  'https://pbs.twimg.com/profile_images/1370380607365246977/py2NQaCZ_400x400.png';

const Cover = ({ style }) => (
  <View style={[styles.container, style]}>
    <View style={styles.innerContainer}>
      <Avatar
        imgSrc={{ uri }}
        containerStyle={styles.logo}
        size={120}
        imageStyle={styles.imgae}
      />
    </View>
  </View>
);

Cover.defaultProps = {
  style: null,
};

Cover.propTypes = {
  style: viewStyleType,
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
