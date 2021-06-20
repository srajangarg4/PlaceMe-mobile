import { ADD_PERSONAL_DETAIL } from '../actions/personalDetails';

const personalDetailReducer = (state = null, action) => {
  const { payload, type } = action;
  switch (type) {
    case ADD_PERSONAL_DETAIL:
    {
      const { data } = payload;
      return { ...state, ...data };
    }
    default:
      return state;
  }
};

export default personalDetailReducer;
