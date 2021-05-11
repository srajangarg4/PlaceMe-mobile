import { createStore } from 'redux';
import rootReducer from './reducers';

const initialState = {};

const store = createStore(
  rootReducer,
  initialState,
);

export const getAuth = () => (
  store.getState()?.auth
);

export const { dispatch } = store;

export default store;
