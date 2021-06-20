import { action } from './common';

export const ADD_REQUESTS = 'ADD_REQUESTS';

export const addUpdateRequests = (data) => action(ADD_REQUESTS, data);
