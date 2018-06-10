import { createSelector } from 'reselect';

export const selector = state => state.wallet;

export const selectorWallet = createSelector(
  selector,
  state => state.wallet,
);

export const selectorConfirmed = createSelector(
  selector,
  state => state.confirmed,
);

export const selectorConfirmedBalance = createSelector(
  selectorConfirmed,
  state => state.amount,
);

export const selectorConfirmedDebet = createSelector(
  selectorConfirmed,
  state => state.debet,
);

export const selectorConfirmedCredit = createSelector(
  selectorConfirmed,
  state => state.credit,
);

export const selectorPending = createSelector(
  selector,
  state => state.pending,
);

export const selectorPendingBalance = createSelector(
  selectorPending,
  state => state.amount,
);

export const selectorPendingDebet = createSelector(
  selectorPending,
  state => state.debet,
);

export const selectorPendingCredit = createSelector(
  selectorPending,
  state => state.credit,
);

export const selectorMining = createSelector(
  selector,
  state => state.mining,
);

export const selectorBlocks = createSelector(
  selector,
  state => state.blocks,
);

export const selectorBlocksCount = createSelector(
  selectorBlocks,
  state => (state && state.length) || 0,
);

