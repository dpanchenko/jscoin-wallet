import {
  SET_WALLET,
  GET_BALANCE_REQUEST,
  GET_BALANCE_SUCCESS,
  GET_BALANCE_FAILED,
  MAKE_TRANSACTION_REQUEST,
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
