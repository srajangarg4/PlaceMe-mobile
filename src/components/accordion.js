import React, { useEffect, useState } from 'react';
import {
  View,
  TouchableOpacity,
  StyleSheet,
  LayoutAnimation,
  Platform,
  UIManager,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import HorizontalLine from './horizontalLine';
import { childrenType, color, PropTypes } from '../utils';

import Text from './text';

const Accordian = ({ children, title, open, showSeperator }) => {
  const [state, setState] = useState({
    expanded: open,
  });

  const { expanded } = state;

  useEffect(() => {
    if (Platform.OS === 'android') {
      UIManager.setLayoutAnimationEnabledExperimental(true);
    }
  }, []);

  const toggleExpand = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setState({ expanded: !state.expanded });
  };

  return (
    <View>
      <TouchableOpacity
        style={styles.row}
        onPress={toggleExpand}
        activeOpacity={1.0}
      >
        <Text fontType="semiBold" color={color.primary}>
          {title}
        </Text>
        <Icon
          name={expanded ? 'chevron-up' : 'chevron-down'}
          size={18}
          color={color.textGray}
        />
      </TouchableOpacity>
      {expanded && (
        <TouchableOpacity
          activeOpacity={1}
          style={styles.child}
          onPress={toggleExpand}
        >
          {children}
        </TouchableOpacity>
      )}
      {showSeperator && <HorizontalLine height={0.5} style={styles.line} />}
    </View>
  );
};

Accordian.defaultProps = {
  open: false,
  showSeperator: true,
};

Accordian.propTypes = {
  children: childrenType.isRequired,
  title: PropTypes.string.isRequired,
  open: PropTypes.bool,
  showSeperator: PropTypes.bool,
};

export default Accordian;

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 5,
    marginVertical: 10,
  },
  parentHr: {
    width: '100%',
  },
  line: {},
  child: {
    paddingVertical: 10,
  },
});
