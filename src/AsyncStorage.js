import AsyncStorage from '@react-native-community/async-storage';

export const AUTH_STATE = 'AUTH_STATE';
export const USER_STATE = 'USER_STATE';

const appDataKeys = [AUTH_STATE];

export const saveData = async (key, data) => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(data));
  } catch (error) {
    console.log('saving error', error.message); // eslint-disable-line no-console
  }
};

export const getData = async (key) => {
  let data = null;
  try {
    data = (await AsyncStorage.getItem(key)) || null;
  } catch (error) {
    console.log(error.message); // eslint-disable-line no-console
  }
  return JSON.parse(data);
};

export const deleteData = async (key) => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (error) {
    console.log('delete error', error.message); // eslint-disable-line no-console
  }
};

export const clearData = async () => {
  try {
    await AsyncStorage.multiRemove(appDataKeys);
  } catch (error) {
    console.log('delete error', error.message); // eslint-disable-line no-console
  }
};
