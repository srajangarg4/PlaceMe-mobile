import React from 'react';
import { StyleSheet, View } from 'react-native';
import Text from './text';
import Icon from './icon';
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
  showCurrency,
  currencySize,
  negative,
  greenCurrency,
  onPressKey,
  onPressValue,
}) => (
  <View style={styles.container}>
    <Text
      style={[keyStyle]}
      color={textColor || keyColor}
      fontType="regular"
      fontSize={14}
      onPress={onPressKey}
    >
      {keyName}
    </Text>
    <View style={styles.row}>
      {negative ? (
        <Text color={textColor || valueColor || color.black}>-</Text>
      ) : null}
      {showCurrency ? (
        <Icon
          name={greenCurrency ? 'greenRupee' : 'rupee'}
          size={currencySize}
        />
      ) : null}
      <Text
        style={[{ backgroundColor: valueBackgroundColor }, valueStyle]}
        color={textColor || valueColor || color.black}
        fontSize={14}
        fontType="semiBold"
        onPress={onPressValue}
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
  showCurrency: false,
  currencySize: 12,
  negative: false,
  greenCurrency: false,
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
  showCurrency: PropTypes.bool,
  currencySize: PropTypes.number,
  negative: PropTypes.bool,
  greenCurrency: PropTypes.bool,
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
});
