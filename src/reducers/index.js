import { combineReducers } from 'redux';
import user from './user';
import job from './job';
import company from './company';
import personalDetail from './personalDetail';
import academicDetail from './academicDetail';
import updateRequests from './updateRequests';
import { RESET_STORE } from '../actions';
import completedRequests from './completedUpdateRequests';

const appReducer = combineReducers({
  user,
  job,
  company,
  personalDetail,
  academicDetail,
  updateRequests,
  completedRequests,
});

const rootReducer = (state, action) => {
  if (action.type === RESET_STORE) {
    return appReducer({}, action);
  }
  return appReducer(state, action);
};

export default rootReducer;
