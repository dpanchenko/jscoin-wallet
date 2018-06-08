import { createSelector } from 'reselect';

export const selector = state => state.wallet;

export const selectorWallet = createSelector(
  selector,
  state => state.wallet,
);

export const selectorBalance = createSelector(
  selector,
  state => state.wallet,
);

export const selectorDebet = createSelector(
  selector,
  state => state.debet,
);

export const selectorCredit = createSelector(
  selector,
  state => state.credit,
);
