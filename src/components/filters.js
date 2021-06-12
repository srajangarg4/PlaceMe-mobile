import React from 'react';
import { StyleSheet, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { color, PropTypes, viewStyleType } from '../utils';
import Badge from './badge';
// import { Badge } from "../components";

const Filters = ({ style, options }) => (
  <View style={[styles.row, style]}>
    <FlatList
      horizontal
      data={options}
      renderItem={({ item }) => <Option {...item} />}
      showsHorizontalScrollIndicator={false}
      keyExtractor={(_, index) => index.toString()}
    />
  </View>
);

const Option = (props) => (
  <Badge
    {...props}
    style={styles.badge}
    color={color.white}
    textColor={color.primary}
  />
);

Filters.defaultProps = {
  style: undefined,
};

Filters.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string,
      onClick: PropTypes.func,
    }),
  ).isRequired,
  style: viewStyleType,
};

export default Filters;

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
  },
  badge: {
    marginRight: 5,
    borderColor: color.primary,
    borderWidth: 1,
  },
});
