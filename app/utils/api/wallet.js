import request from 'app/utils/request';

export default {
  get: payload => request(`/users/${payload.id}`),
};
