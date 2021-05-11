import React from 'react';
import { StyleSheet, View } from 'react-native';
import { PropTypes } from '../utils';
import Icon from './icon';

const RatingView = ({ maxRating, rating }) => (
  <View style={styles.starContainer}>
    {new Array(rating).fill('filled-star').map((e, i) => (
      <Icon
        name="filledStar"
        size={15}
        containerStyle={styles.star}
        key={e + i.toString()}
      />
    ))}
    {new Array(maxRating - rating).fill('empty-star').map((e, i) => (
      <Icon
        name="emptyStar"
        size={15}
        containerStyle={styles.star}
        key={e + i.toString()}
      />
    ))}
  </View>
);

RatingView.defaultProps = {
  maxRating: 5,
  rating: undefined,
};
RatingView.propTypes = {
  maxRating: PropTypes.number,
  rating: PropTypes.number,
};

export default RatingView;

const styles = StyleSheet.create({
  starContainer: {
    marginHorizontal: 5,
    flexDirection: 'row',
  },
});
