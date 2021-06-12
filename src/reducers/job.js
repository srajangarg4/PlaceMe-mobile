import { ADD_JOB, ADD_JOBS } from '../actions';

const jobReducer = (
  state = {
    jobs: {},
    hasAlreadyFetchedJobs: false,
  },
  action,
) => {
  const { payload, type } = action;
  switch (type) {
    case ADD_JOB: {
      const { id, data } = payload;
      return {
        ...state,
        jobs: { ...state.jobs, [id]: data },
      };
    }
    case ADD_JOBS: {
      let newState;
      payload?.forEach(({ data, id }) => {
        newState = {
          ...state,
          jobs: { ...state.jobs, [id]: data },
        };
      });
      return { ...newState, hasAlreadyFetchedJobs: true };
    }
    default: {
      return state;
    }
  }
};
export default jobReducer;
