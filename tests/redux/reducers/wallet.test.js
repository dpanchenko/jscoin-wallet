import reducer, { initialState } from 'app/redux/reducers/wallet';
import {
  SET_WALLET,
} from 'app/redux/constants';

const payload = 'test';

describe('wallet reducer', () => {
  it('returns the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });
  it('reducer handles SER_WALLET action', () => {
    expect(reducer(undefined, { type: SET_WALLET, payload })).toEqual({
      ...initialState,
      wallet: payload,
    });
  });
});
