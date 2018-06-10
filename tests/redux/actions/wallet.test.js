import {
  setWallet,
  getBalanceRequest,
  getBalanceSuccess,
  getBalanceFailed,
  mineBlockRequest,
  mineBlockStart,
  mineBlockSuccess,
  mineBlockFailed,
  getBlocksRequest,
  getBlocksStart,
  getBlocksSuccess,
  getBlocksFailed,
  makeTransactionRequest,
} from 'app/redux/actions/wallet';

import {
  SET_WALLET,
  GET_BALANCE_REQUEST,
  GET_BALANCE_SUCCESS,
  GET_BALANCE_FAILED,
  MINE_BLOCK_REQUEST,
  MINE_BLOCK_START,
  MINE_BLOCK_SUCCESS,
  MINE_BLOCK_FAILED,
  GET_BLOCKS_REQUEST,
  GET_BLOCKS_START,
  GET_BLOCKS_SUCCESS,
  GET_BLOCKS_FAILED,
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
  describe('mineBlockRequest action', () => {
    it('has a type of MINE_BLOCK_REQUEST', () => {
      const expected = {
        type: MINE_BLOCK_REQUEST,
      };
      expect(mineBlockRequest()).toEqual(expected);
    });
  });
  describe('mineBlockStart action', () => {
    it('has a type of MINE_BLOCK_START', () => {
      const expected = {
        type: MINE_BLOCK_START,
      };
      expect(mineBlockStart()).toEqual(expected);
    });
  });
  describe('mineBlockSuccess action', () => {
    it('has a type of MINE_BLOCK_SUCCESS', () => {
      const expected = {
        type: MINE_BLOCK_SUCCESS,
      };
      expect(mineBlockSuccess()).toEqual(expected);
    });
  });
  describe('mineBlockFailed action', () => {
    it('has a type of MINE_BLOCK_FAILED', () => {
      const expected = {
        type: MINE_BLOCK_FAILED,
      };
      expect(mineBlockFailed()).toEqual(expected);
    });
  });
  describe('getBlocksRequest action', () => {
    it('has a type of GET_BLOCKS_REQUEST', () => {
      const expected = {
        type: GET_BLOCKS_REQUEST,
      };
      expect(getBlocksRequest()).toEqual(expected);
    });
  });
  describe('getBlocksStart action', () => {
    it('has a type of GET_BLOCKS_START', () => {
      const expected = {
        type: GET_BLOCKS_START,
      };
      expect(getBlocksStart()).toEqual(expected);
    });
  });
  describe('getBlocksSuccess action', () => {
    it('has a type of GET_BLOCKS_SUCCESS', () => {
      const expected = {
        type: GET_BLOCKS_SUCCESS,
        payload: {},
      };
      expect(getBlocksSuccess({})).toEqual(expected);
    });
  });
  describe('getBlocksFailed action', () => {
    it('has a type of GET_BLOCKS_FAILED', () => {
      const expected = {
        type: GET_BLOCKS_FAILED,
      };
      expect(getBlocksFailed()).toEqual(expected);
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
