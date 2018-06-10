import 'whatwg-fetch';
import { config } from '../../config';

const baseUrl = config.BACKEND_URL;

function parseJSON(response) {
  return response.json();
}

async function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }

  const error = new Error(response.statusText);
  error.response = await response.json();
  throw error;
}

export const getOptions = (payload, method = 'POST', contentType = 'application/json') => {
  const options = {
    method,
    headers: {
      'Content-Type': contentType,
    },
    body: payload ? JSON.stringify(payload) : undefined,
  };
  return options;
};

export default function request(url, options, fullUrl) {
  const completeUrl = fullUrl ? url : `${baseUrl}${url}`;
  const fetchOptions = {
    ...options,
    headers: {
      ...(options && options.headers),
    },
  };
  return fetch(completeUrl, fetchOptions)
    .then(checkStatus)
    .then(parseJSON);
}
