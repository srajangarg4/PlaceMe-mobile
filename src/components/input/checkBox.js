import React from 'react';
import {
  StyleSheet, TouchableOpacity, View,
} from 'react-native';
import {
  color, imageStyleType, PropTypes, viewStyleType,
} from '../../utils';
import Icon from '../icon';
import Text from '../text';

const Option = ({
  name,
  isSelected,
  onPress,
  style,
  iconStyle,
  iconName,
  iconConatinerStyle,
}) => (
  <TouchableOpacity
    style={[styles.optionContainer, style]}
    activeOpacity={0.9}
    onPress={onPress}
  >
    <Icon
      name={isSelected ? iconName : 'yes'}
      rounded
      size={20}
      style={iconStyle}
      containerStyle={[styles.optionIcon, iconConatinerStyle]}
    />
    <Text color={color.black}>{name}</Text>
  </TouchableOpacity>
);

Option.defaultProps = {
  isSelected: false,
  onPress: undefined,
  style: undefined,
  iconStyle: undefined,
  iconName: 'yesOrange',
  iconConatinerStyle: undefined,
};
Option.propTypes = {
  name: PropTypes.string.isRequired,
  isSelected: PropTypes.bool,
  onPress: PropTypes.func,
  style: viewStyleType,
  iconStyle: imageStyleType,
  iconName: PropTypes.string,
  iconConatinerStyle: viewStyleType,
};

const CheckBox = ({ options, onChange, value }) => (
  <View>
    {options.map((item, index) => (
      <Option
        isSelected={value === item}
        name={item}
        key={`${item + index}option`}
        onPress={() => onChange(item)}
      />
    ))}
  </View>
);

CheckBox.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default CheckBox;

const styles = StyleSheet.create({
  optionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  optionIcon: {
    borderColor: color.secondary,
    borderWidth: 0.5,
    marginRight: 12,
  },
});
