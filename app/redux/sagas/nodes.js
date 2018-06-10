import { call, put, take, takeEvery } from 'redux-saga/effects';
import {
  GET_NODES_REQUEST,
  GET_NODES_SUCCESS,
  GET_NODES_FAILED,
} from 'app/redux/constants';
import {
  getNodesSuccess,
  getNodesFailed,
} from 'app/redux/actions/nodes';
import {
  getBlocksRequest,
} from 'app/redux/actions/wallet';

import api from 'app/utils/api';

export function* getNodesSaga() {
  try {
    const response = yield call(api.nodes);
    yield put(getNodesSuccess(response));
    // yield take([GET_NODES_SUCCESS, GET_NODES_FAILED]);
    yield put(getBlocksRequest());
  } catch (e) {
    yield put(getNodesFailed(e));
  }
}

export default function* () {
  yield takeEvery(GET_NODES_REQUEST, getNodesSaga);
}
