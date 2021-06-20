import { ADD_COMPLETED_REQUESTS } from '../actions';

const initailState = {
  requests: {},
};

const completedUpdateRequestReducer = (state = initailState, action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_COMPLETED_REQUESTS: {
      const temp = {};
      payload?.forEach((item) => {
        const { id } = item;
        temp[id] = item;
      });
      return {
        ...state,
        requests: {
          ...state.requests, ...temp,
        } };
    }
    default:
      return state;
  }
};
export default completedUpdateRequestReducer;
