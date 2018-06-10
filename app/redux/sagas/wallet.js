import { call, put, select, takeEvery } from 'redux-saga/effects';
import {
  SET_WALLET,
  GET_BALANCE_REQUEST,
  MAKE_TRANSACTION_REQUEST,
  MINE_BLOCK_REQUEST,
  GET_BLOCKS_REQUEST,
} from 'app/redux/constants';
import {
  mineBlockRequest,
  mineBlockStart,
  mineBlockSuccess,
  mineBlockFailed,
  getBlocksRequest,
  getBlocksStart,
  getBlocksSuccess,
  getBlocksFailed,
  getBalanceRequest,
  getBalanceSuccess,
  getBalanceFailed,
} from 'app/redux/actions/wallet';
import { selectorWallet } from 'app/redux/selectors/wallet';
import { selectorList as selectorNodesList } from 'app/redux/selectors/nodes';

import api from 'app/utils/api';

export function* setWalletSaga() {
  yield put(getBalanceRequest());
}

export function* getBalanceSaga() {
  try {
    const wallet = yield select(selectorWallet);
    const nodes = yield select(selectorNodesList);
    const nodeUrl = (nodes && nodes[0] && nodes[0].address) || null;
    if (!nodeUrl) {
      throw new Error('Can\'t get node url');
    }
    if (wallet) {
      const response = yield call(api.balance, wallet, nodeUrl);
      yield put(getBalanceSuccess(response));
    }
  } catch (e) {
    yield put(getBalanceFailed(e));
  }
}

export function* makeTransactionSaga(action) {
  try {
    const { target, amount } = action.payload;
    const wallet = yield select(selectorWallet);
    const nodes = yield select(selectorNodesList);
    const nodeUrl = (nodes && nodes[0] && nodes[0].address) || null;
    if (wallet) {
      yield call(api.transaction, {
        input: wallet,
        output: target,
        amount,
      }, nodeUrl);
      yield put(mineBlockRequest());
    }
  } catch (e) {
    yield put(getBalanceRequest());
  }
}

export function* mineBlockSaga() {
  try {
    const nodes = yield select(selectorNodesList);
    const nodeUrl = (nodes && nodes[0] && nodes[0].address) || null;
    yield put(mineBlockStart());
    yield call(api.mine, nodeUrl);
    yield put(mineBlockSuccess());
    yield put(getBalanceRequest());
    yield put(getBlocksRequest());
  } catch (e) {
    yield put(mineBlockFailed());
  }
}

export function* getBlocksSaga() {
  try {
    const nodes = yield select(selectorNodesList);
    const nodeUrl = (nodes && nodes[0] && nodes[0].address) || null;
    yield put(getBlocksStart());
    const { blocks } = yield call(api.blocks, nodeUrl);
    yield put(getBlocksSuccess(blocks));
  } catch (e) {
    yield put(getBlocksFailed());
  }
}

export default function* () {
  yield takeEvery(SET_WALLET, setWalletSaga);
  yield takeEvery(GET_BALANCE_REQUEST, getBalanceSaga);
  yield takeEvery(MAKE_TRANSACTION_REQUEST, makeTransactionSaga);
  yield takeEvery(MINE_BLOCK_REQUEST, mineBlockSaga);
  yield takeEvery(GET_BLOCKS_REQUEST, getBlocksSaga);
}
