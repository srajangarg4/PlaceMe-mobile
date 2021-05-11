import { HttpMethods } from './utils/httpUtils';
import { getAuth } from './reducers/auth';

const HOST = '';
const prefix = '';

export const ENDPOINTS = {
};

export const apiCall = (endPoint, method = HttpMethods.GET, body) => {
  let apiBody = body;
  const headers = new Headers({
    'Content-Type': 'application/json',
  });
  const token = getAuth();
  if (token) {
    headers.append('Authorization', `Token ${token}`);
  }
  if (apiBody) {
    apiBody = JSON.stringify(apiBody);
  }
  const url = HOST + prefix + endPoint;
  return new Promise((resolve, reject) => {
    fetch(url, { body: apiBody, headers, method })
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        reject(error);
      });
  });
};
