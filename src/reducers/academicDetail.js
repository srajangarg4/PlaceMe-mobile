import { ADD_ACADEMIC_DETAIL } from '../actions/academicDetails';

const academicDetailReducer = (state = null, action) => {
  const { payload, type } = action;
  switch (type) {
    case ADD_ACADEMIC_DETAIL:
    {
      const { data } = payload;
      return { ...state, ...data };
    }
    default:
      return state;
  }
};

export default academicDetailReducer;
