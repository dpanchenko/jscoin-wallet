import request, { getOptions } from 'app/utils/request';

export default {
  nodes: () => request('/'),
  balance: (wallet, url) => request(`${url}/balance/${wallet}`, null, true),
  transaction: (payload, url) => request(`${url}/transaction`, getOptions(payload), true),
  mine: url => request(`${url}/mine`, getOptions(), true),
  blocks: url => request(`${url}/blocks`, null, true),
};
