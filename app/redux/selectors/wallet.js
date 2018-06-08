import { createSelector } from 'reselect';

export const selector = state => state.wallet;

export const selectorWallet = createSelector(
  selector,
  state => state.wallet,
);
