import { ADD_COMPANIES, ADD_COMPANY } from '../actions/companies';

const comapnyReducer = (
  state = {
    companies: {},
    hasAlreadyFetchedCompanies: false,
  },
  action,
) => {
  const { payload, type } = action;
  switch (type) {
    case ADD_COMPANY: {
      const { id, data } = payload;
      return {
        ...state,
        companies: { ...state.jobs, [id]: data },
      };
    }

    case ADD_COMPANIES:
    {
      let newState;
      payload?.forEach(({ data, id }) => {
        newState = {
          ...state,
          companies: { ...state.companies, [id]: data },
        };
      });
      return { ...newState, hasAlreadyFetchedCompanies: true };
    }
    default:
      return state;
  }
};

export default comapnyReducer;
