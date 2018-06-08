import {
  getNodesRequest,
  getNodesSuccess,
  getNodesFailed,
} from 'app/redux/actions/nodes';

import {
  GET_NODES_REQUEST,
  GET_NODES_SUCCESS,
  GET_NODES_FAILED,
} from 'app/redux/constants';

describe('wallet actions', () => {
  describe('getNodesRequest action', () => {
    it('has a type of GET_NODES_REQUEST', () => {
      const expected = {
        type: GET_NODES_REQUEST,
      };
      expect(getNodesRequest()).toEqual(expected);
    });
  });
  describe('getNodesSuccess action', () => {
    it('has a type of GET_NODES_SUCCESS', () => {
      const expected = {
        type: GET_NODES_SUCCESS,
        payload: {},
      };
      expect(getNodesSuccess({})).toEqual(expected);
    });
  });
  describe('getNodesFailed action', () => {
    it('has a type of GET_NODES_FAILED', () => {
      const expected = {
        type: GET_NODES_FAILED,
      };
      expect(getNodesFailed()).toEqual(expected);
    });
  });
});
