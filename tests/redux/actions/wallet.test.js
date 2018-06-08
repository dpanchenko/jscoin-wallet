import {
  setWallet,
} from 'app/redux/actions/wallet';

import {
  SET_WALLET,
} from 'app/redux/constants';

describe('wallet actions', () => {
  describe('setWallet action', () => {
    it('has a type of SET_WALLET', () => {
      const payload = 'test';
      const expected = {
        type: SET_WALLET,
        payload,
      };
      expect(setWallet(payload)).toEqual(expected);
    });
  });
});
