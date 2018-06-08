import {
  setWallet,
  getBalanceRequest,
  getBalanceSuccess,
  getBalanceFailed,
  makeTransactionRequest,
} from 'app/redux/actions/wallet';

import {
  SET_WALLET,
  GET_BALANCE_REQUEST,
  GET_BALANCE_SUCCESS,
  GET_BALANCE_FAILED,
  MAKE_TRANSACTION_REQUEST,
} from 'app/redux/constants';

describe('wallet actions', () => {
  describe('setWallet action', () => {
    it('has a type of SET_WALLET', () => {
      const expected = {
        type: SET_WALLET,
        payload: {},
      };
      expect(setWallet({})).toEqual(expected);
    });
  });
  describe('getBalanceRequest action', () => {
    it('has a type of GET_BALANCE_REQUEST', () => {
      const expected = {
        type: GET_BALANCE_REQUEST,
      };
      expect(getBalanceRequest()).toEqual(expected);
    });
  });
  describe('getBalanceSuccess action', () => {
    it('has a type of GET_BALANCE_SUCCESS', () => {
      const expected = {
        type: GET_BALANCE_SUCCESS,
        payload: {},
      };
      expect(getBalanceSuccess({})).toEqual(expected);
    });
  });
  describe('getBalanceFailed action', () => {
    it('has a type of GET_BALANCE_FAILED', () => {
      const expected = {
        type: GET_BALANCE_FAILED,
      };
      expect(getBalanceFailed()).toEqual(expected);
    });
  });
  describe('makeTransactionRequest action', () => {
    it('has a type of MAKE_TRANSACTION_REQUEST', () => {
      const expected = {
        type: MAKE_TRANSACTION_REQUEST,
        payload: {},
      };
      expect(makeTransactionRequest({})).toEqual(expected);
    });
  });
});
