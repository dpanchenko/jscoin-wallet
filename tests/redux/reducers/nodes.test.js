import reducer, { initialState } from 'app/redux/reducers/nodes';
import {
  GET_NODES_SUCCESS,
  GET_NODES_FAILED,
} from 'app/redux/constants';

const payload = {};

describe('nodes reducer', () => {
  it('returns the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });
  it('reducer handles GET_NODES_SUCCESS action', () => {
    expect(reducer(undefined, { type: GET_NODES_SUCCESS, payload })).toEqual({
      ...initialState,
      list: payload,
    });
  });
  it('reducer handles GET_NODES_FAILED action', () => {
    expect(reducer(undefined, { type: GET_NODES_FAILED })).toEqual({
      ...initialState,
      error: true,
    });
  });
});
