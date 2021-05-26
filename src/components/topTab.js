/* eslint-disable no-confusing-arrow */
/* eslint-disable implicit-arrow-linebreak */
import React, { useRef, useState } from 'react';
import { Animated, StyleSheet, View, TouchableOpacity } from 'react-native';
import {
  color,
  deviceWidth,
  fonts,
  hexToRGB,
  PropTypes,
  tabType,
  textStyleProps,
  viewStyleType,
} from '../utils';

const TAB_HEIGHT = 50;
const activeColor = hexToRGB(color.primary);
const inactiveColor = hexToRGB(color.textGray);

export const TopTab = ({
  tabs,
  tabStyle,
  screenStyle,
  tabContainerStyle,
  style,
  activeTextColor,
  inactiveTextColor,
  scrollerColor,
}) => {
  const [tabWidth, setTabWidth] = useState(deviceWidth);
  const scrollX = useRef(new Animated.Value(0)).current;
  const inputRange = tabs.map((_, i) => i * deviceWidth);
  const getColor = (i, inx) =>
    inx === i ? activeTextColor : inactiveTextColor;
  const scrollTo = (x) => {
    flatlist.current.scrollToIndex({ animated: true, index: x });
  };
  const flatlist = useRef();
  return (
    <View style={[styles.container, style]}>
      <View style={[tabContainerStyle]}>
        <View style={styles.tabContainer}>
          {tabs.map((e, i) => {
            const output = tabs.map((_, ix) => getColor(i, ix));
            const animatedColor = scrollX.interpolate({
              inputRange,
              outputRange: output,
            });
            return (
              <Tab
                {...e}
                key={e.name}
                style={{
                  color: animatedColor,
                  ...tabStyle,
                }}
                onPress={() => scrollTo(i)}
                onLayout={(event) => {
                  setTabWidth(event.nativeEvent.layout.width);
                }}
              />
            );
          })}
        </View>
        <ScrollIndicator
          inputRange={inputRange}
          scrollX={scrollX}
          tabs={tabs}
          scrollerWidth={tabWidth}
          style={{ backgroundColor: scrollerColor }}
        />
      </View>
      <Animated.FlatList
        ref={flatlist}
        horizontal
        pagingEnabled
        data={tabs}
        keyExtractor={(item) => item.name}
        renderItem={(item) => <TabScreen {...item.item} style={screenStyle} />}
        showsHorizontalScrollIndicator={false}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: false },
        )}
      />
    </View>
  );
};

TopTab.defaultProps = {
  activeTextColor: activeColor,
  inactiveTextColor: inactiveColor,
  tabStyle: {},
  screenStyle: {},
  tabContainerStyle: {},
  style: {},
  scrollerColor: hexToRGB(color.secondary),
};
TopTab.propTypes = {
  tabs: tabType.isRequired,
  tabStyle: viewStyleType,
  screenStyle: viewStyleType,
  tabContainerStyle: viewStyleType,
  style: viewStyleType,
  activeTextColor: PropTypes.string,
  inactiveTextColor: PropTypes.string,
  scrollerColor: PropTypes.string,
};

const ScrollIndicator = ({
  style,
  inputRange,
  scrollX,
  tabs,
  scrollerWidth,
}) => {
  const outputRange = tabs.map((_, i) => scrollerWidth * i);
  const translateX = scrollX.interpolate({
    inputRange,
    outputRange,
  });
  return (
    <Animated.View
      style={[
        styles.scrollIndicator,
        { width: scrollerWidth },
        style,
        { transform: [{ translateX }] },
      ]}
    />
  );
};
ScrollIndicator.defaultProps = {
  style: {},
  inputRange: undefined,
  scrollX: undefined,
  scrollerWidth: undefined,
};
ScrollIndicator.propTypes = {
  style: viewStyleType,
  inputRange: PropTypes.arrayOf(PropTypes.number),
  scrollX: PropTypes.instanceOf(Animated.Value),
  tabs: tabType.isRequired,
  scrollerWidth: PropTypes.number,
};

const Tab = ({ name, onPress, style, ...extraProps }) => (
  <TouchableOpacity
    activeOpacity={0.8}
    style={[styles.tab]}
    onPress={onPress}
    {...extraProps}
  >
    <Animated.Text style={[styles.tabTitle, style]}>{name}</Animated.Text>
  </TouchableOpacity>
);

Tab.defaultProps = {
  style: undefined,
};

Tab.propTypes = {
  name: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  style: textStyleProps,
};

const TabScreen = ({ screen, style }) => (
  <View style={[styles.tabView, style]}>{screen()}</View>
);

TabScreen.defaultProps = {
  style: {},
};
TabScreen.propTypes = {
  screen: PropTypes.func.isRequired,
  style: viewStyleType,
};

export default TopTab;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tabContainer: {
    height: TAB_HEIGHT,
    flexDirection: 'row',
  },
  tab: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  tabView: {
    flex: 1,
    width: deviceWidth,
  },
  scrollIndicator: {
    height: 3,
  },
  topContainer: {
    overflow: 'hidden',
    borderColor: 'gray',
  },
  tabTitle: {
    fontSize: 17,
    fontFamily: fonts.semiBold,
  },
});
