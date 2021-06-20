import { ADD_REQUESTS } from '../actions/pendingRequests';

const defaultState = {
  requests: {},
};

const updateRequestReducer = (state = defaultState, action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_REQUESTS: {
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
export default updateRequestReducer;
