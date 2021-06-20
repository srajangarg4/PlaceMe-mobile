import { action } from './common';

export const ADD_COMPLETED_REQUESTS = 'ADD_COMPLETED_REQUESTS';

export const addCompletedRequests = (requests) => action(ADD_COMPLETED_REQUESTS, requests);
