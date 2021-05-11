import { AUTH_UPDATE, AUTH_REMOVE, LOGIN } from '../actions';
import { saveData, deleteData, AUTH_STATE } from '../AsyncStorage';

let token;

export default (state = {}, action) => {
  const { type, payload } = action;
  switch (type) {
    case AUTH_UPDATE: {
      const auth = { ...state, ...payload };
      ({ token } = { token: auth.token });
      saveData(AUTH_STATE, auth);
      return auth;
    }
    case AUTH_REMOVE: {
      token = undefined;
      deleteData(AUTH_STATE);
      return { };
    }
    case LOGIN: {
      const newState = {
        ...state,
        token: payload.token,
        isAuthCompleted: true,
      };
      return newState;
    }
    default:
      return state;
  }
};

export function getAuth() {
  return token;
}
