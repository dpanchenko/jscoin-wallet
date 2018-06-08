import {
  selectorWallet,
} from 'app/redux/selectors/wallet';

import { initialState } from 'app/redux/reducers/wallet';

const globalState = {
  wallet: initialState,
};

describe('selectors wallet', () => {
  it('should select the wallet state', () => {
    expect(selectorWallet(globalState)).toEqual(initialState.wallet);
  });
});
