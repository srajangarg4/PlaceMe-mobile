export const RESET_STORE = 'RESET_STORE';

export const resetStore = () => emptyAction(RESET_STORE);

export const emptyAction = (type) => ({ type });
export const action = (type, payload) => ({ type, payload });
