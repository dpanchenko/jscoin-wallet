import { select } from 'redux-saga/effects';

import {
  selectorWallet,
} from 'app/redux/selectors/wallet';
import {
  setWalletSaga,
} from 'app/redux/sagas/wallet';

const payload = 'test';

describe('wallet saga', () => {
  it('setWalletSaga saga with success', () => {
    const gen = setWalletSaga({ payload });
    expect(gen.next().value).toEqual(select(selectorWallet));
    expect(gen.next().done).toEqual(true);
  });
});
