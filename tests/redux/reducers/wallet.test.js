import reducer, { initialState } from 'app/redux/reducers/wallet';
import {
  SET_WALLET,
  GET_BALANCE_SUCCESS,
  GET_BALANCE_FAILED,
  MINE_BLOCK_START,
  MINE_BLOCK_SUCCESS,
  MINE_BLOCK_FAILED,
  GET_BLOCKS_START,
  GET_BLOCKS_SUCCESS,
  GET_BLOCKS_FAILED,
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
  it('reducer handles GET_BALANCE_SUCCESS action', () => {
    expect(reducer(undefined, { type: GET_BALANCE_SUCCESS, payload: { confirmed: '', pending: '' } })).toEqual({
      ...initialState,
      confirmed: '',
      pending: '',
    });
  });
  it('reducer handles GET_BALANCE_FAILED action', () => {
    expect(reducer(undefined, { type: GET_BALANCE_FAILED })).toEqual(initialState);
  });
  it('reducer handles MINE_BLOCK_START action', () => {
    expect(reducer(undefined, { type: MINE_BLOCK_START })).toEqual({
      ...initialState,
      mining: true,
    });
  });
  it('reducer handles MINE_BLOCK_SUCCESS action', () => {
    expect(reducer(undefined, { type: MINE_BLOCK_SUCCESS })).toEqual({
      ...initialState,
      mining: false,
    });
  });
  it('reducer handles MINE_BLOCK_FAILED action', () => {
    expect(reducer(undefined, { type: MINE_BLOCK_FAILED })).toEqual({
      ...initialState,
      mining: false,
    });
  });
  it('reducer handles GET_BLOCKS_START action', () => {
    expect(reducer(undefined, { type: GET_BLOCKS_START })).toEqual({
      ...initialState,
      blocks: [],
    });
  });
  it('reducer handles GET_BLOCKS_SUCCESS action', () => {
    expect(reducer(undefined, { type: GET_BLOCKS_SUCCESS, payload: [1, 2] })).toEqual({
      ...initialState,
      blocks: [1, 2],
    });
  });
  it('reducer handles GET_BLOCKS_FAILED action', () => {
    expect(reducer(undefined, { type: GET_BLOCKS_FAILED })).toEqual({
      ...initialState,
      blocks: [],
    });
  });
});
