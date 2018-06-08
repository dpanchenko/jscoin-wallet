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

export default function request(url, options) {
  const completeUrl = `${baseUrl}${url}`;
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
