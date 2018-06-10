import { call, select, put } from 'redux-saga/effects';

import {
  setWalletSaga,
  getBalanceSaga,
  makeTransactionSaga,
  mineBlockSaga,
  getBlocksSaga,
} from 'app/redux/sagas/wallet';

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

const payload = 'test';

const err = new Error('error');

describe('wallet saga', () => {
  it('setWalletSaga saga with success', () => {
    const gen = setWalletSaga();
    expect(gen.next().value).toEqual(put(getBalanceRequest()));
    expect(gen.next().done).toEqual(true);
  });

  it('getBalanceSaga saga with success', () => {
    const gen = getBalanceSaga();
    expect(gen.next().value).toEqual(select(selectorWallet));
    expect(gen.next(payload).value).toEqual(select(selectorNodesList));
    expect(gen.next([{ address: 'value' }]).value).toEqual(call(api.balance, payload, 'value'));
    expect(gen.next(payload).value).toEqual(put(getBalanceSuccess(payload)));
    expect(gen.next().done).toEqual(true);
  });

  it('getBalanceSaga saga without nodes list', () => {
    const gen = getBalanceSaga();
    expect(gen.next().value).toEqual(select(selectorWallet));
    expect(gen.next().value).toEqual(select(selectorNodesList));
    expect(gen.next().value).toEqual(put(getBalanceFailed(new Error('Can\'t get node url'))));
    expect(gen.next().done).toEqual(true);
  });

  it('getBalanceSaga saga without wallet', () => {
    const gen = getBalanceSaga();
    expect(gen.next().value).toEqual(select(selectorWallet));
    expect(gen.next().value).toEqual(select(selectorNodesList));
    expect(gen.next([{ address: 'value' }]).done).toEqual(true);
  });

  it('makeTransactionSaga saga with success', () => {
    const gen = makeTransactionSaga({ payload: { target: '1', amount: 1 } });
    expect(gen.next().value).toEqual(select(selectorWallet));
    expect(gen.next(payload).value).toEqual(select(selectorNodesList));
    expect(gen.next([{ address: 'value' }]).value).toEqual(call(api.transaction, {
      input: payload,
      output: '1',
      amount: 1,
    }, 'value'));
    expect(gen.next().value).toEqual(put(mineBlockRequest()));
    expect(gen.next().done).toEqual(true);
  });

  it('makeTransactionSaga saga with failure', () => {
    const gen = makeTransactionSaga();
    expect(gen.next().value).toEqual(put(getBalanceRequest()));
    expect(gen.next().done).toEqual(true);
  });

  it('makeTransactionSaga saga without wallet', () => {
    const gen = makeTransactionSaga({ payload: { target: '1', amount: 1 } });
    expect(gen.next().value).toEqual(select(selectorWallet));
    expect(gen.next().value).toEqual(select(selectorNodesList));
    expect(gen.next().done).toEqual(true);
  });

  it('mineBlockSaga saga with success', () => {
    const gen = mineBlockSaga();
    expect(gen.next().value).toEqual(select(selectorNodesList));
    expect(gen.next([{ address: 'value' }]).value).toEqual(put(mineBlockStart()));
    expect(gen.next().value).toEqual(call(api.mine, 'value'));
    expect(gen.next().value).toEqual(put(mineBlockSuccess()));
    expect(gen.next().value).toEqual(put(getBalanceRequest()));
    expect(gen.next().value).toEqual(put(getBlocksRequest()));
    expect(gen.next().done).toEqual(true);
  });

  it('mineBlockSaga saga with failure', () => {
    const gen = mineBlockSaga();
    expect(gen.next().value).toEqual(select(selectorNodesList));
    expect(gen.throw(err).value).toEqual(put(mineBlockFailed()));
    expect(gen.next().done).toEqual(true);
  });

  it('getBlocksSaga saga with success', () => {
    const gen = getBlocksSaga();
    expect(gen.next().value).toEqual(select(selectorNodesList));
    expect(gen.next([{ address: 'value' }]).value).toEqual(put(getBlocksStart()));
    expect(gen.next().value).toEqual(call(api.blocks, 'value'));
    expect(gen.next({ blocks: '' }).value).toEqual(put(getBlocksSuccess('')));
    expect(gen.next().done).toEqual(true);
  });

  it('getBlocksSaga saga with failure', () => {
    const gen = getBlocksSaga();
    expect(gen.next().value).toEqual(select(selectorNodesList));
    expect(gen.throw(err).value).toEqual(put(getBlocksFailed()));
    expect(gen.next().done).toEqual(true);
  });
});
