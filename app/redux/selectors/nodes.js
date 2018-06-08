import { createSelector } from 'reselect';

export const selector = state => state.nodes;

export const selectorList = createSelector(
  selector,
  state => state.list,
);

export const selectorError = createSelector(
  selector,
  state => state.error,
);
