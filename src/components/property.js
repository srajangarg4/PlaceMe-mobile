import React from 'react';
import { StyleSheet, View } from 'react-native';
import Text from './text';
import { color, PropTypes, textStyleProps } from '../utils';

const Property = ({
  keyName,
  value,
  keyColor,
  valueColor,
  keyStyle,
  valueStyle,
  valueBackgroundColor,
  textColor,
  onPressKey,
  onPressValue,
}) => (
  <View style={styles.container}>
    <Text
      style={[styles.keyStyle, keyStyle]}
      color={textColor || keyColor}
      fontType="regular"
      fontSize={14}
      onPress={onPressKey}
      numberOfLines={1}
      ellipsizeMode="tail"
    >
      {keyName}
    </Text>
    <View style={styles.valueStyle}>
      <Text
        style={[{ backgroundColor: valueBackgroundColor }, valueStyle]}
        color={textColor || valueColor || color.black}
        fontSize={14}
        fontType="semiBold"
        onPress={onPressValue}
        numberOfLines={1}
        ellipsizeMode="tail"
      >
        {value}
      </Text>
    </View>
  </View>
);

Property.defaultProps = {
  keyStyle: undefined,
  valueStyle: undefined,
  textColor: undefined,
  keyColor: color.primary,
  valueColor: color.textGray,
  valueBackgroundColor: color.white,
  onPressKey: undefined,
  onPressValue: undefined,
};
Property.propTypes = {
  keyName: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  keyStyle: textStyleProps,
  valueStyle: textStyleProps,
  textColor: PropTypes.string,
  keyColor: PropTypes.string,
  valueColor: PropTypes.string,
  valueBackgroundColor: PropTypes.string,
  onPressKey: PropTypes.func,
  onPressValue: PropTypes.func,
};

export default Property;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 4,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  keyStyle: {
    flex: 1,

  },
  valueStyle: {
    flex: 1,
    alignItems: 'flex-end',
  },
});
