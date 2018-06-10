import {
  SET_WALLET,
  GET_BALANCE_REQUEST,
  GET_BALANCE_SUCCESS,
  GET_BALANCE_FAILED,
  MAKE_TRANSACTION_REQUEST,
  MINE_BLOCK_REQUEST,
  MINE_BLOCK_START,
  MINE_BLOCK_SUCCESS,
  MINE_BLOCK_FAILED,
  GET_BLOCKS_REQUEST,
  GET_BLOCKS_START,
  GET_BLOCKS_SUCCESS,
  GET_BLOCKS_FAILED,
} from 'app/redux/constants';

export const setWallet = payload => ({
  type: SET_WALLET,
  payload,
});

export const getBalanceRequest = () => ({
  type: GET_BALANCE_REQUEST,
});

export const getBalanceSuccess = payload => ({
  type: GET_BALANCE_SUCCESS,
  payload,
});

export const getBalanceFailed = payload => ({
  type: GET_BALANCE_FAILED,
  payload,
});

export const makeTransactionRequest = payload => ({
  type: MAKE_TRANSACTION_REQUEST,
  payload,
});

export const mineBlockRequest = () => ({
  type: MINE_BLOCK_REQUEST,
});

export const mineBlockSuccess = () => ({
  type: MINE_BLOCK_SUCCESS,
});

export const mineBlockStart = () => ({
  type: MINE_BLOCK_START,
});

export const mineBlockFailed = () => ({
  type: MINE_BLOCK_FAILED,
});

export const getBlocksRequest = () => ({
  type: GET_BLOCKS_REQUEST,
});

export const getBlocksStart = () => ({
  type: GET_BLOCKS_START,
});

export const getBlocksSuccess = () => ({
  type: GET_BLOCKS_SUCCESS,
});

export const getBlocksFailed = () => ({
  type: GET_BLOCKS_FAILED,
});
