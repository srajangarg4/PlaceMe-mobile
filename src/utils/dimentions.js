import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('screen');

export const deviceWidth = width;
export const deviceHeight = height;

export const containerPadding = 15;
export const containerWidth = width - containerPadding * 2;
export const containerHeight = deviceHeight;
