import React from 'react';
import { StyleSheet, View, TextInput } from 'react-native';
import { fonts, color, viewStyleType, PropTypes } from '../../../utils';
import { Icon } from '../../../components';

const SearchBar = ({ style, onChange, value }) => (
  <View style={[styles.container, style]}>
    <Icon name="search" size={15} color={color.textGray} />
    <TextInput
      placeholder="Search"
      style={styles.textInput}
      placeholderTextColor={color.textGray}
      selectionColor={color.textGray}
      returnKeyType="search"
      onChange={onChange}
      value={value}
    />
  </View>
);

SearchBar.defaultProps = {
  style: {},
  onChange: undefined,
  value: undefined,
};
SearchBar.propTypes = {
  style: viewStyleType,
  onChange: PropTypes.func,
  value: PropTypes.string,
};

export default SearchBar;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    borderColor: color.ultraLightGray,
    backgroundColor: '#F5F6F8',
  },
  textInput: {
    fontFamily: fonts.semiBold,
    fontSize: 15,
    flex: 1,
    marginLeft: 10,
    color: color.primary,
    height: 40,
  },
});
