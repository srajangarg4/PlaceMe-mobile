import { UserService } from 'placeme-services/lib';
import { dispatch } from '../store';
import { logout as logoutAction, login as loginAction, resetStore } from '../actions';
import { Roles, showToast } from '../utils';

export const login = async (authData = {}, resolve, reject) => {
  const { email, password } = authData;
  const { successful, result, error } = await UserService.loginUser(email, password);

  if (successful) {
    const { role } = result;
    if (role === Roles.STUDENT) {
      dispatch(loginAction(result));
      resolve?.(result);
    } else {
      reject?.('You are not student.');
    }
  } else {
    reject?.(error);
  }
};

export const logout = async (resolve, reject) => {
  const { successful, error } = await UserService.logout();
  if (successful) {
    dispatch(logoutAction());
    dispatch(resetStore());
  } else {
    reject?.(error);
  }
};

export const signup = async (userDetails, password, resolve, reject) => {
  const { successful, error, result } = await UserService.signupUser(userDetails, password);
  if (successful) {
    dispatch(loginAction(result));
    resolve?.(result);
  } else {
    showToast(error);
    reject?.(error);
  }
};
