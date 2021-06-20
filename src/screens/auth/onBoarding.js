import React, { useEffect, useRef, useState } from 'react';
import {
  Image, StyleSheet, TouchableOpacity, View,
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Button, Text } from '../../components';
import {
  color, messages, PropTypes, screens, deviceWidth,
} from '../../utils';
import NavigationService from '../../NavigationService';
import { onboardingData } from '../../assets/data';

const Onboarding = () => {
  const [active, setActive] = useState(0);
  const scrollerData = useRef({
    timer: undefined,
    currentOffset: deviceWidth,
  });
  const ref = useRef();
  useEffect(() => {
    const timerID = setInterval(() => {
      const { currentOffset, timer } = scrollerData.current;
      ref.current.scrollTo({
        x: currentOffset,
        animation: true,
      });
      if (currentOffset === (onboardingData.length - 1) * deviceWidth) {
        clearInterval(timer);
      } else {
        scrollerData.current = {
          ...scrollerData.current,
          currentOffset: currentOffset + deviceWidth,
        };
      }
    }, 3000);
    scrollerData.current = {
      ...scrollerData.current,
      timer: timerID,
    };
    return () => {
      clearInterval(scrollerData.current?.timer);
    };
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView
        ref={ref}
        style={styles.container}
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        horizontal
        scrollEventThrottle={1600}
        onScroll={({ nativeEvent }) => {
          const slide = Math.ceil(
            nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width,
          );
          if (slide !== active) {
            setActive(slide);
          }
        }}
      >
        {onboardingData.map((image, index) => (
          <TouchableOpacity
            key={index.toString()}
            onPress={() => {
              clearInterval(scrollerData.current.timer);
            }}
            activeOpacity={1.0}
          >
            <Image
              key={index.toString()}
              source={image.src}
              style={styles.image}
              resizeMode="cover"
            />
            <View
              style={{
                position: 'absolute',
                bottom: 180,
                width: 340,
                alignSelf: 'center',
                height: 75,
                justifyContent: 'center',
              }}
            >
              <Text color="white" fontType="bold" fontSize={26} centerAlign>
                {onboardingData[index].label}
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
      <View style={styles.bottomView}>
        <View style={styles.button}>
          <Button
            lightTheme
            text={messages.landingScreen.buttonLabel}
            textType="h4"
            textColor={color.primary}
            onPress={() => {
              // dispatch(
              //   login({
              //     alreadyVisited: true,
              //   }),
              // );
              NavigationService.navigate(screens.signup.path);
            }}
            style={{ borderWidth: 0 }}
          />
        </View>
        <Text
          color={color.lightBule}
          type="h4"
          centerAlign
          onPress={() => NavigationService.navigate(screens.signin.path)}
        >
          {messages.landingScreen.haveAccount}
        </Text>
      </View>
      <View style={styles.pagination}>
        {onboardingData.map((i, k) => <Bullet active={active === k} key={k.toString()} />)}
      </View>
    </View>
  );
};

const Bullet = ({ active }) => (
  <View style={[styles.bullet, active ? styles.activeBullet : {}]} />
);

Bullet.propTypes = {
  active: PropTypes.bool.isRequired,
};

export default Onboarding;

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: deviceWidth,
  },
  image: {
    height: '100%',
    width: deviceWidth,
  },
  pagination: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 20,
    alignSelf: 'center',
  },
  bullet: {
    height: 6,
    width: 15,
    marginHorizontal: 3,
    borderRadius: 3,
    backgroundColor: 'gray',
  },
  activeBullet: {
    backgroundColor: 'white',
  },
  bottomView: {
    width: 250,
    position: 'absolute',
    bottom: 40,
    alignSelf: 'center',
  },
  button: {
    marginVertical: 20,
    width: 175,
    alignSelf: 'center',
  },
});
