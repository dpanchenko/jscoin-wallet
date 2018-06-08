import { select, takeEvery } from 'redux-saga/effects';
import {
  SET_WALLET,
} from 'app/redux/constants';
import {
  selectorWallet,
} from 'app/redux/selectors/wallet';


export function* setWalletSaga(action) {
  const wallet = yield select(selectorWallet);
  console.log('Hello from wallet saga', action, wallet);
}

export default function* () {
  yield takeEvery(SET_WALLET, setWalletSaga);
}
