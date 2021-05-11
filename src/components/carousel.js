import React, { useRef } from 'react';
import { Animated, StyleSheet, View } from 'react-native';
import {
  color, PropTypes, requireType, viewStyleType,
} from '../utils';

const Indicators = ({
  scrollX, data, style, width,
}) => (
  <View style={[styles.indicatorContainer, style]}>
    {data.map((_, i) => {
      const inputRange = [(i - 1) * width, i * width, (i + 1) * width];
      const scale = scrollX.interpolate({
        inputRange,
        outputRange: [0.8, 1.4, 0.8],
        extrapolate: 'clamp',
      });
      const opacity = scrollX.interpolate({
        inputRange,
        outputRange: [0.4, 1, 0.4],
        extrapolate: 'clamp',
      });
      return (
        <Animated.View
          key={`indicator-${i.toString()}`}
          style={[
            styles.indicator,
            {
              transform: [
                {
                  scale,
                },
              ],
            },
            { opacity },
          ]}
        />
      );
    })}
  </View>
);
const carouselDataType = PropTypes.arrayOf(requireType);
Indicators.defaultProps = {
  scrollX: undefined,
  data: [],
  style: {},
  width: undefined,
};
Indicators.propTypes = {
  scrollX: PropTypes.instanceOf(Animated.Value),
  data: carouselDataType,
  style: viewStyleType,
  width: PropTypes.number,
};

const Carousel = ({
  renderItem,
  data,
  style,
  indicatorStyle,
  width,
  isCurved,
}) => {
  const scrollX = useRef(new Animated.Value(0)).current;
  return (
    <View
      style={[
        styles.carasoulContainer,
        style,
        isCurved ? { borderRadius: 10 } : null,
      ]}
    >
      <Animated.FlatList
        data={data}
        horizontal
        scrollEventThrottle={32}
        showsHorizontalScrollIndicator={false}
        onScroll={Animated.event(
          [
            {
              nativeEvent: { contentOffset: { x: scrollX } },
            },
          ],
          { useNativeDriver: false },
        )}
        pagingEnabled
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
      <Indicators
        scrollX={scrollX}
        data={data}
        style={[indicatorStyle]}
        width={width}
      />
    </View>
  );
};

Carousel.defaultProps = {
  style: undefined,
  indicatorStyle: undefined,
  isCurved: false,
};
Carousel.propTypes = {
  renderItem: PropTypes.func.isRequired,
  data: carouselDataType.isRequired,
  style: viewStyleType,
  indicatorStyle: viewStyleType,
  width: PropTypes.number.isRequired,
  isCurved: PropTypes.bool,
};

export default Carousel;

const styles = StyleSheet.create({
  indicator: {
    height: 8,
    width: 8,
    borderRadius: 4,
    backgroundColor: color.white,
    marginHorizontal: 3,
  },
  indicatorContainer: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 20,
    alignSelf: 'center',
  },
  carasoulContainer: {
    overflow: 'hidden',
  },
});
