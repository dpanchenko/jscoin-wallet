import { call, put, select, takeEvery } from 'redux-saga/effects';
import {
  GET_BALANCE_REQUEST,
  MAKE_TRANSACTION_REQUEST,
} from 'app/redux/constants';
import {
  getBalanceRequest,
  getBalanceSuccess,
  getBalanceFailed,
} from 'app/redux/actions/wallet';
import { selectorWallet } from 'app/redux/selectors/wallet';

import api from 'app/utils/api';

export function* getBalanceSaga() {
  try {
    const wallet = yield select(selectorWallet);
    if (wallet) {
      const response = yield call(api.balance, wallet);
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
    if (wallet) {
      yield call(api.wallet.transaction, {
        input: wallet,
        output: target,
        amount,
      });
      yield put(getBalanceRequest());
    }
  } catch (e) {
    yield put(getBalanceRequest());
  }
}

export default function* () {
  yield takeEvery(GET_BALANCE_REQUEST, getBalanceSaga);
  yield takeEvery(MAKE_TRANSACTION_REQUEST, makeTransactionSaga);
}
