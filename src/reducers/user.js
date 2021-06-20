import { LOGIN, LOGOUT } from '../actions';
import { AUTH_STATE, deleteData, saveData } from '../AsyncStorage';

const userReducer = (state = {}, action) => {
  const { payload, type } = action;
  switch (type) {
    case LOGIN: {
      const newState = { ...state, ...payload, token: '1234' };
      saveData(AUTH_STATE, newState);
      return !payload ? state : newState;
    }
    case LOGOUT: {
      deleteData(AUTH_STATE);
      return {};
    }
    default:
      return state;
  }
};

export default userReducer;
