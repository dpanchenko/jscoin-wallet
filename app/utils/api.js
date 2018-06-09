import request from 'app/utils/request';

export default {
  nodes: () => request('/'),
  balance: (wallet, url) => request(`${url}/balance/${wallet}`, null, true),
  transaction: (payload, url) => request(`${url}/transaction`),
};
