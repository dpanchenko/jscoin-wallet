import {
  selectorWallet,
  selectorConfirmed,
  selectorConfirmedBalance,
  selectorConfirmedDebet,
  selectorConfirmedCredit,
  selectorPending,
  selectorPendingBalance,
  selectorPendingDebet,
  selectorPendingCredit,
  selectorMining,
  selectorBlocks,
  selectorBlocksCount,
} from 'app/redux/selectors/wallet';

import { initialState } from 'app/redux/reducers/wallet';

const globalState = {
  wallet: initialState,
};

describe('selectors wallet', () => {
  it('should select the wallet state', () => {
    expect(selectorWallet(globalState)).toEqual(initialState.wallet);
  });
  it('should select the confirmed transactions list', () => {
    expect(selectorConfirmed(globalState)).toEqual(initialState.confirmed);
  });
  it('should select the confirmed balance', () => {
    expect(selectorConfirmedBalance(globalState)).toEqual(initialState.confirmed.amount);
  });
  it('should select the confirmed debet transactions list', () => {
    expect(selectorConfirmedDebet(globalState)).toEqual(initialState.confirmed.debet);
  });
  it('should select the confirmed credit transactions list', () => {
    expect(selectorConfirmedCredit(globalState)).toEqual(initialState.confirmed.credit);
  });
  it('should select the pending transactions list', () => {
    expect(selectorPending(globalState)).toEqual(initialState.pending);
  });
  it('should select the pending balance', () => {
    expect(selectorPendingBalance(globalState)).toEqual(initialState.pending.amount);
  });
  it('should select the pending debet transactions list', () => {
    expect(selectorPendingDebet(globalState)).toEqual(initialState.pending.debet);
  });
  it('should select the pending credit transactions list', () => {
    expect(selectorPendingCredit(globalState)).toEqual(initialState.pending.credit);
  });
  it('should select the mining status', () => {
    expect(selectorMining(globalState)).toEqual(initialState.mining);
  });
  it('should select blocks list', () => {
    expect(selectorBlocks(globalState)).toEqual(initialState.blocks);
  });
  it('should select blocks count', () => {
    expect(selectorBlocksCount(globalState)).toEqual(initialState.blocks.length);
  });
});
