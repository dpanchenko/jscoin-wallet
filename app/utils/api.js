import request from 'app/utils/request';

export default {
  nodes: () => request('/'),
  balance: payload => request(`/balance/${payload.id}`),
  transaction: payload => request(`/transaction/${payload}`),
};
