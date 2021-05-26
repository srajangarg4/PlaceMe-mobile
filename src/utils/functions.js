import { Alert, Platform, ToastAndroid } from 'react-native';

export function hexToRGB(hex, alpha) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  let result = '';
  if (alpha) {
    result = `rgba(${r}, ${g}, ${b}, ${alpha})`;
  }
  result = `rgb(${r}, ${g}, ${b}, 1.0)`;
  return result;
}

export const showToast = (message, duration) => {
  if (Platform.OS === 'ios') {
    Alert.alert(message);
  } else {
    ToastAndroid.show(message, duration === 'SHORT' || duration === 'LONG' ? ToastAndroid[duration] : duration);
  }
};
