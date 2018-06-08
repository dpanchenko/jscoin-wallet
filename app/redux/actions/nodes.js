import {
  GET_NODES_REQUEST,
  GET_NODES_SUCCESS,
  GET_NODES_FAILED,
} from 'app/redux/constants';

export const getNodesRequest = () => ({
  type: GET_NODES_REQUEST,
});

export const getNodesSuccess = payload => ({
  type: GET_NODES_SUCCESS,
  payload,
});

export const getNodesFailed = () => ({
  type: GET_NODES_FAILED,
});
