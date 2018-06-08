import {
  SET_WALLET,
} from 'app/redux/constants';

export const setWallet = payload => ({
  type: SET_WALLET,
  payload,
});
