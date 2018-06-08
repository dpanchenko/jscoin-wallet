import {
  selectorList,
  selectorError,
} from 'app/redux/selectors/nodes';

import { initialState } from 'app/redux/reducers/nodes';

const globalState = {
  nodes: initialState,
};

describe('selectors nodes', () => {
  it('should select the nodes list', () => {
    expect(selectorList(globalState)).toEqual(initialState.list);
  });
  it('should select the nodes error', () => {
    expect(selectorError(globalState)).toEqual(initialState.error);
  });
});
